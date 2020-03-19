import { runGameFlow, random } from '../index.js';

export default () => {
  const getGameParam = () => {
    const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
    const question = random(0, 100);
    const isEven = question % 2 === 0;
    const answer = isEven ? 'yes' : 'no';
    return [gameTask, question, answer];
  };

  runGameFlow(getGameParam);
};
