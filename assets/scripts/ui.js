import {
  shuffle,
  retrieveQuestions,
  retrieveTotalQuestionNum,
} from './logic.js';

// VARIABLES
let currentQuestionIndex = 0;
let currentQuestionNumber = 0;
let shuffledArray;
let totalQuestionNum;
let correctQuestions = 0;
let incorrectQuestions = 0;

// DOM ELEMENT SELECTIONS
const SECTION_START = document.querySelector('.start');
const START_BUTTON = document.querySelector('.button.button--start');

const SECTION_RULES = document.querySelector('.rules');
const EXIT_BUTTON = document.querySelector('.button.button--exit');
const CONTINUE_BUTTON = document.querySelector('.button.button--continue');

const SECTION_QUIZ = document.querySelector('.quiz');
const NEXT_BUTTON = document.querySelector('.button.button--next');
const CURRENT_QUESTION_NUM = document.querySelector('.quiz__current-q');
const TOTAL_QUESTION_NUM = document.querySelector('.quiz__total-q');

const QUIZ_BUTTONS = document.querySelectorAll('.quiz__selection');

const CORRECT_ANSWERS = document.querySelector('.quiz__score-correct > span');
const INCORRECT_ANSWERS = document.querySelector('.quiz__score-incorrect > span');

// EVENT LISTENERS
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
  totalQuestionNum = retrieveTotalQuestionNum(shuffledArray);
  displayQuestion(currentQuestionIndex);
  displayQuestionCounter();
  displayTotalQuestionNum(totalQuestionNum);
  disableNextButton();
});

NEXT_BUTTON.addEventListener('click', () => {
  if (currentQuestionNumber < totalQuestionNum) {
    displayQuestionCounter();
    displayQuestion(currentQuestionIndex);
    enableQuizButtons();
    disableNextButton();
    removeAllIcons();
  } else {
    console.log('Quiz complete!')
  }
});

QUIZ_BUTTONS.forEach(button => {
  button.addEventListener('click', (event) => {
    // Disable all buttons
    disableQuizButtons();
    enableNextButton();
    if (checkAnswer(event.currentTarget) === true) {
      displayTick(event.currentTarget);
      increaseCorrectAnswer();
    } else {
      displayCross(event.currentTarget);
      increaseIncorrectAnswer();
    };
    showDetails();
  });
});

// FUNCTIONS
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

// Display total number of questions
function displayTotalQuestionNum(num) {
  return document.querySelector('.quiz__total-q').innerHTML = num;
}

function disableNextButton() {
  document.querySelector('.button--next').disabled = true;
}

function enableNextButton() {
  document.querySelector('.button--next').disabled = false;
}

function disableQuizButtons() {
  QUIZ_BUTTONS.forEach(button => {
    button.disabled = true;
  });
}

function enableQuizButtons() {
  QUIZ_BUTTONS.forEach(button => {
    button.disabled = false;
  });
}

function checkAnswer(button) {
  const SPAN_CONTENT = button.querySelector('.quiz__selection > span').textContent;
  const ANSWER = shuffledArray[currentQuestionIndex - 1].Answer;
  let result;
  console.table(shuffledArray);
  console.log(`Selection: ${SPAN_CONTENT}`);
  console.log(`Answer: ${ANSWER}`);
  if (SPAN_CONTENT === ANSWER) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

function displayTick(button) {
  button.querySelector('.quiz__selection > i').classList.add('fa-solid', 'fa-check');
}

function displayCross(button) {
  button.querySelector('.quiz__selection > i').classList.add('fa-solid', 'fa-times');
}

function removeAllIcons() {
  const ALL_BUTTONS = document.querySelectorAll('.quiz__selection > i')
  // Loop through all the buttons and remove the font awesome classes.
  for(let i = 0; i < ALL_BUTTONS.length; i++) {
    ALL_BUTTONS[i].classList.remove('fa-solid', 'fa-times', 'fa-check');
  }
}

function showDetails() {
  console.log(`Question Index: ${currentQuestionIndex}`);
  console.log(`Question Number: ${currentQuestionNumber}`);
  console.log(`Total Questions: ${totalQuestionNum}`);
  console.log(`Shuffled Array: ${shuffledArray}`);
  console.log(`Correct Questions: ${correctQuestions}`);
  console.log(`Incorrect Questions: ${incorrectQuestions}`);
};

function increaseCorrectAnswer() {
  CORRECT_ANSWERS.innerHTML = ++correctQuestions;
}

function increaseIncorrectAnswer() {
  INCORRECT_ANSWERS.innerHTML = ++incorrectQuestions;
}

export {
  displayQuestion,
  displayQuestionCounter,
  displayTotalQuestionNum,
  disableNextButton,
  enableNextButton,
  disableQuizButtons,
  enableQuizButtons,
  displayTick,
  displayCross,
  removeAllIcons,
  showDetails,
  increaseCorrectAnswer,
  increaseIncorrectAnswer
};