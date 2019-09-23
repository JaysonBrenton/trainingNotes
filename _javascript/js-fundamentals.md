---
layout: single
title: JavaScript Fundamentals
permalink: /javascript/js-fundamentals/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-01
sidebar:
  - title: ""
    #image: /assets/images/daFuck.png
    image_alt: "image"
    text: ""
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## Console Logging
To insert JS into HTML, use the &lt;script&gt; tag.
{% highlight html linenos %}
  <h1>Some Text</h1>
    <script>
      alert('Pops up a message box');
    </script>
    <script src="srcFolder/app.js"></script>
    ...
{% endhighlight %}

To log to the console from your .js file;
{% highlight javascript linenos %}
  console.log("a message");
  ...
{% endhighlight %}
You can also log objects. This is an object literal;
{% highlight javascript linenos %}
  console.log({a:1, b:2});
  ...
{% endhighlight %}
You can also log objects to tables;
{% highlight javascript linenos %}
  console.table({a:1, b:2});
  ...
{% endhighlight %}
Gives you something like this...

<a href="{{ site.baseurl }}/assets/images/logging-js.png"><img src="{{ site.baseurl }}/assets/images/logging-js.png" alt="logging-js"></a>

You can log errors and warnings;
{% highlight javascript linenos %}
  console.error("This is an error");
  console.warn("This is a warning");
  ...
{% endhighlight %}
You can clear the console with;
{% highlight javascript linenos %}
  console.clear();
  ...
{% endhighlight %}
And record timings with;
{% highlight javascript linenos %}
  console.time('ID1');
  // code to be timed goes here
  console.time('ID1');
  ...
{% endhighlight %}

## Variables
Can be defined with var, let & const (let/const introduced in ES2015/ES6)
{% highlight javascript linenos %}
  var name = 'Jayson';
  // or
  var name = "Jayson";
  const birthday = new Date('21-01-1980');
  let today = new Date();
{% endhighlight %}
### let vs var
let & const allow you to declare variables that are limited in scope to the block, statement, or expression on which it is used.<br><br>

This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope
{% highlight javascript linenos %}
  let x = 1;

  if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
  }

  console.log(x);
  // expected output: 1
{% endhighlight %}

{% highlight javascript linenos %}
  function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }

  function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
{% endhighlight %}

{% highlight javascript linenos %}
  var x = 'global';
  let y = 'global';
  console.log(this.x); // "global"
  console.log(this.y); // undefined
{% endhighlight %}
### Variable Rules
* Name cannot start with an numeric but can be alphanumeric.
* Can start with _ or $. _ typically used to represent private vars and $ typically used in jQuery when selecting objects from the DOM.
* A note on constants. While you can't reassign a const value you can reassign values if the const is an object. For example;
{% highlight javascript linenos %}
  const person{
    name: 'Jayson',
    age: 47
  };
  person.age = 46;

  const numbers = [1,2,3,4,5,];
  numbers.push(6);
  ...
{% endhighlight %}

## Data Types
There are two data types;
1. Primitive.
  * The data is stored directly in the variable accesses.
  * Stored on the stack.
2. Reference.
  * Accessed via a reference.
  * Stored on the heap.
  * Is a pointer to a location in memory.

There are six primitive types;
1. String
2. Number (integers, decimals, floats etc)
3. Boolean
4. Null
5. Undefined (variable that has not been assigned a value)
6. Symbols (ES6)

Reference types include;
* Arrays
* Object literals
* Functions
* Dates
* Anything else....

JavaScript is a dynamically typed language. This means that the data types are associated with the values and not the variables. For example,
{% highlight javascript linenos %}
  let x = 'abcd';
  x = 1234;
  ...
{% endhighlight %}

This cannot be done with statically typed languages like Java, C#, C++ etc. TypeScript (JavaScript superset) can be used for static typing. Addons such as flow can also be used to provide static typing to JavaScript.

You can use the typeof operator to see what data type you are workingh with. For example,
{% highlight javascript linenos %}
  let x = 'abcd';
  console.log(typeof x);
  // Would return String.

  let x = true;
  console.log(typeof x);
  // Would return Boolean.

  let x = null;
  console.log(typeof x);
  // Would return Object. Note: This is a bug in the typeof operator.
  // The type is actually null and not an object.
  ...
{% endhighlight %}
