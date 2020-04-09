import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return (Math.abs(a));
  }
  return getGCD(b, a % b);
};

const getGameData = () => {
  const number1 = random(1, 250);
  const number2 = random(1, 250);
  const question = `${number1} ${number2} `;
  const answer = getGCD(number1, number2).toString();

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
