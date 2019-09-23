---
layout: splash
title: Tips n Tricks
permalink: /tipsntricks/
header:
  overlay_image: /assets/images/reflections4.jpg
---

Braindump of various commands, code snippets, hints etc.

{% assign mid = site.tipsntricks | sort: 'date' %}
{% assign sorted = mid %}

{% for item in sorted %}
  <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
