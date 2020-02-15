---
layout: assignment
title: Computer-Controlled Cutting
thumb: 04.jpg
assignment: characterize a laser-cutter (in-group); to test the vinyl-cutter (individual); to design and to laser-cut a parametric construction kit (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All .dxf and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/cut">here</a>.</p>

<h2>Group Assignment</h2>
<h5>The Friday Group</h5>
<p>Our class decided to split the group based on who can come to the lab on Friday or Monday. For the Friday group, we tried to cut many pieces of different materials so each of us can go through the process once. I've worked with these below classmates during my multiple turns:</p>
<!--<ul>
<li><a href="http://fabacademy.org/2020/labs/barcelona/students/arman-najari">Arman Naraji</a></li>
<li><a href="http://fabacademy.org/2020/labs/barcelona/students/david-prieto/">David Prieto Gonzalez</a></li>
<li><a href="http://fabacademy.org/2020/labs/barcelona/students/antoine-jaunard">Antoine Jaunard</a></li>
<li><a href="http://fabacademy.org/2020/labs/barcelona/students/benjamin-scott/">Benjamin Scott</a></li>
<li><a href="http://fabacademy.org/2020/labs/barcelona/students/tue-ngo/">Minh Tue Ngo</a> - yeah, it's me.</li>
</ul>-->
<p></p>
<h5>First test with Cardboard 4mm</h5>
<p>We used this same <a href="https://www.thingiverse.com/thing:728579">test file</a> provided by the instructors to test the laser cutter <a href="https://www.troteclaser.com/es/maquinas-laser/grabadora-laser-speedy/">Trotec Speedy 100</a> with different materials. The detailed specs of the machine:</p>
<ul>
<li>Work area: 600 x 300mm</li>
<li>Height: 132mm</li>
<li>Laser power: 12-60W</li>
</ul>
<p>We chose to proceed with Cardboard 4mm and Plywood 4mm because we can find nice leftovers here. I've personally learned from Santi that flexible plywood is not a good material for cutting.</p>
<p>For the <strong>Material Settings</strong>, we followed the information on the Laser Cut Sample at the Fab Lab:</p>
<p>The settings we used for Cardboard 4mm:</p>
<p>Result of the first test:</p>
<p></p>
<h5>Second test with Plywood 4mm</h5>
<p>The settings we used for Plywood 4mm:</p>
<p>An enjoyable rastering and cutting process:</p>
<p>Result of the second test:</p>
<p></p>

<h2>Individual Assignment</h2>
<h5>Vinyl Cutting</h5>
<p>I used the <a href="https://www.rolanddga.com/es/soporte/products/cutting/camm-1-gx-24-24-vinyl-cutter">Roland CAMM-1 Servo GX-24</a> to cut a sticker of the logo which was designed in the <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/cad/2D">previous assignment.</a> The detailed specs of the machine:</p>
<ul>
<li>Work area: 584 x 24998mm</li>
<li>Width of loaded material: 50 to 700mm</li>
<li>Cutting speed: up to 500mm/s</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/vinyl-0.jpg" class="img-fluid w-100"/>
<p>Some essential steps to use the vinyl-cutter:</p>
<ul>
<li>Export the .ai file to a .eps template or a .bmp/.jpeg image. I exported my file to .bmp.</li>
<li>Import the .bmp file to CutStudio, choose <strong>Object > Image Outline</strong> to get the trace of the design</li>
<li>Load and fix the position of the vinyl paper, then adjust the blade</li>
<li>Set the origin whenever I want the cut to start, and choose the setting <strong>Roll</strong></li>
<li>Press <kbd>Ctrl</kbd> + <kbd>P</kbd> and start cutting!</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/cutstudio.png" class="img-fluid w-100"/>
<p>After having my logo cut, I used masking tape to get the parts I want out and put it on my laptop.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/vinyl-1.jpg" class="img-fluid w-100"/>
<p>The final result looks super nice though!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/vinyl-3.jpg" class="img-fluid w-100"/>
<p></p>
<h5>Laser Cutting - Press-fit Construction Kit</h5>
<h6>OpenSCAD</h6>
<p>In the beginning, I planned to design in advance the possibilities of assembling my construction kit because pre-defining the outcome is a common flow of thought. However, I find that pre-imagining the possibilities with which the pieces will be assembled will inadvertently limit those possibilities to what I can imagine, thereby reducing the flexibility and the originality of the design as well as the joy and the creativity of ones who will actually use it - which is, in my opinion, the purpose and the meaning of a construction kit. Therefore, I switched my approach to simply defining a certain rule for the pieces of the construction kit.</p>
<p>The most important requirement for this week's assignment is that our design must be parametric. Parametric design is basically designing based on defined parameters, and by changing those parameters we can quickly adjust our design. After consulting some images online with the keyword "cardboard parametric design" as well as observing some of the previous year's models available at the Fab Lab, I decided to create a series of isosceles polygons, starting from triangles, squares, pentagons, and ending with hexagons. There will be different sizes for these polygons as well. After cutting and testing, I will add other supporting pieces, if necessary. With this in mind, it is obvious to know that OpenSCAD is the ideal choice to implement the design. Its object-oriented modeling capabilities will greatly reduce my time drawing the pieces. Here are the steps:</p>
<ul>
<li>Define a base module for a <code>Polygon()</code> with 3 parameters of number of sides, apothem (inradius), and material thickness</li>
<li>Define an <code>Element()</code> module from a <code>Polygon()</code> and its related set of <code>Joints()</code></li>
<li>Call <code>Element()</code>, duplicate pieces and place them all together</li>
<li>Use <code>projection(cut=true)</code> to flatten the set of pieces</li>
<li>Render and export to .dxf</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/openscad.png" class="img-fluid w-100"/>
<p></p>
<h6>Test and Final Cut</h6>
<p>I used the same Trotec Speedy 100 machine used in the group test to cut my pieces. I'm really slow and careless when it comes to machines. I kept forgetting the necessary steps, and I had to ask people "Where did he click to do this?" or "Where should I click to do that?" all the time. Big thanks to everyone!</p> 
<p>In order to test the kerf and joint clearance, I directly used some of my pieces. Some essential steps to remember:</p>
<ul>
<li>Nest the pieces in Rhino in order to optimize the position over the cuttable area</li>
<li>Color-code the curves with red. Press <kbd>Ctrl</kbd> + <kbd>P</kbd> to preview the files and send it to TROTEC ControlBox</li>
<li>Manually adjust the focus of the laser beam and use masking tape to fix the position of the cardboard in order to prevent losing focus</li>
<li>Adjust the position of the job in TROTEC ControlBox and set up <strong>speed=1, power=40, PPI/Hz=1000</strong> in <strong>Material Settings</strong></li>
<li>Start cutting!</li>
</ul>
<p>I need to shout out loud: <strong>Be careful with OpenSCAD!</strong> The easier it is for us to write, the easier it is for shits to happen. I mistyped something before exporting my design to DXF, and look how ridiculous things became:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/test-2.jpg" class="img-fluid w-100"/>
<p>However, I quickly realized from this failed test that the cardboard had not been completely cut through, and I had to use a knife to get the pieces out. However, the last time we set the power to 45 in the group test, the cardboard was burned. I also didn't want the kerf to get bigger, so instead of increasing power, I reduced the speed to <strong>0.8.</strong></p> 
<p>For this second cut, I utilized the leftovers at the lab instead of cutting another whole new 600x300mm piece. That's why I had to measure the cuttable area and nested the pieces accordingly. Finally, I had 2 pieces perfectly joined together!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-0.jpg" class="img-fluid w-100"/>
<p></p>
<h6>Final Result</h6>
<p>Once I had the laser-cut cardboard pieces in my hands, I tried assembling them randomly. The results were more varied and interesting than I imagined, so I was quite happy with them and I didn't proceed with any further step.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-1.jpg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-2.jpg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-3.jpg" class="img-fluid w-100"/>
<p>I brought the kit to the landlady where I'm staying. She enjoyed it, and here are her assembling results which are even more impressive:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-5.jpg" class="img-fluid w-100"/>
<p>We have an angry lobster and a 2-head monster with wings!</p>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>