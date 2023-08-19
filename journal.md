# Journal

- 09/08/23
  - Showed a prototype to Graeme Taylor (mentor) showing the style of multiple choice quiz I am aiming to develop and agreed to start fleshing out the application. I am looking to use a list of questions currently available via [freeCodeCamp within their developer quiz repository](https://github.com/freeCodeCamp/Developer_Quiz_Site), which they use for their own [developer quiz](https://developerquiz.org/).
  - I will need to consider randomising the question list and making sure the quiz does not repeat questions. To accomplish this I am to look into the Fisher-Yates (aka Knuth) Shuffle. A relevant stack overflow post can be [found here](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array).
  - I was provided a link to [jshint](https://jshint.com/) for testing my JavaScript code.
  - We discussed additional features that would be worth developing once the base application is working effectively. For example, being able to select the number of questions, changing the difficulty/timer, and comparing results.
- 12/08/23 - 13/08/23
  - Created the initial directory structure.
  - Created the basic html structure for the three boxes/windows that will appear when you first visit the home page of the application (welcome, rules, and quiz).
  - Added basic css and the colour palette.
  - Added query selectors for the main buttons and windows/boxes that will be interactive.
  - Outlined the readme.md and testing.md.
  - Added the variable roboto font locally.
- 14/08/16 - 16/08/23
  - These three days were spent building out the JavaScript code:
    - Making the 'next' button work on the quiz window.
    - Retrieving questions from a local js file.
    - Implementing the Fisher Yates shuffle.
    - Updating the quiz window with new questions.
    - Adding the tracker for the question counter.
    - Experimenting with the GitHub API to connect to freeCodeCamp's repository.
  - Unfortunately, I was spending a lot of time experimenting with the API and decided that it would be more appropriate to create a sample set of questions to proceed with the development of the app.
- 17/08/23
  - This was the second meeting with my mentor, Graeme, where I came to realise I had not been committing frequently enough for the changes I had made.
  - We also discussed the next part of the development, which is to make sure that the game cannot be interrupted through unwanted user interaction. I will also consider altering the existing format of the questions to randomise their placement within the multiple choice quiz.
  - Things to consider:
    - Disabling the next button until one question is selected.
    - Disabling the question choices once an initial choice has been made.
    - Randomising the placement of the answer within the multiple choice quiz.
- 19/08/23
  - I reverted the code back to the 14th so I can track the development better with more frequent commits.
  - 


