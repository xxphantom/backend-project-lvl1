import { runGameFlow, random } from '../index.js';

export default () => {
  const getGameParam = () => {
    const gameTask = 'What number is missing in the progression?';
    const randomStep = random(1, 9);
    const randomIndex = random(0, 9);
    const numbers = Array(10).fill('').map((num, i) => randomStep * (i + 1));

    const answer = numbers[randomIndex].toString();
    numbers[randomIndex] = '..';
    const question = numbers.join(' ');

    return [gameTask, question, answer];
  };

  runGameFlow(getGameParam);
};
