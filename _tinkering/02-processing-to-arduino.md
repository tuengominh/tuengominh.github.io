---
layout: post
title: Processing Ringtone Collection
thumb: code/processing-to-arduino.png
meta: A simple Processing app controlling a passive buzzer to play classic ringtones.   
highlight: 1
topic: code
tags: [processing, arduino, piezoelectric-output-device]
---

<p>I want to experiment Serial communication from Processing to Arduino by developing a simple Processing app controlling a passive buzzer. The app plays the classic theme songs of Super Mario, Harry Potter, Game of Thrones, and Tetris.</p>

<h4>The Arduino program</h4>
<h5>Hardware</h5>
<p>There are two types of piezoelectric buzzer: an active buzzer that has additional circuitry in it which makes it simpler to control (turn on/off) but limits the buzzer to only one tone; and a passive buzzer which can make different tones, but the MCU has to provide an electronic signal at a desired frequency and that frequency will determine the tone. Here is a very nice <a href="https://bgsu.instructure.com/courses/1157282/pages/tutorial-passive-buzzer">tutorial</a> of the ARTC 4330/5330 passive buzzer.</p>
<img src="{{site.baseurl}}/assets/img/processing/ringtone-3.jpg" class="img-fluid w-100"/>
<p>The connection was easy: (-) pin of the buzzer was connected to GND pin of Arduino Uno, and digital pin 4 of Arduino Uno was connected to the (+) pin of the buzzer.</p>
<p></p>
<h5>Software</h5>
<p>After looking for their melodies and tempos online, I found <a href="https://github.com/robsoncouto/arduino-songs">this</a> cool repository with a collection of many of my favorite songs. However, the way the durations were calculated and how the music was composed vary. Hence, I had to rewrite a bit.</p>
<pre class="bg-light py-2 mt-0" style="overflow: auto; max-height: 350px;">
<code>
    /* 
     * convert notes to frequency 
     */
    #define NOTE_B0  31
    #define NOTE_C1  33
    #define NOTE_CS1 35
    #define NOTE_D1  37
    #define NOTE_DS1 39
    #define NOTE_E1  41
    #define NOTE_F1  44
    #define NOTE_FS1 46
    #define NOTE_G1  49
    #define NOTE_GS1 52
    #define NOTE_A1  55
    #define NOTE_AS1 58
    #define NOTE_B1  62
    #define NOTE_C2  65
    #define NOTE_CS2 69
    #define NOTE_D2  73
    #define NOTE_DS2 78
    #define NOTE_E2  82
    #define NOTE_F2  87
    #define NOTE_FS2 93
    #define NOTE_G2  98
    #define NOTE_GS2 104
    #define NOTE_A2  110
    #define NOTE_AS2 117
    #define NOTE_B2  123
    #define NOTE_C3  131
    #define NOTE_CS3 139
    #define NOTE_D3  147
    #define NOTE_DS3 156
    #define NOTE_E3  165
    #define NOTE_F3  175
    #define NOTE_FS3 185
    #define NOTE_G3  196
    #define NOTE_GS3 208
    #define NOTE_A3  220
    #define NOTE_AS3 233
    #define NOTE_B3  247
    #define NOTE_C4  262
    #define NOTE_CS4 277
    #define NOTE_D4  294
    #define NOTE_DS4 311
    #define NOTE_E4  330
    #define NOTE_F4  349
    #define NOTE_FS4 370
    #define NOTE_G4  392
    #define NOTE_GS4 415
    #define NOTE_A4  440
    #define NOTE_AS4 466
    #define NOTE_B4  494
    #define NOTE_C5  523
    #define NOTE_CS5 554
    #define NOTE_D5  587
    #define NOTE_DS5 622
    #define NOTE_E5  659
    #define NOTE_F5  698
    #define NOTE_FS5 740
    #define NOTE_G5  784
    #define NOTE_GS5 831
    #define NOTE_A5  880
    #define NOTE_AS5 932
    #define NOTE_B5  988
    #define NOTE_C6  1047
    #define NOTE_CS6 1109
    #define NOTE_D6  1175
    #define NOTE_DS6 1245
    #define NOTE_E6  1319
    #define NOTE_F6  1397
    #define NOTE_FS6 1480
    #define NOTE_G6  1568
    #define NOTE_GS6 1661
    #define NOTE_A6  1760
    #define NOTE_AS6 1865
    #define NOTE_B6  1976
    #define NOTE_C7  2093
    #define NOTE_CS7 2217
    #define NOTE_D7  2349
    #define NOTE_DS7 2489
    #define NOTE_E7  2637
    #define NOTE_F7  2794
    #define NOTE_FS7 2960
    #define NOTE_G7  3136
    #define NOTE_GS7 3322
    #define NOTE_A7  3520
    #define NOTE_AS7 3729
    #define NOTE_B7  3951
    #define NOTE_C8  4186
    #define NOTE_CS8 4435
    #define NOTE_D8  4699
    #define NOTE_DS8 4978
    /* 
     * pin variables
     */
    #define buzzer A0
    /* 
     * data received from Processing app 
     */
    char songId;
    /* 
     * melody and tempo of Super Mario
     */
    int mario[] = {
        NOTE_E7, NOTE_E7, 0, NOTE_E7, 0, NOTE_C7, NOTE_E7, 0, NOTE_G7, 0, 0, 0, NOTE_G6, 0, 0, 0,
        NOTE_C7, 0, 0, NOTE_G6, 0, 0, NOTE_E6, 0, 0, NOTE_A6, 0, NOTE_B6, 0, NOTE_AS6, NOTE_A6, 0,
        NOTE_G6, NOTE_E7, NOTE_G7, NOTE_A7, 0, NOTE_F7, NOTE_G7, 0, NOTE_E7, 0, NOTE_C7, NOTE_D7, NOTE_B6, 0, 0
    };
    int mario_tempo[] = {
        8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
        8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
        6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
    };
    /* 
     * melody and tempo of Tetris
     */
    int tetris[] = {
        NOTE_E5, NOTE_B4, NOTE_C5, NOTE_D5, NOTE_C5, NOTE_B4, NOTE_A4, NOTE_A4, NOTE_C5, NOTE_E5, NOTE_D5, NOTE_C5, 
        NOTE_B4, NOTE_C5, NOTE_D5, NOTE_E5, NOTE_C5, NOTE_A4, NOTE_A4, NOTE_D5, NOTE_F5, NOTE_A5, NOTE_G5, NOTE_F5,
        NOTE_E5, NOTE_C5, NOTE_E5, NOTE_D5, NOTE_C5, NOTE_B4, NOTE_B4, NOTE_C5, NOTE_D5, NOTE_E5, NOTE_C5, NOTE_A4, NOTE_A4, 0
    };
    int tetris_tempo[] = {
        4, 8, 8, 4, 8, 8, 4, 8, 8, 4, 8, 8, -4, 8, 4, 4, 4, 4, 3, 
        -4, 8, 4, 8, 8, -4, 8, 4, 8, 8, 4, 8, 8, 4, 4, 4, 4, 4, 4
    };
    /* 
     * melody and tempo of Game of Thrones
     */
    int got[] = {
        NOTE_G4, NOTE_C4, NOTE_DS4, NOTE_F4, NOTE_G4, NOTE_C4, NOTE_E4, NOTE_F4, 
        NOTE_G4, NOTE_C4, NOTE_DS4, NOTE_F4, NOTE_D4, NOTE_G3, NOTE_AS3, NOTE_C4, NOTE_D4, 
        NOTE_G3, NOTE_AS3, NOTE_C4, NOTE_D4, NOTE_F4, NOTE_AS3, NOTE_DS4, NOTE_D4, NOTE_F4, 
        NOTE_AS3, NOTE_DS4, NOTE_D4, NOTE_C4
    };
    int got_tempo[] = {
        2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 
        2, 1, 1, 2, 2, 1, 1, 4,
        4, 4, 1, 1, 4, 4, 1, 1, 4
    };
    /* 
     * melody and tempo of Harry Potter
     */
    int harrypotter[] = {
        NOTE_D4, NOTE_G4, NOTE_AS4, NOTE_A4, NOTE_G4, NOTE_D5, NOTE_C5, NOTE_A4, NOTE_G4, NOTE_AS4, NOTE_A4,
        NOTE_F4, NOTE_GS4, NOTE_D4, NOTE_D4, NOTE_G4, NOTE_AS4, NOTE_A4, NOTE_G4, NOTE_D5, 
        NOTE_F5, NOTE_E5, NOTE_DS5, NOTE_B4, NOTE_DS5, NOTE_D5, NOTE_CS5, NOTE_CS4, NOTE_B4, NOTE_G4
    };
    int harrypotter_tempo[] = {
        4, -4, 8, 4, 2, 4, -2, -2, -4, 8, 4, 2, 4, -2, 4,
        -4, 8, 4, 2, 4, 2, 4, 2, 4,
        -4, 8, 4, 2, 4, -2
    };
    /* 
     * begin serial communication at the same baud rate with the Processing program
     */
    void setup(void)
    {
        pinMode(buzzer, OUTPUT);
        Serial.begin(115200);
    }
    /* 
     * receive songId from Processing app
     * and pass it as an argument to sing() function
     */
    void loop()
    { 
        if (Serial.available()) 
        { 
            songId = Serial.read(); 
        }
        sing(songId);
        // avoid repeated songs
        songId = '0';
        delay(2000);
    }
    /* 
     * use tone() to play songs with the buzzer: targeted pin, frequency, duration
     * songId is the parameter
     */
    void sing(char id) 
    {
        if (id == '1') 
        {
            int duration = 0;
            for (int i = 0; i < (sizeof(mario) / sizeof(int)); i++) {           
                // to calculate the note duration, take one second divided by the note type
                // e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc. 
                duration = 1000/mario_tempo[i];
                tone(buzzer, mario[i], duration); 
                // to distinguish the notes, set a minimum time between them
                delay(duration * 1.30); 
                // stop the tone playing
                noTone(buzzer);
            }
            delay(10);
        }
        else if (id == '2')
        {        
            int duration = 0;
            for (int i = 0; i < (sizeof(tetris) / sizeof(int)); i++) {  
                duration = 1800 / abs(tetris_tempo[i]);
                if (tetris_tempo[i] < 0) {
                    // notes are represented with positive durations are regular note, just proceed
                    // dotted notes are represented with negative durations
                    // increases the duration in half for dotted notes
                    duration *= 1.5; 
                }
                tone(buzzer, tetris[i], duration); 
                delay(duration * 1.10);
                noTone(buzzer);
            }
            delay(10);
        }
        else if (id == '3')
        {        
            int duration = 0;
            for (int i = 0; i < (sizeof(got) / sizeof(int)); i++){           
                duration = got_tempo[i] * 250;
                tone(buzzer, got[i], duration); 
                delay(duration); 
                noTone(buzzer);
            }
            delay(10);
        }
        else if (id == '4')
        {        
            int duration = 0;
            for (int i = 0; i < (sizeof(harrypotter) / sizeof(int)); i++){  
                duration = 1600 / abs(harrypotter_tempo[i]);
                if (harrypotter_tempo[i] < 0) {
                    duration *= 1.3; 
                }
                tone(buzzer, harrypotter[i], duration); 
                delay(duration * 1.10);
                noTone(buzzer);
            }
            delay(10);
        }
    }
    </code>
</pre>
<p></p>

<h4>The Processing program</h4>
<p><a href="https://processing.org/">Processing</a> is a flexible software sketchbook that allows its users to write code with Java-based syntax within the context of the visual arts. I used to code in Java so it was not a big problem. The <a href="https://processing.org/reference/libraries/serial/index.html">Serial</a> library of Processing was used to open a serial communication with the Arduino Uno board through the USB port, and then I could call <code>write()</code> functions to send the ID of the selected song to the Arduino program.</p>
<img src="{{site.baseurl}}/assets/img/processing/ringtone-1.png" class="img-fluid w-100"/>

<p>As shown in the above image, the code will be executed again and again within <code>draw()</code> function. I made a mistake by using the <code>mousePressed == true</code> condition instead of the <code>mousePressed()</code> function, that's why we could see in the console that the songs were repeated. Also, to control the data received from the Arduino side and avoid song repetitions, I sent a <code>songId = 0</code> to stop the buzzer in between.</p>
<pre class="bg-light py-2 mt-0" style="overflow: auto; max-height: 350px;">
    <code>
    /* 
     * declare an object of Serial class 
     * for sending and receiving data over serial communication protocol
     * in this case I called it "Uno" 
     * because my USB port was connected to an Arduino Uno board 
     */ 
    import processing.serial.*;
    Serial Uno;
    /* 
     * declare the icons used 
     */ 
    PImage icon1;
    PImage icon2;
    PImage icon3;
    PImage icon4;
    /* 
     * load icons and open the serial connection 
     */ 
    void setup() {
        size(700, 700);
        background(230);
        /* 
         * load images in the "data" folder 
         */
        icon1 = loadImage("mario.png");
        icon2 = loadImage("tetris.png");
        icon3 = loadImage("harry-potter.png");
        icon4 = loadImage("got.png");
        /* 
         * add arguments for the serial communication: parent, port name, baud rate 
         * use the same baud rate with the Arduino program
         */ 
        Uno = new Serial(this, "/dev/cu.usbmodem14301", 115200);
    }
    /* 
     * similar to loop() in Arduino 
     */
    void draw() {
        image(icon1, 120, 120);
        image(icon2, 450, 120);
        image(icon3, 120, 400);
        image(icon4, 450, 400);
    }
    /* 
     * function called whenever the mouse is clicked
     */
    void mousePressed() {
        Uno.write(check());
        Uno.clear();
    }
    /* 
     * send the id of the song selected to the Arduino program
     */
    char check() {
        if (120 < mouseX && mouseX < 270 && 120 < mouseY && mouseY < 270) {
            println("Super Mario Bros");
            return '1';
        }
        else if (450 < mouseX && mouseX < 600 && 120 < mouseY && mouseY < 270) {
            println("Tetris");
            return '2';
        }
        else if (120 < mouseX && mouseX < 270 && 400 < mouseY && mouseY < 550) {
            println("Harry Potter");
            return '4';
        }
        else if (450 < mouseX && mouseX < 600 && 400 < mouseY && mouseY < 550) {
            println("Game of Thrones");
            return '3';
        }
        else {
            return '0';
        }
    }
    </code>
</pre>

<p>In the end, here is how data was transferred from Processing to Arduino:</p>
<img src="{{site.baseurl}}/assets/img/processing/ringtone-2.png" class="img-fluid w-100"/>

<h4>Demo</h4>
<p></p>
<div class="text-center">
<iframe width="100%" height = "480" src="https://www.youtube.com/embed/fnHk2H0XTYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>