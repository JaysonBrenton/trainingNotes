---
layout: splash
title: React
permalink: /react/
#excerpt: "Notes taken from react training course."
header:
  overlay_image: /assets/images/reflections4.jpg
  caption: "React"
  cta_label: "More Info"
  cta_url: "https://reactjs.org/"
---

{% assign mid = site.react | sort: 'date' %}
{% assign sorted = mid %}

{% for item in sorted %}
  <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
