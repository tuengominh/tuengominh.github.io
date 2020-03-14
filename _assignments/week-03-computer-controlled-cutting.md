---
layout: assignment
title: Computer-Controlled Cutting
thumb: 04.jpg
assignment: characterize a laser-cutter (in-group); to cut something with the vinyl-cutter (individual); to design and to laser-cut a parametric construction kit (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All DXF and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/cut">here</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to test the proper <a href="#group">power, speed, frequency and kerf</a> values of different materials using a laser-cutter. In order to explore possible materials for my Final Project, I also conducted a personal joint clearance and kerf bending test with <a href="#living-hinge">living hinges</a>.</p>

<p class="font-italic font-weight-bold">* Besides, we were required to individually design and cut <a href="#vinylcutter">something</a> with the vinyl-cutter and to laser-cut a <a href="#construction-kit">parametric construction kit</a> that can be assembled in multiple ways.</p>

<p>The very first thing I learned this week is time management. Staying in the queue for using the machines can be a disappointing waste of time if we don't know what to prepare and how to organize what to do. At the end of the week, I could only meet the minimum requirements of the assignment, and I was still left with the desire to try out more design techniques (waffle, stacking or bending).</p>

<h2 id="vinylcutter">Vinyl cutting</h2>
<h5>Individual assignment - Cut a vinyl sticker</h5>
<p>I used the <a href="https://www.rolanddga.com/es/soporte/products/cutting/camm-1-gx-24-24-vinyl-cutter">Roland CAMM-1 Servo GX-24</a> to cut a sticker of the logo which was designed in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html#2d">previous assignment.</a> The detailed specs of the machine:</p>
<ul>
<li>Work area: 584 x 24998mm</li>
<li>Cutting speed: up to 500mm/s</li>
<li>Cutting length: maximum 25m</li>
<li>Cutting width: 50-700 mm</li>
<li>Cutting force: 30 to 250gf</li>
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
<h5 id="group">Group assignment - Characterize the laser-cutting process</h5>
<p>Our class decided to split the group based on who can come to the lab on Friday or Monday. For the Friday group, we tried to cut many pieces of different materials so each of us can go through the process once. I've worked with these classmates during my session: <a href="http://fabacademy.org/2020/labs/barcelona/students/arman-najari">Arman Naraji</a>, <a href="http://fabacademy.org/2020/labs/barcelona/students/david-prieto/">David Prieto</a>, <a href="http://fabacademy.org/2020/labs/barcelona/students/antoine-jaunard">Antoine Jaunard</a>, and <a href="http://fabacademy.org/2020/labs/barcelona/students/benjamin-scott/">Benjamin Scott</a>.</p>
<p></p>
<h6>First test - Cardboard 4mm</h6>
<p>We used this <a href="https://www.thingiverse.com/thing:728579">test file</a> provided by the instructors to test the laser cutter <a href="https://www.troteclaser.com/es/maquinas-laser/grabadora-laser-speedy/">Trotec Speedy 100</a> with different materials. The detailed specs of the machine:</p>
<ul>
<li>Work area: 610 x 305mm</li>
<li>Height: 132mm</li>
<li>Laser power: 12-60W</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/laser-1.jpg" class="img-fluid w-100"/>
<p>We chose to proceed with cardboard 4mm and plywood 4mm because we can find nice leftovers of those materials. I've personally learned from Santi that flexible plywood is not a good material for cutting.</p>
<p>The controller of TROTEC laser-cutters, <a href="https://www.troteclaser.com/en/laser-machines/laser-software/jobcontrol/">TROTEC JobControl</a>, calls the processes slightly different from us: the raster engraving process is called <strong>Engrave</strong>, the vector engraving process is the <strong>Cut</strong> one with way faster speed, and the vector cutting process is still called <strong>Cut</strong>.</p> 
<p>For the <strong>Material Settings</strong> in JobControl, we followed the information on the samples at the Fab Lab. The parts to be raster-engraved were color-coded with black, and the parts to be vector-cut were color-coded with red.</p> 
<img src="{{site.baseurl}}/assets/img/assignments/week-03/laser-2.jpg" class="img-fluid w-100"/>
<p>The settings we used for cardboard 4mm:</p> 
<ul>
<li>Engrave (Raster): <strong>speed=100, power=60, PPI/Hz=1000</strong></li>
<li>Cut: <strong>speed=1, power=40, PPI/Hz=1000</strong></li>
</ul>
<p>Below is the result of the first test. The power seemed to be over-increased, hence the cardboard was burned while being raster-engraved:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/laser-3.jpg" class="img-fluid w-100"/>
<p></p>
<h6>Second test - Plywood 4mm</h6>
<p>This time we divided the parts to be raster-engraved and the parts to be vector-cut into 2 separate layers, export them to JobControl with different outputs (raster and vector) and cut them in 2 separate cuts. The settings we used for plywood 4mm:</p>
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
<h6>What I personally learned</h6>
<p>Translational speed, laser power, and cutting kerf:</p>
<ul>
<li>Cutting kerf width is the width of material that is removed by the laser beam during a cutting process. Kerf width depends on many parameters, such as the thickness of the material (the thicker the material, the thinner the kerf), type of material (for example, I assumed that acrylic and other materials with low melting point will tend to create bigger kerf), the machine itself, the focus of the beam, and the settings of power, speed, and frequency.</li>
<li>The delicate balance between translational speed and laser power defines the quality of the cut as well as the kerf width. We should abuse neither power nor speed.</li>
<li>As power increases, the energy in the laser increases, which will result in a deeper cut and a bigger kerf. High power could also make more smoke and charred edges. So, power is a necessity to reach a required cutting or engraving depth, but over-using it is quite destructive to our materials.</li>
<li>As speed increases, the energy is exposed to a point in a shorter time, which will result in a shallower, unstable cut and a thinner kerf. Increasing speed will also quicken the cutting time.</li>
</ul>
<p>Tips to laser-cut like a boss:</p>
<ul>
<li>Safety first: the laser-cutters cannot be left unattended, and the air ventilation should always be switched on.</li>
<li>We need to test the proper settings for the chosen material and machine: power, speed, resolution (for raster engraving) and frequency (for vector cutting)</li>
<li>We need to measure the kerf width and modify your design accordingly (measuring with the caliper is quite handy)</li>
<li>We need to nest the design within the cutting area, remove hidden lines completely, ensure 1:1 scale, and color-code them respectively to the execution order: <i>raster (engrave) > engrave (vector cut with faster speed)> inside cut (details) > outside cut (borders)</i></li>
</ul>
<p></p>

<h5 id="construction-kit">Individual assignment - Parametric construction kit</h5>
<h6>OpenSCAD</h6>
<p>I find that pre-calculating the possibilities with which the pieces will be assembled will inadvertently limit those possibilities to what I can imagine, thereby reducing both the flexibility of the design and the creativity of ones who will actually use it. Therefore, instead of following the usual "unfolding" process, I switched my approach to simply defining a certain rule for the pieces of the construction kit.</p>
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
<p>In order to test the kerf width and joint clearance, I directly used the hexagon pieces in my design and proceeded with these following values of kerf width: 0.05mm, 0.1mm, 0.15mm, 0.2mm.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/openscad-2.png" class="img-fluid w-100"/>
<p></p>
<h6>Joint clearance test and final cut</h6>
<p>I used the same Trotec Speedy 100 machine used in the group test to cut my pieces. I'm really slow and careless when it comes to machines. I kept forgetting the necessary steps, and I had to ask people "Where did he click to do this?" or "Where should I click to do that?" all the time. Big thanks to everyone!</p>  
<img src="{{site.baseurl}}/assets/img/assignments/week-03/rhino-2.png" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/focus.jpg" class="img-fluid w-100"/>
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
<p>The cut pieces shown below helped me confirm the kerf width to be used would be <strong>0.15mm</strong> in order to assemble 2 pieces securely. The pieces just perfectly joined together without being squeezed or loose. Hence, I modified the parameter in OpenSCAD and continued to cut the rest of my design with that final value.</p> 
<img src="{{site.baseurl}}/assets/img/assignments/week-03/test-2.jpg" class="img-fluid w-100"/>
<p>For this final cut of my construction kit, I utilized the leftovers instead of cutting another whole new 600x300mm piece. That's why I had to measure the cuttable area and nested the pieces accordingly.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/rhino-1.png" class="img-fluid w-100"/>
<p>In addition, I noticed that some bigger pieces had not been completely cut through, and I had to use a knife to get them out. I re-cut some big pieces with cardboard, and instead of increasing power, I reduced the speed to <strong>0.8.</strong></p>
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
<p>I brought the kit to the landlady where I'm staying. She enjoyed playing with it, and her results were much more impressive. Here we have a resting bird, an angry lobster, a 2-headed monster with wings, and a square-headed scorpio!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kit-5.jpg" class="img-fluid w-100"/>
<p></p>

<h5 id="living-hinge">Additional test - Joint clearance and living hinges</h5>
<p>After the regional review, I realized that I didn't proceed with any joint clearance and kerf bending test with other materials rather than cardboard 4mm (which I'm pretty sure I won't use for my Final Project). I also bumped into <a href="https://www.rs-online.com/designspark/laser-cut-living-hinges-for-neater-designs">this article about neater design with living hinges</a>, which is also super tempting. Therefore, I'd like to go a further step by testing the cutting kerf width and the kerf bending capabilities of 2 potential materials for my Final Project: plywood 4mm and acrylic 3mm. I used the same above hexagons to test the kerf width and joint clearance (for acrylic 3mm, I prepared additional hexagons with bigger kerf values: 0.25mm, 0.30mm, 0.35mm and 0.4mm). For testing the kerf bending, I intended to use different living hinge templates which I downloaded from <a href="https://obrary.com/products/living-hinge-patterns?variant=798259727">this guy</a> (of course, I modified them a bit).</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/rhino-3.png" class="img-fluid w-100"/>
<p>I used the same TROTEC Speedy 100 machine to cut my test with plywood 4mm. For acrylic 3mm, I used the bigger TROTEC Speedy 400 with these detailed specs:</p>
<ul>
<li>Work area: 1,000 x 610mm</li>
<li>Height: 305mm</li>
<li>Laser power: 40-120W</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/trotec-1.png" class="img-fluid w-100"/>
<p>The settings I used for plywood 4mm:</p>
<ul>
<li>Engrave (Raster): <strong>speed=100, power=60, PPI/Hz=1000</strong></li>
<li>Engrave (Vector): <strong>speed=100, power=80, PPI/Hz=1000</strong></li>
<li>Cut: <strong>speed=0.5, power=75, PPI/Hz=1000</strong> (slower speed and lower power than the settings of the group test)</li>
</ul>
<p>The settings I used for acrylic 3mm:</p>
<ul>
<li>Engrave (Raster): <strong>speed=100, power=60, PPI/Hz=1000</strong></li>
<li>Engrave (Vector): <strong>speed=100, power=70, PPI/Hz=20000</strong></li>
<li>Cut: <strong>speed=0.5, power=60, PPI/Hz=20000</strong></li>
</ul>
<p>Final cut pieces came out neat for both machines:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/hinge-1.jpg" class="img-fluid w-100"/>
<p>Bonus: a video recording the super nice process of laser-cutting cast acrylic:</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/L6fRo7ujGLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<h6>Result of joint clearance test</h6>
<p>The cut pieces shown below helped me confirm the kerf width of plywood 4mm would be <strong>0.15mm</strong> in order to assemble 2 pieces securely.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kerf-1.jpg" class="img-fluid w-100"/>
<p>For acrylic 3mm, the joint of the hexagons with <strong>0.40mm</strong> kerf width was still barely loose (which surprised me a lot since I didn't expect such a big kerf). Also, the kerf width of each joint seemed to be inconsistent (I assumed that the laser cutter has different performances at different axes). That was why I used a caliper to measure carefully some dimensions, and after doing some annoying maths, the kerf for acrylic 3mm should be somewhere in between of <strong>0.45mm</strong> and <strong>0.5mm.</strong> However, in case I will go ahead with acrylic for my Final Project, I might need to test it properly again.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/kerf-2.jpg" class="img-fluid w-100"/>
<p>Another thing I noticed after the test was that the surface of the material is also an important factor in making the joint stronger. Cardboard is a soft and flexible material, therefore we can squeeze the parts a bit and they can fit together, and so a slightly tight joint doesn't matter. Plywood is a rigid material, so we need to be a bit more precise. However, the rough surface of plywood can help increase adhesion, which is very helpful in the case of loose joints. For acrylic with a smooth surface, the accuracy of kerf width needs to be increased, since the 2 pieces will slide out very easily if the actual kerf is just slightly bigger than the estimated one.</p>
<p></p>
<h6>Result of living hinge test</h6>
<p>The templates I used for the living hinge test were: straight intersecting lines with different interline gap values of 3mm, 6mm, and 12mm (yeah I know it was stupid to go with 12mm, but it was for the sake of learning); wavy cut lines with 6mm interline; cross/honeycomb cut lines with 6mm interline; and large hexagons/honeycombs with 6mm interline.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/hinge-2.jpg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/hinge-3.jpg" class="img-fluid w-100"/>
<p>Some observations for plywood 4mm:</p>
<ul>
<li>Straight intersecting lines: the further apart the single intersecting lines are, the bigger the bend radius will be. It was obvious that the one with 12mm interline cannot be bent at all, and the one with 6mm interline can only be bent insignificantly (less than 45°). The one with 3mm interline seemed to be the best option since the bend radius was really stable and I can bend it up to 165° - almost foldable.</li>
<li>Wavy cut lines: the interline gap was a bit too big, therefore it can be bent insignificantly. However, it showed quite fair bending capabilities compared to the straight one with similar interline gap.</li>
<li>Cross/honeycomb cut lines: it offered significant flexibility in other directions, even with a big 6mm interline.</li>
<li>Large hexagons/honeycombs: the thin interline made the piece broke immediately when being bent. I also think one of the reason was that the pieces were bent in the same direction of the wood fiber.</li>
</ul>
<p>After getting the result of plywood, I modified the design a bit before testing with acrylic: straight intersecting lines with 3mm interline; wavy cut lines with 3mm interline; and large hexagons with 6mm interline. The results looked better, however, the one with straight intersecting lines was still the most flexible one.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-03/hinge-4.jpg" class="img-fluid w-100"/>
<p></p>

<h5>Conclusion</h5>
<h6>Settings for different materials and processes</h6>
<p></p>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Material</th>
      <th scope="col">Process</th>
      <th scope="col">Power</th>
      <th scope="col">Speed</th>
      <th scope="col">PPI/Hz</th>
      <th scope="col">Kerf</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Cardboard 4mm</th>
      <td>Raster engrave</td>
      <td>60</td>
      <td>100</td>
      <td>1000</td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">Cardboard 4mm</th>
      <td>Vector engrave</td>
      <td>60</td>
      <td>100</td>
      <td>1000</td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">Cardboard 4mm</th>
      <td>Vector cut</td>
      <td>40</td>
      <td>0.8</td>
      <td>1000</td>
      <td>0.15mm</td>
    </tr>
    <tr>
      <th scope="row">Plywood 4mm</th>
      <td>Raster engrave</td>
      <td>60</td>
      <td>100</td>
      <td>1000</td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">Plywood 4mm</th>
      <td>Vector engrave</td>
      <td>80</td>
      <td>100</td>
      <td>1000</td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">Plywood 4mm</th>
      <td>Vector cut</td>
      <td>75</td>
      <td>0.5</td>
      <td>1000</td>
      <td>0.15mm</td>
    </tr>
    <tr>
      <th scope="row">Acrylic 3mm</th>
      <td>Raster engrave</td>
      <td>60</td>
      <td>100</td>
      <td>1000</td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">Acrylic 3mm</th>
      <td>Vector engrave</td>
      <td>70</td>
      <td>100</td>
      <td>20000</td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">Acrylic 3mm</th>
      <td>Vector cut</td>
      <td>60</td>
      <td>0.5</td>
      <td>20000</td>
      <td>0.45 - 0.5mm</td>
    </tr>
  </tbody>
</table>
<p></p>
<h6>Living hinges assessment</h6>
<p></p>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Cutting technique</th>
      <th scope="col">Pliability</th>
      <th scope="col">Tensile strength</th>
      <th scope="col">Torsional strength</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Straight intersecting lines</th>
      <td>Super good</td>
      <td>Super good</td>
      <td>Good</td>
    </tr>
    <tr>
      <th scope="row">Wavy cut lines</th>
      <td>Good</td>
      <td>Fair</td>
      <td>Fair</td>
    </tr>
    <tr>
      <th scope="row">Cross/honeycomb cut lines</th>
      <td>Poor</td>
      <td>Fair</td>
      <td>Good</td>
    </tr>
    <tr>
      <th scope="row">Large hexagons/honeycombs</th>
      <td>Poor</td>
      <td>Fair</td>
      <td>Poor</td>
    </tr>
  </tbody>
</table>
<p></p>
<p>That's it, enough testing with laser-cutting. I'm looking forward to other subtractive CAM techniques that will be introduced in the upcoming weeks. In case I will laser-cut some parts of my Final Project, I will try to test whether I can assemble those parts with 3D-printed parts after doing the tolerance test in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-05-3d-printing-and-scanning.html">5th week</a>.</p>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html">Previous Assignment</a>
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html">Next Assignment</a>
</div>