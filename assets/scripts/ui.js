import {
  shuffle,
  retrieveQuestions,
  retrieveTotalQuestionNum,
  lengthOfAllQuestions
} from "./logic.js";

// VARIABLES
let currentQuestionIndex = 0;
let currentQuestionNumber = 0;
let shuffledArray;
let totalQuestionNum;
let correctAnswers = 0;
let incorrectAnswers = 0;

// DOM ELEMENT SELECTIONS
// Start Modal
const sectionStart = document.querySelector(".start");
const startButton = document.querySelector(".button.button--start");
// Rules Modal
const sectionRules = document.querySelector(".rules");
const rulesExitButton = document.querySelector(".button.button--exit");
const rulesContinueButton = document.querySelector(".button.button--continue");
const rulesMaxQuestionsInput = document.querySelector(".rules__question-input");
const rulesInputWarning = document.querySelector(".rules__question-warning");
// Quiz Modal
const sectionQuiz = document.querySelector(".quiz");
const quizNextButton = document.querySelector(".button.button--next");
const quizCurrentQuestion = document.querySelector(".quiz__current-q");
const quizTotalQuestions = document.querySelector(".quiz__total-q");
const quizSelectionButtons = document.querySelectorAll(".quiz__selection");
const quizCorrectAnswers = document.querySelector(".quiz__score-correct > span");
const quizIncorrectAnswers = document.querySelector(".quiz__score-incorrect > span");
// The-End Modal
const theEndSection = document.querySelector(".the-end");
const theEndScore = document.querySelector(".the-end__score");
const theEndTotal = document.querySelector(".the-end__total");
const theEndQuitButton = document.querySelector(".button-quit");
const theEndReplayButton = document.querySelector(".button-replay");

// EVENT LISTENERS
// Start Modal
startButton.addEventListener("click", () => {
  disableElement(sectionStart);
  activateElement(sectionRules);
  addMaxQuestions();
});

// Rules Modal
// Input Validation
rulesMaxQuestionsInput.addEventListener("input", function() {
  const inputValue = parseInt(rulesMaxQuestionsInput.value, 10);

  if (!inputValue || isNaN(inputValue) || inputValue > 185 || inputValue < 1) {
    rulesInputWarning.classList.remove('u-inactive');
    rulesContinueButton.disabled = true;
  } else {
    rulesInputWarning.classList.add('u-inactive');
    rulesContinueButton.disabled = false;
  }
});


rulesExitButton.addEventListener("click", () => {
  disableElement(sectionRules);
  activateElement(sectionStart);
});

rulesContinueButton.addEventListener("click", () => {
  clearScore();
  removeAllIcons();
  enableQuizButtons();
  disableElement(sectionRules);
  activateElement(sectionQuiz);
  shuffledArray = retrieveQuestions(rulesMaxQuestionsInput.value);
  totalQuestionNum = retrieveTotalQuestionNum(shuffledArray);
  displayQuestion(currentQuestionIndex);
  displayQuestionCounter();
  displayTotalQuestionNum(totalQuestionNum);
  disableNextButton();
});

// Quiz Modal
quizNextButton.addEventListener("click", () => {
  if (currentQuestionNumber < totalQuestionNum) {
    displayQuestionCounter();
    displayQuestion(currentQuestionIndex);
    enableQuizButtons();
    disableNextButton();
    removeAllIcons();
  } else {
    disableElement(sectionQuiz);
    activateElement(theEndSection);
    showFinalScore();
  }
});

quizSelectionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Disable all buttons
    disableQuizButtons();
    enableNextButton();
    if (checkAnswer(event.currentTarget) === true) {
      displayTick(event.currentTarget);
      increaseCorrectAnswer();
    } else {
      displayCross(event.currentTarget);
      increaseIncorrectAnswer();
    }
    showDetails();
  });
});

// The-End Modal
theEndQuitButton.addEventListener("click", () => {
  disableElement(theEndSection);
  activateElement(sectionStart);
});

theEndReplayButton.addEventListener("click", () => {
  disableElement(theEndSection);
  activateElement(sectionRules);
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
  document.querySelector(".quiz__question h3").innerHTML = `${index + 1}. ${shuffledArray[index].Question}`;
  // Loop through the randomDataQuestionIdRange indices.
  for (let i = 0; i <= 3; i++) {
    document.querySelector(`[data-question-id="${randomDataQuestionIdRange[i]}"] > span`).innerHTML = options[i];

  }

  currentQuestionIndex++;
}

// Display the question counter.
function displayQuestionCounter() {
  currentQuestionNumber++;
  return quizCurrentQuestion.innerHTML = currentQuestionNumber;
}

// Display the total number of questions.
function displayTotalQuestionNum(num) {
  return quizTotalQuestions.innerHTML = num;
}

// Disable the next button.
function disableNextButton() {
  document.querySelector(".button--next").disabled = true;
}

// Enable the next button.
function enableNextButton() {
  document.querySelector(".button--next").disabled = false;
}

// Disable the quiz answer buttons.
function disableQuizButtons() {
  quizSelectionButtons.forEach(button => {
    button.disabled = true;
  });
}

// Enable the quiz answer buttons.
function enableQuizButtons() {
  quizSelectionButtons.forEach(button => {
    button.disabled = false;
  });
}

// Check the selected answer.
function checkAnswer(button) {
  const spanContent = button.querySelector(".quiz__selection > span").textContent;
  const answer = shuffledArray[currentQuestionIndex - 1].Answer;
  let result;
  console.table(shuffledArray);
  console.log(`Selection: ${spanContent}`);
  console.log(`Answer: ${answer}`);
  if (spanContent === answer) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// Display the tick icon on a correct answer.
function displayTick(button) {
  button.querySelector("i").classList.add("fa-solid", "fa-check");
}

// Display the cross icon on an incorrect answer.
function displayCross(button) {
  button.querySelector("i").classList.add("fa-solid", "fa-times");
}

// Remove/reset all icons.
function removeAllIcons() {
  const allButtons = document.querySelectorAll(".quiz__selection i")
  // Loop through all the buttons and remove the font awesome classes.
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("fa-solid", "fa-times", "fa-check");
  }
}

// Display these for test purposes.
function showDetails() {
  console.log(`Question Index: ${currentQuestionIndex}`);
  console.log(`Question Number: ${currentQuestionNumber}`);
  console.log(`Total Questions: ${totalQuestionNum}`);
  console.log(`Shuffled Array: ${shuffledArray}`);
  console.log(`Correct Questions: ${correctAnswers}`);
  console.log(`Incorrect Questions: ${incorrectAnswers}`);
}

// Increase the correct answer counter.
function increaseCorrectAnswer() {
  quizCorrectAnswers.innerHTML = ++correctAnswers;
}

// Increase the incorrect answer counter.
function increaseIncorrectAnswer() {
  quizIncorrectAnswers.innerHTML = ++incorrectAnswers;
}

// Add u-inactive class, which disables the element.
function disableElement(element) {
  element.classList.add("u-inactive");
}

// Disable u-inactive class, which enables the element.
function activateElement(element) {
  element.classList.remove("u-inactive");
}

function showFinalScore() {
  theEndScore.innerHTML = correctAnswers;
  theEndTotal.innerHTML = totalQuestionNum;
}

function clearScore() {
  correctAnswers = 0;
  quizCorrectAnswers.innerHTML = correctAnswers;
  incorrectAnswers = 0;
  quizIncorrectAnswers.innerHTML = incorrectAnswers;
  currentQuestionIndex = 0;
  currentQuestionNumber = 0;
}

function addMaxQuestions() {
  rulesMaxQuestionsInput.max = lengthOfAllQuestions;
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