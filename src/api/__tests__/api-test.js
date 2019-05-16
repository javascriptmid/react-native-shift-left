import api, { LIMIT } from '../index';

describe('api', () => {
  it('initialices trivia', () => {
    const triviaSource = api();
    expect(triviaSource).toBeDefined();

    for (let i = 0; i < LIMIT; i++) {
      const question = triviaSource.next();
      expect(question.value._id).toBeDefined();
      expect(question.done).toBe(false);
    }

    const emptyQuestion = triviaSource.next();
    expect(emptyQuestion.value).toBeUndefined();
    expect(emptyQuestion.done).toBe(true);
  });
});
