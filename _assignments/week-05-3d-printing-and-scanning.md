---
layout: assignment
title: 3D Printing And Scanning
thumb: 06.jpg
assignment: test the 3D printers (in-group); to design and 3D print an object that could not be made subtractively (individual); to 3D scan an object (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All GCODE, STL, and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/print/">here</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to test the <a href="#group">design rules for the 3D printers</a> available at Fab Lab Barcelona.</p>

<!--<p>In order to explore the combination of subtractive and additive CAM parts in my Final Project, I also conducted a personal <a href="#tolerance">joint clearance test</a>.</p>-->

<p class="font-italic font-weight-bold">* Besides, we were required to individually design and <a href="#filament">print something</a> with a standard FDM printer and <a href="#scan">3D scan an object</a> - in my case, I chose to scan myself.</p>

<!--<p class="font-italic font-weight-bold">* I also attempted to try other 3D printing techniques, which were <a href="#syringe">paste extrusion with the syringe</a> and <a href="#resin">stereolithography with an SLA printer.</a></p>-->

<h2 id="scan">3D scanning</h2>
<h5>Individual assignment - 3D scan myself</h5>
<h6>Scanning with Kinect and Skanect</h6>
<p>I used a <a href="https://ca.wikipedia.org/wiki/Kinect">Kinect Xbox 360 V1</a> to scan myself since I knew it's a common practice by looking at previous alumni's websites. Below are the detailed specs of the device:</p>
<ul>
<li>Sensors: color sensor (RGB camera), depth-sensing lenses (IR emitter + IR camera), voice microphone array, tilt motor for sensor adjustment (by detecting floor and players in the playspace)</li>
<li>Field of view (FoV): 43° vertical x 57° horizontal</li>
<li>Physical tilt range (vertical): ± 27°</li>
<li>Depth sensor range: 1.2 - 3.5m</li>
<li>Frame rate (depth and color stream): 30FPS</li>
</ul>
<p>The software paired with Kinect that we used to process the scan was <a href="https://skanect.occipital.com/">Skanect.</a> <a href="https://www.instructables.com/id/How-to-3D-scan-with-Skanect/">Here</a> we can find a step by step instruction on using Skanect. Choosing myself as the scanned object means I required further supports from others: someone held and tilted the Kinect vertically (Santi - our instructor), someone rotated me while I'm kneeling on the chair (my classmate Hala), and someone documented the process (Zoi - an MDEF student). The reason why I'm not sitting on the chair was to avoid having to process the chair from the exported mesh later.</p>
<p>Steps to scan:</p>
<ul>
<li>Check the connection between Skanect and Kinect</li>
<li>Select the <strong>Body</strong> scene with <i>1 x 1 x 1m</i> bounding box and start scanning</li>
<li>Click the record button, rotate and maintain the object to make sure it could be scanned properly. Click the button again when finishing.</li>
<li>Crop the lanky bottom of the mesh and ensure a flat base for the model by selecting the <strong>Move & Crop</strong> feature</li>
<li>Making the mesh watertight and fill holes by selecting the <strong>Fill Holes</strong> feature and choose the <i>Medium</i> option</li>
<li>Export to <code>.obj</code> or <code>.stl</code></li>
</ul>
<p>And here is the outcome imported to Blender (the size of the file was too big, that's why I just posted a screenshot here):</p>
<p></p>
<h6>Processing the mesh with Blender</h6>
<p>Now let's make myself a bit prettier by 3D retouching the outcome! We had a class by Victor Barberan regarding fixing the mesh with Blender. I simply followed his instructions to work on my mess, oh I meant, mesh. Some steps followed (<strong>IMPORTANT: </strong> following the order can be life-saving. I started sculpting <strong>BEFORE</strong> switching to <strong>Edit Mode</strong> and immediately hit my head to the keyboard):</p>
<ul>
<li>In <strong>Object Mode</strong>: rotate, scale and <i>Set Geometry to Origin</i></li>
<li>In <strong>Edit Mode</strong>: use <i>Select Circle</i> tool to select the outside faces of my model, hide them, and delete the horrible mess inside. Also, hit space and remove duplicated vertices.</li>
<li>In <strong>Edit Mode</strong>: select the whole model and go to <strong>Mesh > Clean Up</strong>. Use <i>Delete Loose</i> to get rid of loose vertices and edges. Select <i>Decimate Geometry</i> and reduced the ratio to collapse edges and get a less complicated model.</li> 
<li>Activate and install <i>Mesh: 3D Print Toolbox</i> module in <strong>User Preferences > Add-ons</strong>. Now we can clean up problems with our model and make it printable by selecting <i>Make Manifold</i> to get rid of distorted edges.</li>
<li>Go back to <strong>Object Mode</strong>: solidify the object, to make sure there are no weird interior layers</li>
<li>Go back to <strong>Edit Mode</strong>: spot holes in the model, select their borders and press <kbd>Option</kbd> + <kbd>F</kbd> to fill the holes</li>
<li>Now we can go to <strong>Object Mode</strong>: fine-tuning the model with sculpting tools such as <strong>Smooth, Flatten</strong> and <strong>Grab</strong></li>
</ul>
<p>And let me introduced you to the 3D Tue (not in a perfect state)!</p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/0499030f69ce4d40b5ee5542f9d78dcb/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/3d-tue-0499030f69ce4d40b5ee5542f9d78dcb?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Tue</a>
    by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div>
<p></p>
<p>I studied sculpture in college before, so the <strong>Sculpt Mode</strong> indeed was really tempting to try. I indeed played around a bit by keeping the same amount of triangle faces from the scanning outcome, and fine-tuning it with other tools, such as <strong>Draw, Blob, Crease, Grab,</strong> and <strong>Pinch</strong>. Of course, the model looks way prettier and detailed. However, the size of the file would be unnecessarily large, and I cannot 3D-print it properly since there were so many non-manifold faces and messy layers. Cleaning them up could be a real pain. Hence, I decided not to continue with it.</p>
<p>I also didn't proceed to print myself, because I wanted to allocate more time trying other 3D printing techniques. In the end, I couldn't make it on time for those additional explorations, but everything is in process ;)</p>
<p></p>

<h2>3D printing</h2>
<h5 id="group">Group assignment - Characterize the 3D printers</h5>
<p>First of all, what is 3D printing, or should I say, additive CAM? 3D printing is a technique of adding successive layers of material until an object is created. 3D printing has significant advantages: avoiding the waste of materials and allowing us to create models that would be impossible with other subtractive techniques. Before participating in the group test, I took a look at this useful <a href="https://www.matterhackers.com/articles/a-guide-to-understanding-the-tolerances-of-your-3d-printer">article</a> in order to understand what we were going to test. This week I participated in 2 groups to test 2 files provided by the instructors.</p>
<h6>First test</h6>
<p>I teamed up with <a href="https://fabacademy.org/2020/labs/barcelona/students/david-prieto/">David Prieto</a> and <a href="http://fabacademy.org/2020/labs/barcelona/students/antoine-jaunard/">Antoine Jaunard</a> for the first test. We used the <a href="https://www.creality3d.shop/products/creality-cr-10s-s5-3d-printer-diy-kit-large-printing-size-500x500x500mm">Creality CR-10 S5 3D</a> printer to print the <a href="https://www.thingiverse.com/thing:1363023">first test</a> using 1.75mm PLA. The detailed specs of the machine:</p>
<ul>
<li>Printing technology: FDM</li>
<li>Printing size: 500 x 500 x 500mm</li>
<li>Printing accuracy：± 0.1mm</li>
<li>Nozzle diameter：standard 0.4mm (can be changed to 0.3 or 0.2mm)</li>
<li>Printing speed：normal 80mm/s, max 200mm/s</li>
<li>Materials：PLA, Copper, Wood, Carbon Fiber, etc.</li>
<li>Printing method: SD card, USB</li>
</ul>
<p>We used <a href="https://ultimaker.com/software/ultimaker-cura">Ultimaker Cura</a> in order to modify some important settings for the 3D printing process and to generate a <code>.gcode</code> file. <a href="https://es.wikipedia.org/wiki/G-code">G-code</a> is the language through which we can communicate with computer-controlled machine tools (in this case, the 3D printers) and give them instructions on what to do. By selecting the printer in Cura, we will have a profile with tons of proper settings. However, we had to, and should only, modify some settings to manipulate the printing time:</p>
<ul>
<li>Layer height: 0.2mm. The thinner the layer, the more detailed the result, and the longer the total printing time. We chose 0.2mm for the tests to get a detailed result.</li>
<li>Wall thickness: 0.8mm - usually double the size of nozzle diameter because we generally print with two shells: one for inside and one for outside</li>
<li>Infill density: 10% - Infill pattern: Grid. Infill is a repetitive structure used to fill the empty space in a print. A high infill density can make the printing time longer and the outcome heavier.</li>
<li>Print speed: 60mm/s. The lower the speed, the finer the outcome.</li>
<li>Support: not in this case, but generally we might need to generate <a href="https://ultimaker.com/en/resources/52663-support">support</a> structure under the model to prevent the material from falling down in the case of large overhang angles</li>
</ul>
<p>The printing was done in 1 hour 27 minutes:</p>
<p></p>
<p>As per the images above, the quality of the print is quite good, many details are respected. Here are the detailed test results after I measured carefully the outcome with the caliper:</p>
<ul>
<li>Quality of wave (rounded print), star (sharp edges), CtrlV (complex shapes): slightly acceptable</li>
<li>Dimension accuracy: +0.08mm (x,y) and +0.1mm (z)</li>
<li>Tolerance (by measuring holes' diameters): 0.5mm - 0.6mm</li>
<li>Minimum hole size: all passed, up to 3mm</li>
<li>Minimum wall thickness: 0.1mm</li>
<li>Minimum distance between walls: 0.6mm</li>
<li>Horizontal surface finish: quite smooth to all shapes (spherea and pyramides)</li>
<li>Overhang angles: perfectly nice at 35°, slightly acceptable up to 60°</li>
<li>Bridges: all passed, up to 16mm length</li>
</ul>
<p></p>
<h6>Second test</h6>
<p>For the <a href="https://www.thingiverse.com/thing:636363">second test</a>, I teamed up with <a href="http://fabacademy.org/2020/labs/barcelona/students/roger-anguera/">Roger Anguera</a>, <a href="http://fabacademy.org/2020/labs/barcelona/students/bruno-molteni">Bruno Molteni</a>, <a href="https://fabacademy.org/2020/labs/barcelona/students/david-prieto/">David Prieto</a>, and <a href="http://fabacademy.org/2020/labs/barcelona/students/lynn-dika">Lynn Dika</a>. We used the <a href="https://www.anycubic.com/products/anycubic-kossel-3d-printer">Anycubic Kossel Delta</a> printer, and our Fab Lab Manager Mikel Llobera guided us through the process. The detailed specs of the machine:</p>
<ul>
<li>Printing technology: FDM</li>
<li>Printing size: 230 x 180 x 300mm</li>
<li>Nozzle diameter：0.4mm</li>
<li>Printing speed：20 - 80mm/s</li>
<li>Materials：PLA, ABS, HIPS, Wood, etc.</li>
<li>Printing method: SD card, USB</li>
</ul>
<p>The estimated printing time was too long, hence, we had to scale-down the object to 70%. We then used the same settings as the first test. The printing was done in less than 1 hour 35 minutes:</p>
<p>Generally, the quality of the print is poorer compared to the one printed by Creality. Here are the detailed test results after I measured carefully the outcome with the caliper:</p>
<ul>
<li>Dimension accuracy: +0.1mm (x,y,z)</li>
<li>Tolerance (by measuring holes' sizes): 0.5mm - 0.6mm</li>
<li>Minimum hole size: up to 0.7mm. Smaller than this, the printer ignored the walls and printed a big hole.</li>
<li>Minimum wall thickness: 0.1mm</li>
<li>Minimum distance between walls: 0.3mm</li>
<li>Horizontal surface finish: lower quality than the outcome of Creality</li>
<li>None of the wheels of the above tolerance test could be able to move. The reason might be because we scaled-down the object to 70%.</li>
</ul>
<p></p>
<h6>What I personally learned</h6>
<p>Some constraints that we must take into account while designing objects to be 3D-printed:</p>
<ul>
<li>Pay attention to laws of gravity. We cannot print a piece in mid-air, and models must lie flat on the build plate or be supported.</li> 
<li>The model must fit within the printer’s working area. The very first thing we need to check in Cura is the printer we're going to use!</li> 
<li>Heat and curing may cause warping and often the initial base layer of a print is very easy to mess up. In order to mitigate this concern, we should use a brim or raft plate before printing the first layer of the actual part.</li>
<li>A method to mitigate the overhang issue and to print angles greater than 45° could be to design in chamfers or fillets on the solid model. I used this trick in my <a href="#filament">individual assignment</a>, and the final outcome was great!</li>
<li>To achieve longer bridges, we can slow the print speed down and reduce the temperature. The faster the speed, the greater the chances are for filament sags. This is because the capability of printing horizontal spans is mostly affected by the quality of the material and how close the bridge is to the heated bed.</li>
<li>The tolerance is an important parameter while designing joined parts, and it could be slightly different when we use different printers or materials. For press-fit joints where parts are held together by friction, allow for a +0.3mm offset from the interior parts. For sliding-fit joints that allow movement or rotation, allow for +0.5mm offset from each side.</li>
</ul>
<p></p>

<h5 id="filament">Individual assignment - Design and print using FDM printer and PLA filament</h5>
<h6>OpenSCAD</h6>
<p>I utilized a flower-shaped vase I designed in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html#vase">2nd week</a> since it demonstrates perfectly an object that cannot be made subtractively (having overhangs and undercuts). My vase was designed in OpenSCAD, and I basically modeled a thin cube, then continuously cloned, rotated, enlarged and moved it up x 180 times to generate the base module <code>shape()</code>. 3 <code>shape()</code> modules were combined and subtracted to form the final model. In order to make sure of the ability to stand still of the vase as well as reducing the total size, I modified it a bit by lessening the additional size of the cloned cubes.</p>
<p></p>
<h6>Slicing with Cura</h6>
<p>After exporting the <code>.scad</code> file to <code>.stl</code>, I started slicing the object in Cura. The settings used:</p>
<ul>
<li>Layer height: 0.3mm</li>
<li>Wall thickness: 0.8mm</li>
<li>Infill density: 10% - Infill pattern: Grid</li>
</ul>
<p>Since the estimated printing time was more than 3 hours, I had to reduce the size of the model by 50% directly in Cura, using the <strong>Snap</strong> tool.</p>
<p>Ready to print!</p>
<p></p>
<h6>Printing with PLA filament</h6>
<p>I used the same Anycubic Kossel Delta printer to print my vase. Josep guided me through some essential steps:</p>
<ul>
<li>Export the <code>.gcode</code> file and save to the SD Card of the printer</li>
<li>In case we need to change material, heat up machine up: <strong>Prepare > Preheat PLA</strong>, up until 205-210°C and we can remove the broken filament.
<li>Put SD card in and select <strong>Print from SD</strong>. Choose the file and start printing!</p>
<li>Check if there is any problem with the initial layer, or if the printer is printing in the air. We might need to calibrate the Z-axis or level the bed, and I usually ask Eduardo whenever it comes to this task.</li>
</ul>
<p>I then had some problems with the printing process. Although I reduced the overhang angle from the bottom of the vase to its top, the overhang angles between the twist parts were obviously too big and the printer started to print in the air. In order to both reduce the size and maintain a nice shape, I modified the cube in my design to a hexagon cylinder by utilizing the module used in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html#construction-kit">3rd week</a>.</p>
<p>There you go the 2nd and 3rd failures. For the first print, I only selected the <strong>Skirt</strong> option in <strong>Plate Adhesion</strong> and the adhesion was fine. However, for the next print, the model started moving while being printed. I tried the second time by selecting the <strong>Brim</strong> option, but things didn't go well either. In the end, I had to print the 4th time with the option <strong>Raft</strong> selected.</p>
<p>Finally, I had the vase perfectly printed!</p>
<p></p>
<h6>Final result</h6>
<p>I brought the vase to the landlady where I'm staying, and here you go the hero shots of the final result:</p>

<!--<h5 id="syringe">Additional test - Thick paste extrusion using syringe</h5>
<p></p>

<h5 id="resin">Additional test - Stereolithography using SLA printer and UV resin</h5>
<p></p>-->

<h2>Conclusion</h2>
<h6>Settings for different FDM printers and test results:</h6>
<p></p>
<!--<h6>Comparison of 3D printing techniques:</h6>
<p></p>-->
<p>That's it, enough testing with 3D printers. The next step is to design the physical parts of my Final Project and try to see how can I assemble parts made with subtractive and additive techniques. I still need to think about how can I connect the modules both physically and electronically. Hence, I will delay the task a bit and update later on the <a href="{{site.baseurl}}/final-project.html">Final Project</a> page.</p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html">Previous Assignment</a>
<a class="btn btn-inactive m-2" href="#">Next Assignment</a>
</div>