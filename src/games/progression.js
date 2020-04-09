import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getGameData = () => {
  const randomStep = random(1, 9);
  const randomIndex = random(0, 9);
  const progrLength = 10;
  const progression = Array(progrLength).fill('').map((num, i) => randomStep * (i + 1));

  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
