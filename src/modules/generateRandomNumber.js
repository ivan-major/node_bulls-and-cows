'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = new Set();

  while (digits.size < 4) {
    const digit = Math.floor(Math.random() * 10);

    digits.add(digit);
  }

  const result = Array.from(digits);

  if (result[0] === 0) {
    const swapIndex = result.findIndex((digit) => digit !== 0);

    [result[0], result[swapIndex]] = [result[swapIndex], result[0]];
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
