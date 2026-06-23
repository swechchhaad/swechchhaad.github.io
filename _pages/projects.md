---
layout: page
title: research
permalink: /research/
description: My research projects, papers, and code.
nav: true
nav_order: 2
display_categories: [cryptography, ai]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
<!-- Generate cards for each project -->
{% if page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_projects = sorted_projects | where: "category", category %}
    {% assign sorted_categorized_projects = categorized_projects | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_categorized_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
{% else %}
  <!-- Display projects without categories -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
