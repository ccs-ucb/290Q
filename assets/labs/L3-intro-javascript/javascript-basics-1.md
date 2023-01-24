# Lab 2: A Basic Introduction to JavaScript

A whirlwind introduction to the basics of Javascript.

## Setup

1. Make a new directory (folder) in your course directory for this lab.  
2. Create a new file in this directory called `experiment.html`
3. Paste the following code chunk into the file

```html
<!DOCTYPE html>
<html>
	<body>

		<h1>JavaScript Introduction</h1>

		<p>In this tutorial, we will learn how to use javascript to create variables and functions, and use these to modify your html code.</p>

		<!-- Here's an empty paragraph (a paragraph object with no text in it) 
		-- we will use javascript to add text here ) -->
		<p id="tutorial_paragraph"></p>

		<!-- Here's where our javascript code will go -->
		<script></script>

	</body>
</html>
```

The code chunk above should have some structure that looks familiar. It uses the `<body>` tags to create the body of the page content. It includes a heading (`<h1>`), and two seperate paragraphs (using the `<p>` tags).

Notice that there are two new things:

- **Paragraph name** In the second paragraph object, we gave the paragraph a name (`tutorial_paragraph`), using the `<p id=tutorial_paragraph>` syntax within the opening paragraph tag. 

- **Script section** We have introduced a new pair of tags, `<script></script>`. Our javascript code will go between these tags. 

## Creating variables

Variables let you store pieces of information and give each piece of information a name. Here are a few examples. 

### Storing and manipulating numbers

Let's make a variable `x` and assign it the value `3`. The simplest way to make a variable in Javascript is to use the `var` keyword:

```js
var x = 3
```

*Note:* in other tutorials you might see the key words `let` and `const` replacing `var`. We'll talk about that later in the course, but for most purposes we will use the `var` keyword, which you can treat as interchangeable with these alternatives for now.  

Add the following code into the `script` section of your file `experiment.html`:

```js
var x = 3
var y = 9
var z = 120
var myTotal = x + y + z
console.log(x)

```

Your file `experiment.html` should now look like this in full:

```html
<!DOCTYPE html>
<html>
	<body>

		<h1>JavaScript Introduction</h1>

		<p>In this tutorial, we will learn how to use javascript to create variables and functions, and use these to modify your html code.</p>

		<!-- Here's an empty paragraph (a paragraph object with no text in it) 
		-- we will use javascrip to add text here ) -->
		<p id="tutorial_paragraph"></p>

		<!-- Here's where our javascript code will go -->
		<script>
			var x = 3
			var y = 9
			var z = 120
			var myTotal = x + y + z
			console.log(myTotal)
		</script>

	</body>
</html>
```


**Checkpoint one:** Open the page in your Browser, and open up the *Javascript console*. If you're using Google Chrome, you do this by selecting `view > developer > Javascript Console`. If you are using an apple computer, the keyboard shortcut to open the console in Chrome is `CMD + Option + j`. Browsers other than Chrome will also have a javascript console, but you might need to look up online how to access it if it's not clear. **What do you see in the console?**

**Excersise:** edit your javascript code to subtract `x` and `y` from `z` and assign the result to a new variable called `mySubtraction`. Log the `mySubtraction` into the Javascript Console. *What is the result?*


*Note:* The names of variables can be anything you like, but they are not allowed to include spaces. In javascript, it's conventional to use [Camel Case](https://en.wikipedia.org/wiki/Camel_case). From Wikipedia:

> Camel case (sometimes stylized as camelCase or CamelCase, also known as camel caps or more formally as medial capitals) is the practice of writing phrases without spaces or punctuation. The format indicates the separation of words with a single capitalized letter 


### Storing and manipulating strings

Letters and words are a datatype called `strings` in many programming languages. They're simple to create in Javascript, using double quotation marks (`"`) to signal the start and end of a `string`:

```js
var myFavoriteColor = "neon yellow"
var funFact = "Here's a fun fact. My favorite color is: "
``` 

You can add strings togethor:

```js
var combinedStrings = funFact + myFavoriteColor
```

and even add numbers into strings:

```js
var myFavoriteNumber = 11
var myText =  "My favorite number is: "
var result = myText + myFavoriteNumber
```

**Excersise:** Edit your Javascript code to include a string variable describing introducing  

### Storing information in arrays

Put simply, an `array` is another word for a list. Here's an example of how you could stor numbers in an array:

```js
var myFirstArray = [84, 2, 6];
```

Arrays can hold all types of information, not just numbers. Here's another example, an array containing two strings:

```js
var mySecondArray = ["hello", "friends"];
```

Arrays can also hold variables, and mixtures of information types. For instance:

```js
var myOtherFavoriteNumber = 26
var myThirdArray = ["Bonjour", myOtherFavoriteNumber, "November"]
```

You can add a new pieace of information to an existing array using the syntax `myArray.push(newThing)`:

```js
var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday"];
weekdays.push("Friday");
console.log(weekdays) // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
```

*Note:* In javascript, use double forward slashes to add a comment: `// comment goes here`.

**Excersise:** Edit your Javascript code to create an array that contains three of your family members' names. Afterwards, add a fourth name into the array using the `.push()` method. Use `console.log()` to take a look at your array after adding the new name.

Finally, let's see how to access entries in an array. You use square brackets `[]` after the name of the array (with no space) to access an element. You use a number inside the square brackets to say which element you would like to access. Here's how you would access the second element of the `weekdays` array:

```js
var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var secondArrayElement = weekdays[1];
console.log(secondArrayElement)
```

**What will happen here?** Note that I used the index `1` to access the second element. **That's not a typo!** For reasons we can discuss if you like, when indexing positions in an array, we start from `0`. This is called [Zero baased numbering](https://en.wikipedia.org/wiki/Zero-based_numbering). So `0` indexes the first element, `1` indexes the second element, `2` indexes the third element, etc.

**Checkpoint 2:** Access the string `"Thursday"` from the weekdays array and log it to the console. Which index did you use to access the correct array element?


## Interacting with HTML elements
So far we've used javascript to create and manipulate variables. We have used `console.log()` to look at the values of our variables in the developer console. Let's move on: now we'll see how we can use our javascript code to manipulate objects in our HTML page.

The [W3 School tutorial](https://www.w3schools.com/js/js_output.asp) on `Javascript Output` lists four ways that Javascript can "display" data. 

- > Writing into the browser console, using `console.log()`
- > Writing into an alert box, using `window.alert()`
- > Writing into an HTML element, using `innerHTML`
- > Writing into the HTML output using `document.write()`

In our tutorial, we're going to focus on using `innerHTML`. This is going to involve two steps.

1. Selecting an element from the HTML page that we wish to modify
2. Manipulating that element


### Step One: Selecting an element to modify

A reminder of our basic HTML code setup:

```html
<!DOCTYPE html>
<html>
	<body>

		<h1>JavaScript Introduction</h1>

		<p>In this tutorial, we will learn how to use javascript to create variables and functions, and use these to modify your html code.</p>

		<!-- Here's an empty paragraph (a paragraph object with no text in it) 
		-- we will use javascript to add text here ) -->
		<p id="tutorial_paragraph"></p>

		<!-- Here's where our javascript code will go -->
		<script></script>

	</body>
</html>
```

Rememeber the empty paragprah we included and gave a name? The relevant line is: `<p id="tutorial_paragraph"></p>`. Suppose we want to use JavaScript to add some content to this paragraph. Because it has a name (an `id` field), we can select it like this: 

```js
document.getElementById("tutorial_paragraph")
```

We can use this method to assign it to a variable:

```js
var myParagraph = document.getElementById("tutorial_paragraph")
```

### Step Two: Editing the content
Using the `.innerHTML()` method, we can change the content. We can use any valid HTML code to edit the content, but let's start with a simple string. Here's an example:

```js
myParagraph.innerHTML = "Please read these instructions."
```

Here's a more complex eample:

```js
var myParagraph = document.getElementById("tutorial_paragraph")
var myNewHTML = "<hr><strong>Attention:</strong> Please read the instructions carefully.<hr>"
myParagraph.innerHTML = myNewHTML
```
Here's how that woud look in the context of our full code:

```html
<!DOCTYPE html>
<html>
	<body>

		<h1>JavaScript Introduction</h1>

		<p>In this tutorial, we will learn how to use javascript to create variables and functions, and use these to modify your html code.</p>

		<!-- Here's an empty paragraph (a paragraph object with no text in it) 
		-- we will use javascript to add text here ) -->
		<p id="tutorial_paragraph"></p>

		<!-- Here's where our javascript code will go -->
		<script>
			var myParagraph = document.getElementById("tutorial_paragraph")
			var myNewHTML = "<hr><strong>Attention:</strong> Please read the instructions carefully.<hr>"
			myParagraph.innerHTML = myNewHTML
		</script>

	</body>
</html>
```

**Checkpoint 3:** Use the code above in your HTML page. Open the page in your browser. What do you see?

**Excersise:** Edit the Javascript in the code above to do three things:

1.  Create an array variable containing strings for the names of two common animals.
2.  Select the empty paragraph
3.  Edit the text of the empty paragraph so that it displays the names of both animals in the array and asks: *Which of these animals is larger?*

**Next session:** Objects, conditionals, and functions in Javascript.  