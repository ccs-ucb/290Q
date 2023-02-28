# Interacting with Data in jsPsych

As your experiment runs, jsPsych stores the data that is being created. In this lab, we'll see how you can access the data and modify what data is being stored. In the next lab, we'll see how data can be saved permanently.

## Setup

Create a file called `experient.html` and add the code below. This code defines a simple decision-making task that presents stimuli and asks for a keyboard response. It defines 5 training trials. Each trial presents one of two possible images and asks the participant to press either `f` or `j`, then provides feedback on whether the selection was correct.

Try it out on your computer! You may need to adjust the import paths to match the location of your local copy of jsPsych, and you will need to create directory called `images` in the same directory as `expeirment.html` that contains the images `bunny_1.jpg` and `bunny_2.jpg`. ou can download those two images at [this link](https://drive.google.com/drive/folders/1KllQj6eW2ZckwDvMGA0BR0weDO41RjPW?usp=sharing) (you will need to log in with your UC Berkeley account).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My experiment</title>
    
    <!-- You may need to change the paths below to match the location of your local copy of jspsych -->
    <script src="../../../jspsych/dist/jspsych.js"></script>
    <link href="../../../jspsych/dist/jspsych.css" rel="stylesheet" type="text/css" />
    <script src="../../../jspsych/dist/plugin-categorize-image.js"></script>
  
  </head>
  
  <body>
    <script type="text/javascript">

      // initialize jsPsych
      var jsPsych = initJsPsych();

      // setup a timeline object 
      var timeline = [];

      var stimuli = [
        {"stimulus": 'images/bunny_1.jpg', 'key_answer': 'f'},
        {"stimulus": 'images/bunny_2.jpg', 'key_answer': 'j'},
      ]

      var random_stimuli = jsPsych.randomization.sampleWithReplacement(stimuli, 4)

      var decisionTrial = {
          type: jsPsychCategorizeImage,
          choices: ['f', 'j'],
          correct_text: "<p class='prompt'>Correct!</p>",
          incorrect_text: "<p class='prompt'>Incorrect.</p>",
          feedback_duration: 1000,
          prompt: "<p>Please press either f or j.</p>",
          stimulus: jsPsych.timelineVariable('stimulus'),
          key_answer: jsPsych.timelineVariable('key_answer'),
      }

      var trainingTrials = {
        timeline: [decisionTrial],
        timeline_variables: random_stimuli,
      }

      // add both trials to the timeline
      timeline.push(trainingTrials);

      // run the experiment
      jsPsych.run(timeline);
    </script>
  </body>
  
</html>
``` 

## Understanding and Accessing the jsPsych Data object

JsPsych is updating a data object every time a new trial is run. The data object can be interacted with in many ways. The documentation for all methods for interacting with the data object can be found [here](https://www.jspsych.org/7.3/reference/jspsych-data/).


### Displaying the data

First, let's start by just looking at the data object at the end of the expeirment. You can always us the function `jsPsych.data.displayData('json');` to display the data on screen. This is mostly useful for debugging. 

Here's an example, using the `on_timeline_finish` function to display the data at hthe end of the experiment. Replace the trainingTrials block definition with this new defnition below, and see what happens when the expeirment is finished.

```js
  var trainingTrials = {
    timeline: [decisionTrial],
    timeline_variables: random_stimuli,
    on_timeline_finish: function() {
      jsPsych.data.displayData('json');
    },
  }
```

**Excercise:** Add two extra trials to the experiment. What does the data object look like now?
**Excercise:** Change the `json` argument in the `jsPsych.data.displayData` to `csv`. What happens now?

### Accessing the data

You can access the current data object at any time during the experiment using `jsPsych.data.get()`. 

#### Accesing data from the most recent n trials

Suppose you wish to check whether the participant got the most recent trial correct or not. JsPsych has a handy way to access that data, using the function `jsPsych.data.getLastTrialData()`.


For example, instead of displaing the data on the last trial, let's check whether the final decision was correct. Here's one way to do that. Start by just logging to final trial data to the console. For example, you can replace the training trials block of code with the following block:

```js
var trainingTrials = {
	timeline: [decisionTrial],
	timeline_variables: random_stimuli,
	on_timeline_finish: function() {
		var final_trial = jsPsych.data.getLastTrialData()
		console.log("Final Trial Data: ", final_trial)
   },
}
```

What structure does the data object have? Check the console to see. If for example you wanted to access the last 2 trials instead of the last single trial, you can do that with the function `jsPsych.data.get().last(n)`, where `n` is the number of trials back you want to access (here `n=2`).

You could use this here by replacing the line 

```js
var final_trial = jsPsych.data.getLastTrialData()
```

with the line 

```js
var final_trial = jsPsych.data.get().last(2).values();
```

You can access specific properties of the data too. If we wanted to check whether the participant's final response was correct, we could for example use:

```js
var final_trial_correct = jsPsych.data.get().last(1).values()[0].correct
```

**Excercise:** Try to acces the `response` variable to find out what key you pressed on the second to last trial. Does it match what you pressed? 

**Excercise:** Increase the number of trials in the experiment to 6 (by changing the number of samples in `jsPsych.randomization.sampleWithReplacement`) to 6. Then modify the code above to log the final 4 trials to the console. 

#### Accesing data from the first n trials

One thing to note is that the `.last(n)` function has an analagous cousin function `.first(n)`, which accesses the first `n` trials during the experiment, rather than the last.

#### Accesing data using a filter

Finally, note that you can access trials in the data using a `.filter()` method, to specify something about the data you are looking for. For example, suppose we wanted to access the data from only trials where the participant's response was correct. We could do that like this:

```js
var correct_trials =  jsPsych.data.get().filter({trial_type: 'categorize-image', correct: true});
```

See [this page](https://www.jspsych.org/7.3/overview/data/#aggregating-and-manipulating-jspsych-data) for more information on filtering data.

### Adding data to trials

Finally, you can also add data to the data stored automatically by jsPsych. You can do that at the experiment-level (i.e. add data to all trials), or at the individual trial level.

For example, here's oe way we could add a participant `id` and `condition` to the dataset that jsPsych collects.

```js
var participant_id = jsPsych.randomization.randomID(1000);
var condition = jsPsych.randomization.sampleWithoutReplacement(['control_condition', 'experimental_condition'], 1)[0];

jsPsych.data.addProperties({
  participant: participant_id,
  condition: condition
});
``` 

The code above would add the participant id and condition assignment to every trial in the data. If, instead, we had multiple trial trypes and we only want to add data to some subset, we can do that within the trial definition. For example, if we wanted to store some data that keeps a record of the image type displayed during our decison making trial, we could add a `data` property to our definition of the trial, by replacing the definition of the trial with the code below.


```js
var decisionTrial = {
  type: jsPsychCategorizeImage,
  choices: ['f', 'j'],
  correct_text: "<p class='prompt'>Correct!</p>",
  incorrect_text: "<p class='prompt'>Incorrect.</p>",
  feedback_duration: 1000,
  prompt: "<p>Please press either f or j.</p>",
  stimulus: jsPsych.timelineVariable('stimulus'),
  key_answer: jsPsych.timelineVariable('key_answer'),
  data: {image_type: 'BUNNY'}
}
```


**Excersise:** There are many more ways to itneract with data in jsPsych, including aggregating and perfomring computations over the data that is being collected during trials. To learn more, read through [this section](https://www.jspsych.org/7.3/overview/data/#aggregating-and-manipulating-jspsych-data) of the jsPsych tutorials. See if you can find a way to count the number of correct responses that a participant makes during the whole experiment. Hint: you could consider combining the `select` and `sum` functionalities (e.g. `jsPsych.data.get().select('my_variable').sum()`) in the `on_experiment_finish` function.
