import JAVASCRIPT_QUIZ from './fallbackQuiz.js';

const BOX_START = document.querySelector('.start');
// console.log(BOX_START);
const START_BUTTON = document.querySelector('.button.button--start');

const BOX_RULES = document.querySelector('.rules');
const EXIT_BUTTON = document.querySelector('.button.button--exit');
const CONTINUE_BUTTON = document.querySelector('.button.button--continue');
const NEXT_BUTTON = document.querySelector('.button.button--next');

const BOX_QUESTIONS = document.querySelector('.quiz');

// When the start button is clicked display the rules box
START_BUTTON.addEventListener('click', () => {
  BOX_START.classList.toggle('u-inactive'); // Disable
  BOX_RULES.classList.toggle('u-inactive'); // Enable
});

// When the exit button is clicked display the start box
EXIT_BUTTON.addEventListener('click', () => {
  BOX_START.classList.toggle('u-inactive'); // Enable
  BOX_RULES.classList.toggle('u-inactive'); // Disable
});

// When the continue box is clicked display the first set of questions
CONTINUE_BUTTON.addEventListener('click', () => {
  BOX_RULES.classList.toggle('u-inactive'); // Disable
  BOX_QUESTIONS.classList.toggle('u-inactive'); // Enable
});

