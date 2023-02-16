# JsPsych Plugins: An Overview

Last lab, we finished going through the structure of the jsPsych timeline. Today we will dive into jsPsych plugins. Next lab, we will try to write a custom plugin!

Administrative note: in the [github repository for this course](https://github.com/ecl-ucb/290Q), I moved our local copy of jPpsych from the `assets/labs/L8-timeline-2/` directory into the higher-level `assets/` directory. I did this so that it is easier to import jspsych modules into future lab notebooks without creating additional copies of jspsych.  

## What are plugins?

From the jsPsych documentation:

> In jsPsych, plugins define the kinds of trials or events that should occur during the experiment. Some plugins define very general events, like displaying a set of instructions pages, displaying an image and recording a keyboard response, or playing a sound file and recording a button response. Other plugins are more specific, like those that display particular kinds of stimuli (e.g., a circular visual search array), or run a specific version of particular kind of task (e.g., the Implicit Association Test). Part of creating an experiment with jsPsych involves figuring out which plugins are needed to create the tasks you want your participants to perform.


### Referencing plugins
A note on the conventions around plugin names and how to use them in your trial type and import statement: names are lower case seperated by dashes; trial types use camelCase with no spaces and jsPsych appended at the start; import statements use lower case seperated by dashes with `plugin` appended at the start. :shrug:

Here are a few examples: 

| Plugin Name  | Trial Type  | Import |
|---|---|---|
| image-keyboard-response  |  jsPsychImageKeyboardResponse | `<script src="jspsych/dist/plugin-image-keyboard-response.js"></script>` |
| html-button-response  | jsPsychHtmlButtonResponse  | `<script src="jspsych/dist/plugin-html-button-response.js"></script>` |
| video-slider-response  | jsPsychVideoSliderResponse  | `<script src="jspsych/dist/plugin-video-slider-response.js"></script>` |


## An Example Plugin: `image-keyboard-response`

The [image-keyboard-response](https://www.jspsych.org/7.0/plugins/image-keyboard-response/) plugin should look fairly familiar by now. Here's an example from [Lab 7](https://github.com/ecl-ucb/290Q/blob/main/assets/labs/L7-timeline-1/timeline-1.md):

```js
var stimulusTrial = {
    type: jsPsychImageKeyboardResponse,
    stimulus: 'img-1.png',
    choices: "NO_KEYS",
    trial_duration: 2500
}
```

Most plugins have a documentation page. Here's [the documentation page](https://www.jspsych.org/7.0/plugins/image-keyboard-response/) for `image-keyboard-response`. Let's look at the paramters you can specify when defining a trial that uses this plugin.

## Paramters you can specify in all plugins

Let's look at the jsPsych tutorial explaining [the parameters you can use for any plugin](https://www.jspsych.org/7.0/overview/plugins/#parameters-available-in-all-plugins).

## The list of jsPsych Plugins

Here is a list of [all official jsPsych Plugins](https://www.jspsych.org/7.0/plugins/list-of-plugins/). These are the officially maintained and documented plugins. 

In addition, here is a list of [community contributed jsPsych plugins](https://github.com/jspsych/jspsych-contrib) (scroll down on this page to see the `README.md` table). 


### Contributing a new plugin
Anyone can write their own jsPsych plugin and ask for it to be added to the [jspsych-contrib community repository](https://github.com/jspsych/jspsych-contrib).

Next lab, we will write our own simple plugins, using the [plugin-template](https://github.com/jspsych/jspsych-contrib#plugin-template). Here's what the template looks like:

```js
var jsPluginName = (function (jspsych) {
  "use strict";

  const info = {
    name: "PLUGIN-NAME",
    parameters: {
      parameter_name: {
        type: jspsych.ParameterType.INT,
        default: undefined,
      },
      parameter_name2: {
        type: jspsych.ParameterType.IMAGE,
        default: undefined,
      },
    },
  };

  /**
   * **PLUGIN-NAME**
   *
   * SHORT PLUGIN DESCRIPTION
   *
   * @author YOUR NAME
   * @see {@link https://DOCUMENTATION_URL DOCUMENTATION LINK TEXT}
   */
  class PluginNamePlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {
      // data saving
      var trial_data = {
        parameter_name: "parameter value",
      };
      // end trial
      this.jsPsych.finishTrial(trial_data);
    }
  }
  PluginNamePlugin.info = info;

  return PluginNamePlugin;
})(jsPsychModule);
``` 

## Group Excersise: walk-through summary of a plugin
In your group, choose any plugin from the list of [official jsPsych Plugins](https://www.jspsych.org/7.0/plugins/list-of-plugins/). Read the documentation page for the plugin. 

1. First, walk us through the documentation page, describing what the plugin does, and what paramters you can specify. 
2. Second, find the code that defines the plugin inside your local copy of jsPsych (specifically inside `jspsych/dist/`). See if you can interpret what the different parts of the code do, and walk us through any parts that you understand.