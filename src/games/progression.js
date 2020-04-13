import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'What number is missing in the progression?';
const progressionLength = 10;
const progressionMaxStep = 9;
const progressionMaxFirstItem = 15;

const getProgression = (firstItem, step, length) => {
  const progression = [firstItem];
  for (let i = 0; i < length - 1; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getGameData = () => {
  const step = random(1, progressionMaxStep);
  const firstItem = random(1, progressionMaxFirstItem);
  const hiddenItemIndex = random(0, progressionLength - 1);
  const progression = getProgression(firstItem, step, progressionLength);

  const answer = progression[hiddenItemIndex].toString();
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
