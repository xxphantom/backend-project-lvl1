import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const question = random(2, 101);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
