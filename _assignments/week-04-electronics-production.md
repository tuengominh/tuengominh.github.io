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
<li>Voltage is the measurement of electrical potential produced from electricity sources, but electricity needs to flow to do anything useful.</li>
<li>Electricity needs a path to flow through, which must be an electrical conductor such as a copper wire. Current is the rate at which charge is flowing. Resistance is a material's tendency to resist the flow of charge (current).</li>
<li>Electricity will flow from a higher voltage to a lower voltage. If you create a conductive path between a higher voltage and a lower voltage, electricity will flow along that path. And if you insert something useful into that path like an LED, the flowing electricity will do some work for you, like lighting up that LED.</li>
<li>There are two types of electrical signals, those being alternating current (AC), and direct current (DC). With AC, the direction electricity flows throughout the circuit is constantly reversing. With DC, electricity flows in one direction between power and ground. DC voltage sources always have two sides, with the positive side a higher voltage than the negative side.</li>
</ul>
<p></p>
<h5>Circuit and PCB</h5>
<ul>
<li>A circuit is a circular path that starts and stops at the same place and allows electricity to flow and do something useful. Circuits are built to make electricity do something: light up, make noise, run programs, etc. A circuit should always be closed to work.</li>
<li>Things we put in the circuit that use current flow to do things are called <strong>loads</strong> because they “load down” the power supply and slow down the current flow.</li>
<li>A <strong>short circuit</strong> is created when we connect a wire directly from the positive to the negative side of a power supply. This is bad because if there is no load to restrict the current flow, there won't be anything to slow down the current, and it will try to be infinite. This could cause the wire to burn up, damage the power supply, or drain the battery. A closely related problem is when we use the incorrect resistor value, which lets too much current flow through another component. It is very important to prevent short circuits by making sure that the positive voltage is never wired directly to ground.</li>
<li>The opposite of a short circuit is an <strong>open circuit.</strong> This is a circuit where the loop isn't fully connected. If your circuit doesn't work, the most likely cause is an open circuit. This is usually due to a broken connection or a loose wire.</li>
</ul>
<p></p>
<h5>Series vs. Parallel: ways to wire components</h5>
<ul>
<li><strong>Series:</strong> components are wired one after another, such that electricity has to pass through one thing, then the next thing, then the next, and so on.</li>
<li><strong>Parallel:</strong> components are wired side by side, such that electricity passes through all of them at the same time, from one common point to another common point.</li>
</ul>
<p></p>
<h5>Basic components</h5>
<ul>
<li><strong>Resistors (R):</strong> they add resistance to the circuit and reduces the flow of electrical current. It is represented in a circuit diagram as a pointy squiggle with a value next to it. The resistance values are measured in ohms. Any resistor of over 1000 ohms is typically shorted using the letter K.</li>
<li><strong>Capacitors (C):</strong> they stores electricity and then discharges it into the circuit when there is a drop in electricity to ensure a steady flow. Capacitors are measured in Farads( pF, nF, uF). These are often used interchangeably and a conversion chart is handy.</li>
<li><strong>Diodes (D):</strong> they only allow electrical current to pass through them in one direction. This is useful in that it can be placed in a circuit to prevent electricity from flowing in the wrong direction. <strong>LED</strong> is a Light-Emitting Diode (LED) that will emit light when electricity flows through it.</li>
<li><strong>Transistors:</strong> tiny switches that turn current on or off when triggered by an electric signal. A transistor takes in a small electrical current at its base pin and amplifies it such that a much larger current can pass between its collector and emitter pins. NPN transistors allow electricity to pass from the collector pin to the emitter pin. PNP transistors allow electricity to pass from the emitter pin to the collector pin.</li>
<li><strong>Integrated circuit (IC):</strong> An integrated circuit is an entire specialized circuit that has been miniaturized and fit onto one small chip with each leg of the chip connecting to a point within the circuit. These miniaturized circuits typically consist of components such as transistors, resistors, and diodes.</li>
</ul>
<p>That's it for this week. In 2 weeks, I will try to learn more about how to design a circuit board.</p>
<p></p>

<h2>Group Assignment</h2>
<p></p>

<h2>Individual Assignment</h2>
<h5>mods vs. Fab Modules</h5>
<p></p>
<h5>Milling the FTDI SERIAL board</h5>
<p></p>
<h5>Milling the UPDI adapter</h5>
<p></p>
<h5>Soldering the components</h5>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>