import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'What is the result of the expression?';
const mathSimbols = ['*', '+', '-'];

const getGameParam = () => {
  const randomIndex = random(0, 3);
  const mathSimbol = mathSimbols[randomIndex];
  const number1 = random(0, 100);
  const number2 = random(0, 100);
  const question = `${number1} ${mathSimbol} ${number2} `;

  let answer = '';
  switch (mathSimbol) {
    case '*':
      answer = (number1 * number2);
      break;
    case '-':
      answer = (number1 - number2);
      break;
    case '+':
      answer = (parseInt(number1, 10) + parseInt(number2, 10));
      break;
    default:
      throw new Error('Incorrect mathSimbols');
  }

  return [question, answer.toString()];
};

export default () => {
  runGameFlow(gameTask, getGameParam);
};
