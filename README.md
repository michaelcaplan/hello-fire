JS Refresher
============

From [Learn X in Y minutes](https://learnxinyminutes.com/docs/javascript/)

# Variables, Arrays and Objects

Variables are declared with the `var` or `let` keyword.
Assignment uses a single `=` character.

```javascript
var someVar = 5;
```

Arrays are ordered lists of values, of any type.
```javascript
var myArray = ["Hello", 45, true];
```

Their members can be accessed using the square-brackets subscript syntax. Array indices start at zero.
```javascript
myArray[1]; // = 45
```

JavaScript's objects are an unordered collection of key-value pairs.
```javascript
var myObj = {key1: "Hello", key2: "World"};
```

# Logic and Control Structures

The `if` structure works as you'd expect.
```javascript
var count = 1;
if (count == 3){
    // evaluated if count is 3
} else if (count == 4){
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4
}
```

The `for` loop has three parts:
initialization; continue condition; iteration.
```javascript
for (var i = 0; i < 5; i++){
    // will run 5 times
}
```

The for/in statement allows iteration over properties of an object.
```javascript
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    description += person[x] + " ";
} // description = 'Paul Ken 18 '
```
The forEach menthod of an array allow iteration

```javascript
var items = ['one', 'two', 'three'];
items.forEach(function (item) {
    console.log(item);
});
```

# Functions

JavaScript functions are declared with the `function` keyword.
```javascript
function myFunction(thing){
    return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"
```
JavaScript functions are first class objects, so they can be reassigned to different variable names and passed to other functions as arguments - for example, when supplying an event handler:

```javascript
function myFunction(){
    // this code will be called in 5 seconds' time
}
setTimeout(myFunction, 5000);
```

Hello Serverless Infrastructure
=================

[Firebase](https://youtu.be/iosNuIdQoy8)

[Firestore](https://youtu.be/QcsAb2RR52c)

Firebase Console
================

[https://console.firebase.google.com/](https://console.firebase.google.com/)

Login:  coders@refreshannapolisvalley.org
Pass:  ******

index-0.html
============

create function to add a person


Syncronous vs Asyncronous
=========================

![Image](https://cdn.glitch.com/96c06507-589d-4256-ace8-0a98fa8a2be6%2Fpromise1.gif?1544195344473 "Waiting Around")

![Image](https://cdn.glitch.com/96c06507-589d-4256-ace8-0a98fa8a2be6%2Fsync-async.gif?1544195344310 "sync vs async")