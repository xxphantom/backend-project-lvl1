import { userInput, greetings } from './index.js';

export default () => {
  const game = (userName, times, isFirstRound) => {
    if (times === 0) {
      return;
    }
    const rando = () => Math.round(Math.random() * 100);
    const question = rando();
    const isEven = question % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (isFirstRound) {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
    }

    console.log(`Question: ${question}`);

    const userAnswer = userInput();
    console.log(`Your answer: ${userAnswer}`);
    const isCorrect = correctAnswer === userAnswer;

    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer ${correctAnswer}.\nLet's try again, ${userName}!`);
    }

    game(userName, times - 1, 0);
  };

  const userName = greetings();
  game(userName, 3, 1);
};
