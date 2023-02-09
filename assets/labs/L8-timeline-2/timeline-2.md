# Adding Structure to the Timeline (Part Two)

Today we will cover:

0. Setup: Using jsPsych locally
1. Timeline Variables
2. Randomization in the timeline


## Setup: Using jsPsych locally

We're going to pivot to using a local copy of jsPsych. Here's how to get started.

1. Create an html page `experiment.html` in a new directory as usual
2. Download the latest jspsych bundle here: [https://www.github.com/jspsych/jspsych/releases/latest/download/jspsych.zip](https://www.github.com/jspsych/jspsych/releases/latest/download/jspsych.zip)
3. Unzip the bundle, and copy the resulting directory (`jsPsych` folder) into the same directory as your `experiment.html` file. Your directory should now look something like:

```
|-- lab-7
|-- |-- experiment.html
|-- |-- jspsych/
```

4. Add the following code into your `experiment.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My experiment</title>
    
    <!-- here's how you import jsPsych from your local bundle-->
    <script src="jspsych/dist/jspsych.js"></script>
    
    <!-- here's how you import plugins from your local jsPsych bundle -->
    <script src="jspsych/dist/plugin-html-keyboard-response.js"></script>
    <script src="jspsych/dist/plugin-html-button-response.js"></script>
    <script src="jspsych/dist/plugin-instructions.js"></script>

    <!-- here's how you import the jsPsych style file from your local jsPsych bundle -->
    <link href="jspsych/dist/jspsych.css" rel="stylesheet" type="text/css" />
  </head>
  
  <body></body>
  
</html>
```

## Timeline Variables

Suppose you were running a study that asks participants to rate the concreteness or abstractness of English words. There are lots of studies that examine or depend on judgements of lexical concreteness, such as this mega study of 40,000 English words by [Brysbaert et al. (2014)](https://link.springer.com/article/10.3758/s13428-013-0403-5#MOESM1). 

We have the tools now to construct a simple ratings study using the `jsPsychHtmlSliderResponse` plugin. here's an example single trial asking the participant to rate the concreteness of the word `Grass`: 

```js
var concretenessTrial = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `
    <div style="width:500px;">
	<p>Please rate the concreteness of the following word:</p>
	<p><strong>Grass</strong></p>
    </div>`,
    require_movement: true,
    button_label: "Submit Judgement",
    labels: ['(0) Abstract', '(1) Concrete']
};
```

**Excersise:** Add this trial to your page and see how it looks. Try adding more labels to the slider reponse bar, or changing other paramters of the [html-slider-response plugin](https://www.jspsych.org/7.0/plugins/). html-slider-response/)

Now suppose that you would like to conduct ratings trials for thirty different English words. Coding each trial by hand would be laborious. JsPsych provides a convenient way to insert differing stimuli into repeated trialsm using [Timeline Variables](https://www.jspsych.org/7.0/overview/timeline/#timeline-variables). 

Here's an example showing how you could use timeline variables to construct a ratings block in your experiment:

```js
var concretenessTrial = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `
    <div style="width:500px;">
	<p>Please rate the concreteness of the following word:</p>
	<p><strong>${jsPsych.timelineVariable('word')}</strong></p>
    </div>`,
    require_movement: true,
    button_label: "Submit Judgement",
    labels: ['(0) Abstract', '(1) Concrete']
};

var feedbackPage = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p>Thank you for your rating. Click continue to proceed.</p>',
  choices: ['Continue'],
};

var concretenessBlock = {
	timeline: [concretenessTrial, feedbackPage],
	timeline_variables: [
		{'word': "stone"},
		{'word': "thought"},
		{'word': "shirt"},
		{'word': "democracy"},
	]
}

```

Notice how this code chunk  works. Like previously, we are defining a trial block in terms of two trials, `concretenessTrial` and `feedbackPage`. The `concretenessBlock` object includes a timeline composed of these trial types, but crucially it also includes the property `timeline_variables`. 

The value of the `timeline_variables` property is an array containing `N` objects (here `N=4`). Each object in the array contains a property `word` which references a different stimulus. By adding this property to the `concretenessBlock` object, we tell jsPsych to repeat the timeline `N` times. Each time the timeline is repeated, the `concretenessTrial` object looks up what word to present on this trial by using

```js
jsPsych.timelineVariable('word')
```

Note also that I have introduced a new way of inserting variables into strings here. In javascript, you can define multi-line strings using backticks. In these types of strings, you can insert a variable using the syntax `${my_variable_name}`. To see how this works, lok closely at the stimulus property of the `concretenessTrial` object. You can include as many timeline variables as you like in each object in the `timeline_variables` array.


### Excersise 

This excersise is designed to be tricky one that combines multiple skills and requires you to look up new functionality. The goal is to create a trial block analagous to `concretenessBlock`, but which creates 30 trials that present the list of words below for ratings. You will need to look up how to use a `for loop` to iterate over an array. Here's a [page that should help](https://www.w3schools.com/js/js_array_iteration.asp). 

To achieve this, you will need to create the timeline_variables array dynamically. For example, you could first create an empty array, then use a foor loop to iterate over the array of words below, and create an object of the form `{word: word}` for each word, and push the object into the `timeline_variables` array. 

For extra points, try thinking of a way to use timeline_variables to randomize whether each `conretenessTrial` trial asks participants to judge the **concreteness** or the **abstractness** of the word. Here are the words to include:


```js
var words = [
       'aluminum', 'inadvisability', 'wateringcan', 'naturalized',
       'sneak', 'emancipationist', 'moralist', 'jargon', 'psychological',
       'scowl', 'genus', 'whither', 'gravy', 'confiscation', 'petrified',
       'necking', 'personalization', 'plethora', 'ice', 'settled',
       'paparazzi', 'sports shirt', 'hand luggage', 'predicament',
       'underbelly', 'originator', 'peepshow', 'priestess', 'physiologic',
       'jubilant'
]
```

And here are the original instructions from the Brysbaert et al study. Can you add an instructions trial that appears at the start of the experiment but does not repeat on every cycle of the `concretenessBlock`.

```js
var instructions = `Some words refer to things or actions in reality, which you can experience directly through one
of the five senses. We call these words concrete words. Other words refer to meanings that
cannot be experienced directly but which we know because the meanings can be defined by
other words. These are abstract words. Still other words fall in-between the two extremes,
because we can experience them to some extent and in addition we rely on language to
understand them.<br>We want you to indicate how concrete the meaning of each word is for you by
using sliding scale going from abstract (0) to concrete. (1) `
```



