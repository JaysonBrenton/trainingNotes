---
layout: single
title: Working with Strings
permalink: /javascript/js-strings/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-04
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## Concatenate
{% highlight javascript linenos %}
  const firstName = 'Jayson';
  const lastName = 'Brenton';

  console.log(firstName + lastName); //JaysonBrenton
  console.log(firstName + ' ' + lastName); //Jayson Brenton

  // You can also use the concat method.
  // concat(val, val, val,...)
  let val = firstName.concat(' ', lastName);
  console.log(val); //Jayson Brenton
{% endhighlight %}

## Append
{% highlight javascript linenos %}
  const firstName = 'Jayson';
  const lastName = 'Brenton';
  let val = 'Jayson';

  val += ' Brenton'
  console.log(val); //Jayson Brenton

  val = 'My name is ' + firstName + ' ' + lastName;
  console.log(val); // My name is Jayson Brenton

  // And using template literals
  val = `My name is ${firstName} ${lastName}`; // My name is Jayson Brenton
{% endhighlight %}

## Escaping
{% highlight javascript linenos %}
  let val = 'That\'s awesome. I can\'t wait.';

  console.log(val); // That's awesome. I can't wait.
{% endhighlight %}

## Length
{% highlight javascript linenos %}
  let val1 = 'That\'s awesome. I can\'t wait.';
  let val2 = val1.length; // Note: You don't need () as length is a property not a method.
  console.log(val); // 29
{% endhighlight %}

## To Upper\Lower
{% highlight javascript linenos %}
  const firstName = 'Jayson';

  let val = firstName.toUpperCase();
  console.log(val); // JAYSON

  let val = firstName.toLowerCase();
  console.log(val); // jayson
{% endhighlight %}

## String as Array
{% highlight javascript linenos %}
  const firstName = 'Jayson';

  let val = firstName[0];
  console.log(val); // J
{% endhighlight %}

## indexOf(), lastIndexOf() & CharAt()
{% highlight javascript linenos %}
  const firstName = 'Jayson';

  let val = firstName.indexOf(y);
  console.log(val); // 2

  let val = firstName.lastIndexOf(y);
  console.log(val); // 3

  // Note: If the character you have referenced in indexOf/lastIndexOf is not there you get -1

  let val = firstName.charAt(2);
  console.log(val); // y
{% endhighlight %}

## Get Last Char, Substring, Slice, Split, Replace & Includes
{% highlight javascript linenos %}
  // Get the last char from the string
  const firstName = 'Jayson';

  let val = firstName.charAt( firstName.length -1 );
  console.log(val); // n

  // Get a substring
  val = firstName.substring(0,4);
  console.log(val); // Jays

  // slice a string. Very similar to substring but you can also use negatives to slice the end of a string.
  val = firstName.slice(0,4);
  console.log(val); // Jays

  val = firstName.slice(-3);
  console.log(val); // son

  // Split a string based on chosen char. E.g split on space.
  const str = 'My name is Jayson Brenton'
  var x = str.split(' ');
  console.log(x); // ["My", "name", "is", "Jayson", "Brenton"]

  // Replace a string
  val = firstName.replace('Jayson','Paul');
  console.log(val); // Paul

  // Test for the existance of chars in a string.
  val = str.Includes('My');
  console.log(val); // true

{% endhighlight %}
