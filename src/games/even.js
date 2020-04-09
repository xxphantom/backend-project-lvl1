import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = random(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
