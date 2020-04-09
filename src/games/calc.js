import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const calculate = (operator, number1, number2) => {
  let result = '';
  switch (operator) {
    case '*':
      result = (number1 * number2);
      break;
    case '-':
      result = (number1 - number2);
      break;
    case '+':
      result = (parseInt(number1, 10) + parseInt(number2, 10));
      break;
    default:
      throw new Error(`Incorrect operator: ${operator}`);
  }
  return result;
};

const getGameData = () => {
  const randomIndex = random(0, operators.length - 1);
  const operator = operators[randomIndex];
  const number1 = random(0, 100);
  const number2 = random(0, 100);
  const question = `${number1} ${operator} ${number2} `;
  const answer = calculate(operator, number1, number2).toString();

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
