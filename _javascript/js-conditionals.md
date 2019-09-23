---
layout: single
title: Conditionals
permalink: /javascript/js-conditionals/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-09
header:
  overlay_image: /assets/images/reflections2.jpg
---
<br>

## If Statements
{% highlight javascript linenos %}
  var id = '100';

  // Simple equals comparison
  if(id == 100){
    console.log('This line is logged because ID is 100 AND we are not testing type.');
  }else{
    console.log('This line is not logged.');
  };

  // Simple not equals comparison
  if(id != 100){
    console.log('This line is not logged.');
  }else{
    console.log('This line is logged because ID is 100 AND we are not testing type.');
  }

  // Test type and value at the same time. This is best practice.
  if(id === 100){
    console.log('This line is not logged.');
  }else{
    console.log('This line is logged because id is a string and we are testing for a number.');
  };

  // Test type and value at the same time. This is best practice.
  if(id !== 100){
    console.log('This line is logged because id is a string and we are testing for a number.');
  }else{
    console.log('This line is not logged.');
  };

  // Test for the existance of an object. Assume the 'id' was not initialised.
  if(typeof id !== 'undefined'){
    console.log(`The ID is: ${id}`);
  }else{
    console.log('No ID.');
  }

  // Else if
  const color = 'red';
  if(color === 'red'){
    console.log('red');
  }else if(color === 'blue'){
    console.log('blue');
  }else{
    console.log('something else.');
  }
{% endhighlight %}

## Operators
{% highlight javascript linenos %}
  const name = 'Joe';
  const age = 30;

  // And operator &&
  if(age > 0 && age <= 12){
    console.log(`${name} is a child.`);
  }else if(age >= 13 && age <= 19){
    console.log(`${name} is a teen.`);
  }else{
    console.log(`${name} is an adult.`);
  }

  // Or operator ||
  if(age < 16 || age > 65){
    console.log(`${name} is not in the correct age category.`);
  }else if(age > 17 || age < 65){
    console.log(`${name} is in the correct age category.`);
  }

  // Ternary operator. The ? is the ternary operator.
  // This statement says, if id = 100 (type & value) return correct otherwise return incorrect.
  let id = 100;
  console.log(id === 100 ? 'correct' : 'incorrect');
{% endhighlight %}

## Switches
{% highlight javascript linenos %}
  let color = 'red';

  switch(color){
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
      console.log('Color is blue');
      break;
    default:
      console.log('Color is not red or blue');
  }

  let day;
  switch(new Date().getDay()){
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }
  console.log(`Today is ${day}`);
{% endhighlight %}
