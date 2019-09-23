---
layout: single
title: Working with Literals
permalink: /javascript/js-template-literals/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-05
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## Pre ES6 Concatenation
{% highlight javascript linenos %}
  const name = 'Jayson';
  const age = 46;
  const job = 'Dev';
  const city = 'Canberra';
  let html;

  html = '<ul> +
            <li>Name: '+ name +' </li> +
            <li>Age: '+ age +' </li> +
            <li>Job: '+ job +' </li> +
            <li>City: '+ city +' </li> +
          </ul>';
{% endhighlight %}

## ES6 Literals
{% highlight javascript linenos %}
  function sayHello(){
    return 'hello'
  };

  const name = 'Jayson';
  const age = 46;
  const job = 'Dev';
  const city = 'Canberra';
  let html;

  html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${2 + 2}</li>
      <li>${sayHello()}</li>
      <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
  `;
{% endhighlight %}
