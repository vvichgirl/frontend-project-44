import { getNumber, runGame } from '../index.js';

const getQuestionAnswer = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const questionNumber = getNumber(minNumber, maxNumber);
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rule, getQuestionAnswer);
};
