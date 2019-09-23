---
layout: single
title: The Document Object Model
permalink: /javascript/js-block-scope/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-13
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## The HTML Document Object Model
Every web page resides inside a browser window which can be considered as an object.

A Document object represents the HTML document that is displayed in that window. The Document object has various properties that refer to other objects which allow access to and modification of document content.

The way a document content is accessed and modified is called the **Document Object Model**, or **DOM**. The Objects are organized in a hierarchy. This hierarchical structure applies to the organization of objects in a Web document.

* Window object − Top of the hierarchy. It is the outmost element of the object hierarchy.

* Document object − Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page.

* Form object − Everything enclosed in the <form>...</form> tags sets the form object.

* Form control elements − The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes.

Here is a simple hierarchy of a few important objects<br>

<a href="{{ site.baseurl }}/assets/images/html-win-dom.png"><img src="{{ site.baseurl }}/assets/images/html-win-dom.png" alt="html-win-dom"></a>

<br>
The hierarchy of the DOM is,
<br>
<a href="{{ site.baseurl }}/assets/images/dom.png"><img src="{{ site.baseurl }}/assets/images/dom.png" alt="dom"></a>

## Examining the Document Object Model
{% highlight javascript linenos %}
  // To see the entire document,
  document;

  // To return the document in an array like structure (is not an array though),
  document.all;
  // E.g: HTMLAllCollection(10) [html, head, meta, meta, meta, title, body, h1, script, script, viewport: meta]

  // To access a specific section of the document (0 based),
  document.all[0]; // returns the whole document.
  document.all[1]; // returns the head section and so on.

  // Another method of accessing a section,
  document.head;
  document.body;

  // To see the number of sections in the document,
  document.all.length;
{% endhighlight %}
