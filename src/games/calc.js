import runGameFlow from '../index.js';
import random from '../utils.js';

const gameTask = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '*':
      return (number1 * number2);
    case '-':
      return (number1 - number2);
    case '+':
      return (number1 + number2);
    default:
      throw new Error(`Incorrect operator: ${operator}`);
  }
};

const getGameData = () => {
  const operatorIndex = random(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const number1 = random(0, 100);
  const number2 = random(0, 100);
  const question = `${number1} ${operator} ${number2} `;
  const answer = calculate(operator, number1, number2).toString();

  return [question, answer];
};

export default () => {
  runGameFlow(gameTask, getGameData);
};
