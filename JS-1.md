# JavaScript

## 1 Introduction to JS

- Netscape is the Dominent of browser in 1990's
- Mark Andreesen
- Mosoic
- windows 95

- Brendan Eich

1. LiveScript
2. JScript - Microsoft
3. Javascript - ECMAScript (Europeon Computer Manufacturer Association)

What is Script?
Script is just a sequence of task to do.

```
Suppose: Actors
(After Gwyneth appears on stage for 1 second Brad appears.)
Gwyneth: "Hello."
    (Delay 1 sec)
Brad: "World!"
```

Java vs JavaScript [Youtube video](https://www.youtube.com/watch?v=_C5AHaS1mOA)

- Java and JavaScript are both different language.
- Imagine Car and Carpet. are Both same? NO, right!
- So similarly both Java & JS are different in terms all factors

1. Java - compiled language, JS - interpreted language
2. Java- Fast running program, JS - Slow running program

## 2 Javascript Alerts

- Chrome -> Developer Tools -> Sources -> Snippets

- New snippets -> `alert("Hello world!");` -> Run (alt + Enter)
- Same below line type -> `say("Hello world!");` -> Run (alt + Enter) -> _Error_ becoz `say()` is not a function

- Or **you can write in seperate documnet _html_ file**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      alert("Hello world!");
    </script>
  </body>
</html>
```

[https://developer.mozilla.org/en-US/docs/Web/API/Window/alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

> window.alert() instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

![js-alert.png](./assets/JS/js-alert.png)

- You can use both single quote (`' '`) or double quore (`" "`) but most programmers PREFER `Double Quotes`.

## 2 Data Types

- String - "Hello"
- Number - 123
- Boolean - true false

> `typeof("Hello World!")` ---> String `typeof(341)` ---> number

## Variables

`prompt()` ---> is similar to `alert()` function but `prompt()` ask input from the user.

> variables is memory that store information

```js
var myName = "Salman";

// output
/*
    myName; --> Salman
*/
```

```js
var myName = "Salman";
myName = "Shaik";
// output
/*
    myName; --> Shaik (because value is overwritten with new value and old is deleted).
*/
```

```js
var myName = "Salman";
var yourName = prompt("What is your name?");

// output
/*
    myName; --> Shaik (because value is overwritten with new value and old is deleted).
*/
```

### Concatenate

we are using plus operator `+` to join both string

```js
alert("Hi " + myName);
```

### Exercise 1

Given the existing code below, can you write some code so that their values are switched around?

`var a = "3";`  
`var b = "8";`
So that the variable a holds the value "8".
And the variable b holds the value "3".
When the code is run, it should output:
`a is 8`  
`b is 3`  
Do NOT change any of the existing code.
You are NOT allowed to type any numbers.
You should NOT redeclare the variables a and b.
Hint: The solution is just 3 lines of code.

```js
function test() {
  var a = "3";
  var b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}
```

**_SOLUTION_**

```js
var temp = a;
a = b;
b = temp;
```

## Naming Conventions

Google search

- camelCase
- No space
- No number at starting a word

## Strings

` "a" + "b"` --> `"ab"`

**String Property**

1. length

```js
var myName = "Salman";
myName.length; // 6
```

Twitter character counter
[https://charactercounter.com/twitter](https://charactercounter.com/twitter)

How they are calculating the length of characters of a sentences.

### Exercise

calculate a twitter length of characters.

```js
var tweet = prompt("Tweet para");
console.log(
  "You entered " + tweet + " and " + tweet.length + " letters long :)"
);
```

## Slicing

`slice(start,end)` method removes the characters from the string

```js
var name = "salman";
name.slice(0, 1); // "s"
name.slice(3, 4); // "m"
name.slice(0, 3); // "sal"
```

### Exercise

Write a code for twitter character counter and count only 140 characters and remaining remove from the sentences.

```js
var tweet = prompt("Tweet para");
alert("You entered " + tweet.slice(0, 140));
```

## Change casing in Text

`toUpperCase()` this function is used for changing the word in upper case letters.

```js
var name = "Salman";
name = name.toUpperCase();
```
