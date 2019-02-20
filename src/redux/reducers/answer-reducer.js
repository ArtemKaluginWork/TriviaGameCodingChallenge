import { ADD_ANSWER, RESET_ANSWERS } from '../actions/answer-actions';

const initState = {
  answerList: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ANSWER:
      return { ...state, answerList: [...state.answerList, payload] };
    case RESET_ANSWERS:
      return { ...state, answerList: [] };
    default:
      return state;
  }
};
