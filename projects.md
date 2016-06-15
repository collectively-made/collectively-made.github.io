---
layout: page
title: Selected Project Case Studies

permalink: /projects/
---

 <section>
  <ul class="list">
    {% for post in site.posts  %}
      <li>
        <a class="none" href="{{ post.url }}">
          <span class="di b ttu">{{ post.title }} </span>&nbsp; - &nbsp;<span class="b lt-gray ttu"> {{ post.tag }}</span>
          <h2 class="fw1 mts mbn">{{ post.subtitle }}</h2>
        </a>
      </li>
    {% endfor %}
  </ul>
</section>