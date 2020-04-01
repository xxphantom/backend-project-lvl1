import readlineSync from 'readline-sync';

const maxNumberRounds = 3;

const runGameFlow = (gameTask, getGameParam) => {
  const userName = readlineSync.question('Welcome to the Brain Games\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  const iter = (rounds) => {
    if (rounds === 0) return;

    const [question, correctAnswer] = getGameParam();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrect = correctAnswer.toString() === userAnswer.toLowerCase();
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    iter(rounds - 1);
  };

  iter(maxNumberRounds);
};

export default runGameFlow;
