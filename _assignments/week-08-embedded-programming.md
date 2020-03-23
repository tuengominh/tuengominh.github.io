---
layout: assignment
title: Embedded Programming
thumb: 09.jpg
assignment: read a micro-controller data sheet (individual); to program the desined board (individual); to compare the different architectures (in-group). 
active: 1
---
<p class="font-italic font-weight-bold">* All Arduino and Makefile files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/firmware">here</a>.</p>

<!--<p class="font-italic font-weight-bold">* This week's group assignment was to compare the performance and development workflows of <a href="#group">different micro-controller families.</a></p>-->

<p class="font-italic font-weight-bold">* I needed to individually read a <a href="#datasheet">micro-controller datasheet</a> and program the board previously designed in <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-06-electronics-design.html#dice">the 6th week</a>.</p>

<h2 id="datasheet">Understanding electronics datasheets</h2>
<h5>Individual assignment - Read the ATtiny1614 datasheet</h5>
<p></p>
<h2>Embedded programming</h2>
<p><strong>What is a toolchain?</strong> A <a href="https://elinux.org/Toolchains">toolchain</a> is the set of software development tools that are chained together such as compilers, debuggers, linkers, assemblers, run-time libraries, sometimes bootloader and kernel. It has to be able to compile source code written in assembly/C/C++ into executables that can run on target devices.</p>
<h5>Individual assignment - Program the LED dice</h5>
<h6 id="dice">Arduino IDE + megaTinyCore + pyupdi</h6>
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
<p>And here you go my working LED dice!</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/zI0-utgwI8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-07-computer-controlled-machining.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>