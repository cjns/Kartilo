import { shuffle, retrieveQuestions } from './logic.js';

let currentQuestionIndex = 0;
let currentQuestionNumber = 0;
let shuffledArray;

function initialiseUI() {
  // DOM element selections
  const SECTION_START = document.querySelector('.start');
  const START_BUTTON = document.querySelector('.button.button--start');
  
  const SECTION_RULES = document.querySelector('.rules');
  const EXIT_BUTTON = document.querySelector('.button.button--exit');
  const CONTINUE_BUTTON = document.querySelector('.button.button--continue');
  
  const SECTION_QUIZ = document.querySelector('.quiz');
  const NEXT_BUTTON = document.querySelector('.button.button--next');
  const CURRENT_QUESTION_NUM = document.querySelector('.quiz__current-q');
  const TOTAL_QUESTION_NUM = document.querySelector('.quiz__total-q');

  // Event listeners
  START_BUTTON.addEventListener('click', () => {
    SECTION_START.classList.toggle('u-inactive'); // Disable the start section
    SECTION_RULES.classList.toggle('u-inactive'); // Enable the rules section
  });

  EXIT_BUTTON.addEventListener('click', () => {
    SECTION_START.classList.toggle('u-inactive'); // Enable the start section
    SECTION_RULES.classList.toggle('u-inactive'); // Disable the rules section
  });

  CONTINUE_BUTTON.addEventListener('click', () => {
    SECTION_RULES.classList.toggle('u-inactive'); // Disable the rules section
    SECTION_QUIZ.classList.toggle('u-inactive'); // Enable the quiz section
    shuffledArray = retrieveQuestions();
    displayQuestion(currentQuestionIndex);
    displayQuestionCounter();
  });
};

// Add questions into the html
function displayQuestion(index) {
  // Create an array of the possible answers.
  let options = [
    shuffledArray[index].Answer,
    shuffledArray[index].Distractor1,
    shuffledArray[index].Distractor2,
    shuffledArray[index].Distractor3
  ];
  // Shuffle the data-question-id range.
  let dataQuestionIdRange = [0, 1, 2, 3];
  let randomDataQuestionIdRange = shuffle(dataQuestionIdRange);
  // Set question title
  document.querySelector('.quiz__question h3').innerHTML = `${index + 1}. ${shuffledArray[index].Question}`;
  // Loop through the randomDataQuestionIdRange indices
  for (let i = 0; i <= 3; i++) {
    document.querySelector(`[data-question-id="${randomDataQuestionIdRange[i]}"] > span`).innerHTML = options[i];

  };

  currentQuestionIndex++;
};

// Display question counter
function displayQuestionCounter() {
  currentQuestionNumber++;
  return document.querySelector('.quiz__current-q').innerHTML = currentQuestionNumber;
}

export {
  initialiseUI,
  displayQuestion,
  displayQuestionCounter
};