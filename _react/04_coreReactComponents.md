---
layout: single
title: Components
permalink: /react/components/
#excerpt: ""
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2019-09-04
sidebar:
  - title: ""
    #image: /assets/images/howTheFuck.jpg
    image_alt: "image"
    text: ""
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## An introduction to Components

React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this [page](https://reactjs.org/docs/react-component.html).

To define a React component class, you need to extend React.Component. Using the example project created [here](http://tuono/react/projectSetup/), we have defined a class that extends React.component within the src/app.js file,

```javascript
//src/app.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      //Note: this is jsx and not html
      <div className="App">
        <h1>I am a react app</h1>
      </div>
    );
  }
}
export default App;
```

Some items worth noting,
* The only method you must define in a React.Component subclass is called render().
* The class 'App' would be the default class that is imported by other files. For example, in the /public/index.js file we have,
  ```javascript
  import App from './App';
  ```

## Understanding JSX

The JSX (the render() method), is compiled by react.createElement().

react.createElement() takes three arguments at a minimum.
1. The element you want to render to the DOM.
2. The configuration. Pass in a JS object. Can accept null.
3. Children. means what is nested in the element defined in parameter 1.

For example,
```javascript
//src/app.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return React.createElement('div', null, 'h1', 'I am a react app');
  }
}
export default App;

```

**Note**: The third parameter, 'h1', will be rendered as text, which is the default behaviour.

To resolve this so that 'h1' is rendered correctly, replace 'h1' with another call to React.createElement().

```javascript
//src/app.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return React.createElement('div', null, React.createElement('h1', null, 'I am a react app'));
  }
}
export default App;
```

**Note**: None of the css has been applied. To resolve, don't pass null as the JS configuration parameter (2nd parameter). Instead pass in a JS object that defines a class name and assign any CSS classes required.

For example,
```javascript
//src/app.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a react app'));
  }
}
export default App;
```

In summery, this,
```javascript
return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a react app'));
```

replaces this,
```javascript
return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a react app'));
```

### JSX Restrictions

* As 'class' is a reserved word, JSX requires 'className'. For example,

```javascript
class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>I am a react app</h1>
      </div>
    );
  }
}
```

* You can only have one root element within your JSX expression. The root element in the previous example is &lt;div className='App'&gt; ... &lt;/div&gt;

## Creating Functional Components

In its simplest form, a component is just a function that returns JSX. Functional components can be defined in a number of ways. For example,

```javascript
function person() {
  return <div></div>
}
//or using ES5 syntax,
var person = function (){
  return <div></div>        
}
```

### Best Practice Example.

1. Create a new folder,
    /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/src/<b><font color="green">Person</font></b>
2. Create a new file,
  /&lt;<i>project-base</i>&gt;/&lt;<i>app-root</i>&gt;/src/Person/<b><font color="green">Person.js</font></b>
3. Update the file with,
```javascript
import React from 'react';
const person = () => {
  return <p>I am a person!</p>
}
export default person;
```
**Note**: We no longer include { Component } within the import because here we are not using a class that extends component.
4. To use the new component in our app, import it into the root component,
```javascript
//src/app.js
import Person from './Person/Person';
```
5. Then update the JSX,
```javascript
//src/app.js
class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>I am a react app</h1>
        <Person />
      </div>
      )
  }
}
```

## Outputting Dynamic Content

```javascript
//Person.js
import React from 'react';
const person = () => {
    return <p>I am a person and I am {Math.floor(Math.random() * 30)} years old!</p>
}
export default person;
```
* Simple single line expressions or function calls only.
* Expression surrounded with {}.

### Working with Props

Pass values into the receiving component (Person.js) using props.

```javascript
//App.js
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <Person name='Joe' age='48' address='1 Somewhere St, Somewhere'/>
      </div>
    );
  }
}
export default App;
```

```javascript
//Person.js
import React from 'react';
const person = (props) => {
    return <p>My name is {props.name}. My age is {props.age}. My address is {props.address}</p>
}
export default person;
```
**Note:** when using class based components, use **this.props**. For example,

```javascript
//Person.js
import React, { Component } from 'react';
class Person extends Component {
  render(){
    return <p>My name is {props.name}. My age is {props.age}. My address is {props.address}</p>
  }
}
export default Person;
```

### Child Properties

A child property is any element (including txt), that is passed between the opening and closing tags of the component.

```javascript
//App.js
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <Person name='Joe' age='48' address='1 Somewhere St, Somewhere'>My hobbies are: racing</Person>
      </div>
    );
  }
}
```
Items that can be passed in as child elements include,
* More complex html.
* Other react components.

Child elements are accessed by the receiving component as follows,

```javascript
//Person.js
import React from 'react';
const person = (props) => {
    return (
      <div>
        <p>My name is {props.name}. My age is {props.age}. My address is {props.address}</p>
        <p>{props.children}</p>
      </div>
    )
}
export default person;
```
**Note:** children is a reserved word.

## Working with State

In previous sections, props have been hardcoded in the JSX. Rather than hardcoding, you would want to populate the props based on some variable's value. When working with a class, you cannot define properties using let/const but instead,

```javascript
//App.js
class App extends Component {
  myProp1 = 'abcd'
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <Person name='Joe' age='48' address='1 Somewhere St, Somewhere'>My hobbies are: racing</Person>
      </div>
    );
  }
}
```

There is one property that can be defined in any component which extends React.Component. That is 'state'. While props are set and passed from outside the component, state is managed from inside the component.

```javascript
//App.js
class App extends Component {
  state = {
    persons:[
      { name: 'Joe', age: 28, address: '1 Somewhere St, Somewhere'},
      { name: 'Jane', age: 29, address: '2 Somewhere St, Somewhere'},
      { name: 'Bob', age: 35, address: '3 Somewhere St, Somewhere'}
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} address={this.state.persons[0].address}>My hobbies are: racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} address={this.state.persons[1].address} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} address={this.state.persons[2].address} />
      </div>
    );
  }
}
```

**Note:** State is a reserved word.

## Handling Events

* In normal HTML, a button can have an ```onclick()``` event. In JSX in must be ```onClick()```.
* The naming convention for you event methods would be something like ```switchNameHandler()```.

```javascript
//App.js
class App extends Component {
  state = {
    persons:[
      { name: 'Joe', age: 28, address: '1 Somewhere St, Somewhere'},
      { name: 'Jane', age: 29, address: '2 Somewhere St, Somewhere'},
      { name: 'Bob', age: 35, address: '3 Somewhere St, Somewhere'}
    ]
  };
  switchNameHandler = () => {
    console.log("was clicked");
  };
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button onClick={this.switchNameHandler}>Select Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} address={this.state.persons[0].address}>My hobbies are: racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} address={this.state.persons[1].address} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} address={this.state.persons[2].address} />
      </div>
    );
  }
}
```

**Note:** If you call your event handler like this, ```onClick={this.switchNameHandler()}``` rather than ```onClick={this.switchNameHandler}```, it would cause react to render the component as immediately. Instead, we just want to pass a reference. In other words, ```this.switchNameHandler``` is a reference to the ```switchNameHandler = () => { };``` function (the function has been assigned to the **switchNameHandler** property).

## Manipulating State

* To manipulate state, react provides a ```setState()``` method. This allows us to update the ```state``` property.
* Remember, we have access to ```setState()``` because the ```App``` class extends ```Component```.
* Don't try to mutate state like this, ```this.state.persons[0].name = 'abcde';```.
* ```setState()``` takes an object as an argument.
* ```setState()``` will merge whatever data is passed with the existing data.

```javascript
//App.js
class App extends Component {
  state = {
    persons:[
      { name: 'Joe', age: 28, address: '1 Somewhere St, Somewhere'},
      { name: 'Jane', age: 29, address: '2 Somewhere St, Somewhere'},
      { name: 'Bob', age: 35, address: '3 Somewhere St, Somewhere'}
    ]
  };
  switchNameHandler = () => {
    this.setState({
      persons:[
        { name: 'Jack', age: 28, address: '1 OverThere St, SomeOtherPlace'},
        { name: 'Jane', age: 29, address: '2 Somewhere St, Somewhere'},
        { name: 'Bob', age: 35, address: '3 Somewhere St, Somewhere'}
      ]
    })
  };
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button onClick={this.switchNameHandler}>Select Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} address={this.state.persons[0].address}>My hobbies are: racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} address={this.state.persons[1].address} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} address={this.state.persons[2].address} />
      </div>
    );
  }
}
```

**Note:** There are only two ways to update the DOM. Changing state & props.

### Using stateHook()
