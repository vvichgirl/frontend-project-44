import { getNumber, runGame } from '../index.js';

const isEven = (num) => {
  const even = num % 2 === 0 ? 'yes' : 'no';
  return even;
};

const getQuestionAnswer = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const questionNumber = getNumber(minNumber, maxNumber);
  const correctAnswer = isEven(questionNumber);
  return [questionNumber, correctAnswer];
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rule, getQuestionAnswer);
};
