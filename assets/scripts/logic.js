import { JAVASCRIPT_QUIZ } from '../scripts/fallbackQuiz.js';

// Fisher-Yates Shuffle adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

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

// Get X questions from the shuffled array. Default is 3. End is not included in slice.
function retrieveQuestions(numberOfQuestions = 3) {
  // Shuffle the questions.
  let shuffledArray = shuffle(JAVASCRIPT_QUIZ);

  // Return X number of questions
  shuffledArray = shuffledArray.slice(0, numberOfQuestions);

  return shuffledArray;
};

export {
  shuffle,
  retrieveQuestions
};