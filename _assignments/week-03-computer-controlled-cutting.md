---
layout: assignment
title: Computer-Controlled Cutting
thumb: 04.jpg
assignment: characterize a laser-cutter (in-group); to test the vinyl-cutter (individual); to design and to laser-cut a parametric construction kit (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All DXF and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/cut">here</a>.</p>

<h2>Vinyl cutting</h2>
<p>I used the <a href="https://www.rolanddga.com/es/soporte/products/cutting/camm-1-gx-24-24-vinyl-cutter">Roland CAMM-1 Servo GX-24</a> to cut a sticker of the logo which was designed in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html#2d">previous assignment.</a> The detailed specs of the machine:</p>
<ul>
<li>Work area: 584 x 24998mm</li>
<li>Width of loaded material: 50 to 700mm</li>
<li>Cutting speed: up to 500mm/s</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/vinyl-0.jpg" class="img-fluid w-100"/>
<p>Some essential steps to use the vinyl-cutter:</p>
<ul>
<li>Export the <code>.ai</code> file to a <code>.eps</code> template or a <code>.bmp/.jpeg</code> image. I exported my file to <code>.bmp</code>.</li>
<li>Import the <code>.bmp</code> file to <a href="https://www.rolanddgi.com/productos/software/roland-cutstudio-software">CutStudio</a>, choose <strong>Object > Image Outline</strong> to get the trace of the design</li>
<li>Load and fix the position of the vinyl paper, then adjust the blade. We need to make sure the vinyl paper will not be cut through, but the desired parts will be able to be peeled out.</li>
<li>Move the blade and set the origin wherever I want the cut to start, and choose the setting <strong>Roll</strong></li>
<li>Press <kbd>Ctrl</kbd> + <kbd>P</kbd> and start cutting!</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/cutstudio.png" class="img-fluid w-100"/>
<p>After having my logo cut, I used masking tape to get the parts I want out and put it on my laptop.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/vinyl-1.jpg" class="img-fluid w-100"/>
<p>The final result looks super nice though!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/vinyl-3.jpg" class="img-fluid w-100"/>
<p></p>

<h2>Laser cutting</h2>
<h5>Group assignment</h5>
<p>Our class decided to split the group based on who can come to the lab on Friday or Monday. For the Friday group, we tried to cut many pieces of different materials so each of us can go through the process once. I've worked with these classmates during my session: <a href="http://fabacademy.org/2020/labs/barcelona/students/arman-najari">Arman Naraji</a>, <a href="http://fabacademy.org/2020/labs/barcelona/students/david-prieto/">David Prieto</a>, <a href="http://fabacademy.org/2020/labs/barcelona/students/antoine-jaunard">Antoine Jaunard</a>, and <a href="http://fabacademy.org/2020/labs/barcelona/students/benjamin-scott/">Benjamin Scott</a>.</p>
<p></p>
<h6>First test with cardboard 4mm</h6>
<p>We used this <a href="https://www.thingiverse.com/thing:728579">test file</a> provided by the instructors to test the laser cutter <a href="https://www.troteclaser.com/es/maquinas-laser/grabadora-laser-speedy/">Trotec Speedy 100</a> with different materials. The detailed specs of the machine:</p>
<ul>
<li>Work area: 600 x 300mm</li>
<li>Height: 132mm</li>
<li>Laser power: 12-60W</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/laser-1.jpg" class="img-fluid w-100"/>
<p>We chose to proceed with cardboard 4mm and plywood 4mm because we can find nice leftovers of those materials. I've personally learned from Santi that flexible plywood is not a good material for cutting.</p>
<p>For the <strong>Material Settings</strong> in <a href="https://www.troteclaser.com/en/laser-machines/laser-software/jobcontrol/">TROTEC JobControl</a>, we followed the information on the samples at the Fab Lab. The parts to be engraved (rastered) were color-coded with black, and the parts to be cut were color-coded with red.</p> 
<img src="{{site.baseurl}}/assets/img/assignments/week-03/laser-2.jpg" class="img-fluid w-100"/>
<p>The settings we used for cardboard 4mm:</p> 
<ul>
<li>Engrave (Raster): <strong>speed=100, power=60, PPI/Hz=1000</strong></li>
<li>Cut: <strong>speed=1, power=40, PPI/Hz=1000</strong></li>
</ul>
<p>Below is the result of the first test. The power seemed to be over-increased, hence the cardboard was burned while being engraved (rastered):</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/laser-3.jpg" class="img-fluid w-100"/>
<p></p>
<h6>Second test with plywood 4mm</h6>
<p>This time we divided the parts to be engraved (rastered) and the parts to be cut into 2 separate layers, export them to JobControl with different outputs (raster and vector), and cut them in 2 separate cuts. The settings we used for plywood 4mm:</p>
<ul>
<li>Engrave (Raster): <strong>speed=100, power=80, PPI/Hz=1000</strong></li>
<li>Cut: <strong>speed=1, power=75, PPI/Hz=1000</strong></li>
</ul>
<p>The process was totally enjoyable:</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/7-W_DdacGqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<p>However, the plywood was not cut through, and we had to both reduce the speed and increase the power: <strong>speed=0.8, power=80, PPI/Hz=1000</strong>. We executed the job once again, so the cut was a bit messy. The outcome is not perfect, but it's fine.</p>
<p>The result of the second test:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/laser-4.jpg" class="img-fluid w-100"/>
<p></p>
<h6>What I learned</h6>
<ul>
<li>Cutting kerf width is the width of material that is removed by the laser beam during a cutting process. The delicate balance between translational speed and laser power defines the quality of the cut as well as the kerf width. We should not abuse neither power nor speed.</li>
<li>As power increases, the energy in the laser increases, which will result in a deeper cut and a bigger kerf. High power could also make more smoke and charred edges. So, power is a necessity to reach a required cutting or engraving depth, but over-using it is quite destructive to our materials.</li>
<li>As speed increases, the energy is exposed to a point in a shorter time, which will result in a shallower, unstable cut and a thinner kerf. Increasing speed will also quicken the cutting time.</li>
<li>The laser-cutters cannot be left unattended, and the air ventilation should always be switched on.</li>
</ul>
<p></p>

<h5>Press-fit construction kit</h5>
<h6>OpenSCAD</h6>
<p>I find that pre-calculating the possibilities with which the pieces will be assembled will inadvertently limit those possibilities to what I can imagine, thereby reducing both the flexibility of the design and the creativity of ones who will actually use it. Therefore, I switched my approach to simply defining a certain rule for the pieces of the construction kit.</p>
<p>The most important requirement for this week's assignment is that our design must be parametric. Parametric design is basically designing based on defined parameters, and by changing those parameters we can quickly adjust our design. After consulting some images online with the keyword "cardboard parametric design" as well as observing some of the previous year's models available at the Fab Lab, I decided to create a series of isosceles polygons, starting from triangles, squares, pentagons, and ending with hexagons. There would be different sizes for these polygons as well. After cutting and testing, I would add other supporting pieces, if necessary. With this in mind, it was obvious to know that OpenSCAD is the ideal choice to implement the design. Its object-oriented modeling capabilities would greatly reduce my time drawing the pieces.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/openscad.png" class="img-fluid w-100"/>
<p>Here you go the detailed steps:</p>
<ul>
<li>Some "global" parameters of the design: the thickness of the material, the depth of the joints, and the cutting kerf width</li>
<li>Define a base module for a <code>Polygon()</code> with 3 parameters: the number of sides, apothem (inradius), and material thickness</li>
<li>Define an <code>Element()</code> module from a <code>Polygon()</code> and its related set of <code>Joints()</code></li>
<li>Call <code>Element()</code>, duplicate pieces and place them all together</li>
<li>Use <code>projection(cut=true)</code> to flatten the set of pieces</li>
<li>Render and export to <code>.dxf</code></li>
</ul>
<p>In order to test the kerf and joint clearance, I directly used the hexagon pieces in my design and proceeded with these following values of kerf width: 0.05mm, 0.1mm, 0.15mm, 0.2mm.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/openscad-2.png" class="img-fluid w-100"/>
<p></p>
<h6>Kerf test and final cut</h6>
<p>I used the same Trotec Speedy 100 machine used in the group test to cut my pieces. I'm really slow and careless when it comes to machines. I kept forgetting the necessary steps, and I had to ask people "Where did he click to do this?" or "Where should I click to do that?" all the time. Big thanks to everyone!</p>  
<img src="{{site.baseurl}}/assets/img/assignments/week-03/rhino-2.png" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/trotec.jpg" class="img-fluid w-100"/>
<p>Our instructor Josep Marti guided me through some essential steps:</p>
<ul>
<li>Nest the pieces in Rhino in order to optimize the position over the cuttable area. We can use <a href="https://deepnest.io/">DeepNest</a> for this, but I did it manually because I mostly used leftovers from other students.</li>
<li>Color-code the curves with this execution order: black, red, blue, etc. Press <kbd>Ctrl</kbd> + <kbd>P</kbd> to preview the files and send it to JobControl</li>
<li>Manually adjust the focus of the laser beam and use masking tape to fix the position of the cardboard in order to prevent losing focus</li>
<li>Adjust the position of the job in JobControl and set up <strong>speed=1, power=40, PPI/Hz=1000</strong> in <strong>Material Settings</strong></li>
<li>Start cutting!</li>
</ul>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/focus.jpg" class="img-fluid w-100"/>
<p>The cut pieces shown below helped me confirm the kerf width to be used would be <strong>0.15mm</strong>. The pieces just perfectly joined together without being squeezed or loose. Hence, I modified the parameter in OpenSCAD and continued to cut the rest of my design with that final value.</p> 
<img src="{{site.baseurl}}/assets/img/assignments/week-03/test-2.jpg" class="img-fluid w-100"/>
<p>For this final cut, I utilized the leftovers instead of cutting another whole new 600x300mm piece. That's why I had to measure the cuttable area and nested the pieces accordingly.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/rhino-1.png" class="img-fluid w-100"/>
<p>In addition, I noticed that some bigger pieces had not been completely cut through, and I had to use a knife to get them out. The next time cutting big pieces with cardboard, instead of increasing power, I will reduce the speed to <strong>0.8.</strong></p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/IaLSPBNrnwk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<p>Finally, I had the pieces perfectly joined together!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-0.jpg" class="img-fluid w-100"/>
<p></p>
<h6>Final result</h6>
<p>Once I had the laser-cut cardboard pieces in my hands, I tried assembling them randomly. The results were more varied and interesting than I imagined, so I was quite happy with them and I didn't proceed with any further step.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-1.jpg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-2.jpg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-3.jpg" class="img-fluid w-100"/>
<p>I brought the kit to the landlady where I'm staying. She enjoyed playing with it, and here are her impressive results:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-5.jpg" class="img-fluid w-100"/>
<p>Here we have a resting bird, an angry lobster, a 2-headed monster with wings, and a square-headed scorpio!</p>
<p></p>

<!--<h2>Extra: Living hinges</h2>
<p>After the regional review, I realized I didn't go through the kerf test for other materials. I also wanted to test the living hinges for my Final Project after bumping into <a href="https://www.rs-online.com/designspark/laser-cut-living-hinges-for-neater-designs">this article.</a> That's why I proceeded to test different gaps of a straight living hinges and also other types of living hinges. I use <a href="https://obrary.com/products/living-hinge-patterns?variant=798259727">this design</a> online and modified a bit. I will test with plywood and acrylic.</p>
<h6>Conclusion</h6>
<p></p>
<h6>Conclusion</h6>
<p></p>-->

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html">Previous Assignment</a>
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html">Next Assignment</a>
</div>