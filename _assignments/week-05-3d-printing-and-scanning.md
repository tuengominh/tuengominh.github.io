---
layout: assignment
title: 3D Printing And Scanning
thumb: 06.jpg
assignment: characterize the design rules for 3D printing (in-group); to design and 3D print an object that could not be made subtractively (individual); to 3D scan an object (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All GCODE, STL, and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/print/">here</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to test the <a href="#group">design rules for the 3D printers</a> available at Fab Lab Barcelona.</p>

<p class="font-italic font-weight-bold">* Besides, we were required to individually design and <a href="#filament">print something</a> with a standard FDM printer and <a href="#scan">3D scan an object</a> - in my case, I chose to scan myself.</p>

<!--<p class="font-italic font-weight-bold">* I also attempted to try other 3D printing techniques, which were <a href="#syringe">paste extrusion with the syringe</a> and <a href="#resin">stereolithography with an SLA printer.</a> However, since the printers are in the process of being calibrated and debugged, I could only proceed to file preparation steps. It was still fun to learn though, and when the machines are ready, I will try to print and update the content of this assignment.</p>-->

<h2 id="scan">3D scanning</h2>
<h5>Individual assignment - 3D scan myself</h5>
<h6>Scanning with Kinect and Skanect</h6>
<p>I used a <a href="https://ca.wikipedia.org/wiki/Kinect">Kinect Xbox 360 V1</a> to scan myself since I knew it's a common practice by looking at previous alumni's websites. Below are the detailed specs of the device:</p>
<ul>
<li>Sensors: color sensor (RGB camera), depth-sensing lenses (IR emitter + IR camera), voice microphone array, tilt motor for sensor adjustment</li>
<li>Field of view (FoV): 43° vertical x 57° horizontal</li>
<li>Physical tilt range (vertical): ± 27°</li>
<li>Depth sensor range: 1.2 - 3.5m</li>
<li>Frame rate (depth and color stream): 30FPS</li>
</ul>
<p>The software paired with Kinect that we used to process the scan was <a href="https://skanect.occipital.com/">Skanect.</a> <a href="https://www.instructables.com/id/How-to-3D-scan-with-Skanect/">Here</a> we can find a step by step instruction on using Skanect. Choosing myself as the scanned object means I required further supports from others: someone held and tilted the Kinect vertically (Santi - our instructor), someone rotated me while I was kneeling on the chair (my classmate Hala), and someone documented the process (Zoi - an MDEF student). The reason why I was not sitting on the chair was to avoid having to process the chair from the exported mesh later.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/scan-1.jpg" class="img-fluid w-100"/>
<p>Steps to scan:</p>
<ul>
<li>Check the connection between Skanect and Kinect</li>
<li>Select the <strong>Body</strong> scene with <i>1 x 1 x 1m</i> bounding box and start scanning</li>
<li>Click the record button, rotate and maintain the object to make sure it could be scanned properly.</li>
<li>Click the button again when finishing.</li>
<li>Crop the messy bottom of the mesh and ensure a flat base for the model by selecting the <strong>Move & Crop</strong> feature</li>
<li>Make the mesh watertight and fill holes by selecting the <strong>Fill Holes</strong> feature and choosing the <i>Medium</i> option</li>
<li>Export to <code>.obj</code> or <code>.stl</code></li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/scan-2.jpg" class="img-fluid w-100"/>
<p>And here is the outcome imported to Blender (the size of the file is too big, that's why I just posted a screenshot here):</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/blender-0.png" class="img-fluid w-100"/>
<p></p>
<h6>Processing the mesh with Blender</h6>
<p>Now let's make myself a bit prettier by 3D retouching the outcome! We had a class by Victor Barberan regarding fixing the mesh using Blender. I simply followed his instructions to work on my mess, oh I meant, mesh. Some steps followed (<strong>IMPORTANT: </strong> following the order can be life-saving. I started sculpting <strong>BEFORE</strong> switching to <strong>Edit Mode</strong> and I hit my head to the keyboard soon after):</p>
<ul>
<li>In <strong>Object Mode</strong>: rotate, scale and <i>Set Geometry to Origin</i></li>
<li>In <strong>Edit Mode</strong>: use <i>Select Circle</i> tool to select the exterior faces of my model, hide them, and delete the horrible mess inside. Also, hit space and remove duplicated vertices.</li>
<li>Select the whole model and go to <strong>Mesh > Clean Up</strong>. Use <i>Delete Loose</i> to get rid of loose vertices and edges. Select <i>Decimate Geometry</i> and reduce the ratio to collapse edges and to get a less complicated model.</li> 
<li>Activate and install <i>Mesh: 3D Print Toolbox</i> module in <strong>User Preferences > Add-ons</strong>. Now we can see errors in the mesh that prevent it from being printable (holes, faces normals, self-intersections, manifold errors) and clean them up. In my case, I selected <i>Make Manifold</i> to get rid of distorted edges.</li>
<li>Go back to <strong>Edit Mode</strong>: spot holes in the model, select their borders and press <kbd>Option</kbd> + <kbd>F</kbd> to fill the holes</li>
<li>Now we can go to <strong>Sculpt Mode</strong>: fine-tune the model with sculpting tools such as <strong>Smooth, Flatten</strong> and <strong>Grab</strong></li>
<li>Go back to <strong>Object Mode</strong>: solidify the object (optional) and add a cube base to the bottom of the model</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/blender-1.png" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/blender-2.png" class="img-fluid w-100"/>
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
<p>I studied sculpture in college before, so the <strong>Sculpt Mode</strong> was really tempting to try. I indeed played around a bit by keeping the same amount of triangle faces from the scanning outcome, and fine-tuned the model with other sculpting tools, such as <strong>Draw, Blob, Crease, Grab,</strong> and <strong>Pinch</strong>. Of course, the model was way visually prettier and detailed. However, the size of the file was unnecessarily large, and I could not 3D-print it properly since there were so many non-manifold faces and messy layers. Cleaning them up could be a real pain, therefore I decided not to continue with it.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/blender-3.png" class="img-fluid w-100"/>
<p>I also didn't proceed to print myself, because I wanted to allocate more time trying other 3D printing techniques (SLA and paste extrusion using FDM printers). In the end, I couldn't make it on time for those additional explorations, but everything is in process ;)</p>
<p></p>

<h2>3D printing</h2>
<h5 id="group">Group assignment - Characterize the 3D printers</h5>
<p>First of all, what is 3D printing, or should I say, additive CAM? 3D printing is a technique of adding successive layers of material until an object is created, while subtractive CAM removes material from a larger piece (by cutting, drilling, milling, grinding or turning) to create objects. 3D printing has significant advantages: avoiding the waste of materials and allowing us to create models that would be tricky to be made using subtractive techniques (having undercuts, overhangs, nested parts or complex hollow parts). The only cons is that 3D printing is a relatively slow process compared to CNC subtractive techniques.</p>
<p>Depending on the technology, the 3D printer <a href="https://www.3dhubs.com/knowledge-base/introduction-fdm-3d-printing/">deposits material (FDM)</a>, <a href="https://www.lboro.ac.uk/research/amrg/about/the7categoriesofadditivemanufacturing/powderbedfusion/">selectively melts and fuses powder (PBF)</a>, or <a href="https://en.wikipedia.org/wiki/Stereolithography">cures liquid photopolymer materials (SLA)</a> to create parts based on the CAM data. We proceeded with our tests using the most common printing technology: FDM. Before participating in the group test, I took a look at this useful <a href="https://www.matterhackers.com/articles/a-guide-to-understanding-the-tolerances-of-your-3d-printer">article</a> in order to understand what we were going to test.</p>
<h6>First test - General design rules</h6>
<p>I teamed up with <a href="https://fabacademy.org/2020/labs/barcelona/students/david-prieto/">David Prieto</a> and <a href="http://fabacademy.org/2020/labs/barcelona/students/antoine-jaunard/">Antoine Jaunard</a> for the first test. We used the <a href="https://www.creality3d.shop/products/creality-cr-10s-s5-3d-printer-diy-kit-large-printing-size-500x500x500mm">Creality CR-10 S5</a> printer to print this <a href="https://www.thingiverse.com/thing:1363023">test file</a> using 1.75mm PLA. The detailed specs of the machine:</p>
<ul>
<li>Printing technology: FDM</li>
<li>Printing size: 500 x 500 x 500mm</li>
<li>Printing accuracy: ± 0.1mm</li>
<li>Nozzle diameter: standard 0.4mm (can be changed to 0.3 or 0.2mm)</li>
<li>Printing speed: normal 80mm/s, max 200mm/s</li>
<li>Materials: PLA, Copper, Wood, Carbon Fiber, etc.</li>
<li>Printing method: SD card, USB</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/test1-0.jpeg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/test1-1.jpeg" class="img-fluid w-100"/>
<p>We used <a href="https://ultimaker.com/software/ultimaker-cura">Ultimaker Cura</a> in order to slice the model, to modify some important settings for the 3D printing process, and to generate a <code>.gcode</code> file. <a href="https://es.wikipedia.org/wiki/G-code">G-code</a> is the language through which we can communicate with computer-controlled machine tools (in this case, the 3D printers) and give them instructions on what to do. The Cura apps installed in Fab Lab Barcelona's computers have the profiles of all available printers with tons of proper settings. However, we had to, and should only, modify some settings to manipulate the printing time:</p>
<ul>
<li>Layer height: 0.2mm. The thinner the layer, the more detailed the result, and the longer the total printing time. We chose 0.2mm for the tests to get a more delicate result.</li>
<li>Wall thickness: 0.8mm - usually double the size of nozzle diameter because we generally print with two shells: one for inside and one for outside.</li>
<li>Infill density: 10% - Infill pattern: Grid. Infill is a repetitive structure used to fill the empty space in a print. A high infill density can make the printing time longer and the outcome heavier and more rigid. In the case of printing assembles, a higher infill density is recommended.</li>
<li>Print speed: 60mm/s. The lower the speed, the finer the outcome.</li>
<li>Support: not in this case, but we might need to generate a <a href="https://ultimaker.com/en/resources/52663-support">support</a> structure under the model in order to prevent the material from falling down when it comes to large overhang angles.</li>
</ul>
<p>Here you go the video recording the printing process:</p>
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ViD0EXA_V30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<p>The printing was done in 1 hour 27 minutes:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/test1-2.jpg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/test1-3.jpeg" class="img-fluid w-100"/>
<p>As per the images above, the quality of the print was quite good, many details were respected. Here are the test results after I measured carefully the outcome with the caliper:</p>
<ul>
<li>Quality of wave (rounded print), star (sharp edges), CtrlV (complex shapes): slightly acceptable</li>
<li>Dimension accuracy: +0.08mm (x,y) and +0.1mm (z)</li>
<li>Tolerance (calculated by measuring holes' diameters): 0.15 - 0.25mm, which means minimum clearance is around 0.3 - 0.5mm</li>
<li>Minimum hole size: all passed, up to 0.6mm</li>
<li>Minimum wall thickness: 0.1mm</li>
<li>Minimum distance between walls: 0.6mm</li>
<li>Horizontal surface finish: quite smooth, all passed (both spheres and pyramides)</li>
<li>Overhang angles: perfectly nice at 35°, slightly acceptable up to 60°</li>
<li>Bridges: all passed, up to 16mm length</li>
</ul>
<p></p>
<h6>Second test - Tolerance and joint clearance</h6>
<p>For the <a href="https://www.thingiverse.com/thing:636363">second test</a>, I teamed up with <a href="http://fabacademy.org/2020/labs/barcelona/students/roger-anguera/">Roger Anguera</a>, <a href="http://fabacademy.org/2020/labs/barcelona/students/bruno-molteni">Bruno Molteni</a>, <a href="https://fabacademy.org/2020/labs/barcelona/students/david-prieto/">David Prieto</a>, and <a href="http://fabacademy.org/2020/labs/barcelona/students/lynn-dika">Lynn Dika</a>. We used the <a href="https://www.anycubic.com/products/anycubic-kossel-3d-printer">Anycubic Kossel Plus</a> printer, and our Fab Lab Manager Mikel Llobera guided us through the process. The detailed specs of the machine:</p>
<ul>
<li>Printing technology: FDM</li>
<li>Printing size: 230 x 180 x 300mm</li>
<li>Nozzle diameter: 0.4mm</li>
<li>Printing speed: 20 - 80mm/s</li>
<li>Materials: PLA, ABS, HIPS, Wood, etc.</li>
<li>Printing method: SD card, USB</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/test2-0.jpg" class="img-fluid w-100"/>
<p>The estimated printing time was too long, hence, we had to scale-down the object to 70%. We then used the same settings as the first test. The printing was done in 1 hour 35 minutes:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/test2-2.jpg" class="img-fluid w-100"/>
<p>Generally, the quality of the print was poorer compared to the one printed by the Creality printer. Here are the detailed test results measured by the caliper:</p>
<ul>
<li>Dimension accuracy: +0.1mm (x,y,z)</li>
<li>Tolerance (calculated by measuring holes' sizes): 0.25 - 0.3mm, which means minimum clearance is around 0.5 - 0.6mm</li>
<li>Minimum hole size: up to 0.7mm. Smaller than this, the printer ignored the walls and printed a big hole.</li>
<li>Minimum wall thickness: 0.1mm</li>
<li>Minimum distance between walls: 0.3mm</li>
<li>Horizontal surface finish: lower quality than the outcome of the Creality printer</li>
<li>None of the wheels could be able to move, and the reason might be because we scaled-down the object to 70%.</li>
</ul>
<p></p>
<h6>What I personally learned</h6>
<ul>
<li>Pay attention to laws of gravity. We cannot print a piece in mid-air, and models must lie flat on the build plate or be supported.</li> 
<li>The model must fit within the printer’s working area. The very first thing we need to ensure in Cura is the printer we're going to use!</li> 
<li>Heat and curing may cause warping and often the initial base layer of a print is very easy to mess up. In order to mitigate this concern, we should use a brim or raft plate before printing the first layer of the actual part.</li>
<li>To achieve longer bridges, we can slow the print speed down and reduce the temperature. The faster the speed, the greater the chances are for filament sags. This is because the capability of printing horizontal spans is mostly affected by the quality of the material and how close the bridge is to the heated bed.</li>
<li>Tolerance is an important parameter while designing assembled parts, and it could be slightly different when we use different printers or materials. For press-fit joints where parts are held together by friction, allow for a <strong>0.25mm</strong> offset from the interior parts. For sliding-fit/free-fit joints that allow movement or rotation, allow for <strong>0.5mm</strong> offset from each side.</li>
<li>Be careful when scaling objects with nested parts. Use the <strong>Preview</strong> mode in Cura to make sure we're not going to mess up with the designed joint clearance.</li>
</ul>
<p></p>

<h5 id="filament">Individual assignment - Design and print using FDM printer and PLA filament</h5>
<h6>OpenSCAD</h6>
<p>I utilized a flower-shaped vase I designed in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html#vase">2nd week</a> since it demonstrates perfectly an object that cannot be made subtractively (having overhangs and undercuts). My vase was designed in OpenSCAD, and I basically modeled a thin cube, then continuously cloned, rotated, enlarged and moved it up x 180 times to generate the base module <code>shape()</code>. 3 <code>shape()</code> modules were combined and subtracted to form the final model. In order to make sure of the ability to stand still of the vase as well as to reduce the total size, I modified it a bit by lessening the additional size of the cloned cubes.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/openscad-1.png" class="img-fluid w-100"/>
<p></p>
<h6>Slicing with Cura</h6>
<p>After exporting the <code>.scad</code> file to <code>.stl</code>, I started slicing the object in Cura. Since my design was more about a nice shape rather than an object with too many details, I used these settings:</p>
<ul>
<li>Layer height: 0.3mm</li>
<li>Wall thickness: 0.8mm</li>
<li>Print speed: 80mm/s</li>
<li>Infill density: 10% - Infill pattern: Grid</li>
</ul>
<p>The estimated printing time was more than 3 hours, therefore I had to reduce the size of the model by 50% directly in Cura, using the <strong>Snap</strong> tool. Ready to print!</p>
<p></p>
<h6>Printing with PLA filament</h6>
<p>I used the same Anycubic Kossel Plus printer to print my vase since we can use it without reservation. Josep guided me through some essential steps:</p>
<ul>
<li>Export the <code>.gcode</code> file and save it to the SD Card of the printer</li>
<li>In case we need to change material, pre-heat the machine (<strong>Prepare > Preheat PLA</strong>) up until 205-210°C and we can remove the broken filament</li>
<li>Put SD card in and select <strong>Print from SD</strong>, the choose the <code>.gcode</code> file and start printing!</li>
<li>Check if there is any problem with the initial layer, or whether the printer is printing in the air. We might need to calibrate the Z-axis or work on leveling the bed, and I usually ask our instructor Eduardo Chamorro or Mikel Llobera whenever it comes to this task.</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/print-1.jpg" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/print-2.jpg" class="img-fluid w-100"/>
<p>I then had some problems with the printing process. Although I reduced the overhang angle from the bottom of the vase to its top, the overhang angles between the twisty parts were obviously too big and the printer started to print in the air. In order to both reduce the size and maintain a nice shape, I modified the cube in my design to a hexagon cylinder by utilizing the module used in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html#construction-kit">3rd week</a>.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/openscad-2.png" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/cura-1.png" class="img-fluid w-100"/>
<p>Then I faced the 2nd and 3rd failures. For the first print, I only selected the <i>Skirt</i> option in <strong>Plate Adhesion</strong> and the adhesion was fine. However, for the next print, the model started moving while being printed. I tried the second time by selecting the <i>Brim</i> option, but things didn't go well either. In the end, I had to print the 4th time with the option <i>Raft</i> selected.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/print-3.jpg" class="img-fluid w-100"/>
<p>Finally, I had the vase perfectly printed!</p>
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GO2uaCgAKw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<h6>Final result</h6>
<p>I brought the vase to the landlady where I'm staying, and here you go the hero shots of the final result:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-05/hero.jpg" class="img-fluid w-100"/>
<p></p>

<!--<h5 id="syringe">Additional test - Thick paste extrusion using syringe</h5>
<p></p>

<h5 id="resin">Additional test - Stereolithography using SLA printer and UV resin</h5>
<p></p>-->

<h5>Conclusion</h5>
<h6>Design rules for different FDM printers:</h6>
<p></p>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Machine</th>
      <th scope="col">Settings</th>
      <th scope="col">Dimension accuracy</th>
      <th scope="col">Minimum clearance (Press-fit)</th>
      <th scope="col">Minimum clearance (Free-fit)</th>
      <th scope="col">Minimum hole size</th>
      <th scope="col">Minimum wall thickness</th>
      <th scope="col">Minimum distance between walls</th>
      <th scope="col">Maximum overhang angle</th>
      <th scope="col">Maximum horizontal span</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Creality CR-10 S5</th>
      <td>Layer height: 0.2mm - Infill: 10%</td>
      <td>+0.08mm (x,y) and +0.1mm (z)</td>
      <td>0.3mm</td>
      <td>0.6mm</td>
      <td>0.6mm</td>
      <td>0.1mm</td>
      <td>0.6mm</td>
      <td>Up to 55° without support, preferably 45°</td>
      <td>16mm</td>
    </tr>
    <tr>
      <th scope="row">Anycubic Kossel Plus</th>
      <td>Layer height: 0.2mm - Infill: 10%</td>
      <td>+0.1mm (x,y,z)</td>
      <td>0.5mm</td>
      <td>1mm</td>
      <td>0.7mm</td>
      <td>0.1mm</td>
      <td>0.3 mm</td>
      <td>45°</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
<p></p>
<!--<h6>3D printing techniques assessment</h6>
<p></p>-->
<p>That's it, enough testing with 3D printers. The next step is to design the physical parts of my Final Project and to see how can I assemble parts made with subtractive and additive techniques. Before doing that, I still need to make it clear about how I can connect the modules physically, electronically and informatively. Hence, I will delay the task a bit and update later on the <a href="{{site.baseurl}}/final-project.html">Final Project</a> page.</p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-04-electronics-production.html">Previous Assignment</a>
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-06-electronics-design.html">Next Assignment</a>
</div>