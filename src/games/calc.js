import { getNumber, runGame } from '../index.js';

const operations = ['-', '+', '*'];

const getCorrectAnswer = (digitOne, mathOperation, digitTwo) => {
  switch (mathOperation) {
    case '-':
      return Number(digitOne) - Number(digitTwo);
    case '*':
      return Number(digitOne) * Number(digitTwo);
    default:
      return Number(digitOne) + Number(digitTwo);
  }
};

const getQuestionAnswer = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const digitOne = getNumber(minNumber, maxNumber);
  const digitTwo = getNumber(minNumber, maxNumber);
  const maxCountOperations = operations.length - 1;
  const mathOperation = operations[getNumber(0, maxCountOperations)];
  const question = `${digitOne} ${mathOperation} ${digitTwo}`;
  let correctAnswer = getCorrectAnswer(digitOne, mathOperation, digitTwo);
  correctAnswer = correctAnswer.toString();
  return [question, correctAnswer];
};

export default () => {
  const rule = 'What is the result of the expression?';
  runGame(rule, getQuestionAnswer);
};