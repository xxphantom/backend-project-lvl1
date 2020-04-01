import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getGameParam = () => {
  const randomStep = random(1, 9);
  const randomIndex = random(0, 9);
  const numbers = Array(10).fill('').map((num, i) => randomStep * (i + 1));

  const answer = numbers[randomIndex];
  numbers[randomIndex] = '..';
  const question = numbers.join(' ');

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameParam);
};
