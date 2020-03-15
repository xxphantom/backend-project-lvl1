import readlineSync from 'readline-sync';

const inputName = () => {
  const userName = readlineSync.question('> ');
  return userName;
};

export default inputName;
