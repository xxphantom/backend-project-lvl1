import { runGameFlow, random } from '../index.js';

export default () => {
  const getGameParam = () => {
    const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const question = random(0, 101);

    const isPrime = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
      }
      return true;
    };

    const answer = isPrime(question) ? 'yes' : 'no';

    return [gameTask, question, answer];
  };

  runGameFlow(getGameParam);
};
