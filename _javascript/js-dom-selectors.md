---
layout: single
title: DOM Selectors
permalink: /javascript/js-dom-selectors/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-14
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## Single/Multi DOM Selectors
Two different types;
1. Single element selectors.
  * Allows you to grab one element usings it's id or class etc. Will only store one thing. E.g. if you use a single element selector on a class that appears more than once in the DOM it will only grab the first one it finds.
2. Multi element selectors.
  * Will get all the elements that meet the selection criteria (E.g. class name). The results will be stored in an HTML collection or a node list depending on the selector being used.

## Single Element Selectors
There are two single element selectors.
1. document.getElementById()
2. document.querySelector()

### getElementById()
{% highlight html linenos %}
  // Assume DOM contains,
  <div class="card-action" class="test">
    <h5 id="task-title">Tasks</h5>
  </div>
{% endhighlight %}

{% highlight javascript linenos %}
  // Use document.getElementById() to pluck out the <h5> element.
  // Returns: <h5 id="task-title">Tasks</h5>
  console.log(document.getElementById('task-title'));

  // Get things from the element,
  console.log(document.getElementById('task-title').className);

  // Change styling. Usually driven by some sort of event.
  const taskTitle = document.getElementById('task-title');
  taskTitle.style.background = '#333';
  taskTitle.style.color = '#fff';
  taskTitle.style.padding = '5px';

  // Change the content.
  // Change <h5 ...">Tasks</h5> to <h5 ...">Task List</h5>
  taskTitle.textContent = 'Task List';
  // or,
  taskTitle.innerText = 'Task List';

  // Insert HTML
  taskTitle.innerHTML = '<span style="color:red">Task List</span>';
{% endhighlight %}

### querySelector()
Similar to jquery, you can use any css selector
{% highlight javascript linenos %}
  // #task-title is the same as getElementById('task-title')
  console.log(document.querySelector('#task-title'));

  // Retrieve by class
  console.log(document.querySelector('.test'));

  // Retrieve by element name.
  console.log(document.querySelector('h5'));
{% endhighlight %}

## Multi Element Selectors
These will return either an html collection or a node list.

### getElementsByClassName()
{% highlight html linenos %}
  // Assume DOM contains,
  <div class="card-action" class="test">
    <h5 id="task-title">Tasks</h5>
    <ul class="collection">
      <li class="collection-item">Coffee</li>
      <li class="collection-item">Tea</li>
      <li class="collection-item">Milk</li>
    </ul>
    <ul class="collection">
      <li class="collection-item">Bread</li>
      <li class="collection-item">Butter</li>
      <li class="collection-item">Jam</li>
    </ul>
  </div>
{% endhighlight %}

{% highlight javascript linenos %}
  const items = document.getElementsByClassName('collection-item');
  console.log(items); //
{% endhighlight %}

getElementsByClassName will return a html collection like this,

<a href="{{ site.baseurl }}/assets/images/getElementsByClassName.png"><img src="{{ site.baseurl }}/assets/images/getElementsByClassName.png" alt="getElementsByClassName"></a>

{% highlight javascript linenos %}
  // Can access specific parts of the collection as you would elements in an array. E.g,
  console.log(items[0]);
  // Would return, <li class="collection-item">Coffee</li>

  // Can also modify,
  items[0].style.color = 'red';

  // Select li within a ul. If you have multiple ul's, the following would only select the first
  // due to the use of querySelecto which is a single element selector.
  consty listItems = document.querySelector('ul').getElementsByClassName('collection-item');
{% endhighlight %}

### getElementsByTagName()
{% highlight javascript linenos %}
  let lis = document.getElementsByTagName('li');
  console.log(lis); // Returns a collection of all the li elements in the document.

  // You can also access indexes within the collection and change the
  // style similar to previous examples.

  // Convert HTML collection into an array
  lis = Array.from(lis);

  // Now that lis is an array you can use forEach,
  lis.forEach(function(li){
    console.log(li.className);
    li.textContent = 'abcd';
  });
{% endhighlight %}

### querySelectorAll()
Returns a node list and not an html collection.
{% highlight javascript linenos %}
  // This returns a node list of li elements which have a class name
  // of 'collection-item' within ul elements which have a
  // class name of 'collection'
  const items = document.querySelectorAll('ul.collection li.collection-item');
  console.log(items); // Will print the collection of li's within the ul

  // You can forEach on a node list within casting to an array.
  items.forEach(function(item, index){
    console.log(item.className);
    item.textContent = `${index}`;
  });
{% endhighlight %}

## Traverse the DOM
{% highlight javascript linenos %}
  const list = document.querySelector('ul.collection');
  const listItem = document.querySelector('li.collection-item:first-child');

  // childNodes: returns a nodeList
  // Get the child nodes of the ul,
  list.childNodes; // Returns all child nodes of the ul.
  list.childNodes[0];
  list.childNodes[0].nodeName; // Get the name of node 0.
  list.childNodes[0].nodeType; // Get the type of node 0. Returns 1, 2, 3, 8, 9, 10
  // 1 - Element.
  // 2 - Attribute (deprecated).
  // 3 - Text type node.
  // 8 - Comment.
  // 9 - The Document.
  // 10 - Doctype.
  // Note: childNodes will return line break as if they are nodes.

  // children: returns an HTML collection.
  // Exclude line break from the node list.
  list.children;

  // Get children of children
  list.children[3].children;

  // Get the first child, excluding the text nodes.
  list.firstElementChild;

  // Get the last child, excluding the text nodes.
  list.lastElementChild;

  // Count child elements.
  list.childElementCount;

  // Get parent node.
  // Would return the ul in this example as it is the parent of the li's
  listItem.parentNode;

  // Get the parent of a parent.
  listItem.parentNode.parentNode;

  // Get the next sibling (exclude text\line break nodes).
  listItem.nextElementSibling;
  listItem.nextElementSibling.nextElementSibling;

  // Get the previous sibling (exclude text\line break nodes).
  // Returns null if no previous.
  listItem.previousElementSibling;
{% endhighlight %}
