---
layout: single
title: Object Literals
permalink: /javascript/js-object-literals/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-07
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## Object Literals
A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code
{% highlight javascript linenos %}
  // E.g.
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: '46',
    email: 'John.Doe@Hotmail.com',
    hobbies: ['sport','music'],
    address: {
      city: 'Miami',
      state: 'Florida'
    },
    getBirthYear: function(){
      return 2018 - this.age;
    }
  }

  val = person;
  console.log(val); // returns: firstName:"John"

  // You can access elements within the object like this,
  val = person.firstName;
  console.log(val); // returns: John

  // Alternately like this,
  val = person['firstName'];
  console.log(val); // returns: John

  // Get the other values,
  val = person['lastName'];
  console.log(val); // returns: Doe

  val = person['age'];
  console.log(val); // returns: 46

  val = person['email'];
  console.log(val); // returns: John.Doe@Hotmail.com

  val = person.hobbies[1];
  console.log(val); // returns: music

  val = person.address.state;
  console.log(val); // returns: Florida

  val = person.address['city'];
  console.log(val); // returns: Miami

  val = person.getBirthYear();
  console.log(val); // returns: 1971

  // Another way to define the object,
  const people = [
    {name: 'John', age: 30},
    {name: 'Anne', age: 35},
    {name: 'Jack', age: 56}
  ];

  // Iterate the object,
  for(let i = 0; i < people.length; ++i){
    console.log(`Name: ${people[i].name}`);
    console.log(`Age: ${people[i].age}`);
  }

{% endhighlight %}
