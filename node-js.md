# Back End

Y combinator - Paul Graham

Full stack = Front end + Back end

Server is computer that connected to networks
Application is Logic Respond to request
Database is used to store the data - Persist the information 


## Node.js

Why we need framework?
Framework is pre-built componet and create a finish products to build an application without writing code from scratch.

What is Node.js?
As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. [https://nodejs.org/en/about](https://nodejs.org/en/about)

Javascript runs on V8 engine [https://en.wikipedia.org/wiki/V8_(JavaScript_engine)](https://en.wikipedia.org/wiki/V8_(JavaScript_engine))


## Using Node.js

Node Read Eval Print Loop (Node REPL) is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.

In terminal, just type `node` and hit enter.

> $ node

You will see the welcome note(you are in REPL environment)and right hand arrow `>` and type `.help`, to know about REPL.

`ctrl` + `c` to exit the REPL environment

create a `index.js` file in any folder like (Node folder), write a code `console.log("Hello world!")` and then open terminal type `node index.js`. You will see the output as `Hello world!`.

## How to Use the Native Node Modules

Native node modules?
It's a pre-built components to work on node js environment.

Here we are using CJS - Common JavaScript, ESM(ECMAScript Module) we will next lesson.

## Write a file having 'Hello World!' text using fs.writefile

[Node/01](./assets/Node/01/index.js)

[https://nodejs.org/dist/latest-v18.x/docs/api/fs.html](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html)
fs means File system.

[fs.writefile](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fswritefilefile-data-options-callback)

```js
const fs = require("fs");

fs.writeFile("message.txt", "Hello World!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
```

## Read a file using fs.readFile

[Node/02](./assets/Node/02/index.js)

[Link](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsreadfilepath-options-callback)

```js
const fs = require("fs");

fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
```

## The NPM Package Manager and Installing External Node Modules

[NPM -  Node Package Manager](https://www.npmjs.com/)

[Node/03](./assets/Node/03/index.js)

To initialize npm we have to use `npm init` in  terminal

```bash
$ npm init
```
Then it shows on screen a utility will walk you through creating a package.json file.
Type the information based on it ask.

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Salman",
  "license": "ISC"
}
```

## Install npm pacjage 

Search in [NPM -  Node Package Manager website](https://www.npmjs.com/) as `sillyname`. A random name generator.

```bash
$ npm install <something>
```
we can write `i` instead of `install`, it's an short-hand command.

```bash
$ npm i sillyname
```
From website copy the two lines of code and paste into `index.js`

```js
var generateName = require('sillyname');
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
```

- Run index.js in terminal `node index.js`


### ECMAScript Module

To use ESM, we have to add dependencies in `package.json` file as `"type":"module",`.

```js
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type":"module", // <<=======
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Salman",
  "license": "ISC"
}
```

`ESM` is new module. Default type is `CJS`

1. CJS
```js
var pack = require('<packageName>');

var pack = require('sillyname');
```

2. ESM
```js
import pack from "<packageName>";

import pack from "sillyname";
```


```js
// var generateName = require('sillyname');

import generateName  from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
```

### Challenge superheroes

npm package superheroes [creator inspiration](https://github.com/sindresorhus)

### Challenge QR-code

1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.

#### Steps

1. install `inquirer` and `qr-image` npm and type `npm init`
2. see the this below code
3. run the index.js by typing `node index.js`


```js
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const input = answers.url;
    var qr_svg = qr.image(input, { type: "svg" });
    qr_svg.pipe(fs.createWriteStream("image-qr.svg"));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Erro: cannot be rendered");
    } else {
      // Something else went wrong
      console.log("Error undefined");
    }
  });

```


