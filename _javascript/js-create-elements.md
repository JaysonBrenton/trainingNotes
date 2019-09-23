---
layout: single
title: Creating, Remove & Replace Elements
permalink: /javascript/js-create-elements/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-15
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

[Here]({{ site.baseurl }}{% link /assets/jscourse/s3-l26-index.html %}) is a link to the example HTML referenced below.

## Create a New Element

{% highlight javascript linenos %}

  // Create the <li> element to be inserted.
  const li = document.createElement('li');

  // Add a class to the <li>.
  li.className = 'collection-item';

  // Add an ID to the <li>
  li.id = 'new-id';

  // Add an attribute to the <li>
  li.setAttribute('Attribute-Name','Attribute-Value');

  // Create a text node and append to the <li>
  li.appendChild(document.createTextNode('Hello World'));

  // Create a link element on the <li>
  const link = document.createElement('a');

  // Add a class to the link
  link.className = 'delete-item secondary-content';

  // Add icon to html.
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the <li> to the <ul>
  // Find the ul we want to append to. In this case <ul class="collection">
  // Then append the list element.
  document.querySelector('ul.collection').appendChild(li);

{% endhighlight %}

## Replacing Elements

{% highlight javascript linenos %}

  // Create a new <h2> element.
  const newHeading = document.createElement('h2');

  // Add an ID to the newHeading
  newHeading.id = "Task Title";

  // Add a text node to the <h2>
  newHeading.appendChild(document.createTextNode('Task List'));

  // Get the heading that you want to replace.
  const oldHeading = document.getElementById('task-title');

  // Replace the element. You need to get the parent of the element you want to replace.

  // Find the parent. Note: '.card-action' is the same as 'class="card-action"'
  const cardAction = document.querySelector('.card-action').

  // Perform the replace.
  cardAction = replaceChild(newHeading, oldHeading);

{% endhighlight %}

## Remove Elements

{% highlight javascript linenos %}

  const lis = document.querySelector('li');
  const list = document.querySelector('ul');

  // Remove a specific list item.
  lis[0].remove();

  // Remove child element
  list.removeChild(lis[3]);

{% endhighlight %}

## Classes & Attributes

{% highlight javascript linenos %}

  // Working with Classes
    const firstLi = document.querySelector('li:first-child');
    const link = firstLi.children[0];
    // The link is the first child of the <li>

    // List all the classes assigned to link elements.
    link.className;
    // Using the example html, this would return;
      // delete-item
      // secondary-content
    // You can also return the classes as a DOMTokenList,
    link.classList;
    // DOMTokenList(2) ["delete-item", "secondary-content", value: "delete-item secondary-content"]

    // Add classes,
    link.classList.add('test');

    // Remove a class
    link.classList.remove('test');

  // Working with Attributes
    // get a specific attribute.
    link.getAttribute('href'); // Returns "#"

    // Set the attribute
    link.setAttribute('href', 'http://google.com');

    // Check for existance of attribute
    link.hasAttribute('href'); // Returns true/false

    // Remove Attribute
    link.removeAttribute('title');

{% endhighlight %}
