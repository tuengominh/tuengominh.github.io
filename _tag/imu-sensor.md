---
layout: default
tag: imu-sensor
---
<div class="pt-3 container text-center">
    <h2>#{{page.tag}}</h2>
</div>

<div class="container pt-3 pb-5 mb-5">
    <div class="card-group row text-center">
        {% assign posts = site.project | where_exp:"item", "item.tags contains 'imu-sensor'" }} %}
        {% for post in posts %}
        {% include post_group.html %}
        {% endfor %}
        {% assign posts = site.tinkering | where_exp:"item", "item.tags contains 'imu-sensor'" }} %}
        {% for post in posts %}
        {% include post_group.html %}
        {% endfor %}
        {% assign posts = site.tldr | where_exp:"item", "item.tags contains 'iot'" }} %}
        {% for post in posts %}
        {% include post_group.html %}
        {% endfor %}
    </div>
</div>