# Lab 4: JavaScript Objects, Conditionals, and Functions

## Setup

1. Create an empty file `experiment.html` and add the following code chunk:

```html
<!DOCTYPE html>
<html>
	<body>
		<h1>JavaScript Objects, Conditionals, and Functions </h1>
		<script type="text/javascript">
		</script>
	</body>
</html>
```

2. Create an empty file called `notebook.md`

Add the following code into it:

```md
# My javascript notebook
## Objects 
```
3. Install a Markdown viewer

On a mac I use [Macdown](https://macdown.uranusjr.com/). Alternatively you can install a Markdown viewer as a Google Chrome extension [such as this one](https://chrome.google.com/webstore/detail/markdown-viewer/) 

## Review

Last lab we saw how to create variables for three data types: numbers, strings, and arrays. 

Here are some examples:

```js
var x = 3;
var myarray = [];
myArray.push(4)
var name = "Simon"
```

Today, we will start by introducing JavaScript's flagship data type: the *Object*.

## Objects

Objects allow you to store multiple pieces of information. Here's an example:

```js
var meal = {
	starter: "olives",
	main: "jambolaya",
	desert: "ice cream",
	price: 32,
	drinks: ["water", "soda"]
};
```

In this example, the meal is an `object` and we say that the different parts of the meal are its `properties`. Each property (e.g. *price*) is defined by a `name: value` pair. Some notes about the syntax:

- curly brackets delimit the `object`
- commas seperate `properties`
- a colon seperates the `name` and `value` of an object
- values can be any data type

You can access the properties of an object using their names. For example:

```js
console.log(meal.starter)
var check = "The total for your meal is: " + meal.price
```

**Excersise:** Create a javascript object that represents something fun in your life, e.g. your car and its properties, or a friend and their properties, or a trip you took for example. Add the code into your page `experiment.html` and log some properties of the object into the console. Show your code to the person next to you in class. Once you're happy it works, add it to your notebook!

## Conditionals

Conditionals allow you to execute different pieces of code in different situations. For example, in an experiment we might want to check which treatment a participant has been assigned to, and create different stimuli depending on which treatment they were assigned. To do this, we can use the `if` statement.

### The `if` statement

An example:

```js
var x = 6
if (x < 10) {
  console.log("X is smaller than 10")
}
```

The example above uses `<`, which is new to us. It is a [comparison operator](https://www.w3schools.com/js/js_comparisons.asp), which checks if the thing on the left of it is smaller than the thing on the right of it. 

Here's an example using a different comparison operator, `==`. In javascript, you can use `==` (note that this is *two* equals signs) to check whether one thing is equal to another. 

```js
var weather = "sunny"
if (weather == "rainy") {
  console.log("Take an umbrella!")
}
```

Note the difference between using `=` and `==` here. We use `=` to assign a variable. We use `==` to check if two things are the same.

Notes on the syntax:

- start with the keyword `if`
- followed by the `condition` inside parantheses 
- followed by whatever code you want to run if the condition is met, wrapped inside culy brackets (`{}`)

## `if-else` statements

You can combine an `if` statement with an `else` statement. Here's an example:

```js
if (weather == "rainy") {
  console.log("Take an umbrella!");
} else {
  console.log("You don't need your umbrella");
}
```

Learn more about conditionals in javsacript [here](https://www.w3schools.com/js/js_if_else.asp).  

**Excersise:** Write code that creates an object containing at least two properties whose values are numbers (e.g. `var weekdays = {Monday: 1, Tuesday: 2}`), then write code containing a conditional statement that compares whether one object is larger than another. Use `console.log()` to print out the outcome.  

## Functions

Put simply, functions allow you to give a chunk of code a name, and to specify what information it need to do its job. From [this tutorial](https://www.w3schools.com/js/js_functions.asp)

> A JavaScript function is a block of code designed to perform a particular task.

> A JavaScript function is executed when "something" invokes it (calls it).

Why use functions?

> You can reuse code: Define the code once, and use it many times.

> You can use the same code many times with different arguments, to produce different results.

Here's the basic anatomy of a function in JavaScript:

```js
function myFirstFunction(number) {
	console.log("Here is the number: " + number)
}
```

Some notes on the syntax here:

- use the keyword `function` to tell JavaScript you are declaring a function
- the function `name` follows the keyword. 
- parentheses follow the function name, and any `arguments` (or `inputs`)required by the function should be specified inside the parentheses
- whatever code you want to the function to execute goes inside curly brackets (`{}`) that follow the parentheses.

To use this function, you must `call` it. To `call` a function, type its name followed by parentheses, remembering to include the `argument`.

```js
// call the function
myFirstFunction(32)
```

Here's a slightly more compelx example, using an `if` statement inside the function, taking two `arguments`, and `return` ing either the `true` keyword or the `false` keyword:

```js
function comprehensionCheck (buttonPressOne, buttonPressTwo) {
	if (buttonPressOne == buttonPressTwo) {
		console.log("The participant clicked the same button twice")
		return true
	} else {
		console.log("The participant clicked different buttons")
		return false
	}
}
```

**Excersise:** Write a function that expects two arguments, `name` and `age`. Inside the function, write code that creates an object `person` that has two properties reflecting their name and age. Return the object. Show your code to someone nearby and ask them to lok for potential errors. Then add the code to your HTML page. Things are likely to go wrong when you first try this excersise. Working through and fixing errors is an important part of the goal.

If you would like to see an example first, Hhere's an analagous pieace of code:

```js
function makeCarObject(mileage, year) {
	var car = {
		distance: mileage,
		age: year
	}
	return car
}

var myCar = makeCarObject(26002, 2008)
console.log(myCar)
```

When we put this code into our html page it would look like this:

```html
<!DOCTYPE html>
<html>
	<body>
		<h1>JavaScript Objects, Conditionals, and Functions </h1>
		<script type="text/javascript">
		function makeCarObject(mileage, year) {
			var car = {
				distance: mileage,
				age: year
			}
			return car
		}

		var myCar = makeCarObject(26002, 2008)
		console.log(myCar)
		</script>
	</body>
</html>
```