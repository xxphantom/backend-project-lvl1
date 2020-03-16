import readlineSync from 'readline-sync';

const getUserInput = () => {
  const userAnswer = readlineSync.question('> ');
  return userAnswer;
};

let userName = '';
export const greetings = () => {
  console.log('Welcome to the Brain Games\nMay I have your name?');
  userName = getUserInput();
  console.log(`Hello, ${userName}!`);
};

export const gameFlow = (getGameParam) => {
  const game = (times, isFirstRound) => {
    if (times === 0) {
      return;
    }
    const [gameTask, question, correctAnswer] = getGameParam();

    if (isFirstRound) {
      greetings();
      console.log(gameTask);
    }

    console.log(`Question: ${question}`);
    const userAnswer = getUserInput().toLowerCase();
    console.log(`Your answer: ${userAnswer}`);
    const isCorrect = correctAnswer === userAnswer;


    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
    game(times - 1, 0);
  };
  game(3, 1);
};
