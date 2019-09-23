---
layout: single
title: Brain Dump
permalink: /marklogic/braindump/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-01-04
header:
  overlay_image: /assets/images/reflections2.jpg
---
<br>

## Load a Document
Load a document from the file system via the Query Console.
```javascript
// Select the database from the Database: drop down list in QQ.
declareUpdate()
let path = '~/Downloads/myDoc.xml';
let options = {uri : '/myDoc.xml'}
xdmp.documentLoad(path,options)

// Check the document loaded,
cts.doc('/myDoc.xml')
```

## Delete a Document
Delete a document from the database via the Query Console.
```javascript
// Select the database from the Database: drop down list in QQ.
declareUpdate()
xdmp.documentDelete('/myDoc.xml')
```
## Misc Directories
See [ here](https://docs.marklogic.com/guide/installation/procedures) for various install and data directories.

## Delete All Documents
XQuery to delete all documents in a database,
```
for $doc in doc() return xdmp:document-delete(xdmp:node-uri($doc))
```

## Create App, DB & Forests
```javascript
'use strict';

/*
* Author: Jayson Brenton (jayson.careybrenton@marklogic.com)
* Version: 0.1
* Date: 2018-07-25

* Purpose:
  This script will create a modules and content database as well as a http server and n number of forests.

* Functionality:
  * You can let the script run on against hosts within a cluster or alternately, specify the hosts you wish to run on.
  * If a database already exists the script continue using the discovered databases.
  * When creating the app server, the script will check to see if a server already exists. If one is found, checks will be made to confirm the correct content and modules databases are in use and reset if required.
  * Prior to creating any forests, checks will be made to make sure the host exists in the cluster (if specified manually) and are running.
  * Any number of forests can be created. The naming convention used is 'databaseName-hostNumber-forestNumber'.
  * If existing forests are discovered, the forestNumber will be incremented until a name becomes available.

* Usage:
  * Parameters are set in the variable declarations below.
  * Set the required number of forests in the forests object.
  * Set the required hosts in the hosts array. If hosts array is empty, the script will get the hosts names from the cluster.
*/

let admin = require("/MarkLogic/admin.xqy");
let configuration = admin.getConfiguration();
let appServerName = 'testAppServer';
let appServerPort = 8089;
let urlRewriter = '/url_rewriter.sys';
let groupName = 'Default';
let conDBId;
let modDBId;
let groupId;
let appServerId;
let databases = {
  contentDatabase:'test',
  modulesDatabase:'test-modules',
  securityDatabase:'Security',
  schemaDatabase:'Schemas'
};
let forests = {
  content: 3,
  modules: 2
};
//let hosts = ['dodgyName1','dodgyName2','myValidHostName'];
let hosts = [];

/* Create the db */
xdmp.log('Process Databases','info');
Object.keys(databases).forEach(function(key) {
  let curDBName = databases[key];
  let curDBId;
  let secDBId;
  let schDBId;

  // Don't try to create either the security or schemas db's. Just content and modules
  if(!(curDBName == databases.securityDatabase || curDBName == databases.schemaDatabase)){
    // Get the security database id
    secDBId = xdmp.database(databases.securityDatabase);

    // Get the schema db id
    if(curDBName == databases.modulesDatabase){
      // Don't want schema on the modules database
      schDBId = 0;
    }else{
      schDBId = xdmp.database(databases.schemaDatabase);
    };

    // Check if db exists
    if(admin.databaseExists(configuration,curDBName)){
      xdmp.log(`Database '${curDBName}' already exists in config.`,'info');
    }else{
      // Create db
      configuration = admin.databaseCreate(configuration,curDBName,secDBId,schDBId);
      admin.saveConfiguration(configuration);
      xdmp.log(`Database '${curDBName}' created.`,'info');
    };

    // Get content/modules dbIds
    switch(curDBName){
      case databases.contentDatabase:
        conDBId = admin.databaseGetId(configuration,curDBName);
        //break;
      case databases.modulesDatabase:
        modDBId = admin.databaseGetId(configuration,curDBName);
        //break;
    };
  };
});

/* Create app server */
// Test if server already exists
xdmp.log('Process App Server','info');
if(admin.appserverExists(configuration, admin.groupGetId(configuration,groupName), appServerName)){
  appServerId = admin.appserverGetId(configuration,groupId,appServerName);
  xdmp.log(`App server '${appServerName}' already exists in config.`,'info');

  // Make sure the databases are set correctly
  Object.keys(databases).forEach(function(key){
    let dbName;

    switch(databases[key]){
      case databases.modulesDatabase: // Reset the modules DB if required
        dbName = admin.databaseGetName(configuration,admin.appserverGetModulesDatabase(configuration,appServerId));
        if(dbName != databases.modulesDatabase){
          configuration = admin.appserverSetModulesDatabase(configuration,appServerId,admin.databaseGetId(configuration,databases.modulesDatabase));
          admin.saveConfiguration(configuration);
          xdmp.log(`App server: ${appServerName} modules DB was incorrect. Was: '${dbName}'. Reset to: '${databases.modulesDatabase}' `,'warning');
        };
        break;
      case databases.contentDatabase: // Reset the content DB if required
        dbName = admin.databaseGetName(configuration,admin.appserverGetDatabase(configuration,appServerId));
        if(dbName != databases.contentDatabase){
          configuration = admin.appserverSetDatabase(configuration,appServerId,admin.databaseGetId(configuration,databases.contentDatabase));
          admin.saveConfiguration(configuration);
          xdmp.log(`App server: ${appServerName} content DB was incorrect. Was: '${dbName}'. Reset to: '${databases.contentDatabase}' `,'warning');
        };
        break;
    };
  });
}else{
  // Create app server
  configuration = admin.httpServerCreate(configuration,admin.groupGetId(configuration,groupName),appServerName,'/',appServerPort,modDBId,conDBId);
  admin.saveConfiguration(configuration);
  xdmp.log(`App server '${appServerName}' created.`,'info');

  // Set url rewriter
  configuration = admin.appserverSetUrlRewriter(configuration,admin.appserverGetId(configuration,groupId,appServerName),urlRewriter);
  admin.saveConfiguration(configuration);
};

/* Create Forests */
xdmp.log('Process Forests','info');

//Get the hosts within the cluster if not set manually.
if(hosts.length == 0){
  xdmp.hosts().toObject().forEach(function(id){
    hosts.push(xdmp.hostName(id));
  });
};

// Test hosts are valid and up.
// Remove invalid hosts from host array
let i = hosts.length;
while (i--){
  if(!(admin.hostExists(configuration,hosts[i]))){
    xdmp.log(`Host '${hosts[i]}' is not valid.`,'error');
    hosts.splice(i,1);
  }else{
    if(xdmp.hostStatus(xdmp.host(hosts[i])).toString().indexOf('XDMP-HOSTOFFLINE') > 0){
      xdmp.log(`Host '${hosts[i]}' is down.`,'error');
      hosts.splice(i,1);  
    };
  };
};

// Start forest creation
let hostNumber = 1;
for(let i = 0; i < hosts.length; i++){
  xdmp.log(`Current host: '${hosts[i]}'.`,'info');
  let hostName = hosts[i];

  // Iterate the forests object to get the required number of forests for each database
  Object.keys(forests).forEach(function(key) {
    let numForestsRequired = forests[key];
    let curForType = key;
    let dbId;
    let dbName;
    let forestNames = [];
    let forestNumber = 1;

    switch(key){
      case 'content':
        dbId = xdmp.database(databases.contentDatabase);
        dbName = databases.contentDatabase;
        break;
      case 'modules':
        dbId = xdmp.database(databases.modulesDatabase);
        dbName = databases.modulesDatabase;
        break;
    };
    xdmp.log(`Current database: '${dbName}'.`,'info');

    for(let i = 0; i < numForestsRequired; i++){
      // Get existing forest names.
      admin.getForestIds(configuration).toObject().forEach(function(id){
        forestNames.push(admin.forestGetName(configuration,id));
      });

      let forestName = `${dbName}-${hostNumber}-${forestNumber}`;
      let n = 1;

      // Get an available forest name
      do{
        if(forestNames.indexOf(forestName) > 0){
          //xdmp.log(`Name unavailable: ${forestName}`,'info');
          forestName = `${dbName}-${hostNumber}-${n+1}`;
          //xdmp.log(`Trying: '${forestName}'`,'info');

        };
        if(forestNames.indexOf(forestName) < 0){
          xdmp.log(`Forest name available: '${forestName}'`,'info');
          break;
        };
        n ++;
      }while(n <= forestNames.length);

      // Create the forest
      xdmp.log(`Create forest: ${forestName}`,'info');
      configuration = admin.forestCreate(configuration,forestName,xdmp.host(hostName),null,null,null);
      admin.saveConfiguration(configuration);

      //Attach forests to database
      xdmp.log(`Attach forest: ${forestName} to '${dbName}'`,'info');
      configuration = admin.databaseAttachForest(configuration, xdmp.database(dbName),xdmp.forest(forestName));
      admin.saveConfiguration(configuration);

      forestNumber = n;
    };
  });
  hostNumber += 1;
};
xdmp.log('###COMPLETE###','info');
'Complete'
```

## Create Dummy Data

```javascript
'use strict';

declareUpdate();

Date.prototype.addSeconds = function(secondsToAdd) {
  var newDate = new Date(this);
  newDate.setSeconds(newDate.getSeconds() + secondsToAdd);
  return newDate;
}

var departments = ["IT","HR"];
var states = ["NSW", "Vic"];
var serverTypes = ["Email", "MarkLogic"];

var documents = [];

var packetsCount = 60 * 60 * 24;
var startDate = new Date();

departments.forEach(function(department){
  states.forEach(function(state){
    serverTypes.forEach(function(serverType){
      var currentValue = 50;
      for(var packetNumber = 0; packetNumber < packetsCount; packetNumber++) {
        currentValue = currentValue + (5 - Math.floor((Math.random() * 11)));
        if(currentValue < 0) currentValue = 0;
        if(currentValue > 100) currentValue = 100;
        documents.push({
          "department": department,
          "state": state,
          "serverType": serverType,
          "created": startDate.addSeconds(packetNumber *-1),
          "percent": currentValue
        })
      }
    });
  })
});

documents.map(function(document){
  var uri = "/packets/" + document.department + "/" + document.state + "/" + document.created.getTime() + ".json";
  xdmp.documentInsert(
    uri,
    document
  );

  return ([document.department, document.state, document.serverType, document.created, document.percent]).join(" ");
}).slice(0,100).join("\n");
```

## CORB
Detailed usage notes can be found [here](https://developer.marklogic.com/code/corb/).

* corb.properties

```
XCC-CONNECTION-URI=xcc://<userName>:<pWord>@<host>:<port>/   
THREAD-COUNT=20
MODULE-ROOT=/
MODULES-DATABASE=data-hub-MODULES
URIS-MODULE=getURIs.xqy|ADHOC
PROCESS-MODULE=transform.xqy|ADHOC
```

* getURIs.xqy

```
xquery version "1.0-ml";
let collection_name := 'REGNS'
let rev_type_property_name := 'REVENUE_TYPE'
let rev_type_property_value := 'L'
let red_ind_property_name := 'REDUNDANCY_IND'
let red_ind_property_value := ''

(: let $uris := cts:uris("",(),cts:collection-query("UNITY-UNMATCHED")) :)

let $uris := cts:uris("",(),cts.search(cts.andQuery([
  cts.collectionQuery(collection_name),
  cts.jsonPropertyValueQuery( rev_type_property_name, rev_type_property_value ),
  cts.jsonPropertyValueQuery( red_ind_property_name, red_ind_property_value )
])))

return (count($uris), $uris)
```

* transform.xqy

```
xquery version "1.0-ml";
declare variable $URI as xs:string external;
xdmp:document-delete($URI)
```

## Load Data with Node

The MarkLogic node.js client API can be found [here](https://developer.marklogic.com/products/node/).

### XLSX to JSON

Need to load xlsx as JSON into MarkLogic? Here you go,

```javascript
// npm i marklogic --save
// npm i throttled-queue --save
// npm i xlsx-to-json --save

const xlsxj = require("xlsx-to-json");
const tq = require('throttled-queue');
const settings = require('./settings')
const ml = require('Marklogic');
const dbWrite = ml.createDatabaseClient(settings.options.local);

var throttle = tq(150,1000);
var options = {input:"./data/book1.xlsx", output: "./output/book1.json"};
var callback = function(err,result){
  if(err){
    console.log(err);
  }
  else{
    buildDocs(result);
  }
};

function buildDocs(doc){
  let newJSONDoc = [];
  doc.forEach((d) => {
    let eventID = d.eventid;
    let date = eventID.substr(0,4) + '-' + eventID.substr(4,2) + '-' + eventID.substr(6,2);
    let time = genRandomTime();
    let dateTime = date + time;
    newJSONDoc.push(
      {
        eventID: eventID,
        date: dateTime,
        ...
      }
    );
  });

  writeToML(newJSONDoc);
};

function genNum(max){
  let i = Math.floor(Math.random() * (max - 0)).toString();
  if(i.length <= 1){
    i = '0' + i
  };
  return i;
}

function genRandomTime(){
  let time;
  let hours = genNum(24);
  let mins = genNum(60);
  let secs = genNum(60);

  time = `T${hours}:${mins}:${secs}Z`

  return time;
}

function writeToML(doc){
  for(let i = 0; i < doc.length; i++){
    throttle(function(){
      let uri = `/${doc[i].eventID}.json`
      console.log(uri);

      dbWrite.documents.write({
        uri: uri,
        contentType: 'application/json',
        content: doc[i]
      }).result()
      .then(response => console.log(response))
      .catch(error => console.log(error));
    });
  };
};

xlsxj(options,callback);
```

Couple of issues were encountered while writing this one. The first problem was memory issues from node when run against xlsx larger than around 20mb. Watching the node process memory I could see it increase up to a maximum of around 4GB. Node has a defult memory limit of 512MB. When run, the app would throw the following error,<br>

<span style="color:red">FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory</span><br>

To workaround this problem, run node as follows,

* *node **--max-old-space-size=4096** app.js*<br>

After getting around this little problem I started to encounter errors which at first glance appeared to be resource related. When the app was run against xlsx of around 20MB errors like this would be reported,

```
{ Error: read ECONNRESET
    at TCP.onread (net.js:602:25) errno: 'ECONNRESET', code: 'ECONNRESET', syscall: 'read' }
```
ECONNRESET means that the connection was closed. But why? I suspected I was throwing to many requests to quickly for the DB to handle. <br>

And on anything much larger than 20MB, I found further errors like,

```
{ Error: connect EMFILE 127.0.0.1:8070 - Local (undefined:undefined)
    at internalConnect (net.js:940:16)
    at defaultTriggerAsyncIdScope (internal/async_hooks.js:281:19)
    at GetAddrInfoReqWrap.emitLookup [as callback] (net.js:1093:9)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:72:10)
  errno: 'EMFILE',
  code: 'EMFILE',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 8070 }
```
The error code **EMFILE** means that a process is trying to open too many files and the system has not allocated enough file handlers to cater for the app. I could have looked to increase the limits but thought a better solution was to try to control it from the app instead.<br>

These errors suggested to me that I needed to be able to throttle my requests to the database. I ended up implementing the [throttled-queue](https://www.npmjs.com/package/throttled-queue) library. The only issue now is that the app does not exit after completion of the load but that's a problem for another day.

### Recursive Data Loader

```javascript
//settings.js
const options = {
    database: {
        host: 'localhost',
        port: 8095,
        user: 'username',
        password: 'pword'
    }
};

module.exports = {
    options
};
```

```javascript
//app.js
const fs = require('fs');
const path = require('path');
const settings = require('./settings');
const marklogic = require('marklogic');
const dbWrite = marklogic.createDatabaseClient(settings.options.decMapModules);
const extFilter = '.sjs'
const myPath = '/Development/JavaScript/someProject/src/main/ml-modules/';

function dirwalker(dir, done) {
    let results = [];

    fs.readdir(dir, function (err, list) {
        if (err) return done(err);

        var pending = list.length;

        if (!pending) return done(null, results);

        list.forEach(function (file) {
            file = path.resolve(dir, file);

            fs.stat(file, function (err, stat) {
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    dirwalker(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    if (file.indexOf(extFilter) >= 0){
                        results.push(file);

                        writeFile(file)
                    }
                    // !-- decrement pending
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

function writeFile(file){
    // Modify to build the uri you require
    uri = file.substring(file.indexOf('root')+4);
    content = fs.readFileSync(file,'utf8');

    // Write the content to MarkLogic
    dbWrite.documents.write({
        uri: uri,
        contentType: 'application/text',
        content: content
    }).result()
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

dirwalker(myPath, function(err, data){
    if(err){
        throw err;
    }
});
```

## Read Data with Node

The MarkLogic node.js client API can be found [here](https://developer.marklogic.com/products/node/).

```
$ cd <into the project directory>
$ npm i markLogic
```

Create the dependency for the MarkLogic node.js client,
```javascript
const marklogic = require('marklogic'),
```

Create a Database Connection;
```javascript
const db = marklogic.createDatabaseClient({
 host: 'localhost',
 port: 8075,
 user: 'username',
 password: 'password',
 authType: 'digest'
});
```

Execute the read,
```javascript
const uri = '/testing/documentOne';
db.documents.read(uri).result()
 .then(response => console.log(response))
 .catch(error => console.log(error));
```
