import readlineSync from 'readline-sync';

export const random = (min, max) => Math.floor(min + Math.random() * max);

export const inputUserName = () => {
  const userName = readlineSync.question('Welcome to the Brain Games\nMay I have your name? ');
  return userName;
};

export const printGreetings = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const runGameFlow = (getGameParam, maxNumberRounds = 3) => {
  const userName = inputUserName();
  printGreetings(userName);

  const [gameTask] = getGameParam();
  console.log(gameTask);

  const iter = (rounds) => {
    if (rounds === 0) return;

    const [, question, correctAnswer] = getGameParam();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrect = correctAnswer.toString() === userAnswer.toLowerCase();
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
    }
    iter(rounds - 1);
  };

  iter(maxNumberRounds);
};
