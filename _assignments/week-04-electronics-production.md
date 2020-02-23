---
layout: assignment
title: Electronics Production
thumb: 05.png
assignment: characterize the design rules for PCB production (in-group); to mill, solder and test an in-circuit programmer (individual).
active: 1
---
<p class="font-italic font-weight-bold">* All RML files can be downloaded <a href="#">here</a>.</p>

<h2>Understanding electronics and the boards</h2>
<p>Yes, you're right, I'm that type of person who needs to understand what I'm doing before doing it. To me, electronics is a whole new world, and therefore I need to go through tutorials about basic concepts regarding electronics and circuits. Besides Oscar's classes, I followed <a href="https://www.makerspaces.com/basic-electronics/">this tutorial</a>.</p>
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
<li>A <strong>printed circuit board (PCB)</strong> connects electrical or electronic components using conductive tracks and pads etched from a layer of copper laminated onto a non-conductive substrate. Components are generally soldered onto the PCB.</li>
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
<li><strong>In-circuit programming (ICP):</strong> also known as in-system programming (ISP), serial programming or in-circuit serial programming (ICSP) allows programming and reprogramming of micro-controllers while installed in a complete system. For the different types of chips, there are different programmers.</li>
</ul>
<p></p>
<h5>Available ICPs at Fab Lab Barcelona</h5>
<ul>
<li>FabISP: an in-system programmer for AVR micro-controllers, designed for production within a Fab Lab.</li>
<li>FTDI SERIAL with UPDI adapter.</li>
<li>CMSIS-DAP with SWD adapter SWD.</li>
</ul>
<p>That's it, enough knowledge for this week. In 2 weeks, I will try to learn more about how to understand diagrams and how to design a circuit board.</p>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>