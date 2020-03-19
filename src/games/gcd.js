import { runGameFlow, random } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return (Math.abs(a));
  }
  return gcd(b, a % b);
};

export default () => {
  const getGameParam = () => {
    const gameTask = 'Find the greatest common divisor of given numbers.';
    const number1 = random(1, 250);
    const number2 = random(1, 250);
    const question = `${number1} ${number2} `;
    const answer = gcd(number1, number2).toString();

    return [gameTask, question, answer];
  };

  runGameFlow(getGameParam);
};
