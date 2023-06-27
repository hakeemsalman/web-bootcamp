# Intermediate JavaScript

# Random Generator

`Math.random();` give a random decimal number length of `16` digit length size.

It generate from `0` to `0.9999999999999999`

> `var num = Math.random();` // 0.8933523638168663

```js
var number = Math.random();
console.log(number);
Math.floor(number*6);
// Here numbers show only 0 to 5 
```

## Exercise
Make a love percent generator (Just for Fun & Learn)

```js
var firstName = prompt("What's your firstName?");
var secondName = prompt("What's your secondName?");
var number = Math.random();
number = number* 100;
alert("Your love is "+Math.floor(number)) + "%";
```

# If else

```js
var firstName = prompt("What's your firstName?");
var secondName = prompt("What's your secondName?");
var number = Math.random();
number = number* 100;
if(number === 100){ // (number > 70)
    alert("Your love is "+Math.floor(number)) + "%, You both love each other like Kanye and Kanye!";
} else{
    alert("Your love is "+Math.floor(number)) + "%";
}
```

# Comparaters & Equality

`===` is `equal` to  
`!==` is `Not equal` to  
`>`   is `greater` than  
`<`   is `lesser` than  
`>=`  is `greater or equal` to   
`<=`  is `lesser or equal` to   

```js
var a = 1;
var b = "1";

if(a === b){
    console.log("Yes!");
} else {
    console.log("No!");
}
// No!


if(a == b){
    console.log("Yes!");
} else {
    console.log("No!");
}
// Yes!
```
> Three equal sign `===` means, it check the Data Type  and value. But where as two equal sign `==`, it only check the value and Do Not care about Data Type 

- **Combiners**

1. `&&` AND  
2. `||` OR   
3. `!`  NOT



