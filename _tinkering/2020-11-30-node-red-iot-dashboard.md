---
layout: post
title: Node-RED IoT Dashboard
thumb: thumb/mqtt.png
meta: Testing <a href="https://tuengominh.github.io/project/2020-07-22-3-layer-pcb.html">McDuino ESP32 Board</a> with Mosquitto and Node-RED.  
highlight: 0
active: 1
topic: eda
tags: [internet-of-things, mqtt, node-red, arduino, python, esp32, environment-sensor, proximity-sensor, photosensor, piezoelectric-actuator, electroluminescence-actuator]
---

<p>During the <a href="http://academy.cba.mit.edu/classes/networking_communications/index.html">Networking and Communications</a> week of the Fab Academy, our instructor Óscar González Fernández set up an MQTT broker on his Raspberry Pi and got all the students to exchange data from their own projects. <a href="https://www.hivemq.com/blog/how-to-get-started-with-mqtt/">MQTT</a> is a machine-to-machine connectivity protocol which uses a publish/subscribe architecture.</p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/mqtt-0.png" class="img-fluid w-100"/>
<p>I decided to work on the whole setup myself and test whether I could apply MQTT with my custom <a href="https://tuengominh.github.io/project/2020-07-22-3-layer-pcb.html">McDuino ESP32 Board</a>. It is not mandatory to test my board with other boards, hence, my plan was to simply send messages from my sensors to my actuators of the same board over MQTT. I added another node to the networking flow, which is a Node-RED dashboard.</p>

<h4>Mosquitto broker</h4>
<p>An MQTT broker is a server that receives all messages from the clients, and then routes the messages to the appropriate destination clients. The broker is responsible for receiving all messages, filtering the messages, determining who subscribed to each message and sending the message to those subscribed clients. <a href="https://mosquitto.org/">Mosquitto</a> is a widely-used MQTT broker. Usually, the MQTT broker will be installed on a Raspberry Pi for security reasons, but I installed it directly to my Macbook because it was more convenient. I didn't want to buy a Raspberry Pi.</p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/mqtt-1.png" class="img-fluid w-100"/>
<p>I followed <a href="https://subscription.packtpub.com/book/application_development/9781787287815/1/ch01lvl1sec12/installing-a-mosquitto-broker-on-macos">this instruction</a> to install Mosquitto for macOS. Running both Mosquitto and Node-RED and plugging in my custom ESP32 board, I could detect a new connection (Node-RED) and a new client (ESP32 board).</p>
<p></p>

<h4>The Node-RED dashboard</h4>
<p><a href="https://nodered.org/">Node-RED</a> is a popular tool providing an elegant solution to wire together IoT devices, APIs, and online services over MQTT. It has a browser-based editor that makes it easy to wire together flows using the wide range of nodes and nice UI elements. <a href="http://noderedguide.com/">This website</a> contains many advanced guides to Node-RED.</p>

<p>I installed Node-RED locally following <a href="https://nodered.org/docs/getting-started/local">this instruction</a>. I expected to see Node-RED installed and connected to MQTT broker.</p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/node-red-0.png" class="img-fluid w-100"/>

<p>First, I created MQTT nodes for all my inputs (HR-SC04 ultrasonic sensor, DHT11 temperature/humidity sensor and LDR) and outputs (NeoPixel LED strip and active buzzer). A topic is a simple string defined by the user that can have more hierarchy levels, which are separated by a slash. Wildcards can also be used in single level (<kbd>input/+/temperature</kbd> will return temperatures of all users) or in multi-level (<kbd>output/#</kbd> will return all outputs from all users).</p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/node-red-1.png" class="img-fluid w-100"/>

<p>Then, I created some UI dashboard nodes to display my sensors' data as well as sending payloads from the UI switches.</p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/node-red-2.png" class="img-fluid w-100"/>

<p>I also created some function nodes, mostly to process the data received from inputs and then to send the related payloads to control the outputs.</p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/node-red-3.png" class="img-fluid w-100"/>

<p>Here we have the final Node-RED flow, ready to be deployed.</p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/node-red-4.png" class="img-fluid w-100"/>

<h4>Wireless communication</h4>
<h5>The Arduino program</h5>
<p>I used <code>PubSubClient</code> library to publish all the sensors' data to Node-RED over MQTT, and also subscribed to the payloads sent by Node-RED. Full API documentation can be found <a href="https://pubsubclient.knolleary.net/api.html">here</a>.</p>
<pre class="bg-light py-2 mt-0" style="overflow: auto; max-height: 350px;">
<code>
    #include &lt;DHT.h&gt;
    #include &lt;NewPing.h&gt;
    #include &lt;Adafruit_NeoPixel.h&gt;
    #include &lt;WiFi.h&gt;
    #include &lt;PubSubClient.h&gt;
   
    #define TRIGGER_PIN 32
    #define ECHO_PIN 35
    #define DHT_PIN 33
    #define LDR_PIN 34
    #define BUZZ_PIN 14
    #define RGB_PIN 26
    
    int ldrValue;
    float tempValue;
    float humValue;
    float distance;
    #define DHTTYPE DHT11
    NewPing sonar(TRIGGER_PIN, ECHO_PIN, 200); 
    DHT dht(DHT_PIN, DHTTYPE);
    #define LED_COUNT 10
    Adafruit_NeoPixel strip(LED_COUNT, RGB_PIN, NEO_GRB + NEO_KHZ800);
    
    unsigned long now = millis();
    unsigned long lastMeasure = 0;
    
    const char* ssid = "SSID";
    const char* password = "PASSWORD";
    const char* mqtt_server = "SERVERADDRESS";
    WiFiClient espClient;
    PubSubClient client(espClient);
    
    void setup() {
        Serial.begin(115200);
        
        pinMode(BUZZ_PIN, OUTPUT);
        dht.begin();
        strip.begin();           
        strip.show();             
        strip.setBrightness(150); 

        // wifi & mqtt setup
        Serial.println();
        Serial.print("Connecting to ");
        Serial.println(ssid);
        WiFi.begin(ssid, pass);
        WiFi.mode(WIFI_STA); 
        while (WiFi.status() != WL_CONNECTED) {
            Serial.print(".");
            delay(500);
        }

        Serial.println("");
        Serial.println("WiFi connected");
        Serial.println("IP address: ");
        Serial.println(WiFi.localIP());

        client.setServer(mqtt_server, 1883);
        client.setCallback(callback);
    }
    
    void loop() {
        // refresh mqtt subscriptions
        if (!client.connected()) {
            reconnect();
        }
        client.loop();

        // publish every 30 seconds
        now = millis();
        if (now - lastMeasure > 30000) {
            lastMeasure = now;

            // send data of all sensors as characters
            char tempMsg[50];
            snprintf (tempMsg, 50, "%f", readTemp());
            char humMsg[50];
            snprintf (humMsg, 50, "%f", readHum());
            char luxMsg[50];
            snprintf (luxMsg, 50, "%f", readLDR())

            // set the topic to publish 
            client.publish("esp32/temperature", tempMsg); 
            client.publish("esp32/humidity", humMsg);
            client.publish("esp32/light", luxMsg);

            if (readDistance() <= 8) {
                client.publish("esp32/sonar", "OBJECT DETECTED!"); 
            } else {
                client.publish("esp32/sonar", "NO OBJECT DETECTED!"); 
            }
        }
    }
    
    void callback(char* topic, byte* payload, unsigned int length) {
        Serial.print("Message arrived on topic: ");
        Serial.print(topic);
        Serial.print(". Message: ");
        String messageTemp;

        // check payload from MQTT
        for (int i = 0; i < length; i++) {
            Serial.print((char)payload[i]);
            messageTemp += (char)payload[i];
        }
        Serial.println();

        // use received data to turn LED and buzzer on
        if (topic == "esp32/led") { 
            if (messageTemp == "1") {
            blinkWhite();
            }
        }
        if (topic == "esp32/buzzer") { 
            if (messageTemp == "1") {
            buzz();
            }
        }
        Serial.println(); 
    }

    // subscribe to topics
    void reconnect() {
        while (!client.connected()) {
            Serial.print("Attempting MQTT connection...");
            String clientId = "ESP32Client-";
            clientId += String(random(0xffff), HEX);
            
            // set the topic to subscribe
            if (client.connect(clientId.c_str())) {
                Serial.println("connected");
                client.subscribe("esp32/led");
                client.subscribe("esp32/buzzer");
            } else {
                Serial.print("failed, rc=");
                Serial.print(client.state());
                Serial.println(" try again in 5 seconds");
                delay(5000);
            }
        }
    }

    int readLDR() {
        delay(500);  
        ldrValue = analogRead(LDR_PIN);
        return ldrValue;
    }

    int readTemp() {
        delay(500);  
        tempValue = dht.readTemperature();
        return tempValue;  
    }

    int readHum() {
        delay(500);  
        humValue = dht.readHumidity();  
        return humValue;
    }

    int readDistance() {
        delay(500);
        distance = sonar.ping_cm();
        return distance; 
    }
    
    void buzz() {
        digitalWrite(BUZZ_PIN, HIGH);   
        delay(500);                       
        digitalWrite(BUZZ_PIN, LOW);    
        delay(500);
    }

    void blinkWhite() {
        colorWipe(strip.Color(255, 255, 255), 500);
    }

    void colorWipe(uint32_t color, int wait) {
        for(int i = 0; i < strip.numPixels(); i++) { 
            strip.setPixelColor(i, color);         
            strip.show();                          
            delay(wait);                          
        }
    }
</code>
</pre>
<p></p>

<h4>Wired communication</h4>
<p>If we don’t have a wifi-capable module but a normal Arduino board, we can use <a href="https://mntolia.com/mqtt-python-with-paho-mqtt-client/">paho-mqtt</a> - a Python MQTT client as a mediator that can exchange data over serial port with the MCU as well as exchange MQTT messages with Mosquitto broker.</p>
<h5>The Python program</h5>
<p>In this case, I wired a buzzer and an LDR to an Arduino Uno. LDR data received over serial port will be used to control the NeoPixel strip of the custom ESP32 board. The Python program will also receive MQTT messages to control the buzzer and send it to the Arduino board. The Arduino program is not provided here.</p>
<pre class="bg-light py-2 mt-0" style="overflow: auto; max-height: 350px;">
<code>
    import paho.mqtt.client as mqtt
    import time
    import serial

    mqtt_broker = "SERVERADDRESS"
    mqtt_user = "MQTTUSER"
    mqtt_pass = "MQTTPASS"
    broker_port = 1883

    PORT = "SERIALPORT"
    BAUDRATE = 115200

    ser = serial.Serial(PORT, BAUDRATE)

    def on_connect(client, userdata, flags, rc):
        print(f"Connected With Result Code: {rc}")

    def on_message_buzzer(client, userdata, message):
        temp_message = message.payload.decode() + "\n"
        ser.write(temp_message.encode())

    def on_log(client, obj, level, string):
        print(string)

    def read_ldr():
        ldr_reading = str(ser.readline().replace("\n", ""))
        return ldr_reading

    # connect to MQTT
    client = mqtt.Client(clean_session = True)
    client.on_connect = on_connect
    client.on_message = on_message_buzzer
    client.on_log = on_log
    client.username_pw_set(username = mqtt_user, password = mqtt_pass)
    client.connect(mqtt_broker, broker_port)

    # subscribe to topics
    client.subscribe("uno/buzzer", qos = 1)
    client.message_callback_add("uno/buzzer", on_message_buzzer)

    # start looping (non-blocking)
    client.loop_start()

    while True:
        # read sensor data
        ldr_reading = read_ldr()

        # publish data to topics
        client.publish(topic = "uno/light", payload = ldr_reading, qos = 1, retain = False)

        if ldr_reading < 400 :
          client.publish(topic = "esp32/led", payload = "1", qos = 1, retain = False)
        else:
          client.publish(topic = "esp32/led", payload = "0", qos = 1, retain = False)

        time.sleep(5)
</code>
</pre>
<p></p>

<h4>Demo</h4>
<p></p>
<img src="{{site.baseurl}}/assets/img/eda/mqtt/node-red-5.png" class="img-fluid w-100"/>