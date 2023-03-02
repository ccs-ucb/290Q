# Saving Data to the OSF using Datapipe

Let's try testing out the new [Datapipe library](https://pipe.jspsych.org/) for saving data directly to an [Open Science Framework repository](https://osf.io/) from jsPsych. 

## Today's JsPsych experiment

For this lab, we will re-use the simple decision-making experiment from lab 13. For convenience the relevant jsPsych experiment is included in this directory (see `experiment.html`). Copy the code from experiment.html into an `experiment.html` file on your computer. 

Make sure the import paths (e.g. `<script src="../../jspsych/dist/jspsych.js"></script>`) are correctly pointing to your local copy of jsPsych, and that you have the two images (`bunny_1.jpg` and `bunny_2.jpg`) in the same directory as `experiment.html`. 

Ensure that the experiment is running ok on your computer before following the steps below to save data to Datapipe.

## Saving data with Datapipe

1. OSF Setup 
    * Create an account on the [Open Science Framework](https://osf.io/) if you don't already have one.
    * Create a new project for this purpose called Psych290Q (or anything else you prefer as a name for your expriment)

2. Datapipe Setup
    * Create an account on [Datapipe](https://pipe.jspsych.org/)
    * Link your OSF account to DataPipe
        
        > In order for DataPipe to have permission to send files to your OSF account, you need to **create an authorization token on the OSF** and **add the token to your DataPipe account**. To create an authorization token, **go to your OSF account settings** by clicking your name in the top right corner of the screen and selecting Settings. Then **click the Personal Access Tokens tab**. Click the **Create Token** button. Give the token a name (we recommend a name that is specific to DataPipe so that you can easily disable the token when you are done using DataPipe) and **select "osf.full_write" as the scope**. Click the Create Token button to finish creating the token. You will be shown the token value. **Copy the token value**.

        Don't share your token with anyone or write it anywhere public, because it is sensitive information that can be used to write data into your OSF account. Consider deleting the token after you've completed this class excercise. See [the datapipe exlanation](https://pipe.jspsych.org/getting-started) for more info. 

        > **On DataPipe, click the Account button** in the top right corner and **select Settings**. **Click the Set OSF Token button and paste the token value** into the box. **Click Change Token** to finish. You should see the icon become a green checkmark to indicate that you have a valid token.
    
    * Create a Datapipe experiment: 

        > Click the New Experiment button in the top right corner. Give your experiment a name and enter the OSF project ID. This ID is part of the URL of the OSF project. For example, if the URL of your OSF project is https://osf.io/abcde/, then the project ID is abcde

        > When you create an experiment, DataPipe will automatically create a new Data component on the OSF project. The Data component is where DataPipe will store the data files that it sends to the OSF project. Enter the name you would like to use for the Data component.

        Quotes from [Datapipe getting started](https://pipe.jspsych.org/getting-started).

3. Add Datapipe to your jsPsych Experiment
    * Import the jsPsych [plugin for Datapipe](https://github.com/jspsych/jspsych-contrib/blob/main/packages/plugin-pipe/readme.md). You can do this by adding the following line to the head section of your page `experiment.html`, as you would to import any other jsPsych plugin.

    ```html
    <script src="https://unpkg.com/@jspsych-contrib/plugin-pipe"></script>
    ```

    The documentation for the plugin is [can be found here](https://github.com/jspsych/jspsych-contrib/blob/main/packages/plugin-pipe/readme.md). 

    * Add a final trial to your experiment that saves the data to Datapipe using the plugin. Here is an example of that trial:

    ```js
    // Look up the actual id of your experiment on the datapipe website
    // replace the string below with your experiment id 
    var exprimentID = "ABCDEF123456";

    var save_data_trial = {
	  type: jsPsychPipe,
	  action: "save",
	  experiment_id: expID,
	  filename: `experiment_data.csv`,
	  data_string: function () {
	  	return jsPsych.data.get().csv()
	  }
	};

	timeline.push(save_data_trial)
	```

	Add this to your code after `timeline.push(trainingTrials);`, so that the `save_data_trial` comes after the decision-making trials.

4. Activate your experiment on Datapipe
    * Go to the dashboard for your experiment on Datapipe, and click `Enable data collection`.

5. Run your experiment!

After the final trial of the bunny key-press trials, you may briefly see a spinner indicating that the data is saving. After that, open up your OSF project on [osf.io](https://osf.io). If it worked correctly, Datapipe will have created a new data component in your project which should now contain a file called `experiment_data.csv` that contains your experiment data!
