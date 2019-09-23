---
layout: single
title: Events, the Event Object & Event Listeners
permalink: /javascript/js-event-listeners/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-16
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

[Here]({{ site.baseurl }}{% link /assets/jscourse/s3-l28-index.html %}) is a link to the example HTML referenced below.

## Create an Event Listener

{% highlight javascript linenos %}

  // Select the object that you want the event to fire on
  // and add an event listener.
  // addEventListener takes two parameters,
  //  1. The event, E.g. click
  //  2. An anonymous callback function.
  document.querySelector('.clear-tasks').addEventListener('click',
    function(e){
      // Code in here will be executed on click of the clear-tasks button
      console.log('abcd');

      // e is the event object. Not required by default and discussed further below in section 'The Event Object'.
      e.preventDefault();
    })

  // In addition to using an anonymous function as shown above, you can also use a named function.
  // In the following example, when the event fires it will look for a function call onClick.
  document.querySelector('.clear-tasks').addEventListener('click', onClick);

  function onClick(e){
    console.log('Clicked');
  }

{% endhighlight %}


## The Event Object

{% highlight javascript linenos %}

  document.querySelector('.clear-tasks').addEventListener('click', onClick);

  function onClick(e){
    let val;

    e.preventDefault();

    val = e;
    console.log(e);
  }

{% endhighlight %}

The MouseEvent Object
<a href="{{ site.baseurl }}/assets/images/eventObjectProps.png"><img src="{{ site.baseurl }}/assets/images/eventObjectProps.png" alt="eventObjectProps-js"></a>

{% highlight javascript %}

  // The object properties can be accessed as follows,
  e.target;
  e.target.id;
  e.target.className;
  e.type;
  // etc

{% endhighlight %}

### Mouse Events
{% highlight javascript linenos %}
  // Select some objects to test against.
  const clearBtn = document.querySelector('.clear-tasks');
  const card = document.querySelector('.card');
  const heading = document.querySelector('h5');

  // Click
  clearBtn.addEventListener('click',runEvent);

  // Double Click
  clearBtn.addEventListener('dblclick',runEvent);

  // Mouse Down (click+hold)
  clearBtn.addEventListener('mousedown',runEvent);

  // Mouse Up (click+release)
  clearBtn.addEventListener('mouseup',runEvent);

  // Mouse Enter (when cursor drags into the card)
  card.addEventListener('mouseenter',runEvent);

  // Mouse Leave (when cursor drags out off the card)
  card.addEventListener('mouseleave',runEvent);

  // Mouse Over (event fires on objects within the card for example)
  card.addEventListener('mouseover',runEvent);

  // Mouse Out (event fires on objects within the card for example)
  card.addEventListener('mouseout',runEvent);

  // The event handler
  function runEvent(){
    console.log(`EVENT TYPE: ${e.type}`);
  };
{% endhighlight %}

### Input Events
{% highlight javascript linenos %}
  // Select the form to test against.
  const form = document.querySelector('form');
  const taskInput = document.getElementById('task'); // <input type="text" name="task" id="task" value="Walk the dog">

  // Add an event handler to the form object
  form.addEventListener('submit',runEvent);

  // Event fires when object receives focus. i.e. the text box is clicked into.
  taskInput.addEventListener('focus',runEvent);

  // Event fires when object looses focus. i.e. the text box is clicked out off.
  taskInput.addEventListener('blur',runEvent);

  // Event fires on text cut.
  taskInput.addEventListener('cut',runEvent);

  // Event fires on text paste.
  taskInput.addEventListener('paste',runEvent);

  // Fire on any type of input event
  taskInput.addEventListener('input',runEvent);

  function runEvent(e){
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);

    // Get the values from the input object.
    console.log(taskInput.value)
  }

{% endhighlight %}
