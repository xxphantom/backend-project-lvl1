import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameParam = () => {
  const question = random(0, 100);
  const isEven = question % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return [question, answer.toString()];
};

export default () => {
  runGameFlow(gameTask, getGameParam);
};
