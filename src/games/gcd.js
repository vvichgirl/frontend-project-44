import { getNumber, gcd, runGame } from '../index.js';

const getQuestionAnswer = () => {
  const minNumber = 1;
  const maxNumber = 200;
  const numberOne = getNumber(minNumber, maxNumber);
  const numberTwo = getNumber(minNumber, maxNumber);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = gcd(numberOne, numberTwo);
  return [question, correctAnswer.toString()];
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  runGame(rule, getQuestionAnswer);
};
