# An Introduction to [jsPsych](https://www.jspsych.org/7.0/)

## Setup

Let's dive straight into jsPsych. As usual, create an empty HTML document called `experiment.html`, and add in the following code chunk:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first jsPsych experiment</title>
    <script src="https://unpkg.com/jspsych@7.0.0"></script>
  </head>
  <body></body>
</html>
```

Can you see what's new here? In the `<head>` section, we added a line that imports the jsPsych library by downloading it from the web.

```html
<script src="https://unpkg.com/jspsych@7.0.0"></script>
```	

Let's also import the jsPsych style sheet, which will make our html look better. To do that, add this line into the head section:

```html
<link href="https://unpkg.com/jspsych@7.0.0/css/jspsych.css" rel="stylesheet" type="text/css" />
```

Now we have imported the jsPsych library, let's set up an experiment. 

## A very simple experiment

To build a jsPsych experiment, we need to do write javascript code that does three things:

1. Initialize jsPsych
2. Create a [*timeline*](https://www.jspsych.org/7.0/overview/timeline/)
3. Run the timeline

We'll step through these goals seperately.

### Initialize jsPsych

This part is simple. First, we're going to need a `<script></script>` section in our page to add JavaScript code into. Then we're going to initialize the jsPsych library and assign it to a variable called jsPsych, so that we can interact with it's functionality through the variable.

```js
var jsPsych = initJsPsych();
```
We will put this code into the `<script></script>` section shortly.


### Creating a timeline of trials

The core abstraction in jsPsych is the `timeline`. We will construct an experiment by creating a timeline that is made up of individual `trials`. We'll start by creating an empty timeline and then adding a trial. In jsPsych, each trial is an `Object`. We can make an empty timeline (just an empty `array`), then make the object, and then push the object into the timeline. Here's an example:

```js
var timeline = [];

var keyboardTrial = {
	type: jsPsychHtmlKeyboardResponse,
	stimulus: '<h1>Press any key to finish the experiment.</h1>'
}

timeline.push(keyboardTrial)
```

Notice that the trial object is just a regular JavaScript object. It must have a property `type` that refers to a jsPsych [Plugin](https://www.jspsych.org/7.0/overview/plugins/). From the jsPsych websiite:

> In jsPsych, plugins define the kinds of trials or events that should occur during the experiment. Some plugins define very general events, like displaying a set of instructions pages, displaying an image and recording a keyboard response, or playing a sound file and recording a button response. Other plugins are more specific, like those that display particular kinds of stimuli (e.g., a circular visual search array), or run a specific version of particular kind of task (e.g., the Implicit Association Test). Part of creating an experiment with jsPsych involves figuring out which plugins are needed to create the tasks you want your participants to perform.

In the code above, we have used the [jsPsychHtmlKeyboardResponse](https://www.jspsych.org/7.0/plugins/html-keyboard-response/) plugin, which displays HTML content and waits for the participant to press a key. This particular plugin requires that you specify the `stimlulus` property, which is a string of html code that determines what is presented on screen.


To make any plugin available, we need to import it in the same way we imported jsPsych. In this case, we need to add the following line to the `head` section of our HTML page:

```html
<script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.0.0"></script>
```

### Running the experiment
Finally, we need to tell jsPsych to run the experiment we have defined by creating our timeline. This part is easy. We just add this to our code:

```js
jsPsych.run(timeline);
```

In total then, our code should look something like this:

```html
<!DOCTYPE html>
<html>
  
  <head>
    <title>My first jsPsych experiment</title>
    <!-- import jsPsych -->
    <script src="https://unpkg.com/jspsych@7.0.0"></script>

    <!-- import  the jsPsych styling file -->
    <link href="https://unpkg.com/jspsych@7.3.1/css/jspsych.css" rel="stylesheet" type="text/css" />
    
    <!-- import the html-keyboard-response plugin -->
    <script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.0.0"></script>
  </head>
  
  <body>

  	<!-- jsPsych code goes here -->
  	<script type="text/javascript">

  		// initialize jsPsych
  		var jsPsych = initJsPsych();

  		// setup a timeline object 
  		var timeline = [];

  		// create a trial using the jsPsychHtmlKeyboardResponse plugin
		var keyboardTrial = {
			type: jsPsychHtmlKeyboardResponse,
			stimulus: '<h1>Press any key to finish the experiment.</h1>'
		}

		// add the trial to the timeline
		timeline.push(keyboardTrial)

		// run the experiment
		jsPsych.run(timeline);

  	</script>
  </body>

</html>
```

**Checkpoint 1:** You should now be able to load your page and see the heading `"Press any key..."`, which will go away when you press a key.
