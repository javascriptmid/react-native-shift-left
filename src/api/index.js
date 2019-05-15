import questions from './source.json';

function* getTriviaQuestion(groupQuestions) {
  let index = 0;

  while (index < groupQuestions.length) {
    yield groupQuestions[index];
    index++;
  }
}

export default function getTrivia() {
  const sample = Math.floor(Math.random() * (questions.length - 5) + 1);
  return getTriviaQuestion(questions.slice(sample, sample + 5));
}
