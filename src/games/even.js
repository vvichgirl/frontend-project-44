import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const correctMessage = 'Correct!';
  const maxNumber = 100;
  const maxRound = 3;

  for (let currentRound = 1; currentRound <= maxRound; currentRound += 1) {
    const digit = Math.floor(Math.random() * maxNumber);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${digit}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = digit % 2 === 0 ? 'yes' : 'no';
    const wrongMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

    if (answer !== correctAnswer) {
      console.log(`${wrongMessage}!`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log(`${correctMessage}!`);

    if (currentRound === maxRound) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
