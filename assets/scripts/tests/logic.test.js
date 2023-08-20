/**
 * @jest-environment node
 */

// Red: Write a failing test.
// Green: Get the test to pass.
// Refactor: Optimise.

// Readable: Clear description and failure messages.
// Isolate: Atomic, isolated testing.
// Thorough: Edge cases.
// Explicit: Obvious what the test does.

// Consider testing:
// length
// values
// order
// edge cases/ outliers
// different types
// no parameters, more parameters

import { shuffle, retrieveQuestions } from '../logic.js';

describe('shuffle function', () => {
  it('should return an array with the same length as the input array', () => {
    const inputArray = [1, 2, 3, 4];
    const shuffled = shuffle(inputArray);
    expect(shuffled.length).toBe(inputArray.length);
  });

  it('should return an array with the same elements as the input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffled = shuffle(inputArray);
    inputArray.forEach(item => {
      expect(shuffled).toContain(item);
    });
  });

  it('should not always return the same order for multiple calls', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const firstShuffle = shuffle([...inputArray]);
    const secondShuffle = shuffle([...inputArray]);
    expect(firstShuffle).not.toEqual(secondShuffle);
  });

});