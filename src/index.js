import readlineSync from 'readline-sync';

export const userInput = () => {
  const userName = readlineSync.question('> ');
  return userName;
};

export const greetings = () => {
  console.log('Welcome to the Brain Games\nMay I have your name?');
  const userName = userInput();
  console.log(`Hello, ${userName}!`);
  return (userName);
};
