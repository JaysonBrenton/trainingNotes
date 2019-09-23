---
layout: single
title: Events Bubbling and Delegation
permalink: /javascript/js-event-bubbling/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-17
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>


## Event Bubbling & Delegation

Event bubbling is the bubbling up of events through the DOM. When an event happens on a particular element within the DOM, it will bubble up through the elements parents. For example,

<a href="{{ site.baseurl }}/assets/images/event-bubbling.png"><img src="{{ site.baseurl }}/assets/images/event-bubbling.png" alt="eventBubbling-js"></a>

<br>

Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener (on an elements parent, E.g. a <ul> for an  <li>) analyzes bubbled events to find a match on child elements.

{% highlight javascript linenos %}

  // Event bubbling
  document.querySelector('.card-title').addEventListener('click',
  function(){
    console.log('card-title');
  })

{% endhighlight %}
