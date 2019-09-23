---
layout: single
title: Functions
permalink: /javascript/js-Functions/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-10
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be stored in variables, passed as arguments to functions, created within functions, and returned from functions.

## Function Declarations
{% highlight javascript linenos %}
  function greet(firstName, lastName){
    return `Hi ${firstName} ${lastName}`;
  }
  console.log(greet('John','Doe'));

  // Define default parameters
  // pre-es6 you'd have to do something like this,
  function greet(firstName, lastName){
    if(typeof firstName === 'undefined'){firstName = 'John'};
    if(typeof lastName === 'undefined'){lastName = 'Doe'};
    return `Hi ${firstName} ${lastName}`;
  }
  console.log(greet()); Hi John Doe

  // es6 you can do something like this,
  function greet(firstName = 'John', lastName = 'Doe'){
    return `Hi ${firstName} ${lastName}`;
  }
  console.log(greet()); // Hi John Doe
{% endhighlight %}

## Function Expressions
Using a function as a variable assignment.
{% highlight javascript linenos %}
  // Can be named or anonymous.

  // Anonymous would look like this;
  const square = function(x){
    return x * x;
  };

  // Named would look like this;
  const square = function square(x){
    return x * x;
  };

  console.log(square(8)); // 64

  // As with standard function declarations, you can set defaults on the input parameters.
  const square = function square(x = 3){
    return x * x;
  };

  console.log(square()); // 9
{% endhighlight %}

## Immediately Invocable Function Expressions - IIFEs
IIFEs are functions that you declare and run at the samne time.
{% highlight javascript linenos %}
  // Needs to be an expression. Has to be within (). E.g
  (function(){
    console.log('IIFE ran');
  })(); // IIFE ran

  // Can accept parameters.
  (function(name){
    console.log(`Hello ${name}`);
  })('John'); // Hello John
{% endhighlight %}

## Property Methods
When a function is put inside of an object it is called a method.
{% highlight javascript linenos %}
  const todo = {
    add: function(){
      console.log('Add todo..');
    },
    edit: function(id){
      console.log(`Edit todo ${id}`)
    }
  };

  todo.add();
  todo.edit(22);

  // You can defined functions outside of the object as well.
  todo.delete = function(){
    console.log('Delete todo...')
  };
  todo.delete();
{% endhighlight %}
