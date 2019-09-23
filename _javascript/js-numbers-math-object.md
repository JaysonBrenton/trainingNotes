---
layout: single
title: Working with Numbers
permalink: /javascript/js-numbers-math-object/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-03
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## Simple math

{% highlight javascript linenos %}
  const num1 = 100;
  const num2 = 50;
  let val;

  val = num1 + num2; // 150
  val = num1 * num2; // 5000
  val = num1 - num2; // 50
  val = num1 / num2; // 2
  val = num1 % num2; // 0 modulus operator. Gives the remainder after division.
{% endhighlight %}

## The Math Object
The math object has properties and methods we can use to perform calculations.
{% highlight javascript linenos %}
  let val;

  val = Math.PI; // Pretty obvious. 3.14...
  val = Math.round(2.1); // 2
  val = Math.round(2.5); // 3
  val = Math.ceil(2.4); // 3 rounds up regardless
  val = Math.floor(2.8); // 2 rounds down regardless
  val = Math.sqrt(64); // 8 square root of a number.
  val = Math.abs(-3); // 3 absolute version of a number
  val = Math.pow(8, 2); // 64 E.g. 8 to the power of 2
  val = Math.min(2,33,58,1); // 1 Gives the minimum value in the list.
  val = Math.max(2,33,58,1); // 58 Gives the maximum value in the list.
  val = Math.random(); // Gives a random decimal. E.g. 0.1234
  val = Math.floor(Math.random() * 20 + 1); // Gives a random whole number between 1 and 20.
{% endhighlight %}
