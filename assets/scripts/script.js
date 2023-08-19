import JAVASCRIPT_QUIZ from './fallbackQuiz.js';

// THE STARTING SECTION
const SECTION_START = document.querySelector('.start');
const START_BUTTON = document.querySelector('.button.button--start');

// When the start button is clicked display the rules section
START_BUTTON.addEventListener('click', () => {
  SECTION_START.classList.toggle('u-inactive'); // Disable the start section
  SECTION_RULES.classList.toggle('u-inactive'); // Enable the rules section
});

// THE RULES SECTION
const SECTION_RULES = document.querySelector('.rules');
const EXIT_BUTTON = document.querySelector('.button.button--exit');
const CONTINUE_BUTTON = document.querySelector('.button.button--continue');
const NEXT_BUTTON = document.querySelector('.button.button--next');

// Exit button: When the exit button is clicked display the start section
EXIT_BUTTON.addEventListener('click', () => {
  SECTION_START.classList.toggle('u-inactive'); // Enable the start section
  SECTION_RULES.classList.toggle('u-inactive'); // Disable the rules section
});

// Continue button: When the continue section is clicked display the first set of questions
CONTINUE_BUTTON.addEventListener('click', () => {
  SECTION_RULES.classList.toggle('u-inactive'); // Disable the rules section
  SECTION_QUIZ.classList.toggle('u-inactive'); // Enable the quiz section
});

//

// THE QUIZ SECTION
const SECTION_QUIZ = document.querySelector('.quiz');
const CURRENT_QUESTION_NUM = document.querySelector('.quiz__current-q');
const TOTAL_QUESTION_NUM = document.querySelector('.quiz__total-q');

let currentQuestionNumber = 0;
let totalNumberOfQuestions = 0;

// FUNCTIONS
// Fisher-Yates Shuffle adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

console.log(shuffle(JAVASCRIPT_QUIZ));

// Get X questions from the shuffled array. Default is 3. End is not included in slice.
function retrieveQuestions(numberOfQuestions = 3) {
  // Assign total number of questions.
  totalNumberOfQuestions = numberOfQuestions;
  // Shuffle the questions.
  const SHUFFLED_ARRAY = shuffle(JAVASCRIPT_QUIZ);
  // Return X number of questions
  return SHUFFLED_ARRAY.slice(0, numberOfQuestions);
};

console.log(shuffle(retrieveQuestions()));