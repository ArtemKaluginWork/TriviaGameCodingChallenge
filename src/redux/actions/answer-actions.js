export const ADD_ANSWER = 'add-answer';
export const RESET_ANSWER = 'reset-answer';

const ACTIONS = Object.freeze({
  ADD_ANSWER,
  RESET_ANSWER,

  addAnswer: answer => ({
    type: ADD_ANSWER,
    payload: answer,
  }),
  resetAnswer: () => ({
    type: RESET_ANSWER,
  }),
});

export default ACTIONS;
