var store = [{
        "title": "JavaScript Fundamentals",
        "excerpt":"Console Logging To insert JS into HTML, use the &lt;script&gt; tag. 123456 &lt;h1&gt;Some Text&lt;/h1&gt; &lt;script&gt; alert('Pops up a message box'); &lt;/script&gt; &lt;script src=\"srcFolder/app.js\"&gt;&lt;/script&gt; ...To log to the console from your .js file; 12 console.log(\"a message\"); ...You can also log objects. This is an object literal; 12 console.log({a:1, b:2}); ...You can...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-fundamentals/",
        "teaser":null},{
        "title": "Type Conversion and Coercion",
        "excerpt":"Converting a value from one type to another is often called “type casting,” when done explicitly, and “coercion” when done implicitly (forced by the rules of how a value is used). Type Conversion How can you change a number to a string? 123456789101112131415161718192021 let x; x = 5; console.log(x); //...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-conversion-coercion/",
        "teaser":null},{
        "title": "Working with Numbers",
        "excerpt":"Simple math 123456789 const num1 = 100; const num2 = 50; let val; val = num1 + num2; // 150 val = num1 * num2; // 5000 val = num1 - num2; // 50 val = num1 / num2; // 2 val = num1 % num2; // 0 modulus operator....","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-numbers-math-object/",
        "teaser":null},{
        "title": "Working with Strings",
        "excerpt":"Concatenate 12345678910 const firstName = 'Jayson'; const lastName = 'Brenton'; console.log(firstName + lastName); //JaysonBrenton console.log(firstName + ' ' + lastName); //Jayson Brenton // You can also use the concat method. // concat(val, val, val,...) let val = firstName.concat(' ', lastName); console.log(val); //Jayson BrentonAppend 123456789101112 const firstName = 'Jayson'; const lastName...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-strings/",
        "teaser":null},{
        "title": "Working with Literals",
        "excerpt":"Pre ES6 Concatenation 123456789101112 const name = 'Jayson'; const age = 46; const job = 'Dev'; const city = 'Canberra'; let html; html = '&lt;ul&gt; + &lt;li&gt;Name: '+ name +' &lt;/li&gt; + &lt;li&gt;Age: '+ age +' &lt;/li&gt; + &lt;li&gt;Job: '+ job +' &lt;/li&gt; + &lt;li&gt;City: '+ city +' &lt;/li&gt; +...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-template-literals/",
        "teaser":null},{
        "title": "Arrays",
        "excerpt":"Arrays 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061 // Arrays of numbers; const numbers1 = [1,2,3,4]; // or, by using the array constructor, const numbers2 = new Array(1,2,3,4); // Arrays of strings, const myStrings = ['a','b','c']; // Arrays mixed data types, const myMixed = ['a',1234,true,undefined,null,{a:1,b:2}, new Date()]; // Test if array. Returns true/false, val = Array.isArray(numbers1);...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-arrays/",
        "teaser":null},{
        "title": "Object Literals",
        "excerpt":"Object Literals A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061 // E.g. const person = { firstName: 'John',...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-object-literals/",
        "teaser":null},{
        "title": "Date & Time",
        "excerpt":"Use the Date Object 12345678910 let val; const today = new Date(); let bDay1 = new Date('01-21-1971 11:25:00'); // This 'MM-DD-YYYY'=invalid date error. Must be 'DD-MM-YYYY' let bDay2 = new Date('September 11 1971'); let bDay3 = new Date('02/18/1988'); console.log(today); // Fri May 25 2018 14:21:55 GMT+1000 (AEST) console.log(bDay1); // Thu...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-date-time/",
        "teaser":null},{
        "title": "Conditionals",
        "excerpt":"If Statements 12345678910111213141516171819202122232425262728293031323334353637383940414243444546 var id = '100'; // Simple equals comparison if(id == 100){ console.log('This line is logged because ID is 100 AND we are not testing type.'); }else{ console.log('This line is not logged.'); }; // Simple not equals comparison if(id != 100){ console.log('This line is not logged.'); }else{ console.log('This...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-conditionals/",
        "teaser":null},{
        "title": "Functions",
        "excerpt":"In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be stored in variables, passed as arguments to functions, created...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-Functions/",
        "teaser":null},{
        "title": "Loops & Iterators",
        "excerpt":"General rule on when to use for or while loops. Use a for loop when you know how many times it’s going to run. Use a while loop when you don’t know how many iterations are required. Use a do while when you want to iterate at least one time.For...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-loops-iterators/",
        "teaser":null},{
        "title": "The Window Object",
        "excerpt":"The DOM is part of the window object. The Window/browser is the global environment in client side JS. Node.js and Chrome both use the same JS engine called V8.Window Method, Objects and Properties If you open the Chrome console and type ‘window’, you can see the window methods. 12345678910111213141516171819202122232425262728293031323334353637383940414243444546 //...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-window-object/",
        "teaser":null},{
        "title": "The Document Object Model",
        "excerpt":"The HTML Document Object Model Every web page resides inside a browser window which can be considered as an object. A Document object represents the HTML document that is displayed in that window. The Document object has various properties that refer to other objects which allow access to and modification...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-block-scope/",
        "teaser":null},{
        "title": "DOM Selectors",
        "excerpt":"Single/Multi DOM Selectors Two different types; Single element selectors. Allows you to grab one element usings it’s id or class etc. Will only store one thing. E.g. if you use a single element selector on a class that appears more than once in the DOM it will only grab the...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-dom-selectors/",
        "teaser":null},{
        "title": "Creating, Remove & Replace Elements",
        "excerpt":"Here is a link to the example HTML referenced below. Create a New Element 12345678910111213141516171819202122232425262728 // Create the &lt;li&gt; element to be inserted. const li = document.createElement('li'); // Add a class to the &lt;li&gt;. li.className = 'collection-item'; // Add an ID to the &lt;li&gt; li.id = 'new-id'; // Add an...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-create-elements/",
        "teaser":null},{
        "title": "Events, the Event Object & Event Listeners",
        "excerpt":"Here is a link to the example HTML referenced below. Create an Event Listener 123456789101112131415161718192021 // Select the object that you want the event to fire on // and add an event listener. // addEventListener takes two parameters, // 1. The event, E.g. click // 2. An anonymous callback function....","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-event-listeners/",
        "teaser":null},{
        "title": "Events Bubbling and Delegation",
        "excerpt":"Event Bubbling &amp; Delegation Event bubbling is the bubbling up of events through the DOM. When an event happens on a particular element within the DOM, it will bubble up through the elements parents. For example, Event delegation allows you to avoid adding event listeners to specific nodes; instead, the...","categories": [],
        "tags": [],
        "url": "http://tuono/javascript/js-event-bubbling/",
        "teaser":null},{
        "title": "Brain Dump",
        "excerpt":"Load a Document Load a document from the file system via the Query Console. // Select the database from the Database: drop down list in QQ.declareUpdate()let path = '~/Downloads/myDoc.xml';let options = {uri : '/myDoc.xml'}xdmp.documentLoad(path,options)// Check the document loaded,cts.doc('/myDoc.xml')Delete a Document Delete a document from the database via the Query Console....","categories": [],
        "tags": [],
        "url": "http://tuono/marklogic/braindump/",
        "teaser":null},{
        "title": "NiFi",
        "excerpt":"Installation Downloads Apache NiFi MarkLogic NiFi nars MavenInstall NiFi Download the installer, $ cd ~/Documents/Development/$ wget http://www.strategylions.com.au/mirror/nifi/1.7.1/nifi-1.7.1-bin.tar.gz Extract, $ gunzip nifi-1.7.1-bin.tar.gz$ tar -xvf nifi-1.7.1-bin.tar$ lldrwxrwxr-x. 4 xxxxxx xxxxxx 36 Oct 16 11:10 nifi-1.7.1 Update the http port if required, $ vi ~/Documents/Development/nifi-1.7.1/conf/nifi.properties Change: nifi.web.http.port=8080 to 9999 Install MarkLogic nar files,...","categories": ["nifi"],
        "tags": [],
        "url": "http://tuono/nifi/nifi/",
        "teaser":null},{
        "title": "JS Refresher",
        "excerpt":"let, const &amp; var Block Level ScopeWith let &amp; const you can define variables that have scope at the block level. For example; if(true){ let myVariable = 'abc' console.log(`myVariable within the if statement: ${myVariable}`);};console.log(`myVariable outside the if statement: ${myVariable}`);Two things would happen in the above example, ‘myVariable within the if...","categories": [],
        "tags": [],
        "url": "http://tuono/react/js/",
        "teaser":null},{
        "title": "React Project Setup",
        "excerpt":" Local Project Setup The officially recommended tool for creating react projects is create-react-app. To create a react app,   Install create-react-app,    &gt;npm i -g create-react-app        Run create-react-app,    &gt;cd &lt;your_project_base_dir&gt;&gt;create-react-app my-first-react-app        Start the app,    &gt;cd my-first-react-app&gt;npm start      ","categories": [],
        "tags": [],
        "url": "http://tuono/react/projectSetup/",
        "teaser":null},{
        "title": "React Folder Structure",
        "excerpt":"React App Folder Structure The following info describes the base react folder structure after executing ‘create-react-app my-first-react-app’. /&lt;project-base&gt;/&lt;app-root&gt;/package.json Defines app dependencies etc. /&lt;project-base&gt;/&lt;app-root&gt;/node_modules Contains all the apps dependencies and sub-dependencies. /&lt;project-base&gt;/&lt;app-root&gt;/public Root folder that is served by the web-server. /&lt;project-base&gt;/&lt;app-root&gt;/src/index.js Gets access to the root element (within /project-base/app-root/public/index.html) with, ReactDOM.render(&lt;App...","categories": [],
        "tags": [],
        "url": "http://tuono/react/structure/",
        "teaser":null},{
        "title": "Components",
        "excerpt":"An introduction to Components React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component. Using the example project created here, we have defined a...","categories": [],
        "tags": [],
        "url": "http://tuono/react/components/",
        "teaser":null},{
        "title": "Wireshark",
        "excerpt":"Wireshark is an opensourse network capture and analysis tool. Deploy Installation macOS This installation is for macOS 10.6+ Download the installer hereThe installer writes to the following locations: The main Wireshark application. /Applications/Wireshark.app A launch daemon that adjusts permissions on the system’s packet capture devices (/dev/bpf*) when the system starts...","categories": [],
        "tags": [],
        "url": "http://tuono/tipsntricks/wireshark/",
        "teaser":null},{
        "title": "Docker",
        "excerpt":"Install Install guide for Mac can be found here. Follow the bouncing ball. Basics The Docker CLI, standard cmd, Run in interactive mode -it : interactive mode with the ubuntu image$ docker run -it ubuntu /bin/bashroot@ffb8b15ead13:/# lltotal 72drwxr-xr-x 1 root root 4096 Oct 20 14:27 ./drwxr-xr-x 1 root root 4096...","categories": [],
        "tags": [],
        "url": "http://tuono/tipsntricks/docker",
        "teaser":null},{
        "title": "Markdown",
        "excerpt":"Section Headings A level 1 heading can be created with Markdown by typing a single ‘#’ character at the start of a line # Markdown Cheat SheetTo create a level 2 heading, use two ‘#’ characters, like so ## Markdown Cheat SheetYou can use up to six ‘#’ characters to...","categories": [],
        "tags": [],
        "url": "http://tuono/tipsntricks/markdown/",
        "teaser":null}]
