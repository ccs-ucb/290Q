# Review Excersises
Some excercises to complete that involve writing code. The overarching goal is to create an experiment that provides instructions and uses the [Free Sort plugin](https://www.jspsych.org/7.0/plugins/free-sort/) to elicit grouping judgements for people for a range of everyday objects.

Start by creating a new directory on your computer called `review-excercises` -- everything below shoould go inside this folder. 

## 1. HTML Fundamentals

1. Create a new html file inside the `review-excercises` directory. Complete the code below (which is incomplete) and add it to your file. Add a body section to the page. Change the title of the page to `Review Experiment`. See [Lab 2](https://github.com/ecl-ucb/290Q/blob/main/assets/labs/L2-intro-html/tools-and-html.md) for help.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
```

## 2. Javascript Fundamentals

2. Add a script section to your page. In the script section, declare a javascript variable `experiment_properties`. The variable should be a javascript object that has three properties: 

	- `participant_condition` (an integer)
	- `num_practice_trials` (also an integer that will determine the number of practice trials)
	- `debrief` (a boolean -- `true` or `false` -- that will determine whether the participant is debriefed at the end of the experiment)

See [Lab 3](https://github.com/ecl-ucb/290Q/blob/main/assets/labs/L3-intro-javascript-1/javascript-basics-1.md) for help.


## 3. JsPsych Fundamentals

3. Download and unzip a copy of the latest version of jsPsych from [this link](https://github.com/jspsych/jsPsych/releases/download/jspsych%407.3.1/jspsych.zip). If you are reading this in the distant future, find the latest version of jsPsych at this [github releases page](https://github.com/jspsych/jsPsych/releases) (download the file `Dist archive (zip)`).

4. In the head section of your html page, import jsPsych and the jsPsych CSS style file.

5. In the script section of your html page, add code to do three things:

	- initialize jsPsych
	- create an empty timeline variable
	- run the experiment

See [Lab 5](https://github.com/ecl-ucb/290Q/blob/main/assets/labs/L5-intro-jsPsych/intro-jsPsych.md) for help. At this point, nothing will happen when you run the experiment because the timline is empty.

## 4. Creating a Timeline

### 4.1 Importing plugins

6. Import three jsPsych plugins:

	- The [Instructions plugin](https://www.jspsych.org/7.0/plugins/instructions/)
	- The [Free Sort plugin](https://www.jspsych.org/7.0/plugins/free-sort/)
	- The [HTML Keyboard response plugin](https://www.jspsych.org/7.0/plugins/html-keyboard-response/)


### 4.2 Creating an instructions trial

7. Use the instructions plugin to create an instructions trial. Participants should be informed that they will be shown groups of images and asked to organize them on the screen so that similar images are close togethor.

### 4.3 Creating practice trials

8. Use the free sort plugin to present groups of five images to participants. Look at the example demo and code on the [plugin documentation page](https://www.jspsych.org/7.0/plugins/free-sort/).


	On each trial, select five image paths at random from the list below. You can download the images from [this link](https://drive.google.com/file/d/1Nsub3Jz2Tehge-61sP5-ekzJWKF3KaQq/view?usp=sharing) (berkeley login required). 

	You can use [jsPsych randomization tools](https://www.jspsych.org/7.0/reference/jspsych-randomization/) to sample some images randomly. Specifically, you could use:

	```js
	var sample_stimuli = jsPsych.randomization.sampleWithReplacement(images, 5);
	```

	to sample five random image paths afer defining an array of image paths:

	```js
	var images = [
		"images/acorn.jpg",
		"images/axe.jpg",
		"images/barbecue.jpg",
		"images/beach.jpg",
		"images/berries.jpg",
		"images/bike.jpg",
		"images/books.jpg",
		"images/bowling.jpg",
		"images/bread.jpg",
		"images/bridge.jpg",
		"images/butterfly.jpg",
		"images/cables.jpg",
		"images/camera.jpg",
		"images/candle.jpg",
		"images/cards.jpg",
		"images/castle.jpg",
		"images/cat.jpg",
		"images/chess.jpg",
		"images/cliffs.jpg",
		"images/clock.jpg",
		"images/coffee.jpg",
		"images/compass.jpg",
		"images/couch.jpg",
		"images/cupcake.jpg",
		"images/diamond.jpg",
		"images/dice.jpg",
		"images/dog.jpg",
		"images/ducklings.jpg",
		"images/eagle.jpg",
		"images/eiffel.jpg",
		"images/envelope.jpg",
		"images/faucet.jpg",
		"images/field.jpg",
		"images/fire.jpg",
		"images/fireworks.jpg",
		"images/fish.jpg",
		"images/flowers.jpg",
		"images/forest.jpg",
		"images/fox.jpg",
		"images/goat.jpg",
		"images/guitar.jpg",
		"images/hammer.jpg",
		"images/headphones.jpg",
		"images/helicopter.jpg",
		"images/honey.jpg",
		"images/house.jpg",
		"images/icetea.jpg",
		"images/keys.jpg",
		"images/ladybug.jpg",
		"images/lamp.jpg",
		"images/laptop.jpg",
		"images/lighthouse.jpg",
		"images/money.jpg",
		"images/moon.jpg",
		"images/mountain.jpg",
		"images/mushroom.jpg",
		"images/oil.jpg",
		"images/orange.jpg",
		"images/paintbrush.jpg",
		"images/parachute.jpg",
		"images/parrot.jpg",
		"images/pen.jpg",
		"images/perfume.jpg",
		"images/piano.jpg",
		"images/pinecone.jpg",
		"images/plane.jpg",
		"images/puffin.jpg",
		"images/racecar.jpg",
		"images/road.jpg",
		"images/roadsign.jpg",
		"images/rooster.jpg",
		"images/salad.jpg",
		"images/scissors.jpg",
		"images/screws.jpg",
		"images/sculpture.jpg",
		"images/shaving.jpg",
		"images/ship.jpg",
		"images/shoe.jpg",
		"images/skiing.jpg",
		"images/soccerball.jpg",
		"images/spaceshuttle.jpg",
		"images/spices.jpg",
		"images/sprouts.jpg",
		"images/stairs.jpg",
		"images/stapler.jpg",
		"images/starfish.jpg",
		"images/statue.jpg",
		"images/swan.jpg",
		"images/table.jpg",
		"images/taxi.jpg",
		"images/teddybear.jpg",
		"images/tiger.jpg",
		"images/tomatoes.jpg",
		"images/toothpaste.jpg",
		"images/towels.jpg",
		"images/train.jpg",
		"images/tulips.jpg",
		"images/turtle.jpg",
		"images/typewriter.jpg",
		"images/watch.jpg",
		"images/waterfall.jpg",
		"images/zebras.jpg",
	]
	```

	Can you think of a way to use the `num_practice_trials` parameter to control how many practice trials each participant observes? 

	One idea would be to use a [javascript for-loop](https://www.w3schools.com/js/js_loop_for.asp) to create an array of jsPsych [timeline variables](https://www.jspsych.org/7.0/overview/timeline/#timeline-variables). 

### 4.4 Creating experimental trials

Using whatever approach you developed above, no add some number of main trials to the experiment. Perhaps you could add a `num_experimental_trials` property to the `experiment_settings` object you created, and lookup this property to create the right number of trials.

## 5. Add an optional debriefing trial
Using the html-keyboard-response plugin, add a final trial to the experiment presenting a debriefing statement. Can you make it so that only some participants are presented with the debrief? One idea would be to use a [conditional function](https://www.jspsych.org/7.0/overview/timeline/#conditional-timelines) in your trial that checks whether the `debrief` property is true in `experiment_properties`.