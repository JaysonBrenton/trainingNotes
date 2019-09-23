---
layout: single
title: Arrays
permalink: /javascript/js-arrays/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-06
header:
  overlay_image: /assets/images/reflections2.jpg
---
<br>

## Arrays
{% highlight javascript linenos %}
  // Arrays of numbers;
  const numbers1 = [1,2,3,4];
  // or, by using the array constructor,
  const numbers2 = new Array(1,2,3,4);

  // Arrays of strings,
  const myStrings = ['a','b','c'];

  // Arrays mixed data types,
  const myMixed = ['a',1234,true,undefined,null,{a:1,b:2}, new Date()];

  // Test if array. Returns true/false,
  val = Array.isArray(numbers1);

  // Get a value from an array,
  val  = numbers1[3];

  // Insert into array,
  numbers1[2]=10;

  // Find index of value,
  val = numbers1.indexOf(2); // Would return 3.

  // Mutating array. Add value to end of the array
  numbers1.push(250); // Would change the numbers array to [1,2,10,4,250]

  // Mutating array. Add value to front of the array
  numbers1.unshift(200); // Would change the numbers array to [200,1,2,10,4,250]

  // Mutating array. Remove value from end of the array,
  numbers1.pop(); // Would change the numbers array to [200,1,2,10,4]

  // Mutating array. Remove value from start of the array,
  numbers1.shift(); // Would change the numbers array to [1,2,10,4]

  // Remove a value from an array,
  numbers1.splice(1,1); //Start at the 2nd element and remove 1 value.

  // Reverse the array,
  numbers1.reverse();

  // Concat arrays,
  val = numbers1.concat(numbers2);

  // Sort an array of strings,
  val = myStrings.sort();

  // Sort an array of numbers. If the array is [10,2,4,6,1] you want to sort ascending use this,
  val = numbers1.sort(function(x,y){
          return x - y;
        });
  // Sort an array of numbers. If the array is [10,2,4,6,1] you want to sort descending use this,
  val = numbers1.sort(function(x,y){
          return y - x;
        });

  // Find values in array. Find the FIRST number under 50. If your array was [62,81,51,43,23,62], 43 would be returned
  function under50(num){
    return num < 50;
  }
  val = numbers1.find(under50);
{% endhighlight %}
