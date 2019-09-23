---
layout: single
title: Markdown
permalink: /tipsntricks/markdown/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-01
header:
  overlay_image: /assets/images/reflections2.jpg
---
<br>

## Section Headings
A level 1 heading can be created with Markdown by typing a single '#' character at the start of a line
{% highlight markdown %}
# Markdown Cheat Sheet
{% endhighlight %}

To create a level 2 heading, use two '#' characters, like so
{% highlight markdown %}
## Markdown Cheat Sheet
{% endhighlight %}
You can use up to six '#' characters to create a level 6 heading

## Bold and Italics
{% highlight markdown %}
It's **very** easy to do **bold** and *italics*:
{% endhighlight %}

## Links
Create simple links by wrapping square brackets around the link text and round brackets around the URL:
{% highlight markdown %}
[MarkLogic Server](https://www.marklogic.com/resources/inside-marklogic-server/ "You can add tool tip text like this.")
{% endhighlight %}
E.g. [MarkLogic Server](https://www.marklogic.com/resources/inside-marklogic-server/ "Inside the MarkLogic Server.")

## Bulleted Lists
Start each line with hyphen or an asterisk, followed by a space. List items can be nested. This text:
{% highlight markdown %}
* Bullet 1
* Bullet 2
  * Bullet 2a
  * Bullet 2b
* Bullet 3
{% endhighlight %}
...produces this list:
* Bullet 1
* Bullet 2
  * Bullet 2a
  * Bullet 2b
* Bullet 3

## Numbered Lists
Start each line with number and a period, then a space. This text…
{% highlight markdown %}
1. Baked potato
2. Baked beans
3. Pepper
{% endhighlight %}
...produces this list:
1. Baked potato
2. Baked beans
3. Pepper

Markdown cheats source [here](http://nestacms.com/docs/creating-content/markdown-cheat-sheet)
