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