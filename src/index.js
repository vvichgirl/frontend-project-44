import readlineSync from 'readline-sync';

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getGreeting = (userName) => {
  const result = `Hello, ${userName}!`;
  return result;
};

const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const checkAnswer = (userAnswer, correctAnswer) => {
  const result = userAnswer === correctAnswer;
  return result;
};

export const getNumber = (minNumber, maxNumber) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const gcd = (numberOne, numberTwo) => {
  if (numberTwo > 0) {
    return gcd(numberTwo, numberOne % numberTwo);
  }
  return numberOne;
};

export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export const runGame = (rule, getQuestionAnswer) => {
  const maxRound = 3;
  const correctMessage = 'Correct!';

  const userName = getName();
  const greeting = getGreeting(userName);

  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  console.log(rule);

  for (let currentRound = 1; currentRound <= maxRound; currentRound += 1) {
    const [question, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    const isCorrectAnswer = checkAnswer(userAnswer, correctAnswer);
    if (isCorrectAnswer) {
      console.log(correctMessage);
    } else {
      const wrongMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(wrongMessage);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (currentRound === maxRound) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
