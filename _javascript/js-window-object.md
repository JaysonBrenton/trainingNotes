---
layout: single
title: The Window Object
permalink: /javascript/js-window-object/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-12
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

* The DOM is part of the window object.
* The Window/browser is the global environment in client side JS.
* Node.js and Chrome both use the same JS engine called V8.

## Window Method, Objects and Properties
If you open the Chrome console and type 'window', you can see the window methods.

<a href="{{ site.baseurl }}/assets/images/window.methods-js.png"><img src="{{ site.baseurl }}/assets/images/window.methods-js.png" alt="window.methods"></a>

{% highlight javascript linenos %}
  // alert
  window.alert('Hello World');
  // You don't need to specify window though. Same for console. E.g.
  window.console.log('Hello World');

  // Prompt
  let input = prompt();
  alert(input);

  // Confirm
  if(confirm('Are you sure?')){
    console.log('YES');
  }else{
    console.log('NO');
  };

  // Properties. Outter hight and width.
  // Gives the size of the browser window.
  window.outerHeight;
  indow.outerWidth;

  // Properties. Inner hight and width.
  // Gives the size of the browser window inside the scroll bars.
  window.innerHeight;
  window.innerWidth;

  // Properties. Scroll Point.
  // Shows the position of the scroll bar on the X & Y axis..
  window.scrollY;
  window.scrollX;

  // Properties. Location Object.
  window.location; // Provides IP of host, ports, protocols etc.
  window.location.hostname;
  window.location.href; // "http://127.0.0.1:8080/"
  window.location.search; // http://127.0.0.1:8080/?id=1&name=Joe ?id=1&name=Joe

  // Properties. History Object.
  // Get browser history
  window.history.go(-1); // -1, -2 ... would take you back through the previously browsed pages.

  // Properties. Navigator Object.
  // Gets information about the browser itself
  window.navigator; // Returns a bunch of data about the browser. i.e. version, type, geolocation...
  window.navigator.cookieEnabled; // true/false
  window.navigator.platform; // MacIntel

{% endhighlight %}
<!--
Using prompt with the alert gives you,
<img src="{{ site.baseurl }}/img/alert-js.png" alt="alert-js">
And then the message box with whatever was entered previously,
<img src="{{ site.baseurl }}/img/alert2-js.png" alt="alert2-js">
-->
