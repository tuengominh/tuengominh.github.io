---
layout: assignment
title: Electronics Design
thumb: 07.png
assignment: test the operation of a circuit board (in-group) and to design a hello-world board with additional buttons and LEDs (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All RML and original editable KiCad files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/board/">here</a>.</p>

<p class="font-italic font-weight-bold">* To keep the momentum of the 4th week, I continued to consolidate a set of <a href="#theory">electronics design rules</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to <a href="#group">troubleshoot</a> a circuit board using a <a href="https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-multimeter">multimeter.</a></p>

<p class="font-italic font-weight-bold">* Besides, we were required to individually design <a href="#design">our first PCBs</a> and fabricate them.</p>

<h2 id="theory">Understanding EDA</h2>
<p>This week's content was a bit easier for me to digest since I read about the basic components during the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#theory">4th week</a>. This week, I wanted to learn about the principles of designing a functional circuit. Allow me to go through a very long note without any images attached, or go straight to the assignments <a href="#assignment">below.</a></p>
<p><a href="https://en.wikipedia.org/wiki/Electronic_design_automation">Electronic design automation (EDA)</a> is a type of software used to design and simulate electronic systems such as ICs and PCBs. An EDA usually must be able to help us create schematics, generate <a href="https://en.wikipedia.org/wiki/Netlist">Netlists</a>, create PCB layouts (including routed traces and <a href="https://en.wikipedia.org/wiki/Footprint_(electronics)">footprints</a>), and generate <a href="https://en.wikipedia.org/wiki/Gerber_format">Gerber</a> files. I was thinking about sticking to the Autodesk family by using their EDA software Eagle. However, there were some reasons I went ahead with KiCad: it is free and open-source, and our instructor Oscar provided us with a very throughout tutorial regarding design steps using KiCad <a href="http://fabacademy.org/2020/labs/barcelona/local/#material/extras/week06/kicad">here.</a></p>
<h5>EDA design flows</h5>
<p>We indeed need to go through a bunch of EDA features to accomplish the design of an IC or a PCB. Some crucial steps:</p>
<ul>
<li><strong>Schematic capture:</strong> the very first step of the actual design of an electronic circuit. Besides basic drawing and visualization capabilities, schematic editors typically provide the capabilities of hierarchical design as well as capturing electrical properties and other attributes of components, wires, nets, and pins.</li>
<li><strong>Placement:</strong> assign locations for circuit components (and footprints) within a netlist such that they fit within the available space and the router can make all of the necessary connections between them. A placement with good routability and density is a good placement. An inferior placement will not only affect the performance but might also make it non-manufacturable. The placement optimization objectives typically include minimize wire-length and avoid congestions.</li>
<li><strong>Routing:</strong> connect the pins of the components with wires to implement the nets. Routing can consume more area than actual components. The routing optimization objectives typically include minimize wire-length, minimize routing and overall area, and maximize nets routed.</li>
<li><strong>Power optimization:</strong> reduce power consumption while preserving functionality. Some techniques: transistor sizing, voltage scaling, and voltage islands (different blocks can be run at different voltages, saving power).</li>
</ul>
<h5>Design rules</h5>
<p>While researching online, I found some <a href="https://resources.altium.com/pcb-design-blog/top-pcb-design-guidelines-every-pcb-designer-needs-to-know">rules of thumb</a> while designing circuits that help us ensure functionality, increase productivity, and increase performance of the boards.</p>
<h6>Schematic capture</h6>
<ul>
<li>Build circuits block by block and then connect the blocks together to form a functional board. <a href="http://www.opencircuits.com/Basic_Circuit_Building_Blocks">Building blocks</a> are circuits and parts of circuits used over and over again in larger projects. Understanding and designing a complex circuit is much easier by understanding and designing these building blocks. Some basic building blocks: amplifiers, transistors, LEDs with resistors, parallel circuit, series circuit, switch and pull up/down, voltage divider, etc. with their own good practices.</li>
<li>Use a global router to connect the building blocks' areas, and then use a detailed router to layout wires within the building blocks.</li>
<li>We don't need to integrate as many components as possible to complete a bulky design. Choosing components based on their characteristics to meet the minimum requirements will reduce the size of the PCB and increase effectiveness dramatically.</li>
<li>When there are not many micro-controller pins available, we can use a technique called <a href="https://en.wikipedia.org/wiki/Charlieplexing">Charlieplexing</a> to drive multiple LEDs.</li>
</ul>
<h6>Placement</h6>
<ul>
<li>Give the components room to breathe and avoid overlapping any parts.</li>
<li>Place components that can't be moved first, for example: connectors, switches, USB ports, etc. Try to place the ICs in the middle of the layout.</li>
<li>Place all components on the same side of the board. Avoid placing components on the edge of the board by making sure that all of the components are at least 1mm away from the edge of the PCB.</li>
<li>Orient similar components in the same direction as this will help with effective routing and ensuring an efficient and error-free soldering process during manufacturing.</li>
</ul>
<h6>Routing</h6>
<ul>
<li>Trace width: a trace optimized for current can have the trace width varies from 0.25mm for 0.3A up to 3.8mm for 6A. Traces used to carry <a href="https://en.wikipedia.org/wiki/Signal">signals</a> can be smaller than traces used to carry power. Here’s a free <a href="https://www.4pcb.com/trace-width-calculator.html">Trace Width Calculator</a> that makes this process easy.</li>
<li>Trace direction: a trace can be laid out on a PCB layout in a horizontal or vertical direction, or at an angle (45°). Keep the traces as short and direct as possible.</li>
<li>Trace spacing: traces should not be too close to each other or to other components since they could produce a risk of a potential short circuit. Recommended spacing for most trace widths should be at least 0.2mm. Spacing for higher voltage traces should be larger.</li>
<li>Make sure all chips have an individual trace back to the common node or ground when there are many chips in the design. Connect the common or ground pins of these chips individually to a common node rather than interconnecting them and then connecting to the common node.</li>
</ul>
<h5>Sign-off checks</h5>
<p>To help with the quality control process, it’s always recommended to verify whether the boards have met all established constraints via sign-off checks. Sign-off is a series of verification steps that the design must pass before it can be taped out and sent for manufacturing. There are several categories of signoff checks, and below are some of the most used ones:</p>
<ul>
<li>Electrical rule check (ERC): used to spot unconnected inputs or shorted outputs, or to check for well and substrate areas for proper contacts and spacings.</li>
<li>Design rule checking (DRC), or geometric verification: involves verifying if the design can be reliably manufactured given current technology-imposed constraints.</li>
<li>Layout versus schematic (LVS), or schematic verification: used to verify whether the placement and routing of the components in the design alter the functionality of the circuit.</li>
</ul>
<p></p>

<h2 id="assignment">PCB design and fabrication</h2>
<h5 id="group">Group assignment - Test a board with the multimeter</h5>
<p>Before participating in the group test, I took a look at this useful <a href="https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter/all">tutorial</a> in order to understand what we were going to test.</p> 
<p></p>

<h5 id="design">Individual assignment - Redesign an echo hello-world board</h5>
<p>I intended to make an <a href="https://www.electronickits.com/led-dice-slowdown-kit/">LED dice</a> as a concrete project during this week and the Embedded Programming week in order to fully understand the electronics design, production, and embedded programming process. This week's goal will simply be turning on/off all the LEDs when pressing a button, and displaying random numbers will be the main task for the 9th week.</p>
<p>I chose to start with an <a href="http://academy.cba.mit.edu/classes/embedded_programming/t1614/hello.t1614.echo.jpg">ATtiny1614 hello-world board</a> after being consulted by Santi and Josep. In summary, the ESP ones are unnecessary complex and the sample ATtiny1614 board has FTDI/UPDI headers which means I could use the outcomes of the 4th week to talk to it. ATtiny1614 means the chip has 16 KiB flash memory and 14 pins, which seemed to be suitable since I needed 2 pins for VCC and GND, 1 pin for UPDI header, 2 pins for FTDI serial header, 7 pins for 7 LEDs and 1 pin for 1 button. The chip was also recommended by Neil as an easy one to start with.</p>
<p></p>
<h6>Managing libraries</h6>
<p>As mentioned above, I used <a href="https://kicad-pcb.org/download/osx/">KiCad</a> to design my PCB. The instructors also provided us with a useful <a href="http://fabacademy.org/2020/labs/barcelona/local/#material/extras/week06/assets/kicad_libraries.zip">Fab library</a> adapted for <a href="https://en.wikipedia.org/wiki/Surface-mount_technology">SMD</a> components and KiCad V5.0:</p>
<ul>
<li>Symbols: <a href="https://kicad.github.io/symbols/MCU_Microchip_ATtiny">ATtiny</a> and <a href="http://fabacademy.org/2020/labs/barcelona/local/#material/extras/week06/assets/ESP32-Footprints.zip">ESP32</a></li>
<li>Footprints: <a href="https://kicad.github.io/footprints/Package_SO">ATtiny</a> and <a href="http://fabacademy.org/2020/labs/barcelona/local/#material/extras/week06/assets/ESP32-Footprints.zip">ESP32</a></li>
</ul>
<p>I simply followed Oscar's <a href="http://fabacademy.org/2020/labs/barcelona/local/#material/extras/week06/kicad">instructions</a> to import all of the symbol and footprint libraries. However, in the <i>Connectors</i> library included in KiCad V5.0, there is an <i>AVR-UPDI-6</i> symbol with 6 pins (instead of 2 pins as the sample hello-world board). This UPDI component is also not linked to any footprint. That was why I decided to create a custom <i class="font-weight-bold">UPDI-SMD-HEADER</i> symbol and a custom <i class="font-weight-bold">fab-1X02SMD</i> footprint.</p>
<p>To do that, the first step was to modify the <i>fab-1X06SMD</i> footprint (which links to the FTDI header) in <strong>Footprint Editor.</strong> I deleted the pad no.1, no.2, no.5, no.6, and renamed pad no.3 and no. 4 to 1 and 2. Then I export it as a new footprint named <i>fab-1X02SMD</i> and imported the new footprint to <strong>Footprint Libraries</strong>.</p>
<p>Next step is to add an <code>$INDEX</code> of <code>fab-1X02SMD</code> to the <code>fab.mod</code> file. In the same file, I input a new <code>$MODULE</code>:</p>
<pre class="bg-light py-2 mt-0">
<code>
    $INDEX 
    fab-1X02SMD
</code>
</pre>
<pre class="bg-light py-2 mt-0">
<code>
    $MODULE fab-1X02SMD
    Po 0 0 0 15 00200000 00000000 ~~
    Li fab-1X06SMD
    Cd 
    Kw 
    Sc 00000000
    Op 0 0 0
    At SMD
    T0 -1000 0 500 500 900 40 N V 21 N ">NAME"
    $PAD
    Sh "1" R 1000 500 0 0 0
    Dr 0 0 0 
    At SMD N 00888000
    Ne 0 ""
    Po 0 -500 
    $EndPAD
    $PAD
    Sh "2" R 1000 500 0 0 0
    Dr 0 0 0 
    At SMD N 00888000
    Ne 0 ""
    Po 0 500 
    $EndPAD
    $EndMODULE 1X02SMD  
</code>
</pre>
<p>I also added a new <code>$DEF</code> to the <code>fab.lib</code> file in order to create a new custom <i>UPDI-SMD-HEADER</i> symbol linked to the custom footprint:</p>
<pre class="bg-light py-2 mt-0">
<code>
    DEF UPDI-SMD-HEADER M 0 40 Y Y 1 L N
    F0 "M" 0 0 45 H I C CNN
    F1 "UPDI-SMD-HEADER" 0 0 45 H I C CNN
    F2 "fab-1X02SMD" 30 150 20 H I C CNN
    $FPLIST
    *1X02SMD*
    $ENDFPLIST
    DRAW
    P 2 1 0 0 500 670 100 670 N
    P 2 1 0 0 100 670 100 255 N
    P 2 1 0 0 100 255 500 255 N
    P 2 1 0 0 500 255 500 670 N
    X UPDI 2 0 400 200 R 40 40 1 1 B 
    X GND 1 0 500 200 R 40 40 1 1 B 
    ENDDRAW
    ENDDEF 
</code>
</pre>
<p>Now I have the new self-made UPDI symbol and footprint!</p>
<p></p>
<h6>Designing schema with KiCad Eeschema</h6>
<p>I started with sketching my board in the <a href="https://kicad-pcb.org/discover/eeschema/">Eeschema</a> schematic editor first. To understand the ATtiny1614 chip and its pins, I refer to the datasheet <a href="http://ww1.microchip.com/downloads/en/DeviceDoc/ATtiny1614-data-sheet-40001995A.pdf">here.</a></p>
<p>The workflow went like:</p>
<ul>
<li>Create new <code>.pro</code> KiCad project and open the <code>.sch</code> file in Eeschema</li>
<li>Choose the <strong>Place component</strong> tool and select the components needed from the libraries. The components I used: <i>ATtiny1614-SS</i> for the IC, <i>FTDI-SMD-HEADER</i> for the FTDI header, <i>6MM_SWITCH6mm_SWITCH</i> for the button, <i>CAP-UNPOLARIZEDFAB</i> for the capacitor, <i>RES-US1206FAB</i> for the resistors, <i>LEDFAB1206</i> for the LEDs, and my custom <i>UPDI-SMD-HEADER</i> for the UPDI header.</li>
<li>Edit the properties of the components (annotations, values, and footprints) by hovering and press <kbd>E</kbd>. In order to calculate the resistance value of the resistors, I also took a look at this <a href="https://datasheet.octopart.com/MCL-S250GC-Multicomp-datasheet-12568751.pdf">datasheet.</a></li>
<li>Arrange related components to some basic building blocks: <i>FTDI SERIAL HEADER</i>, <i>UPDI HEADER</i>, and <i>BUTTON</i>.</li>
<li>Choose the <strong>Place global label</strong> tool in order to assign some global "labels", such as GND or VCC, BTN or UPDI, etc. Separating blocks and wiring them (by pressing <kbd>W</kbd> to begin wire and <kbd>K</kbd> to end wire) with those global labels can make the schema more readable.</li>
<li>As common practices, I added a pull-up resitor to the <i>BUTTON</i> block and wired a capacitor parallelly with the power supply.</li>
<li>The final step is to <strong>Generate Netlist</strong>. Netlist serves as a link between the schema and the PCB layout.</li>
</ul>
<p>Here you go all the components displayed and wired together!</p>
<p></p>
<h6>Designing PCB with KiCad PCBnew</h6>
<p>When I <strong>Read Netlist</strong> in the PCB layout editor <a href="https://kicad-pcb.org/discover/pcbnew/">PCBnew</a> of KiCAD, I immediately saw a horrible tangled mess. The workflow used to save myself from that basically included 2 steps of Placement and Routing:</p>
<ul>
<li>Re-arrange the components: select pads from the footprints and press <kbd>M</kbd> to move them or press <kbd>R</kbd> to rotate/flip them. By taking a look at the white lines, I could more or less imagine whether my components could be routed easily.</li>
<li>Set the proper <strong>Design Rules</strong> complying with the 1/64 milling bit. The set of rules was provided by our instructors.</li>
<li>Use the <strong>Route tracks</strong> tool to draw traces that connected the pins of the components. I started with the IC and the LEDs first. Sometimes I modified the schema, generate the Netlist and read it again in order to solve some crossed traces.</li>
<li>After struggling for a while, a good tip I learned was to connect all components with VCC pins first. The connections between GND pins will be done after the others, and they can be joined to form an overall shape of the layout.</li>
</ul>
<p></p>
<h6>Electrical and design rules check</h6>
<p>KiCad includes an <strong>Electrical Rule Checker</strong> in Eeschema and a <strong>Design Rule Check Control</strong> in PCBnew that are dedicated for sign-off checks. The LVS verification is included in DRC Control.</p>
<p>Basically, no news is good news. However, I still had some issues which were indeed OK. For example, the ERC complained that I had some unused pins in the schema, and since I didn't create an edge cut in PCBnew, the DRC mistook the outer traces as the edge of the design.</p>
<p>Ready to fabricate!</p>
<p></p>
<h6>Generating toolpath with Fab Modules</h6>
<p>The common file format to be sent for manufacturing would be to generate a <code>.gbr</code> file. However, since I've already been used to <a href="http://fabmodules.org/">Fab Modules</a>, I continued using it to generate the toolpath using exported <code>.png</code> files. Before doing that, I had to export an <code>.svg</code> file from PCBnew, and then I modified it in Illustrator and Photoshop.</p>
<p>The next steps in Fab Modules were similar to what I did in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#fabmodules">4th week</a>.</p>
<p></p>
<h6>Milling, soldering, and troubleshooting</h6>
<p>Not much to say about these steps, since the workflow was also similar to what I did in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#milling">4th week</a>.</p>
<p></p>

<h5>Conclusion</h5>
<p>Things I don't like about KiCad:</p>
<ul>
<li>Confusing library management and third-party library support</li>
<li>Lack of an easy way to automatic update between schematic and PCB layout</li>
<li>Lack of an efficient interactive drag to move components without losing route tracks</li>
</ul>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-05-3d-printing-and-scanning.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>