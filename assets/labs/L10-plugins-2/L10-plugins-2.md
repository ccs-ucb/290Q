# Creating a custom plugin

The goal of this lab is to create a new jsPsych `AttentionCheck` plugin. First, we will work through an example custom plugin I have written for inspiration.

## Setup

Inside the `page` directory for this lab, you can find two files: an html page `experiment.html` and a javascript script `plugin-lexical-decision.js`. Download these files to your computer (or create new files on your computer and copy over the code).  


### HTML Page
The HTML page is simpler than previous labs: it imports out custom plugin and defines an experiment with a single trial that uses this plugin. Here's the HTML code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My experiment</title>
    
    <!-- import jsPsych from your local bundle-->
    <script src="../../../jspsych/dist/jspsych.js"></script>

    <!-- import the jsPsych style file from your local bundle -->
    <link href="../../../jspsych/dist/jspsych.css" rel="stylesheet" type="text/css" />
    
    <!-- import our plugin -->
    <script src="plugin-lexical-decision.js"></script>
  </head>
  
  <body>
    
    <script type="text/javascript">
      var jsPsych = initJsPsych();
      var timeline = [];

      var lexicalDecisionTrial = {
        type: jsPsychLexicalDecisionTask,
        target_word: "Chocolate",
        button_one_label: "Word",
        button_two_label: "Not a Word"
      }
      timeline.push(lexicalDecisionTrial);
      jsPsych.run(timeline);


    </script>
  </body>
  
</html>
``` 

### Custom Plugin

The code inside our custom plugin is copied here. In the next section, we will walk through some different pieces of the code and what they do.

```js
var jsPsychLexicalDecisionTask = (function (jspsych) {
  "use strict";

  const info = {
    name: "LEXICAL-DECISION",
    parameters: {
      target_word: {
        type: jspsych.ParameterType.STR,
        default: undefined,
      },
      button_one_label: {
        type: jspsych.ParameterType.STR,
        default: "Word",
      },
      button_two_label: {
        type: jspsych.ParameterType.STR,
        default: "Nonword",
      },
    },
  };

  class LexicalDecisionPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // display the target word
      // and two buttons
      var html_content = `
        <p>${trial.target_word}</p>
        <br>
        <button class="jspsych-btn" id="b1">${trial.button_one_label}</button>
        <button class="jspsych-btn" id="b2">${trial.button_two_label}</button>
      `
      display_element.innerHTML = html_content;

      // add event listeners to finish the trial on button click
      display_element.querySelector("#b1").addEventListener("click", function (e) {
        display_element.innerHTML = "";
        this.jsPsych.finishTrial({choice: "button_b1"})

      });
      display_element.querySelector("#b2").addEventListener("click", function (e) {
        display_element.innerHTML = "";
        this.jsPsych.finishTrial({choice: "button_b2"})
      });
    }
  }
  LexicalDecisionPlugin.info = info;

  return LexicalDecisionPlugin;
})(jsPsychModule);
```

## Lexical Decision Task Plugin
[Lexical decision tasks](https://en.wikipedia.org/wiki/Lexical_decision_task) are possibly the simplest psychological tasks ever designed. Participants are shown a word and asked to decide whether it is a real word or not as quickly as possible. Ordinarily, psychologists measure the reaction time for these decisons as a DV. We won;t be measuring reaction times in our plugin, but we will create the basic structure of a lexical decision task: the plugin displays a word and presents two buttons -- one to click if the word is not a word, and another to click if the word is a real word.

**Couple notes:** from an experimental design perspective, presenting buttons is less effective than collecting keyboard responses; also, techincally we could use the `html-keyboard-response` plugin to run lexical decison trials like this. The purpose of this plugin is primarily pedagogical.

### Declaring parameters

The `jsPsychLexicalDecisionTask` plugin accepts three parameters: `target_word`, `button_one_label`, and `button_two_label`, all strings.

```js
var jsPsychLexicalDecisionTask = (function (jspsych) {
  "use strict";

  const info = {
    name: "WORD-SIMILARITY",
    parameters: {
      target_word: {
        type: jspsych.ParameterType.STR,
        default: undefined,
      },
      button_one_label: {
        type: jspsych.ParameterType.STR,
        default: "Word",
      },
      button_two_label: {
        type: jspsych.ParameterType.STR,
        default: "Nonword",
      },
    },
  };
```

### Displaying Content

The `jsPsychLexicalDecisionTask` presents the `target_word`, and presents two buttons.

Look at the `trial` function in the code below. 

```js
class LexicalDecisionPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // display the target word
      // and two buttons
      var html_content = `
        <p>${trial.target_word}</p>
        <br>
        <button class="jspsych-btn" id="b1">${trial.button_one_label}</button>
        <button class="jspsych-btn" id="b2">${trial.button_two_label}</button>
      `
      display_element.innerHTML = html_content;

      // add event listeners to finish the trial on button click
      display_element.querySelector("#b1").addEventListener("click", function (e) {
        display_element.innerHTML = "";
        this.jsPsych.finishTrial({choice: "button_b1"})

      });
      display_element.querySelector("#b2").addEventListener("click", function (e) {
        display_element.innerHTML = "";
        this.jsPsych.finishTrial({choice: "button_b2"})
      });
    }
  }
```

First, inside the trial function we create HTML as a string. Then we add HTML to the jsPsych `display_element` by inserting the string as the `innerHTML` of the `display_element`.

The relevant part of the code is:

```js
var html_content = `
    <p>${trial.target_word}</p>
    <br>
    <button class="jspsych-btn" id="b1">${trial.button_one_label}</button>
    <button class="jspsych-btn" id="b2">${trial.button_two_label}</button>
  `
display_element.innerHTML = html_content
```

Notice how we make use of the trial parameters. For example, we can add the target word to the HTML content by accessing `trial.target_word`. Note that we're using Javascript [string templates](https://www.w3schools.com/js/js_string_templates.asp) to insert a variable into a string here. The basic syntax is: `${my_variable}`. See [this page](https://www.w3schools.com/js/js_string_templates.asp) for further information.

The HTML string above uses a paragraph (`<p>`) to display the target word, a line break (`<br>`), and two seperate buttons (`<button>`). Note that we gave the buttons each an id (`id=b1`, `id=b2`) respectively. We will use these id's below.


#### Finishing the trial

Finally, we need a way for the trial to finish. jsPsych provides a function (`jsPsych.finishTrial()`) we can call to finish the trial. In the code below, we do two things:

1. We add a 'click' [event listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) to each button
2. The event listener first clears the display element (`display_element.innerHTML = ""`), and then calls the jsPsych function to finish the trial (`this.jsPsych.finishTrial({choice: "button_b1"})`). The object passed to the `finishTrial` function contains data we would like to save for this trial (here `{choice: "button_b1"}` or `{choice: "button_b2"}` depending which button the participant clicked).

```js
   // add event listeners to finish the trial on button click
  display_element.querySelector("#b1").addEventListener("click", function (e) {
    display_element.innerHTML = "";
    this.jsPsych.finishTrial({choice: "button_b1"})

  });
  display_element.querySelector("#b2").addEventListener("click", function (e) {
    display_element.innerHTML = "";
    this.jsPsych.finishTrial({choice: "button_b2"})
  });
``` 

One part of this code that is new is that we're using javascript to access (and then modify) an html element. You can do that like this, provided you know the id of the element:

```js
display_element.querySelector("#b1")
```
This works because `b1` was the id we assigned to the button element when we wrote the following line, earlier on:

```html
<button class="jspsych-btn" id="b1">${trial.button_one_label}</button>
```

More generally, if you know the id of an html element you can access it using:

```js
var my_element = document.getElementById("#my_elements_id")
```
Once you have accessed the element and assigned it to a variable (here the javascript vairbale `my_element`), you can modify many of its properties programatically. More info on [this W3 tutorial](https://www.w3schools.com/jsref/met_document_getelementbyid.asp).


## Excersise: create a new plugin

Using `plugin-lexical-decision` as an example, create a new plugin. Your plugin will implement a simple Attention Check. It will present a target sentence and a distractor sentence. The target sentence will instruct participants to press the `q` key to begin the experiment. The distractor sentence will instruct participants not to press the `p` key, otherwise the experiment will end. 

Create a new file `plugin-attention-check.js`, copy over the code from `plugin-lexical-decision`, and edit it so that your plugin takes four paramters:

- target sentence
- distractor sentence
- target key
- distractor key

Change the name and the logic of your plugin accordingly and, edit `experiment.html` to import the plugin and create a trial using the plugin.  

*Tip:* jsPsych has a selection of tools that can be used in plugins to collect and interact with keyboard responses (see https://www.jspsych.org/7.0/reference/jspsych-pluginAPI/). In particular, you can use the [getKeyboardResponse](https://www.jspsych.org/7.0/reference/jspsych-pluginAPI/#jspsychpluginapigetkeyboardresponse) function. 

For reference, the `html-keyboard-response` plugin uses this function, which you can use as a model for your plugin. Here's how the function is used in that setting:

```js

if (trial.choices != "NO_KEYS") {
  var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.choices,
      rt_method: "performance",
      persist: false,
      allow_held_key: false,
  });
}
```

The [documentation](https://www.jspsych.org/7.0/reference/jspsych-pluginAPI/#jspsychpluginapigetkeyboardresponse) for the function explains what the parameters are and how to use them.