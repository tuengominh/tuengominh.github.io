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

<p>This week's content was a bit easier for me to digest, since I read about the basic components of a circuit board during the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#theory">4th week</a>. The next things I need to learn were the process and principles of designing a board with proper components.</p>

<h2 id="theory">Understanding EDA</h2>
<h5>What is an EDA software?</h5>
<p>Electronic design automation (EDA), also referred to as electronic computer-aided design (ECAD), is a type of software used to electronic systems such as ICs and PCBs. An EDA usually must be able to help us create schematics, generate a <a href="https://en.wikipedia.org/wiki/Netlist">Netlist</a>, create PCB layouts, and generate <a href="https://en.wikipedia.org/wiki/Gerber_format">Gerber</a> files.</p>
<p>I was thinking about sticking to the Autodesk family by using their EDA software Eagle. However, there were some reasons I went a head with KiCad: it is free and open-source, and our instructor Oscar provided us with a throughout tutorial regarding design steps using KiCad <a href="http://fabacademy.org/2020/labs/barcelona/local/#material/extras/week06/kicad">here.</a></p>
<h5>Design flow</h5>
<p>Design flow is the explicit combination of electronic design automation tools to accomplish the design of an integrated circuit.</p>
<h5>Sign-off checks</h5>
<p>Sign-off checks is a series of verification steps that the design must pass before it can be taped out and sent for manufacturing. There are several categories of signoff checks, and below are some of the most used ones:</p>
<ul>
<li>Design rule checking (DRC), or geometric verification: involves verifying if the design can be reliably manufactured given current technology-imposed constraints.</li>
<li>Layout versus schematic (LVS), or schematic verification: used to verify whether the placement and routing of the components in the design alter the functionality of the circuit.</li>
<li>Electrical rule check: used to spot unconnected inputs or shorted outputs, or to check for well and substrate areas for proper contacts and spacings.</li>
</ul>
<p></p>

<h2 id="design">PCB design and fabrication</h2>
<h5 id="group">Group assignment - Test a board with multimeter</h5>
<p>Before participating in the group test, I took a look at this useful <a href="https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter/all">tutorial</a> in order to understand what we were going to test. 
<p></p>
<h5>Individual assignment - Redesign an echo hello-world board</h5>
<h6>Designing with KiCad</h6>
<p>I intended to make a <a href="https://www.electronickits.com/led-dice-slowdown-kit/">LED dice</a> as a concrete project during this week and the Embedded Programming week in order to fully understand the electronics design, production, and embedded programming process. This week's goal will simply be turning on all the LEDs when clicking a button, and displaying random numbers will be the main task for the 9th week. I also wanted to see if I can use my PCB as a part of a press-fit box, just in case it could become an interesting design approach for my Final Project.</p>
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
<h6>Milling, soldering and troubleshooting</h6>
<p>The workflow is similar to what I did in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html#milling">4th week</a>.</p>
<p></p>


<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-05-3d-printing-and-scanning.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>