---
layout: splash
title: MarkLogic
permalink: /marklogic/
header:
  overlay_image: /assets/images/reflections4.jpg
---

{% assign mid = site.marklogic | sort: 'date' %}
{% assign sorted = mid %}

{% for item in sorted %}
  <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
