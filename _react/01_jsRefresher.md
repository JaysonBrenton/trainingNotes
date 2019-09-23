---
layout: single
title: JS Refresher
permalink: /react/js/
#excerpt: "Next generation JavaScript features."
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2019-09-01
sidebar:
  - title: ""
    #image: /assets/images/daFuck.png
    image_alt: "image"
    text: ""
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## let, const & var

<u><i>Block Level Scope</i></u><br>
With let & const you can define variables that have scope at the block level. For example;
```javascript
if(true){
  let myVariable = 'abc'
  console.log(`myVariable within the if statement: ${myVariable}`);
};
console.log(`myVariable outside the if statement: ${myVariable}`);
```

Two things would happen in the above example,
1. 'myVariable within the if statement: abc' would be logged to the console.
2. The error <span style="color:red">'ReferenceError: myVariable is not defined'</span> would be thrown from the second console.log. This is because myVariable was defined in the if statement and does not have scope outside of the if.

<u><i>Global & Function Level Scope</i></u><br>
A var will have scope within an entire function, regardless of any block scope. It can also have global if defined outside of a function. Another potential problem with using var is that the same var could be defined multiple times.<br>

*Global Scope Example*
```javascript
var myGlobalVar;
function anExample(){
  myGlobalVar = 'abc';
};

console.log(`myGlobalVar with outside the the function: ${myGlobalVar}`);
// This would return 'myGlobalVar with outside the the function: abc' to the console.
```

*Function Scope Example*
```javascript
function anExample(){
  var myFuncVar;
  if(true){
    myFuncVar = 'abc';
  };
  console.log(`myFuncVar outside the if statement: ${myFuncVar}`);
  // This would return 'myFuncVar outside the if statement: abc' to the console.
};
```

## Arrow Functions

In JavaScript, and all other functional languages, ***functions are values***. For example,

```javascript
function triple(x){
  return x * 3;
};
//The function can be rewritten and assigned to a variable,
let triple = function(x){
  return x * 3;
};
triple(30);
//or assigned to another variable,
let something = triple;
something(30);
```

Arrow functions were introduced in ES6 and allow us to write shorter function syntax. An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

For example,
```javascript
//Old way of declaring a function.
hello = function() {
  return "Hello World!";
}
//New way of declaring a function.
hello = () => {
  return "Hello World!";
}
//And even shorter shorthand,
hello = () => "Hello World!";
```

Some simple examples. (credit <a href="https://www.youtube.com/watch?v=6sQDTgOqh-I">FunFunFunctions</a>).

Create an array of objects,

```javascript
const dragonEvents = [
  {type:'attack',value:12,target:'player-dorkman'},
  {type:'yawn',value:40},
  {type:'eat',target:'horse'},
  {type:'attack',value:23,target:'player-fluffykins'},
  {type:'attack',value:12,target:'player-dorkman'}
]
```

The following example uses standard function syntax to access data within the dragonEvents array,

```javascript
const totalDamageOnDorkman = dragonEvents
  .filter(function isAttack(event){
    return event.type === 'attack';
  })
  .filter(function isDorkman(event){
    return event.target === 'player-dorkman';
  })
  .map(function(event){
    return event.value;
  })
  .reduce(function(prev,value){
    return (prev || 0) + value;
  })
console.log('totalDamageOnDorkman\n',totalDamageOnDorkman);
//24
```

By refactoring the above code to inline functions we can be more succinct,

```javascript
const totalDamageOnDorkman = dragonEvents
  .filter((event) => {
    return event.type === 'attack';
  })
  .filter((event) => {
    return event.target === 'player-dorkman';
  })
  .map((event) => {
    return event.value;
  })
  .reduce((prev,value) => {
    return (prev || 0) + value;
  })
```

The example above can be refactored further however. This is only applicable if single statement used ( E.g event.type === 'attack' ),

```javascript
const totalDamageOnDorkman = dragonEvents
  .filter(e => e.type === 'attack')
  .filter(e => e.target === 'player-dorkman')
  .map(e => e.value)
  .reduce((p,v) => (p || 0) + v)
```

And to take it one step further, make the reduce generic,

```javascript
const reduceTotal = (p,v) => (p || 0) + v
const totalDamageOnDorkman = dragonEvents
  .filter(e => e.type === 'attack')
  .filter(e => e.target === 'player-dorkman')
  .map(e => e.value)
  .reduce(reduceTotal)
```

## Filter

Consider the following example showing the old way of extracting data from an array of objects.

Create an array of objects,
```javascript
const animals = [
  {name:'myRabbit',species:'rabbit'},
  {name:'myDog1',species:'dog'},
  {name:'myDog2',species:'dog'},
  {name:'myFish1',species:'fish'},
  {name:'myCat',species:'cat'},
  {name:'myFish2',species:'fish'}
]
```

Prior to ES6, iterate the array using a for loop,
```javascript
let dogs = []
for(let i = 0; i < animals.length; i++){
  if(animals[i].species === 'dog'){
    dogs.push(animals[i])
  }
};
```

Now the same outcome using filter,
```javascript
let dogs = animals.filter(function(animal){
  return animal.species === 'dog'
})
```
What's going on here?
* we have passed 'function(animal)' as a parameter to filter.
* these ('function(animal)') are callback functions.
* each time filter processes an element from the animal array, that element is passed into the callback function.

And can be further refactored by breaking out the callback into a separate variable,
```javascript
let isDog = function(animal){
  return animal.species === 'dog'
}
let dogs = animals.filter(isDog)
```
In the example above, notice that,
* The *isDog* function is decoupled and can be reused. This allows us to do things like pass it to reject, another higher order function that performs the inverse of filter. For example,

```javascript
let isDog = function(animal){
  return animal.species === 'dog'
}
let dogs = animals.filter(isDog)
let otherAnimals = animals.reject(isDog)
```

## Map

A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.

Create an array of objects,
```javascript
const animals = [
  {name:'myRabbit',species:'rabbit'},
  {name:'myDog1',species:'dog'},
  {name:'myDog2',species:'dog'},
  {name:'myFish1',species:'fish'},
  {name:'myCat',species:'cat'},
  {name:'myFish2',species:'fish'}
]
```

Prior to ES6, iterate the array using a for loop,
```javascript
let names = []
for(let i = 0; i < animals.length; i++){
  names.push(animals[i].name + ' is a ' + animals[i].species)
};
```

Now the same outcome using map,
```javascript
let names = animals.map(function(animal){
  return animal.name + ' is a ' + animal.species
})
```

This can also be rewritten using arrow functions.
```javascript
//instead of this,
let names = animals.map(function(animal){ return animal.name });
//we can write like this,
let names = animals.map((animal) => { return animal.name });
//if your function logic fits on one line, as it does it the example above, you can,
let names = animals.map((animal) => animal.name );
//in functional programming, its standard practice to shorten even further,
let names = animals.map((x) => x.name );
```
A good comparison showing how much more succinct the using of map is over a traditional loop,
```javascript
let names = animals.map((x) => x.name );
//vs
let names = []
for(let i = 0; i < animals.length; i++){
  names.push(animals[i].name + ' is a ' + animals[i].species)
};
```

## Reduce

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

The reducer function takes four arguments:
1. Accumulator (acc)
2. Current Value (cur)
3. Current Index (idx)
4. Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

Create an object,
```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
]
```

Iterate the object using standard for loop,
```javascript
let totalAmount = 0;
for(let i=0;i < orders.length;i++){
  totalAmount += orders[i].amount
}
//1075
```

Now re-implement using reduce,
```javascript
let totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount
}, 0)
//1075
```
And with arrow functions,
```javascript
let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
//1075
```

### Advanced Reduce

In the following example we will use reduce to transform a delimited txt file into an object.

Tab delimited txt file,
```
joe blow  waffle iron 80  2
joe blow  blender 200  2
joe blow  knife 10  2
jane doe  blender 80 1
jane doe  waffle iron 10 1
jane doe  knife 20 1
```

Transformed into an object literal as shown below,
```javascript
{
  'joe blow':[
    { name: 'waffle iron', price:'80', quantity:'2'},
    { name: 'blender', price:'200', quantity:'2'},
    { name: 'knife', price:'10', quantity:'2'}
  ],
  'jane doe':[
    { name: 'blender', price:'80', quantity:'1'},
    { name: 'waffle iron', price:'10', quantity:'1'},
    { name: 'knife', price:'20', quantity:'1'}
  ]
}
```

```javascript
let fs = require('fs');
let output = fs.readFileSync('data.txt');
console.log(output);
//you get a buffer of bytes that needs to be encoded.
//<Buffer 6a 6f 65 20 62 6c 6f 77 20 20 77 61 ... >

//when you include a character encoding like this,
let output = fs.readFileSync('data.txt',utf8);
//encoded with utf8 you get,
//joe blow  waffle iron 80  2
//...

let fs = require('fs');
let output = fs.readFileSync('data.txt','utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        });
        return customers;
    }, {});
console.log(JSON.stringify(output, null, 2));
```

## Destructuring

Extract array elements or object properties into variables.

*Array Destructuring*
```javascript
[a,b] = ['Hi','Joe'];
console.log(a)//Hi
console.log(b)//Joe
```

*Object Destructuring*
```javascript
{name} = {name:'Joe',age:28};
console.log(name)//Joe
console.log(age)//undefined
```

*Array Destructuring Example*
```javascript
const numbers = [1,2,3];
[n1,n2] = numbers;
console.log(n1 + ' : ' + n2);// 1 : 2
//or,
const numbers = [1,2,3];
[n1, ,n3] = numbers;
console.log(n1 + ' : ' + n2);// 1 : 3
```

## Exports & Imports (Modules)

*person.js*
```javascript
const person = {
  name:'Joe'
}
export default person
```
*utility.js*
```javascript
export const clean = () => {...};
export const baseData = 10;
```

*app.js*
```javascript
import person from './person.js';
//or
import prs from './person.js';

//imports of non-default exports.
//must use exact names in curly braces unless using aliases
import {baseData} from './utility.js';
import {clean} from './utility.js';
//or
import {baseData,clean} from './utility.js';
//aliased
import {baseData as bd} from './utility.js';
//or
import * as bundled from './utility.js';
```

## Classes

```javascript
//creation
class Person{
  name = 'Joe'//properties
  call = () => {...}//methods
}
```

```javascript
//instantiation
const myPerson = new Person()
myPerson.Call()
console.log(myPerson.name)
```

```javascript
//inheritance supported
class Person extends Master
```

```javascript
//simple example
class Person{
  constructor(){//constructor is not required, can just use properties
    this.name = 'Joe'//properties
  }   
  printMyName(){//methods
    console.log(this.name);
  }
}
const person = new Person();//instantiation
person.printMyName();
```

```javascript
//inheritance example
class Human{
  constructor(){
    this.gender = 'male'
  }
  printMyGender(){
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor(){
    super();//must use super() to ensure constructor of parent class is called.
    this.name = 'Joe'
  }   
  printMyName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();
```

### Next Gen Classes

A constructor is not mandatory with ES7. A different syntax can be used to create your properties and methods.

```javascript
class Human{
  gender = 'male';
  printMyGender = () => {
    console.log(this.gender);//note the use of the 'this' keyword is
                             //required to reach out to the property.
  }
};

class Person extends Human{
  name = 'Joe';
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();
```

## Spread & Rest Operators

The spread & rest operators both use '...'.  The operator becomes a spread or rest operator based on how it is being used.

### The Spread Operator
The spread operators is used to split up and array or an objects properties.
For example,

```javascript
const oldArray = [1,2,3,4,5]
const newArray = [...oldArray,6,7]
console.log(newArray);
//[1, 2, 3, 4, 5, 6, 7]

const oldObject = {'prop1':'a','prop2':'b'}
const newObject = {...oldObject,'prop3':'c'}
console.log(newObject);
/*
Object {
  prop1: "a",
  prop2: "b",
  prop3: "c"
}
*/
```

### The Rest Operator
The rest operator is used to merge a list of function arguments into an array.
For example,

```javascript
//rest operator used in a function.
const filter = (...args) => {
  return args.filter(el => el === 1);
  //the filter method will execute a function on every element of the array.
  //filter available as args is an array. The rest operator merges the arguments/parameters of the function, into an args array.
};
```
