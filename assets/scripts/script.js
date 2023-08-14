const BOX_START = document.querySelector('.start');
// console.log(BOX_START);
const START_BUTTON = document.querySelector('.button.button--start');

const BOX_RULES = document.querySelector('.rules');
const EXIT_BUTTON = document.querySelector('.button.button--exit');
const CONTINUE_BUTTON = document.querySelector('.button.button--continue');
const NEXT_BUTTON = document.querySelector('.button.button--next');

const BOX_QUESTIONS = document.querySelector('.quiz');

START_BUTTON.addEventListener('click', () => {
  BOX_START.classList.toggle('u-inactive'); // Disable
  BOX_RULES.classList.toggle('u-inactive'); // Enable
  // console.log('start button clicked');
});

EXIT_BUTTON.addEventListener('click', () => {
  BOX_START.classList.toggle('u-inactive'); // Enable
  BOX_RULES.classList.toggle('u-inactive'); // Disable
});

CONTINUE_BUTTON.addEventListener('click', () => {
  BOX_RULES.classList.toggle('u-inactive'); // Disable
  BOX_QUESTIONS.classList.toggle('u-inactive'); // Enable
});