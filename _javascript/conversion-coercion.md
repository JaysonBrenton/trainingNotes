---
layout: single
title: Type Conversion and Coercion
permalink: /javascript/js-conversion-coercion/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-02
header:
  overlay_image: /assets/images/reflections2.jpg
---
<br> 

Converting a value from one type to another is often called “type casting,” when done explicitly, and “coercion” when done implicitly (forced by the rules of how a value is used).

## Type Conversion

How can you change a number to a string?
{% highlight javascript linenos %}
  let x;
  x = 5;

  console.log(x); // 5 (blue in the console to represent a number)
  console.log(typeof x); // number
  console.log(x.length); // undefined

  // Convert to a string with,
  x = string(5); // 5 (black in the console to represent a string)

  console.log(typeof x); // string
  console.log(x.length); // 1

  // You can also do things like this,
  x = string(4+4); // 8 (Still did the calculation!)

  console.log(typeof x); v// string
  console.log(x.length); // 1

  // You can also use the toString() method,
  x = (5).toString();
{% endhighlight %}

How can you change a string to a number?
{% highlight javascript linenos %}
  let x;
  x = '5.12345';

  console.log(x); // 5.12345
  console.log(typeof x); // string
  console.log(x.toFixed(2)); // returns an exception

  // Convert to a number with,
  x = Number('5.12345');

  console.log(x); // 5.12345
  console.log(typeof x); // number
  console.log(x.toFixed(2)); // 5.12

  // Parsing a bool to a number,
  x = Number(true);

  console.log(x); // 1 (false would return 0)
  console.log(typeof x); // number
  console.log(x.toFixed()); // 1

  // Parsing a null to a number,
  x = Number(null);

  console.log(x); // 0
  console.log(typeof x); // number
  console.log(x.toFixed()); // 0

  // What about something dopey like this,
  x = Number('hello');

  console.log(x); // NaN (Not a Number)
  console.log(typeof x); // number
  console.log(x.toFixed()); // NaN

  // You can also use the parseInt() method,
  x = ('100').parseInt();

  // You can also use the parseFloat() method if you want to work with decimals,
  x = ('100.31').parseFloat();

{% endhighlight %}

## Type Coercion

Similar to conversion but we let JavaScript do the conversion for you.
{% highlight javascript linenos %}
  let val1 = 5;
  let val2 = 6;
  let sum = val1 + val2;

  console.log(sum); // 11
  console.log(typeof sum); // number

  // BUT, changing one variable to a string...
  let val1 = '5';
  let val2 = 6;
  let sum = val1 + val2;

  console.log(sum); // 56. Concatenation. JavaScript changed val2 to a string.
  console.log(typeof sum); // string
{% endhighlight %}
