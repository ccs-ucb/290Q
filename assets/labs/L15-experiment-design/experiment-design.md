# Putting it all togethor

Over the course of the previous labs, we've seen how to use jsPsych to construct and execute a timeline of trials that are presented to participants in a browsers window. We've covered: how to use plugins to define specific types of trials; how to present instructions and include an attention check; how to assign each participant a unique ID; how to randomize selection of stimuli and assignment to condition treatments; how to access the jsPsych data object; and how to save data into the Open Science Framework using Datapipe.

Today's lab will bring some of these components together and add a few new features. Specifically, we will use the tools we have covered previously to extend the simple decision-making experiment, adding some new features including:

* A factorial experimental design with simple randomization of condition
* A media preloading plugin
* A browser check plugin
* An experiment progress bar
* An function (`window.beforeunload`) to warn participants not to close the browser window.

The basic experiment is introduced below.

## A Judgement Experiment

Here is the code for the experiment. You will need to copy this into a blank file `experiment.html` and create an `images/` directory that includes [these images](https://drive.google.com/drive/folders/1KllQj6eW2ZckwDvMGA0BR0weDO41RjPW?usp=sharing). We will look through this together first, then you can work through some of the questions and exercises below.


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Integrated Examples</title>
    
    <!-- Note: You may need to change the paths below to match the location of your local copy of jspsych -->
    <script src="../../../jspsych/dist/jspsych.js"></script>
    <link href="../../../jspsych/dist/jspsych.css" rel="stylesheet" type="text/css" />
    <script src="../../../jspsych/dist/plugin-categorize-image.js"></script>
    <script src="../../../jspsych/dist/plugin-preload.js"></script>
    <script src="../../../jspsych/dist/plugin-browser-check.js"></script>
  
  </head>
  
  <body>
    <script type="text/javascript">
    var jsPsych = initJsPsych({
	    default_iti: 500, 
	    minimum_valid_rt: 100, 
	    experiment_width: 800,
	    show_progress_bar: true,
	    auto_update_progress_bar: false,
    	message_progress_bar: 'Your progress', 
    	on_close: function(){
    		// save data here
    	}
    });

	// show a message when someone tries to close the window
	window.onbeforeunload = function() {
		return "Are you sure you want to leave?"
	}
      
	// create a participant ID
	// and add it to the data object
	var participant_id = jsPsych.randomization.randomID(8);
	jsPsych.data.addProperties({participant_id: participant_id});

	// setup the possible factors in the design
	var design_factors = {
		stimulus: ['monsters', 'objects'],
		feedback_duration: ['500', '2000']
	}

	// use jsPsych to construct all possible conditions
	var all_conditions = jsPsych.randomization.factorial(design_factors, 1);
	console.log(all_conditions)
	/*
	output:
	all_conditions = [
		{stimulus: 'monsters', 'feedback_duration': 500},
		{stimulus: 'objects', 'feedback_duration': 500},
		{stimulus: 'objects', 'feedback_duration': 1000},
		{stimulus: 'monsters', 'feedback_duration': 1000},
	]
	*/

	// Sample a condition for the participant
	// and add it to the data object
	var condition_assignment = jsPsych.randomization.sampleWithoutReplacement(all_conditions, 1)[0]
	jsPsych.data.addProperties({participant_condition: condition_assignment});

	// setup a timeline object 
	var timeline = [];

	// preload any media used in the trials
	var preloadMediaTrial = {
		type: jsPsychPreload,
		auto_preload: true,
		max_load_time: 30000 // 30 seconds
	}

	// Check the participant's browser
	var browserCheckTrial = {
	  type: jsPsychBrowserCheck,
	  mobile: false,
	  exclusion_message: `<p>Please use Chrome or Firefox to complete this experiment.</p>`,
	  inclusion_function: (data) => {
	    return ['chrome', 'firefox'].contains(data.browser);
	  },
	};
	// Combine all checking trials into a setup bock
	var setup_block = {
		timeline: [preloadMediaTrial, browserCheckTrial],
	}
	timeline.push(preloadMediaTrial)


	// create the stimuli <> response pairs
	// this depends on which condition a participant is assigned to
	if (condition_assignment['stimulus'] == 'monsters') {
		var stimuli = [
			{"stimulus": 'images/bunny_1.jpg', 'key_answer': 'f'},
			{"stimulus": 'images/bunny_2.jpg', 'key_answer': 'j'},
		]
	} else if (condition_assignment['stimulus'] == 'objects') {
		var stimuli = [
			{"stimulus": "images/starfish.jpg", 'key_answer': 'f'},
			{"stimulus": 'images/icetea.jpg', 'key_answer': 'j'},
		]
	}
	
	var num_trials = 16
	var random_stimuli_schedule = jsPsych.randomization.sampleWithReplacement(stimuli, num_trials)
	console.log(random_stimuli_schedule)

	// decision-making trial
	var decisionTrial = {
	  type: jsPsychCategorizeImage,
	  choices: ['f', 'j'],
	  correct_text: "<p class='prompt'>Correct!</p>",
	  incorrect_text: "<p class='prompt'>Incorrect.</p>",
	  feedback_duration: condition_assignment['feedback_duration'], // Note the condition lookup here
	  prompt: "<p>Please press either f or j.</p>",
	  stimulus: jsPsych.timelineVariable('stimulus'),
	  key_answer: jsPsych.timelineVariable('key_answer'),
	  on_finish: function () {
	  	var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
	  	jsPsych.setProgressBar(curr_progress_bar_value + (1/num_trials));
	  }
	}

	// create multiple trials
	var training_block = {
		timeline: [decisionTrial],
		timeline_variables: random_stimuli_schedule,
		on_timeline_finish: function() {
			jsPsych.data.displayData('json');
		}
	}
	// add the training trials to the timeline
	timeline.push(training_block);

	// run the experiment
	jsPsych.run(timeline);
    </script>
  </body>
  
</html>
```


## Excersises

1. At the end of the experiment, display the data in CSV form instead of JSON.
2. Change the message displayed on the progress bar. 
3. Make the participant ID longer
4. Log the participant condition assignment to the console so you can see what condition has been assigned.
5. Add a new factor to the experimental design that controls the number of training trials, and make the `traning_block` length conditional on participant assignment to a level of this factor. 
6. Try using a disallowed web browser. What happens? Edit to the code to prevent participants from using Chrome. 
7. Add a third possible level to the `feedback_duration` factor in the experimental design.
8. Add an attention check to the `setup_block`. 