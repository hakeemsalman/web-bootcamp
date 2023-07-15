# jQuery

jQuery is Library created by John Resig. 

To add html jQuery script, just to this [link](https://developers.google.com/speed/libraries#jquery) and copy that line and paste into your html

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>`

jQuery should be like shown below. Add this script to bottom of body html and above top to the your custom own script

```html
<body>
    <h1>Hello</h1>
    <h2>World!</h2>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="index.js"></script>
</body>
```

Suppose I have custom code on script that to change the `h1` color by click on `body`

```js

for(var i = 0;i<document.querySelectorAll("button").length;i++){
    buttonList[i].addEventListener("click",function(){
        document.querySelector("h1").style.color = "red";
    });
}
```

In jQuery the code looks like this,

```js
$("button").click(function(){
    $("h1").css("color","red");
})
```

It is similar as Boostrap, just writing the class name in html and here we have to write `$` and some pre-build function name.

`document.querySelector("h1")`  --> `jQuery("h1")`   or  `$("h1")`

NOTE:
Now if in rare cases, the jQuery script does not load before custom script then use this function
```js
$(document).ready(function(){

    // all script code inside this function
})
```

## How Minification Works to Reduce File Size

if you open this js link [https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js), you will see minified version of script.

Minified version script means it's a less byte code and removal of unnecessary spaces and comments

Example:
_____________________

```js
// This is human readible version and it has one comment
var buttonList = document.querySelectorAll("button");
for(var i = 0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function(){
        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
})

function makeSound(keyPress){
        switch (keyPress) {
            case "w":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;

            case "j":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;
            case "l":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;
            default:
                break;
        }
}
```

Minified version of above script [link](https://www.minifier.org/), minifier generator

```js
for(var buttonList=document.querySelectorAll("button"),i=0;i<buttonList.length;i++)buttonList[i].addEventListener("click",(function(){makeSound(this.innerHTML)}));function makeSound(e){switch(e){case"w":new Audio("./sounds/tom-1.mp3").play();break;case"a":new Audio("./sounds/tom-2.mp3").play();break;case"s":new Audio("./sounds/tom-3.mp3").play();break;case"d":new Audio("./sounds/tom-4.mp3").play();break;case"j":new Audio("./sounds/snare.mp3").play();break;case"k":new Audio("./sounds/kick-bass.mp3").play();break;case"l":new Audio("./sounds/crash.mp3").play()}}document.addEventListener("keypress",(function(e){makeSound(e.key)}));
```

## Selecting Elements with jQuery

```js
$("h1").css("color","green"); // set method adding green color to h1 tag

$("h1").css("color"); // get method of h1 tag

$("h1").css("font-size");
```

```html
<body>
    <h1>Hello</h1>
</body>
```
```css
.big-title{
    color: yellow;
    font-size: 10rem;
    font-family: cursive;
}
.margin-50{
    margin: 50px;
}
```
```js
$("h1").addClass("big-title");

$("h1").addClass("big-title margin-50");  // add multiple classes

$("h1").removeClass("margin-50"); // remove the class

$("h1").hasClass("big-title"); // return true or false
```


## Manipulating Text with jQuery

```html
<body>
    <h1>Hello world!</h1>
    <button>Click me</button>
    <button>Click me</button>
    <button>Click me</button>
    <button>Click me</button>
    <button>Click me</button>
</body>
```

```js
$("h1").text("Bye"); // add text inside parathesis and .text is used for replacing the text inside the element

$("button"); // list the all elemets, as above code we have 5 buttons

$("button").text("Don't click me"); // change all buttons text with one line of code

$("button").html("<em>Hi</em>");// html means in vanila javascript `innerHTML`
```

## Manipulating Attributes with jQuery

```js
$("img").attr("src"); // get method(only one parameter) returns the location src name of an image

$("a").attr("href", "www.yahoo.com"); // set method(need 2 params) set the params

$("h1").attr("class");
```


## Adding Event Listeners with jQuery

```html
<body>
    <h1>Hello world!</h1>
</body>
```

```js
$("h1").click(function(){
    $("h1").css("color","yellow");
});
```
--
---
--
How we use in vanila js for looping the button and changing is color style
```html
<body>
    <button>Click me</button>
    <button>Click me</button>
    <button>Click me</button>
    <button>Click me</button>
    <button>Click me</button>
</body>
```

```js
$("button").click(function(){
    $("h1").css("color","yellow");
});
```
