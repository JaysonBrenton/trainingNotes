---
layout: single
title: React Folder Structure
permalink: /react/structure/
#excerpt: ""
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2019-09-03
sidebar:
  - title: ""
    #image: /assets/images/howTheFuck.jpg
    image_alt: "image"
    text: ""
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## React App Folder Structure

The following info describes the base react folder structure after executing 'create-react-app my-first-react-app'.

* /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/<b><font color="green">package.json</font></b>
  * Defines app dependencies etc.
* /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/<b><font color="green">node_modules</font></b>
  * Contains all the apps dependencies and sub-dependencies.
* /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/<b><font color="green">public</font></b>
  * Root folder that is served by the web-server.
* /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/<b><font color="green">src/index.js</font></b>
  * Gets access to the root element (within /project-base/app-root/public/index.html) with,
  ```javascript
  ReactDOM.render(<App />, document.getElementById('root'));
  ```
  * This file also includes,
  ```javascript
  import App from './App';
  ```
* /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/<b><font color="green">src/app.js</font></b>
  * Contains the only react code that will be found in this auto-generated project.
* /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/<b><font color="green">src/app.test.js</font></b>
  * Allows for the configuration of unit tests.
