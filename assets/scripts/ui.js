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
// Start Modal
const SECTION_START = document.querySelector('.start');
const START_BUTTON = document.querySelector('.button.button--start');
// Rules Modal
const SECTION_RULES = document.querySelector('.rules');
const EXIT_BUTTON = document.querySelector('.button.button--exit');
const CONTINUE_BUTTON = document.querySelector('.button.button--continue');
// Quiz Modal
const SECTION_QUIZ = document.querySelector('.quiz');
const NEXT_BUTTON = document.querySelector('.button.button--next');
const CURRENT_QUESTION_NUM = document.querySelector('.quiz__current-q');
const TOTAL_QUESTION_NUM = document.querySelector('.quiz__total-q');
const QUIZ_BUTTONS = document.querySelectorAll('.quiz__selection');
const CORRECT_ANSWERS = document.querySelector('.quiz__score-correct > span');
const INCORRECT_ANSWERS = document.querySelector('.quiz__score-incorrect > span');
// The-End Modal
const THE_END_MODAL = document.querySelector('.the-end');
const THE_END_SCORE = document.querySelector('.the-end__score');
const THE_END_TOTAL = document.querySelector('.the-end__total');
const THE_END_QUIT = document.querySelector('.button-quit');
const THE_END_REPLAY = document.querySelector('.button-replay');

// EVENT LISTENERS
// Start Modal
START_BUTTON.addEventListener('click', () => {
  SECTION_START.classList.toggle('u-inactive'); // Disable the start section
  SECTION_RULES.classList.toggle('u-inactive'); // Enable the rules section
});

// Rules Modal
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

// Quiz Modal
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

// The-End Modal


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
  // Loop through the randomDataQuestionIdRange indices.
  for (let i = 0; i <= 3; i++) {
    document.querySelector(`[data-question-id="${randomDataQuestionIdRange[i]}"] > span`).innerHTML = options[i];

  };

  currentQuestionIndex++;
};

// Display the question counter.
function displayQuestionCounter() {
  currentQuestionNumber++;
  return CURRENT_QUESTION_NUM.innerHTML = currentQuestionNumber;
}

// Display the total number of questions.
function displayTotalQuestionNum(num) {
  return TOTAL_QUESTION_NUM.innerHTML = num;
}

// Disable the next button.
function disableNextButton() {
  document.querySelector('.button--next').disabled = true;
}

// Enable the next button.
function enableNextButton() {
  document.querySelector('.button--next').disabled = false;
}

// Disable the quiz answer buttons.
function disableQuizButtons() {
  QUIZ_BUTTONS.forEach(button => {
    button.disabled = true;
  });
}

// Enable the quiz answer buttons.
function enableQuizButtons() {
  QUIZ_BUTTONS.forEach(button => {
    button.disabled = false;
  });
}

// Check the selected answer.
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

// Display the tick icon on a correct answer.
function displayTick(button) {
  button.querySelector('i').classList.add('fa-solid', 'fa-check');
}

// Display the cross icon on an incorrect answer.
function displayCross(button) {
  button.querySelector('i').classList.add('fa-solid', 'fa-times');
}

// Remove/reset all icons.
function removeAllIcons() {
  const ALL_BUTTONS = document.querySelectorAll('.quiz__selection i')
  // Loop through all the buttons and remove the font awesome classes.
  for(let i = 0; i < ALL_BUTTONS.length; i++) {
    ALL_BUTTONS[i].classList.remove('fa-solid', 'fa-times', 'fa-check');
  }
}

// Display these for test purposes.
function showDetails() {
  console.log(`Question Index: ${currentQuestionIndex}`);
  console.log(`Question Number: ${currentQuestionNumber}`);
  console.log(`Total Questions: ${totalQuestionNum}`);
  console.log(`Shuffled Array: ${shuffledArray}`);
  console.log(`Correct Questions: ${correctQuestions}`);
  console.log(`Incorrect Questions: ${incorrectQuestions}`);
};

// Increase the correct answer counter.
function increaseCorrectAnswer() {
  CORRECT_ANSWERS.innerHTML = ++correctQuestions;
}

// Increase the incorrect answer counter.
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