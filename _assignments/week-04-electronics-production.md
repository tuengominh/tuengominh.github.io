---
layout: assignment
title: Electronics Production
thumb: 05.png
assignment: characterize the design rules for PCB production (in-group); to mill, solder and test an in-circuit programmer (individual).
active: 1
---
<p class="font-italic font-weight-bold">* All RML files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/pcb">here</a>.</p>

<h2>Understanding electronics and the boards</h2>
<p>Yes, you're right, I'm that type of person who needs to understand what I'm doing before doing it. To me, electronics is a whole new world, and therefore I need to go through tutorials about basic concepts regarding electronic components and circuits. Besides Oscar's classes, I followed <a href="https://www.makerspaces.com/basic-electronics/">this tutorial</a>.</p>
<h5>Electricity and how it works</h5>
<ul>
<li>Voltage is the measurement of electrical potential produced by electricity sources.</li>
<li>Electricity needs to flow to do anything useful. Current is the rate at which charge is flowing.</li>
<li>Resistance is the tendency of a certain material to resist the flow of charge (current).</li>
<li>Electricity will flow from a higher voltage to a lower voltage. If we create a conductive path (for example, copper wire) between a higher voltage and a lower voltage, electricity will flow along that path.</li>
<li>There are two types of electrical sources: alternating current (AC) and direct current (DC). With AC, the direction electricity flows throughout the circuit is constantly reversing. With DC, electricity flows in one direction between power and ground. DC voltage sources always have two sides, with the positive side having a higher voltage than the negative side.</li>
</ul>
<p></p>
<h5>Circuit and PCB</h5>
<ul>
<li>A circuit is a circular path that starts and stops at the same place and allows electricity to flow. A circuit should always be closed to work.</li>
<li>Circuits are built to make electricity do something: light up, make noise, run programs, etc. And if we insert something useful - which we call <strong>load</strong> - into the circuit like an LED, the flowing electricity will do some work, like lighting up that LED.</li>
<li>A <strong>short circuit</strong> is created when we connect a wire directly from the positive to the negative side of a power supply. This is bad because if there is no load to restrict the current flow, there won't be anything to slow down the current, and it will try to be infinite. This could cause the wire to burn up, damage the power supply, or drain the battery. It is very important to prevent short circuits by making sure that the positive voltage is never wired directly to ground.</li>
<li>The opposite of a short circuit is an <strong>open circuit</strong>. This is a circuit where the loop isn't fully connected. If your circuit doesn't work, the most likely cause is an open circuit. This is usually due to a broken connection or a loose wire.</li>
<li>A <strong>printed circuit board (PCB)</strong> connects components using conductive tracks and pads etched from a layer of copper laminated onto a non-conductive substrate. Components are generally soldered onto the PCB.</li>
</ul>
<p></p>
<h5>Ways to wire components</h5>
<ul>
<li><strong>Series:</strong> components are wired one after another. Electricity passes through one thing, then the next thing, then the next, and so on.</li>
<li><strong>Parallel:</strong> components are wired side by side. Electricity passes through all of them at the same time, from one common point to another common point.</li>
</ul>
<p></p>
<h5>Basic components</h5>
<ul>
<li><strong>Resistors (R):</strong> They add resistance to the circuit and reduces the flow of electrical current. The resistance values are measured in ohms (Ω). Resistors of over 1000Ω are typically shorted using the letter K.</li>
<li><strong>Capacitors (C):</strong> They ensure a steady electrical flow by storing electricity and discharging it into the circuit when there is a drop in electricity. Capacitors are measured in Farads( pF, nF, uF). These are often used interchangeably and that’s why a conversion chart is handy.</li>
<li><strong>Diodes (D):</strong> They only allow electrical current to pass through them in one direction in order to prevent electricity from flowing in the wrong direction. <strong>LED</strong> is a light-emitting diode that will emit light when electricity flows through it.</li>
<li><strong>Transistors (T):</strong>They turn current on or off when triggered by an electric signal by taking in a small electrical current at a base pin and amplifying it such that a much larger current can pass between the collector and emitter pins.</li>
<li><strong>Integrated circuit (IC):</strong> An integrated circuit is an entire specialized circuit that has been miniaturized to fit onto one small chip. Each leg of the chip connecting to a point within the circuit.</li>
</ul>
<p></p>
<h5>Micro-controller, micro-processor and in-circuit programmer</h5>
<ul>
<li><strong>Micro-processor:</strong> is an IC that has only the CPU inside them. RAM, ROM, and other peripherals must be added externally to make them functional. Microprocessors perform unspecific tasks such as developing software, games, websites, photo editing, creating documents, etc. The relationship between input and output is not defined. They need a high amount of resources like RAM, ROM, I/O ports, etc.</li>
<li><strong>Micro-controller:</strong> is an IC containing a processor and ROM. We can consider a micro-controller as a mini programmable computer.  Micro-controllers are dedicated to one task and run one specific program, for example, keyboards, mouse, remote, microwave, mobiles, watches, etc. The relationship between input and output is defined. The ROM is used to store the program instructions that is rarely changed during the life of the system, sometimes known as <strong>firmware</strong>. There are also a set of input and output pins which can be used to interact with other micro-controllers.</li>
<li><strong>In-circuit programming (ICP):</strong> also known as in-system programming (ISP), serial programming or in-circuit serial programming (ICSP) allows programming and reprogramming of micro-controllers. For the different types of chips, there are different programmers.</li>
</ul>
<p></p>
<h5>Available ISPs at Fab Lab Barcelona</h5>
<ul>
<li>FabISP: an ISP designed for production within a Fab Lab</li>
<li>FTDI SERIAL with UPDI adapter</li>
<li>CMSIS-DAP with SWD adapter</li>
</ul>
<p>That's it, enough knowledge for this week. In 2 weeks, I will try to learn more about how to understand diagrams and how to design a circuit board.</p>
<p></p>

<h2>Manufacturing the boards</h2>
<h5>Group assignment</h5>
<p>This week, I teamed up with in order to understand the machining process by testing this <a href="http://academy.cba.mit.edu/classes/electronics_production/linetest.png">test file</a>. We used <a href="https://www.rolanddga.com/es/productos/3d/srm-20-fresadora-compacta">Roland Mill SRM-20</a> to mill the test board. The detailed specs of the machine:</p>
<ul>
<li>Work area: 232 x 156mm</li>
<li>Loadable workpiece weight: 2kg</li>
<li>Operating speed: 6mm/min - 1,800 mm/min</li>
<li>Operation strokes (x,y,z): 203 x 152 x 60mm</li>
</ul>
<p>We prepared the files using <a href="http://fabmodules.org/">Fab Modules</a>. The workflow of Fab Modules is pretty straightforward, and I'd like to explain it further <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#fabmodules">below</a>.</p>
<p>We used <a href="http://download.rolanddg.jp/en/os_win10_3d.html">Roland VPanel</a> controller to adjusting the milling start point, the feed rate, and spindle speed. Detailed summary of the steps can be founded <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#vpanel">here.</a></p>
<p>Here you go the result of the test:</p>
<p></p>
<h5>Milling and soldering the FTDI SERIAL board and the UPDI adapter</h5>
<p>In order to save time and materials, I teamed up with <a href="http://fabacademy.org/2020/labs/barcelona/students/roger-anguera/">Roger Anguera</a>, <a href="http://fabacademy.org/2020/labs/barcelona/students/antoine-jaunard">Antoine Jaunard</a>, and <a href="http://fabacademy.org/2020/labs/barcelona/students/marco-cataffo">Marco Cataffo</a> because all of us were going to make the FTDI board & UPDI adapter. We did not expect that due to this we faced a lot of problems which perhaps we would not know of while milling a single board. I also learned how to mill multiple boards at the same time which is useful for my own Final Project.</p>
<h6>mods vs. Fab Modules</h6>
<p>We tried to use <a href="http://mods.cba.mit.edu/">mods</a> to create our first <code>.rml</code> files for the <a href="http://academy.cba.mit.edu/classes/embedded_programming/FTDI/USB-FT230XS-serial.traces.png">traces</a> of the FTDI SERIAL board. The workflow is a bit more complicated than Fab Modules, but is still digestible in general.</p>
<p>Some essential steps to follow:</p>
<ul>
<li>Right-click and select <strong>program > open server program</strong></li>
<li>Select the machine used to mill the PCD, in this case, <strong>Roland Mill SRM-20</strong></li>
<li>Select input format which is usually image <code>.png</code>, drawing <code>.svg</code>, or mesh <code>.stl</code>. In this case, I chose <code>.png</code>. Now we can see a Grasshopper look-alike, which is not something I fancy.</li>
<li>Select the <code>.png</code> file</li>
<li>Modify settings for <strong>Roland SRM-20 milling machine</strong> to origin 0,0,0 and home 0,0,12 (x,y,z). We also need to check the <strong>cut depth</strong> for both trace (1/64) and outline (1/32) milling processes in <strong>set PCB defaults</strong> module.</li>
<li>Click the <strong>calculate</strong> button in <strong>mill raster 2D</strong> module to calculate the toolpath</li>
<li>Delete the WebSocket module and add <strong>module > open server module > file > save</strong> module instead.</li>
<li>Connect the output file of <strong>Roland SRM-20 milling machine</strong> module to the input of <strong>save file</strong> module. This will help us to be able to save the <code>.rml</code> file.</li>
</ul>
<p id="fabmodules">After generating the first <code>.rml</code> file, I decided to go back to Fab Modules for its Tue-friendly UI. In order to mill 4 FTDI boards at the same time, we had to generate 4 files with 4 different origins: 0,0,0; 25,0,0; 0,35,0; and 25,35,0. For milling 4 UPDI adapters, we exported 4 files with 4 different origins: 0,0,0; 25,0,0; 0,25,0; and 25,25,0. Here are some recaps of steps followed:</p>
<ul>
<li>Select <code>.png</code> input format and load the <code>.png</code> files</li>
<li>Select <code>.rml</code> output format</li>
<li>Select the proper process: PCB traces (1/64) or PCB outline (1/32). This will automatically define the proper <strong>cut depth</strong>.</li>
<li>Select <strong>SRM-20</strong> in the output machine. Modify settings to origin 0,0,0 (x,y,z); zjog = 12; and home 0,0,12 (x,y,z).</li>
<li>Select the proper <strong>direction</strong>. If there are thin traces on the board, we need to select the <strong>conventional</strong> direction in order to avoid broken traces.</li>
<li>Click the <strong>calculate</strong> button to calculate the toolpath and click the <strong>save</strong> button to save the <code>.rml</code> file.</li>
</ul>
<p></p>
<h6>Milling the PCB</h6>
<p id="vpanel">Here are the detailed steps to use the milling machine and VPanel controller:</p>
<ul>
<li>Choose the correct milling bit for the job. We were provided with 2 bits: the 1/64" used for milling the traces on the board and the 1/32" used for drilling holes and cutting.</li>
<li>Insert the milling bit into the machine and manually adjust the z-axis.</li>
<li>Set origin X/Y and Z in Vpanel. Click the <strong>Spindle</strong> button to test if the milling bit can cut through the copper layer.</li>
<li>Click the <strong>Cut</strong> button to add the 4 <code>.rml</code> files and start milling!</li>
</ul>
<p>Do I look like I was enjoying fixing the milling bit?</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-04/mill-1.jpg" class="img-fluid w-100"/>
<p></p>
<p>Below is a video recording the milling process:</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/JKr3zOknjyQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<p>We then had a problem with the UPDI adapters. We forgot to set the z-axis of the home point to be greater than 0, and that's why it made a scratch across the milled parts. Since there were places left, we milled 2 more UPDIs with the new settings.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-04/mill-2.jpg" class="img-fluid w-100"/>
<p>Final milled pieces came out neat!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-04/mill-3.jpg" class="img-fluid w-100"/>
<p>I used a multimeter to troubleshoot any issues with my PCBs. A multimeter is a device that’s used to measure electric current (amps), voltage (volts) and resistance (ohms). After ensuring the necessary connections, I moved forward to soldering the components.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-04/mill-4.jpg" class="img-fluid w-100"/>
<p></p>
<h6>Soldering components</h6>
<p>Once I had the milled pieces all-good, I started the soldering process. I wrote down a shopping list of all required components and collected them from available components at the Fab Lab.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-04/solder-1.jpg" class="img-fluid w-100"/>
<p>It took me plenty of time and patience to solder the components, especially the tiny IC. I even burned my hair while trying to see more clearly with my bare eyes, since the magnifying glass gave me headaches. Rutvij from Fab Lab Barcelona then said one magic phrase that saved my life: "Solder like you're painting with watercolor!". And here you go the pretty result:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-04/solder-2.jpg" class="img-fluid w-100"/>
<p>I tested the board with Santi's computer, and it was detected!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-04/solder-3.jpg" class="img-fluid w-100"/>
<p>However, when I tried to test it with other computers, it couldn't be detected. After trying to put all connections in beep-beep mode once again with the multimeter as Oscar suggested, I put more solder to one of the resistors, and finally, the board was detected on my Macbook!</p>
<p></p>
<h5>Vinyl cutting the SWD adapter</h5>
<p>I tried another PCB manufacturing process which is vinyl-cutting the board using copper vinyl. I chose to cut the SWD adapter for this extra experiment. Josep guided me through the process since he had experiences cutting the copper vinyl before.</p>
<p>The steps were quite similar with what I did <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html#vinylcutter">last week</a>. The only difference is that I had to stick the copper vinyl on top of a plastic sheet, and modify the <strong>Force</strong> settings to be lower, around <strong>80gf</strong>.</p>
<p>The trickiest part of this process is peeling out the parts I didn't want from a tiny board (the parts milled out in milling process). The tip here is to use 2 tweezers, 1 to peel and 1 to fix the positions of the parts we want. After struggling for a while, I have my pretty cut board:</p>
<p>I decided not to proceed with the soldering process, since I realized soldering over these tiny and not-so-clingy traces can be a real pain. I would like try it out if I would have extra hands to perform a <a href="https://www.massageaholic.com/4-hand-massage-all-you-need-to-know/">4-handed massage</a>.</p>
<p></p>

<h2>Conclusion</h2>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>