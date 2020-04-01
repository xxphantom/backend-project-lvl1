import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameParam = () => {
  const question = random(0, 101);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameParam);
};
