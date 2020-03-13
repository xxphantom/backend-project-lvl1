import readlineSync from 'readline-sync';

const inputName = () => {
  const userName = readlineSync.question('May I have your name?\n> ');
  console.log(`Hello, ${userName}!`);
};

export default inputName;
