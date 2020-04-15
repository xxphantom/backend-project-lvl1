import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'What number is missing in the progression?';
const progressionLength = 10;
const progressionMaxStep = 9;
const progressionMaxFirstItem = 15;

const generateProgression = (firstItem, step, length) => Array(length)
  .fill(null)
  .map((item, i) => firstItem + (step * i));

const getGameData = () => {
  const step = random(1, progressionMaxStep);
  const firstItem = random(1, progressionMaxFirstItem);
  const hiddenItemIndex = random(0, progressionLength - 1);
  const progression = generateProgression(firstItem, step, progressionLength);

  const answer = progression[hiddenItemIndex].toString();
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
