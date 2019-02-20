export const ADD_ANSWER = 'add-answer';
export const RESET_ANSWERS = 'reset-answers';

const ACTIONS = Object.freeze({
  ADD_ANSWER,
  RESET_ANSWERS,

  addAnswer: answer => ({
    type: ADD_ANSWER,
    payload: answer,
  }),
  resetAnswers: () => ({
    type: RESET_ANSWERS,
  }),
});

export default ACTIONS;
