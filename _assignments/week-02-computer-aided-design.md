---
layout: assignment
title: Computer-Aided Design
thumb: 03.jpg
assignment: model a possible Final Project in different 2D and 3D CAD software.
active: 1
---

<p class="font-italic font-weight-bold">* All STL and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/cad">here</a>.</p>
<p class="font-italic font-weight-bold">* Software I tried: <a href="#2d">Illustrator</a>, <a href="#openscad">OpenSCAD</a>, <a href="#fusion">Fusion 360</a>, <a href="#grasshopper">Grasshopper</a>, and <a href="#blender">Blender</a>.</p>

<p>This week was both interesting and overwhelming to me. There were too many new things to learn, especially when my knowledge of 3D design is almost zero. I only had a very <strong>BRIEF</strong> introduction about creating standard primitives with <a href="https://www.autodesk.com/products/3ds-max/overview">3Ds Max</a> when I went to college, and it has been almost 10 years. Below is one of the models I designed with 3Ds Max before:</p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/83082e9022044550a2ba6207adaf420b/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/temple-3ds-max-83082e9022044550a2ba6207adaf420b?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Temple</a>
    by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div> 
<p></p>
<p>Another thing that made me overwhelmed is the introduced hand tools at the Fab Lab. Some of them are quite tough for girls. The good news is I finally managed to use a machine saw and cut a piece of wood. Even though, I need to make sure that my Final Project will be fabricated easily with computer-controlled processes.</p>
<p>My plan was to design 3D-printable modules that have some similarities with the modular robot in my mind (see <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-01-1-principles-and-practices.html#idea">idea #2</a>).</p> 
 
<h2>2D design</h2>
<p>I've already used 2D Design software before in college. In order to allocate more time for learning new 3D software, I went ahead with the vector-based Illustrator which I already know how to use. For this assignment, I decided to simply draw a possible logo for my Final Project.</p>
<h5 id="2d">Illustrator vs. Photoshop</h5>
<p>In short, raster or bitmap graphics (<code>.jpg, .jpeg, .bmp</code>) are made up of a bunch of tiny dots, while vector graphics are made from mathematical paths. Because of that, vector graphics are easier to be scaled and modified without loss of quality or resolution.</p>
<p>I think the most basic concept of Photoshop is to draw and color "pixels" in separated "layers", then merge them to finalize the design. On the other hand, we draw shapes in Illustrator by placing paths in a given 2D space thanks to dimensions and angles, then combine or trim them to form the desired image:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-02/2D.png" class="img-fluid w-100"/>
<p></p>
<h5>ImageMagick</h5>
<p>As mentioned in the <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-01-2-project-management.html">previous assignment</a>, I'd like to use <a href="https://imagemagick.org/index.php">ImageMagick</a> to compress images from now on.</p>
<pre class="bg-light py-2 mt-0">
<code>$ magick idea.png idea.jpg</code>
<code>$ convert idea.jpg -resize 1000 -quality 96 idea-resized.jpg</code>
</pre>
<p>I also put the .svg logo on the navbar of the website.</p>
<p></p>

<h2>3D design</h2>
<h5 id="openscad">OpenSCAD</h5>
<p>Eduardo briefly introduced us to OpenSCAD before his Grasshopper session, and I found the idea of a script-only based modeler quite tempting. For my Final Project, I have a few options to model the <strong>connectors</strong> of blocks, such as built-in magnets, LEGO-compatible bricks, or hinges. I decided to try the <strong>LEGO</strong> option using OpenSCAD. I followed <a href="https://www.youtube.com/watch?v=ecd_eWPnynk">this tutorial</a>, with some customizations. My LEGO brick has a square shape and much thinner.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-02/openscad-1.png" class="img-fluid w-100"/>
<p>One of my favorite things about OpenSCAD is that I can modify a few variables to change the design of a whole object by <strong>TYPING</strong> (no need to select or click any button) or to check if certain parts of the modules can joint together without any complicated pre-calculation. In short, I can incorporate parametric design fast and algorithmically.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-02/openscad-4.png" class="img-fluid w-100"/>
<p>When I uploaded it to <a href="https://sketchfab.com/">Sketchfab</a>, it was a piece of white brick on a light gray background. So I directly edit some settings for the model, including colors, lighting, and environment on Sketchfab.</p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/8ed79063c89d49d584d6bb19d42ed5a6/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/lego-brick-connector-8ed79063c89d49d584d6bb19d42ed5a6?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Lego-Brick Connector</a>
    by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div>
<p></p>
<p id="vase">Since I wanted to go deeper and try an object-oriented approach (I usually code in Java), I gave it a second try. I created a flower-shaped vase by defining my own module <code>shape</code>. Detailed codes <a href = "https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/blob/master/assets/img/cad/openSCAD/flower-vase.scad">here.</a></p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/444b0a2d6987432a8154bd9415564594/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/flower-vase-444b0a2d6987432a8154bd9415564594?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Flower-shaped Vase</a>
    by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div>
<p></p>
<h6>TL;DR</h6> 
<p>Things I learned:</p>
<ul>
<li>Assign parameters to <var>variables</var></li>
<li>Create 3D modules: <code>cube()</code>, <code>cylinder()</code></li>
<li>Define my own module <code>shape()</code></li>
<li>Transformations: <code>translate()</code>, <code>rotate()</code></li>
<li>Boolean operations: <code>difference()</code>, <code>group()</code></li>
<li>Flow control: <code>for</code> loop</li>
</ul>
<p>The official cheatsheet is <a href="https://www.openscad.org/cheatsheet/index.html?version=2019.05">here</a>.</p>
<p></p>
<h6>Conclusion</h6> 
<p><strong>I LOVE OPENSCAD!</strong> I've never imagined that I could create my first 3D Design in such a precise and straightforward way. It was such a nice experience for someone who has a programming background like me. It took me less than 10 minutes to create each model, and I'm so happy with the results. OpenSCAD is really powerful and has many potentials. I'd like to explore it more in the future.</p>
<p></p>
<h5 id="fusion">Fusion 360</h5>
<p>Before the class, I took a look at previous students' websites and noticed that many of them chose to use <a href="https://www.autodesk.com/products/fusion-360/overview">Fusion 360.</a> That's why I tried it next. Since none of the "traditional" software (with the concept of modeling parts and making assemblies) has a Tue-friendly and intuitive UI, I watched <strong>MANY</strong> online tutorials in order to get used to the workflow. This is a good <a href="https://www.youtube.com/watch?v=qvrHuaHhqHI">tutorial</a>. After watching his series, I could create my first <strong>hinge connector</strong> model and I was quite happy with it.</p>
<p>Below is the how-I-did-that videos:</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/aOBGm-fr3uk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/i9y54l6TezE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<p>I had a few problems modeling the hinge: I created the first sketch before creating the component (that led to many inconveniences because I had to copy the first sketch -> mirror the copy -> delete the copy to get the second sketch), and I forgot to include tolerance in my design. This is the most annoying thing about the GUI of Fusion 360. After struggling for a while, here is the model on Sketchfab:</p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/b18cda9a693b45b2bf2282c1f918926b/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/hinge-b18cda9a693b45b2bf2282c1f918926b?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Hinge Connector</a>
    by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div>
<p></p>
<h6>TL;DR</h6> 
<p>Things I learned:</p>
<ul>
<li>Create sketches using parameters: diameter and tolerance</li>
<li>Extrude (join and cut) and fillet to create/modify bodies and components</li>
<li>Create constructs: offset plane and midplane and use those planes to mirror bodies</li>
<li>Boolean operations: join or cut bodies</li>
<li>Create joints, render and stimulate</li>
</ul>
<p></p>
<h6>Conclusion</h6> 
<p>I think Fusion 360 is pretty mature and its GUI is more intuitive than some other traditional CAD software. I can follow the tutorials smoothly, and imagining how to create bodies from sketches or how to join them is not an impossible task. I'm quite sure that I will use Fusion 360 and OpenSCAD to model the main parts of my Final Project (if there is no potential limitation regarding switching between them). However, the fancy idea of "parametric modeling inside a <a href="https://es.wikipedia.org/wiki/NURBS">NURBs-based</a> software with the help of a node-based visual programming environment" convinced me to try <a href="https://www.grasshopper3d.com/">Grasshopper</a>.</p>
<p></p>
<h5 id="grasshopper">Rhino and Grasshopper</h5>
<p> I followed this <a href="https://blog.ramboll.com/rcd/tutorials/a-beginners-guide-to-visual-scripting-with-grasshopper.html">tutorial</a> to learn Grasshopper without getting my brain tangled by its "spaghetti" workflow. However, my brain still exploded when I tried to create a press-fit enclosure for my robot block. In the end, since I'm not there yet, I went back to this <a href="https://www.youtube.com/watch?v=ZKfNJ1xEbaQ&feature=share&fbclid=IwAR11kqTYkCtYluORHRRZ4WRHLGB39lUTlNRoORs2SoBvbF0nVmzrmNKJaow">tutorial</a> and simply create the same parametric rotating table.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-02/grasshopper-1.jpg" class="img-fluid w-100"/>
<p>I tried to input some customizations, mostly with using the same sliders to control both extrusion and offset at the same time:</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-02/grasshopper-2.jpg" class="img-fluid w-100"/>
<p>In the below video, I played around with the number sliders and the central point to see the table transforming:</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/wQlAX6aOmOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p></p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/f0b2c2e778cc4ad08c8590eda7e951d2/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/table-grasshopper-f0b2c2e778cc4ad08c8590eda7e951d2?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Rotating Table</a>
    by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div>
<p></p>
<h6>TL;DR</h6> 
<p>Things I learned:</p>
<ul>
<li>Create points, curves, and surfaces</li>
<li>Create offset of surfaces</li>
<li>Move or rotate surfaces and curves</li>
<li>Use domains, ranges controlled by number sliders and Unit X, Y, Z</li>
<li>Extrude with parameters and loft 2++ curves</li>
<li>Convert NURBs to BREP</li>
</ul>
<p></p>
<h6>Conclusion</h6> 
<p>I think more or less I understand how Grasshopper works after following the tutorial. The concept of input, logic, and output is nice, but the UI always looks like a mess. In my opinion, Grasshopper is more complicated and redundant than OpenSCAD in terms of parametric design. For example, the below 5-minute code will create the same rotating table (which took me 3 hours using Grasshopper):</p> 
<pre class="bg-light py-2 mt-0">
<code>
    x = 16;
    y = 9;
    h = 1;
    thickness = 1;
    angle = 10;
    shape(x, y, h);
    for (i=[0:3]) {
        rotate([0, angle * i, 0])
        shape(x + thickness * i, y + thickness * i, h);
    }
    for (i=[0:2]) {
        rotate([0, angle * i * (-1), 0])
        shape(x - thickness * i, y - thickness * i, h);
    }
    module shape(x, y, h) {
        difference() {
            cube([x,y,h],center=true);
            translate([0,0,0])
            cube([x - thickness,y - thickness,h],center=true);
        }
    }
</code>
</pre>
<p>In terms of solid mechanical objects, I will definitely go back to Fusion 360. However, I think Grasshopper is considerable when we need to design a large-scale and fancy construction. I still wanted to try an object-oriented approach by defining my own Cluster, hence I'm thinking about giving it the second try in the next assignment.</p>
<p></p>
<h5 id="blender">Blender</h5>
<p>I've had multiple headaches dealing with <a href="https://knowledge.autodesk.com/support/3ds-max/learn-explore/caas/CloudHelp/cloudhelp/2019/ENU/3DSMax-Modifiers/files/GUID-D05DF785-F905-453E-BF64-DB4D59A9F200-htm.html">editable poly</a> in 3Ds Max before, so I was totally not interested in trying <a href="https://www.blender.org/">Blender</a>. But I'd like to review again what I know about mesh-based modeling, so I created a simple and random <strong>enclosure</strong> for the modular blocks of my robot (I have zero knowledge about circuit design anyway).</p> 
<img src="{{site.baseurl}}/assets/img/assignments/week-02/blender-1.png" class="img-fluid w-100"/>
<p>And this is what happened when I exported the <code>.blend</code> file to <code>.stl</code> and opened the object inside Fusion 360. In order to continue working on the model, I need to convert the <var>Mesh Body</var> to <a href="https://en.wikipedia.org/wiki/Boundary_representation">BREP.</a></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-02/blender-2.png" class="img-fluid w-100"/>
<p>Here you go the model on Sketchfab:</p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/b17700f85d824d03b00e9df515a47530/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/enclosure-blender-b17700f85d824d03b00e9df515a47530?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Circuit Enclosure</a>
    by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div>
<p></p>
<h6>TL;DR</h6> 
<p>Things I learned:</p>
<ul>
<li>Create primitives/meshes</li>
<li>Boolean modifiers: union, difference, intersection</li>
<li>Select vertices, edges and faces</li>
<li>Create insets, extrusions, bevels and bridges</li>
</ul>
<p>Here is a useful <a href="https://www.dummies.com/web-design-development/blender/blender-for-dummies-cheat-sheet/">cheat sheet.</a></p>
<p></p>
<h6>Conclusion</h6> 
<p>To be honest, I've never been a fan of the concept of modifying surfaces, curves, edges, vertices, and meshes. I personally prefer tools that give me the feeling that I'm being precise and formulaic. Blender is an amazing software and it gives its users a lot of freedom, but manipulating the whole model as if it's an artwork is simply not my thing. However, for some specific parts of my Final Project (for example the dragon's head), I might need to incorporate Blender and figure out a way to exchange files easily from Blender to Fusion 360.</p>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-01-2-project-management.html">Previous Assignment</a>
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-03-computer-controlled-cutting.html">Next Assignment</a>
</div>