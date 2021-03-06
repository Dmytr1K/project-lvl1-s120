import { cons } from 'hexlet-pairs';
import getRandomInt from '../util';
import play from '..';

const description = 'What is the result of the expression?';

const setGameData = () => {
  const operands1 = getRandomInt();
  const operands2 = getRandomInt();
  const operatorNumber = getRandomInt(1, 3);

  let question;
  let correctAnswer;
  switch (operatorNumber) {
    case 1:
      question = `${operands1} + ${operands2}`;
      correctAnswer = `${operands1 + operands2}`;
      break;
    case 2:
      question = `${operands1} - ${operands2}`;
      correctAnswer = `${operands1 - operands2}`;
      break;
    case 3:
      question = `${operands1} * ${operands2}`;
      correctAnswer = `${operands1 * operands2}`;
      break;
    // no default
  }

  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
