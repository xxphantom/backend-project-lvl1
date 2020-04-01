import readlineSync from 'readline-sync';

const startGreeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default startGreeting;
