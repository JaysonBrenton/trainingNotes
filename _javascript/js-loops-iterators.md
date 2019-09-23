---
layout: single
title: Loops & Iterators
permalink: /javascript/js-loops-iterators/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-11
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

General rule on when to use for or while loops.
* Use a for loop when you know how many times it's going to run.
* Use a while loop when you don't know how many iterations are required.
* Use a do while when you want to iterate at least one time.

## For Loop
{% highlight javascript linenos %}
  // Use the continue keyword to cause console.log(i);
  // to be skipped and the next iteration to be fired.
  for(let i = 0; i < 10; i++){
    if(i === 2){
      console.log('Some message');
      continue;
    }
    console.log(i);
  };

  // Break out of the loop when 5 is hit
  for(let i = 0; i < 10; i++){
    if(i === 5){
      console.log(i);
      break
    }
    console.log(i);
  };
{% endhighlight %}

## While Loop
{% highlight javascript linenos %}
  let i = 0;
  while(i <= 10){
    console.log(i);
    i++;
  };
{% endhighlight %}

## Do While Loop
{% highlight javascript linenos %}
  let i = 0;
  do{
    console.log(i);
    i++;
  }while(i < 10);
{% endhighlight %}

## Loop Through an Array
Note: Arrays have iterator methods that would be a better option that a loop.
{% highlight javascript linenos %}
  const cars = ['ford','honda','toyota'];
  for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
  };
{% endhighlight %}

## For Each Loop over Array
{% highlight javascript linenos %}
  // forEach takes in an anonymous callback function as a parameter
  const cars = ['ford','honda','toyota'];
  cars.forEach(function(car){
    console.log(car);
  });
{% endhighlight %}

## MAP
Use to return a different array.
{% highlight javascript linenos %}
  // Create an array of objects.
  const users = [
    {id: 1, name:'John'},
    {id: 2, name:'Julie'},
    {id: 3, name:'Jack'}
  ];

  // Create an array of the ids using map
  const ids = users.map(function(user){
    return user.id;
  });
  console.log(ids);
{% endhighlight %}

## For In Loop
{% highlight javascript linenos %}
  const user = {
    firstName: 'Joe',
    lastName: 'Blow',
    age: 40
  };

  for(x in user){
    // This loop is accessing key/value pairs where x is the key.
    console.log(`${x} : ${user[x]}`);
  }
  // firstName : Joe
  // lastName : Blow
  // age : 40
{% endhighlight %}
