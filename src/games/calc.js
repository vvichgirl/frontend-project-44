import { getNumber, runGame } from '../index.js';

const operations = ['-', '+', '*'];

const calc = (digitOne, mathOperation, digitTwo) => {
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
  const mathOperation = operations[getNumber(minNumber, maxCountOperations)];
  const question = `${digitOne} ${mathOperation} ${digitTwo}`;
  const correctAnswer = calc(digitOne, mathOperation, digitTwo);
  return [question, correctAnswer.toString()];
};

export default () => {
  const rule = 'What is the result of the expression?';
  runGame(rule, getQuestionAnswer);
};
