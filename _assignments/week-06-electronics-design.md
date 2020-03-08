---
layout: assignment
title: Electronics Design
thumb: 07.png
assignment: test the operation of a circuit board (in-group) and to design a hello-world board with additional buttons and LEDs (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All KiCad and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/kicad/">here</a>.</p>

<p class="font-italic font-weight-bold">* To keep the momentum of the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#theory">4th week</a>, I continued to document a consolidated <a href="#theory">electronics design rules</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to <a href="#group">troubleshoot</a> a circuit board using a <a href="https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-multimeter">multimeter.</a></p>

<p class="font-italic font-weight-bold">* Besides, we were required to individually design <a href="#design">our first PCBs</a> and fabricate them.</p>

<p>This week's content was a bit easier for me to digest since I read about the basic components of a circuit board during the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#theory">4th week</a>. This week, I wanted to learn the process and principles of designing a board with proper components.</p>

<h2 id="theory">Understanding EDA</h2>
<p><a href="https://en.wikipedia.org/wiki/Electronic_design_automation">Electronic design automation (EDA)</a>, also referred to as electronic computer-aided design (ECAD), is a type of software used to design and simulate electronic systems such as ICs and PCBs. An EDA usually must be able to help us create schematics, generate <a href="https://en.wikipedia.org/wiki/Netlist">Netlists</a>, create PCB layouts, and generate <a href="https://en.wikipedia.org/wiki/Gerber_format">Gerber</a> files. I was thinking about sticking to the Autodesk family by using their EDA software Eagle. However, there were some reasons I went ahead with KiCad: it is free and open-source, and our instructor Oscar provided us with a throughout tutorial regarding design steps using KiCad <a href="http://fabacademy.org/2020/labs/barcelona/local/#material/extras/week06/kicad">here.</a></p>
<h5>EDA design flows</h5>
<p>We indeed need to go through an explicit combination of EDA tools to accomplish the design of an IC or a PCB.</p>
<ul>
<li>Placement: assign locations for circuit components (and footprints) within a netlist such that they fit within the available space and the router can make all of the necessary connections between them. A placement with good routability and density is a good placement. An inferior placement will not only affect the performance but might also make it non-manufacturable. The placement optimization objective typically include: minimize wire-length, avoid congestions, and optimize power.</li>
<li>Routing: connect the pins of the components with wires to implement the nets. Routing can consume more area than actual components. The routing optimization objective typically include: minimize wire-length, minimize routing and overall area, and maximize nets routed.</li>
<li>Power optimization: reduce the power consumption while preserving the functionality. Some techniques: transistor sizing, voltage scaling, and voltage islands (different blocks can be run at different voltages, saving power).</li>
</ul>
<h5>Design rules</h5>
<p>While researching online, I found some <a href="https://resources.altium.com/pcb-design-blog/top-pcb-design-guidelines-every-pcb-designer-needs-to-know">rules of thumb</a> while designing circuits in order to ensure funcionality, to increase productivy, and to increase performance.</p>
<h6>Building blocks</h6>
<ul>
<li>Build circuits block by block and then connect the blocks together to form a functional board. <a href="http://www.opencircuits.com/Basic_Circuit_Building_Blocks">Building blocks</a> are circuits and parts of circuits used over and over again in larger projects. Understanding and designing a complex circuit is much easier by understanding and designing these building blocks. Some basic building blocks: amplifiers, transistors, LED with resistor, parallel circuit, series circuit, switch and pull up/down, voltage divider, etc.</li>
<li>Use a global router to connect the building blocks' areas, and then use a detailed router to layout wires within the building blocks.</li>
<li>We don't need to integrate as many components as possible to complete a bulky design. Choosing components based on their characteristics to meet the minimum requirements will reduce the size of the PCB and increase the efficiency dramatically.</li>
</ul>
<h6>Placement</h6>
<ul>
<li>Give the components room to breathe and avoid overlapping any parts.</li>
<li>Place components that can't be moved first, for example: connectors, switches, USB ports, etc.</li>
<li>Place all components on the same side of the board. Avoid placing components on the edge of the board by making sure that all of components are at least 20mm away from the edge of the PCB.</li>
<li>Orient similar components in the same direction as this will help with effective routing and ensuring an efficient and error-free soldering process during manufacturing.</li>
<li>Rotate the components in order to ensure easy routing between ground pins.</li>
</ul>
<h6>Routing</h6>
<ul>
<li>Trace width: a trace optimized for current can have the trace width varies from 0.25mm for 0.3A up to 3.8mm for 6A. Traces used to carry <a href="https://en.wikipedia.org/wiki/Signal">signal</a> can be smaller than traces used to carry power. Here’s a free <a href="https://www.4pcb.com/trace-width-calculator.html">Trace Width Calculator</a> that makes this process easy.</li>
<li>Trace shape: a trace can be laid out on a PCB layout in a horizontal or vertical direction, or at an angle (45°). Right or acute angle turns are not recommended for small traces. Keep the traces as short and direct as possible. In case of a trace along the edge of a layer, ensure there is enough space between them. If the component placement forces horizontal trace routing on one side of the board, then always route traces vertically on the opposite side.</li>
<li>Trace spacing: traces should not be too close to each other or to other components since they could produce a risk of a potential short circuit. Recommended spacing for most trace widths should be at least 0.2mm. Spacing for higher voltage traces should be larger.</li>
<li>Make sure all chips have an individual trace back to the common node or ground when there are many chips in the design. Connect the common or ground pins of these chips individually to a common node rather than interconnecting them and then connecting to the common node.</li>
</ul>
<h5>Sign-off checks</h5>
<p>To help with the quality control process, it’s always recommended to verify whether the boards have met all established constraints via sign-off checks. Sign-off is a series of verification steps that the design must pass before it can be taped out and sent for manufacturing. There are several categories of signoff checks, and below are some of the most used ones:</p>
<ul>
<li>Design rule checking (DRC), or geometric verification: involves verifying if the design can be reliably manufactured given current technology-imposed constraints.</li>
<li>Layout versus schematic (LVS), or schematic verification: used to verify whether the placement and routing of the components in the design alter the functionality of the circuit.</li>
<li>Electrical rule check (ERC): used to spot unconnected inputs or shorted outputs, or to check for well and substrate areas for proper contacts and spacings.</li>
</ul>
<p></p>

<h2 id="design">PCB design and fabrication</h2>
<h5 id="group">Group assignment - Test a board with the multimeter</h5>
<p>Before participating in the group test, I took a look at this useful <a href="https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter/all">tutorial</a> in order to understand what we were going to test. 
<p></p>
<h5>Individual assignment - Redesign an echo hello-world board</h5>
<h6>Designing with KiCad</h6>
<p>I intended to make an <a href="https://www.electronickits.com/led-dice-slowdown-kit/">LED dice</a> as a concrete project during this week and the Embedded Programming week in order to fully understand the electronics design, production, and embedded programming process. This week's goal will simply be turning on all the LEDs when clicking a button, and displaying random numbers will be the main task for the 9th week. I also wanted to see if I can use my PCB as a part of a press-fit box, just in case it could become an interesting design approach for my Final Project.</p>
<p>I chose to start with an <a href="http://academy.cba.mit.edu/classes/embedded_programming/t1614/hello.t1614.echo.jpg">ATtiny1614</a> as my first PCB after being consulted by Santi and Josep. This one was also recommended by Neil.</p>
<p>Things I don't like about KiCad:</p>
<ul>
<li>Confusing library management and third-party library support</li>
<li>Lack of an easy way to automatic update between schematic and PCB layout</li>
<!--More logical matching of schematics to footprints.
Easy management of multiple sets of design rules.
Very logical handling of bus connections.-->
</ul>
<p></p>
<h6>Verification and simulation</h6>
<p>KiCad includes a <strong>Electrical Rule Checker</strong> and a <strong>Design Rule Check Control</strong> dedicated for sign-off checks. The LVS verification is included in DRC Control.</p>
<p>Circuit simulation means using mathematical models to replicate the behavior of an actual electronic circuit. We were introduced to <a href="http://www.falstad.com/circuit/">Falstad Simulator</a> and I found it quite interesting, therefore I decided to play around with it.</p>
<p></p>
<h6>Generating toolpath with Fab Modules</h6>
<p>The common file format to be sent for manufacturing would be to generate a <code>.gbr</code> file. However, since I've already been used to <a href="http://fabmodules.org/">Fab Modules</a>, I continued using it to generate the toolpath using exported <code>.png</code> files. The followed steps were similar to what I did in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#fabmodules">4th week</a>.</p>
<p></p>
<h6>Milling, soldering, and troubleshooting</h6>
<p>The workflow is similar to what I did in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#milling">4th week</a>.</p>
<p></p>


<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-05-3d-printing-and-scanning.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>