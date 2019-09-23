---
layout: splash
title: JavaScript
permalink: /javascript/
header:
  overlay_image: /assets/images/reflections4.jpg
  caption: "JavaScript"
  cta_label: "More Info"
  cta_url: "https://developer.mozilla.org/bm/docs/Web/JavaScript"
---

{% assign mid = site.javascript | sort: 'date' %}
{% assign sorted = mid %}

{% for item in sorted %}
  <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
