var jsWordSimilarity = (function (jspsych) {
  "use strict";

  const info = {
    name: "WORD-SIMILARITY",
    parameters: {
      word_one: {
        type: jspsych.ParameterType.STR,
        default: undefined,
      },
      word_two: {
        type: jspsych.ParameterType.STR,
        default: undefined,
      },
    },
  };

  /**
   * **WORD-SIMILARITY**
   *
   * A PLUGIN FOR COLLECTING WORD PAIR SIMILARITY JUGEMENTS
   *
   * @author Bill Thompson
   * @see {@link https://DOCUMENTATION_URL DOCUMENTATION LINK TEXT}
   */
  class WordSimilarityPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // display the two words
      var html_content = `
        <p>${trial.word_one}</p>
        <hr>
        <p>${trial.word_two}</p>
      `;

      html_content += `
        <div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; width:auto;">
          <input type="range" class="jspsych-slider" value="0.5" min="0" max="1" id="jspsych-html-slider-response-response"></input>
        <div>
      `
      display_element.innerHTML = html_content;

      // data saving
      var trial_data = {
        word_one: trial.word_one,
        word_two: trial.word_two,
      };
      // end trial
      this.jsPsych.finishTrial(trial_data);
    }
  }
  PluginNamePlugin.info = info;

  return PluginNamePlugin;
})(jsPsychModule);