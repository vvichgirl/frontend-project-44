import { getNumber, runGame } from '../index.js';

const getQuestionAnswer = () => {
  const minNumber = 5;
  const maxNumber = 15;
  const progressionStartNumber = getNumber(minNumber, maxNumber);
  const progressionLength = getNumber(minNumber, maxNumber);
  const progressionStep = getNumber(minNumber, maxNumber);
  const skipElement = getNumber(0, progressionLength - 1);
  const progressionElements = [progressionStartNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    const element = progressionElements.at(-1) + progressionStep;
    progressionElements.push(element);
  }
  const correctAnswer = progressionElements[skipElement];
  progressionElements[skipElement] = '..';
  const question = progressionElements.join(' ');
  return [question, correctAnswer.toString()];
};

export default () => {
  const rule = 'What number is missing in the progression?';
  runGame(rule, getQuestionAnswer);
};
