import readlineSync from 'readline-sync';

const maxNumberRound = 3;

const runGameFlow = (gameTask, getGameData) => {
  console.log('Welcome to the Brain Games');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  const iter = (round) => {
    if (round === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrect = correctAnswer === userAnswer.toLowerCase();
    if (!isCorrect) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    iter(round - 1);
  };

  iter(maxNumberRound);
};

export default runGameFlow;
