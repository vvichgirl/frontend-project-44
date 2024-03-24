import { getNumber, isPrime, runGame } from '../index.js';

const getQuestionAnswer = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const number = getNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer.toString()];
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rule, getQuestionAnswer);
};
