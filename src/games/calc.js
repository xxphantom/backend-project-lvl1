import { gameFlow, random } from '../index.js';

export default () => {
  const getGameParam = () => {
    const mathSimbols = ['*', '+', '-'];
    const gameTask = 'What is the result of the expression?';
    const randomIndex = random(0, 3);
    const mathSimbol = mathSimbols[randomIndex];
    const number1 = random(0, 100);
    const number2 = random(0, 100);
    const question = `${number1} ${mathSimbol} ${number2} `;

    let answer = '';
    switch (mathSimbol) {
      case '*':
        answer = (number1 * number2).toString();
        break;
      case '-':
        answer = (number1 - number2).toString();
        break;
      case '+':
        answer = (parseInt(number1, 10) + parseInt(number2, 10)).toString();
        break;
      default:
        throw console.error('Incorrect mathSimbols');
    }

    return [gameTask, question, answer];
  };

  gameFlow(getGameParam);
};
