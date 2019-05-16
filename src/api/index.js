import questions from './source.json';

export const LIMIT = 5;

function* getTriviaQuestion(groupQuestions) {
  let index = 0;

  while (index < groupQuestions.length) {
    yield groupQuestions[index];
    index++;
  }
}

export default function getTrivia() {
  const sample = Math.floor(Math.random() * (questions.length - LIMIT) + 1);
  return getTriviaQuestion(questions.slice(sample, sample + LIMIT));
}
