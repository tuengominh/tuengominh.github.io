---
layout: assignment
title: 3D Printing And Scanning
thumb: 06.jpg
assignment: test the 3D printers (in-group); to design and 3D print an object that could not be made subtractively (individual); to 3D scan an object (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All GCODE, STL, and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/print/">here</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to test the <a href="#group">design rules for the 3D printers</a> available at Fab Lab Barcelona.</p> 
<!--<p>In order to explore the combination of subtractive and additive CAM parts in my Final Project, I also conducted a personal <a href="#tolerance">tolerance test</a>.</p>-->

<p class="font-italic font-weight-bold">* Besides, we were required to individually design and <a href="#filament">print something</a> with a standard FDM printer and <a href="#scan">3D scan an object</a> - in my case, I chose to scan myself.</p>

<!--<p class="font-italic font-weight-bold">* I also attempted to try other 3D printing techniques, which were <a href="#syringe">paste extrusion with the syringe</a> and <a href="#resin">stereolithography with an SLA printer.</a></p>-->

<h2 id="scan">3D scanning</h2>
<h5>Individual assignment - 3D scan myself</h5>
<!--<p>I used <a href="https://ca.wikipedia.org/wiki/Kinect">Kinect Xbox 360</a> to scan myself with the support from Santi and 2 classmates: Zoi and Hala. The detailed specs of the machine:</p>
<ul>
<li></li>
</ul>
<p>The software we used to process the scan was <a href="https://skanect.occipital.com/">Skanect.</a></p>
<p>This is called "pay back to the community":</p>-->
<p></p>

<h2>3D printing</h2>
<h5 id="group">Group assignment - Characterize the 3D printers</h5>
<h6>First test</h6>
<p>We used an <a href="#">Creality CR-10</a> printer to print the first test. The detailed specs of the machine:</p>
<ul>
<li></li>
</ul>
<p>We used <a href="https://ultimaker.com/software/ultimaker-cura">Cura</a> in order to modify some important settings for the 3D printing process and to generate a <code>.gcode</code> file. <a href="https://es.wikipedia.org/wiki/G-code">G-code</a> is the language through which we can communicate with computer-controlled machine tools (in this case, the 3D printers) and give them the instructions of what to do. By selecting the printer in Cura, we will have a profile with proper settings. However, we had to modified some settings to manipulate the printing time:</p>
<ul>
<li>Layer height: the thinner the layer, the more detailed the result, and the longer the total printing time.</li>
</ul>
<p></p>
<h6>Second test</h6>
<p>For the second test, we used an <a href="https://www.anycubic.com/products/anycubic-kossel-3d-printer">Anycubic Kossel Delta</a> printer. The detailed specs of the machine:</p>
<ul>
<li></li>
</ul>
<p></p>
<h6>What I personally learned</h6>
<p></p>

<h5 id="filament">Individual assignment - Design and print using FDM printer and PLA filament</h5>
<h6>OpenSCAD</h6>
<p>I utilized a flower-shaped vase I designed in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html#vase">2nd week</a> since it demonstrates perfectly an object that cannot be made subtractively (having overhangs and undercuts). My vase was designed in OpenSCAD, and I basically modeled a thin cube, then continuously cloned, rotated, enlarged and moved it up x 180 times to generate the base module <code>shape()</code>. 3 <code>shape()</code> modules were combined and subtracted to form the final model. In order to make sure of the ability to stand still of the vase as well as reducing the total size, I modified it a bit by lessening the additional size of the cloned cubes.</p>
<p></p>
<h6>Slicing with Cura</h6>
<p>After exporting the <code>.scad</code> file to <code>.stl</code>, I started slicing the object in Cura. The settings used:</p>
<p>Since the estimated printing time was more than 3 hours, I had to reduce the size of the model by 50% directly in Cura, using the <strong>Snap</strong> tool.</p>
<p>Ready to print!</p>
<p></p>
<h6>Printing with PLA filament</h6>
<p>I used the same Anycubic Kossel Delta printer to print my vase. Once again, Josep guided me through some essential steps:</p>
<p>I then had some problems with the printing process. Although I reduce the overhang angle from the bottom of the vase to its top, the overhang angle between the twist parts was still too big and the printer started to print in the air. In order to both reduce the size and maintain a nice shape, I modified the cube in my design to a hexagon cylinder by utilizing the module used in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html#construction-kit">3rd week</a>.</p>
<p>There you go the 2nd and 3rd failures. For the first print, I only selected the <strong>Skirt</strong> option in <strong>Plate Adhesion</strong> and the adhesion was fine. However, for the next print, the model started moving while being printed. I tried the second time by selecting the <strong>Brim</strong> option, but things didn't go well either. In the end, I had to print the 4th time with the option <strong>Raft</strong> selected.</p>
<p>Finally, I had the vase perfectly printed!</p>
<p></p>
<h6>Final result</h6>
<p>I brought the vase to the landlady where I'm staying, and here you go the hero shots of the final result:</p>

<!--<h5 id="syringe">Additional delivery - Thick paste extrusion using syringe</h5>
<p></p>

<h5 id="resin">Additional delivery - Stereolithography using SLA printer and UV resin</h5>
<p></p>-->

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>