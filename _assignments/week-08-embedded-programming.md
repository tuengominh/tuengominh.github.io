---
layout: assignment
title: Embedded Programming
thumb: 09.jpg
assignment: read a micro-controller data sheet (individual); to program the desined board (individual); to compare the different architectures (in-group). 
active: 1
---
<p class="font-italic font-weight-bold">* All Arduino and Make files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/firmware">here</a>.</p>

<p class="font-italic font-weight-bold">* To keep the momentum of the 4th and 6th weeks, I tried to write down what I understand about the <a href="#theory">embedded systems and development toolchain</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to compare the performance and development workflows of <a href="#group">different micro-controller families.</a></p>

<p class="font-italic font-weight-bold">* I needed to individually read a <a href="#datasheet">micro-controller datasheet</a> and program the board previously designed in <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-06-electronics-design.html#dice">the 6th week</a>.</p>

<h2 id="theory">Understanding embedded systems</h2>
<p>Allow me to go through a very long note without any images attached, or go straight to the assignments <a href="#assignment">below.</a></p>
<h5>Micro-controller unit (MCU)</h5>
<p>A typical <a href="https://en.wikipedia.org/wiki/Microcontroller">micro-controller</a> includes a processor core, memory and input/output (I/O) peripherals on a single chip. A micro-controller controls a singular function by interpreting data received from I/O peripherals using the central processor. The temporary information that the micro-controller receives is stored in its data memory, where the processor accesses it and uses instructions stored in its program memory (firmware) to decipher and apply the incoming data. It then uses its I/O peripherals to communicate and enact the appropriate action. There are many available micro-controller families, some of them are widely used such as AVR (tinyAVR and megaAVR), ARM (Cortex-A/R/M), or Xtensa (ESP32, ESP8266), etc. For example, the ATTiny1614 chip used in my LED dice board is from tinyAVR family. Due to the COVID-19 outbreak situation, we were also provided by the instructors an <a href="https://en.wikipedia.org/wiki/Arduino_Uno">Arduino Uno</a> board with ATmega328P chip, <a href="https://www.luisllamas.es/esp8266-nodemcu/">NodeMCU</a> board with ESP8266 chip and a <a href="https://gitlab.fabcloud.org/barcelonaworkshops/barduino-2.0">Barduino</a> board with ESP32 WROOM chip.</p>
<ul>
<li>Central processor (CPU): ranging from small and simple 4-bit processors to complex 64-bit processors. A processor can be considered as the brain of the device. It can respond to events and perform basic logic and I/O operations. It also performs data transfer operations, which communicate commands to other components in the larger embedded system.</li>
<li>Memory: volatile memory (RAM) for data storage and read-only ROM, EPROM, EEPROM or Flash memory for program storage. Bootloader is a piece of firmware stored in ROM that allows installing new firmware without the need of an external programmer.</li>
<li>Analog-to-digital converters (ADC) or digital-to-analog converters (DAC): An ADC converts analog signals to digital signals and allows the processor to interface with external analog devices, such as sensors. A DAC allows the processor to communicate its outgoing signals to external analog components.</li>
<li>Serial communications interfaces and ports: an I/O port allows the micro-controller to connect to external components. It has a similar function to a USB or a parallel port but differs in the way it exchanges bits: I2C, SPI, UART. More information can be found <a href="https://maker.pro/arduino/tutorial/common-communication-peripherals-on-the-arduino-uart-i2c-and-spi">here.</a></li>
<li>In-circuit programming and in-circuit debugging support: in my case, it's the PA0 pin of the chip that is connected to the UPDI header.</li>
</ul>
<p></p>

<h5>Software development toolchain</h5>
<p>A <a href="https://elinux.org/Toolchains">toolchain</a> is the set of software development tools that are chained together. <a href="https://en.wikipedia.org/wiki/GNU_toolchain">GNU toolchain</a> which consists a C compiler is widely used in programming embedded systems and most toolchains are developed base on GNU (for instance, <a href="https://www.microchip.com/mplab/avr-support/avr-and-arm-toolchains-c-compilers">AVR GNU toolchain and ARM GNU toolchain</a>). A toolchain usually consists of:</p>
<ul>
<li>Editor: editing source code to control embedded systems. It could be a standalone application or built into an IDE. An IDE often consists of a source code editor, a compiler, a linker and a debugger. <a href="https://www.arduino.cc/en/main/software">Arduino IDE</a> and <a href="https://www.microchip.com/mplab/avr-support/atmel-studio-7">Atmel studio</a> are widely used by electronics lovers, and we were also introduced to <a href="https://platformio.org/">PlatformIO</a> by our instructor Oscar.</li>
<li>Compiler: transforming the code into object code written by <a href="https://en.wikipedia.org/wiki/Assembly_language">low-level language</a> that a machine can understand. <a href="https://gcc.gnu.org/">GCC</a> is the compiler included in GNU toolchain.</li> 
<li>Assembler: converting assembly code into executable machine code. It takes the basic commands and operations from assembly code and converts them into binary code that can be recognized by a specific type of processor. IDEs often include assemblers.</li> 
<li>Linker: combining all small pieces and modules of code together, creating an executable program. The linker of GNU toolchain is called <a href="https://ftp.gnu.org/old-gnu/Manuals/ld-2.9.1/html_mono/ld.html">ld (GNU)</a>.</li>
<li>Debugger: testing and debugging programs. There are both source-level debugger or machine-language debugger. <a href="https://en.wikipedia.org/wiki/JTAG">JTAG</a> can be used to debug the software on the embedded system. <a href="https://en.wikipedia.org/wiki/GNU_Debugger">GDB</a> is the GNU debugger.</li>
<li>Libraries: collections of code, such as an API, that allow the app to reference prebuilt functions or other resources. <a href="https://en.wikipedia.org/wiki/GNU_C_Library">glibc</a> provides the core libraries for the GNU system as well as many other systems that use Linux as the kernel.</li>
<li>Frameworks: an abstraction layer in which software providing generic functionality can be selectively changed by additional user-written code. Some examples: <a href="https://www.arduino.cc/reference/en/">Arduino</a> framework based on <a href="http://wiring.org.co/">Wiring</a> (AVR, ARM), <a href="https://www2.keil.com/mdk5/cmsis">CMSIS</a> framework (Cortex-M/A), <a href="https://github.com/espressif/esp-idf?utm_source=platformio&utm_medium=docs">ESP-IDF</a> framework (ESP32), etc.</li>
</ul>
<p>In short, a toolchain is able to compile source code written in a high-level language into executables that can run on target devices. Most of the programs are written in C/C++, but there are also <a href="https://en.wikipedia.org/wiki/Espruino">Espruino</a> that supports JavaScript and <a href="https://micropython.org/">MicroPython</a> that supports Python 3. Both of them have their compatible hardware and software.</p>
<p></p>

<h5>In-system programmer</h5>
<p>I've already read about ISPs in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#isp">4th week</a>. An Arduino board can also be used as a programmer to burn the bootloader on another board.</p>
<p>Programming interfaces are used to download and upload the on-chip memories. <a href="https://www.nongnu.org/avrdude/">avrdude</a> is a programming interface working with <a href="https://gcc.gnu.org/wiki/avr-gcc">avr-gcc</a> compiler/linker and can be used effectively via the command line. <a href="https://en.wikipedia.org/wiki/Make_(software)">GNU Make</a> is another automation tool for compiling and building applications, with the option of transferring the <code>.hex</code> file into the target chip.</p>
<p></p>

<h2 id="assignment">Understanding electronics datasheets</h2>
<h5 id="datasheet">Individual assignment - Read the ATtiny1614 datasheet</h5>
<p>I indeed took a look at this <a href="https://github.com/SpenceKonde/megaTinyCore/blob/master/megaavr/extras/ATtiny_x14.md">pinout diagram</a> and this <a href="http://ww1.microchip.com/downloads/en/DeviceDoc/ATtiny1614-data-sheet-40001995A.pdf">datasheet</a> in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-06-electronics-design.html">6th week</a> in order to know where should I connect the FTDI (RX, TX) and UPDI (RESET) header to the chip. The RXD pin of the chip will be connected to the TX pin of the FTDI header, and the TXD pin of the chip will be connected to the RX pin of the FTDI header. This is the basic of UART serial communication.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-08/datasheet-2.png" class="img-fluid w-100"/>
<p><strong>Here are some specs of the ATtiny1614 chip:</strong></p>
<ul>
<li>Flash (program memory): 16384 bytes</li>
<li>EEPROM: 256 bytes</li>
<li>RAM: 2048 bytes</li>
<li>General-purpose IO Pins: 12 (11 usable)</li>
<li>Digital pins: 2</li>
<li>Analog/Digital pins: 10</li>
<li>ADC Channels: 10 (9 usable)</li>
<li>DAC: Yes</li>
<li>Supported interfaces: UART, SPI, I2C</li>
<li>Programming: UPDI</li>
<li>Voltage: -0.5 - 6V</li>
</ul>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-08/datasheet-1.png" class="img-fluid w-100"/>
<p><strong>A summary of I/O pins and how to use them:</strong></p>
<ul>
<li>GND: ground</li>
<li>VCC: power supply</li>
<li>PA0 - UDPI/RESET: programming & reset pin</li>
<li>PA6 - DAC: digital to analog converter</li>
<li>PA5 - VREF: voltage reference</li>
<li>PA1, PA2, PA3, PA4 - MOSI, MISO, SCK, SS: <a href="https://en.wikipedia.org/wiki/Serial_Peripheral_Interface">SPI</a> interface support.</li>
<li>PB0, PB1 - SCL, SDA: <a href="https://i2c.info/">I2C</a> interface support. PA1 and PA2 can also be used for the same purpose.</li>
<li>PB2, PB3 - RXD, TXD: <a href="https://www.circuitbasics.com/basics-uart-communication/">UART</a> interface support. PA1 and PA2 can also be used for the same purpose.</li>
</ul>
<p>The numbers 0-10 (marked with orange and blue colors) can be used while programming in order to indicate the pin we want to refer to.</p>
<p></p>
<h2>Embedded programming</h2>
<h5>Individual assignment - Program the ATtiny1614 LED dice</h5>
<h6 id="dice">Arduino IDE + pyupdi</h6>
<p>Let's take a look at my LED dice case as an example of the process: after compiling the <strong>C++ source code</strong> and linking with the <strong>AVR GNU toolchain</strong>, the <strong>Arduino IDE</strong> employs <strong>avrdude</strong> to convert the executable code into a <code>.hex</code> file that is loaded into the ATtiny1614 board via <strong>UPDI</strong> programmer using a <strong>USB-UART</strong> adapter, with the support of <strong>pyupdi</strong> driver.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-06/code-0.png" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-08/arduinoide.png" class="img-fluid w-100"/>
<p></p>
<pre class="bg-light py-2 mt-0">
<code>
    /* 
    assign output and input pins to variables 
    */ 
    int LED_1 = 8;
    int LED_2 = 9;
    int LED_3 = 1;
    int LED_4 = 0;
    int LED_5 = 10;
    int LED_6 = 3;
    int LED_7 = 2;
    int BUTTON = 7;
    /* 
    some useful variables 
    */ 
    int displayTime = 2000;  
    int pendingTime = 100;
    int num = 1;
    /* 
    setup function 
    */ 
    void setup() {
        pinMode(BUTTON, INPUT);
        pinMode(LED_1, OUTPUT);
        pinMode(LED_2, OUTPUT);
        pinMode(LED_3, OUTPUT);
        pinMode(LED_4, OUTPUT);
        pinMode(LED_5, OUTPUT);
        pinMode(LED_6, OUTPUT);
        pinMode(LED_7, OUTPUT);
    }
    /* 
    loop function 
    */ 
    void loop() {
        if (digitalRead(BUTTON) == LOW) {
            num = random(1, 7);  
            displayRandom(num);
        }
        delay(pendingTime);    
    }
    /* 
    display random number 
    */ 
    void displayRandom(int numDisplayed) {
        reset();
        if (numDisplayed == 1) {
            digitalWrite(LED_3, HIGH);
        }
        if (numDisplayed == 2) {
            digitalWrite(LED_2, HIGH);
            digitalWrite(LED_6, HIGH);
        }
        if (numDisplayed == 3) {
            digitalWrite(LED_1, HIGH);
            digitalWrite(LED_3, HIGH);
            digitalWrite(LED_4, HIGH);
        }
        if (numDisplayed == 4) {
            digitalWrite(LED_1, HIGH);
            digitalWrite(LED_4, HIGH);
            digitalWrite(LED_5, HIGH);
            digitalWrite(LED_7, HIGH);
        }
        if (numDisplayed == 5) {
            digitalWrite(LED_1, HIGH);
            digitalWrite(LED_3, HIGH);
            digitalWrite(LED_4, HIGH);
            digitalWrite(LED_5, HIGH);
            digitalWrite(LED_7, HIGH);
        }
        if (numDisplayed == 6) {
            digitalWrite(LED_1, HIGH);
            digitalWrite(LED_2, HIGH);
            digitalWrite(LED_4, HIGH);
            digitalWrite(LED_5, HIGH);
            digitalWrite(LED_6, HIGH);
            digitalWrite(LED_7, HIGH);
        } 
        delay(displayTime);
    }
    /* 
    reset function 
    */ 
    void reset() {
        digitalWrite(LED_1, LOW);
        digitalWrite(LED_2, LOW);
        digitalWrite(LED_3, LOW);
        digitalWrite(LED_4, LOW);   
        digitalWrite(LED_5, LOW);
        digitalWrite(LED_6, LOW);
        digitalWrite(LED_7, LOW);
    }
</code>
</pre>
<p>In order to know the USB port, I ran this in Terminal:</p>
<pre class="bg-light py-2 mt-0">
<code>ls /dev/cu.*</code>
</pre>
<p>To upload the program to the board, I ran this in Terminal:</p>
<pre class="bg-light py-2 mt-0">
<code>pyupdi.py -d tiny1614 -c /dev/ttyUSB0 -b 9600 -f /tmp/arduino_build_152122/led-dice.ino.hex -v</code>
</pre>
<p>And here you go my working LED dice!</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/zI0-utgwI8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-06/code-2.jpg" class="img-fluid w-100"/>
<p></p>
<!--<h6>PlatformIO IDE</h6>
<p></p>
<h6>GNU Make</h6>
<p></p>-->
<h5>Individual assignment - Program the Barduino 2.0</h5>
<p>Barduino 2.0 is a ESP32 compatible board designed by our intructor Eduardo Chamorro. During the last day of the lab before the quarantine, we had a chance to quickly fabricate it.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-08/barduino.jpg" class="img-fluid w-100"/>
<h6>Arduino IDE + ArduinoISP</h6>
<p>In order to test the Barduino board, I tried a simple blink program. The built-in LED is connected to the GPIO-13 pin.</p>
<pre class="bg-light py-2 mt-0">
<code>
#define BUILTIN_LED 13 
void setup() {
  pinMode(BUILTIN_LED, OUTPUT);     
}
void loop() {
  digitalWrite(BUILTIN_LED, LOW);   
  delay(1000);                     
  digitalWrite(BUILTIN_LED, HIGH);  
  delay(1000);                      
}
</code>
</pre>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-08/barduino-code.png" class="img-fluid w-100"/>
<p></p>
<p>I chose the ESP32 Dev Module as the board and ArduinoISP as the programmer. It works as expected!</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/OAR-qHhIklg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<!--<h5>Group assignment - Compare tinyAVR, megaAVR and Xtensa families</h5>
<p></p>-->

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-07-computer-controlled-machining.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>