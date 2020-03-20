---
layout: assignment
title: Computer-Controlled Machining
thumb: 08.png
assignment: test run-out, alignment, speeds, feeds, and toolpaths of the CNC machine (in-group); to make something big (individual). 
active: 1
---
<p class="font-italic font-weight-bold">* All GCODE, STL, DXF and original editable files can be downloaded <a href="https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo/tree/master/assets/img/big">here</a>.</p>

<p class="font-italic font-weight-bold">* This week's group assignment was to test the <a href="#group">feeds, speeds and toolpaths</a> of the CNC machine with a chosen material.</p>

<p class="font-italic font-weight-bold">* I needed to individually <a href="#big">design, mill and assemble</a> something big.</p>

<h2>CNC machining</h2>
<p>Due to the COVID-19 outbreak situation, we had to confine ourselves at home right after the global class and couldn't get access to the lab by any means. Hence, my plan was to go ahead with designing the individual assignment first and prepare all possible CAM files, then when we can go back to the lab we would be ready to test, fabricate and assemble.</p>
<h5 id="group">Group assignment - Test the CNC machine</h5>
<p class="font-italic font-weight-bold">* To be developed after the COVID-19 pandemic.</p>
<h5 id="big">Individual assignment - Make something big</h5>
<p>I decided to design <strong>a 180 x 46 x 30cm bench</strong> using Fusion 360. Rhino, RhinoCAM and Aspire CAM were introduced by the instructors, however, after researching online, I learned that I can generate toolpaths for a ShopBot using Fusion 360 CAM. So, why not?</p>
<h6>Designing with Fusion 360</h6>
<p>The very first thing I need to know was the canvas size and thickness of available materials at Fab Lab Barcelona. Since measuring materials and doing a press-fit test was impossible during the quarantine, I had to talk to Josep and also took a look at alumnus' websites. Based on gathered information (2500 x 1250mm plywood, 9mm and 15mm thickness, 0.2 - 0.3mm tolerance), I assumed some below parameters (which can be modified after I get access to the lab):</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-07/fusion-0.png" class="img-fluid w-100"/>
<p>I made a mistake by putting a 0.3cm kerf instead of 0.03cm, and that was why the clearance was too big. Fortunately, I could easily modify it by changing the parameter. Long live parametric design! And I better stick with mm unit in the future!</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-07/fusion-1.png" class="img-fluid w-100"/>
<p>A summary of what I did:</p>
<ul>
<li>Defining parameters: what I did above.</li>
<li>Planning the possible joints: I indeed tried to apply +2 types of joint in my design. Some useful reference links for CNC-able joints: the classic <a href="http://winterdienst.info/50-digital-wood-joints-by-jochen-gros/">50 Digital Wood Joint</a> and this <a href="https://www.instagram.com/thejoinery_jp/?hl=en"><i>satisfying</i> collection of Japanese-styled joints.</a> However, my design was more about "stacking" parallel layers of wood instead of joining perpendicular parts. Besides, some joints I'd like to try (tongue and groove, tenon and mortise) could not be done since we are limited to only perform one-sided cuts. Therefore I came to the conclusion that the best thing I could do would be to create wooden poles that go through all layers, and for the external layers applying a pocketing strategy to get invisible joints. Anyway, big thanks to Josep, Santi, Nuria Robles (from Fab Lab Leon) and Edu Segovia (from Fab Lab IED) for sending me tons of inspirations! Muy apreciado!</li>
<li>Modeling the joints first while paying attention to the kerf.</li>
<li>Adding layers: by creating extrusions and moving/copying/mirroring bodies.</li>
<li>I also exported a <code>.dxf</code> files in order to make a small prototype which will be done by laser-cutting cardboard.</li>
</ul>
<p>Below is the video recording the design process:</p>
<div class="text-center">
<iframe width="640" height="480" src="https://www.youtube.com/embed/Ry19FoO0_KU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>This is how my bench should look like after being assembled. If everything goes well, I would be able to sit comfortably on the bench or turn it upside down, lie on it and take a nap during the classes ;)</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-07/fusion-2.png" class="img-fluid w-100"/>
<p>Ready to unfold!</p>
<div class="sketchfab-embed-wrapper text-center">
    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/21619fa2c32543cdad340cab2d96781c/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/bench-fusion-360-21619fa2c32543cdad340cab2d96781c?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Bench - Fusion 360</a>
        by <a href="https://sketchfab.com/tuengominh?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">tuengominh</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-style: italic; font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>
<p>In order to test the tolerance/kerf, I prepared a simple press-fit test in Fusion 360 with these following values of kerf width: 0.1mm, 0.2mm, 0.3mm, 0.4mm and 0.5mm. <strong>NOTE:</strong> kerf width=0.3mm means to allow an offset of 0.15mm from each side to make a perfect fit.</p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-07/fusion-3.png" class="img-fluid w-100"/>
<p></p>
<h6>Stability and press-fit test</h6>
<p class="font-italic font-weight-bold">* To be developed after the COVID-19 pandemic.</p>
<p></p>
<h6>CNC routing with Fusion 360 CAM</h6>
<p></p>
<h6>Machining with ShopBot</h6>
<p class="font-italic font-weight-bold">* To be developed after the COVID-19 pandemic.</p>
<p></p>
<h6>Final result</h6>
<p class="font-italic font-weight-bold">* To be developed after the COVID-19 pandemic.</p>
<p></p>
<!--<h5>Conclusion</h5>-->

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-06-electronics-design.html">Previous Assignment</a>
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-08-embedded-programming.html">Next Assignment</a>
</div>