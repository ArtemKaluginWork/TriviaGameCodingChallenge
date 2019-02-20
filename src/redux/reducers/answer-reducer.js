import { ADD_ANSWER, RESET_ANSWER } from '../actions/answer-actions';

const initState = {
  answerList: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ANSWER:
      return { ...state, answerList: [...state.answerList, payload] };
    case RESET_ANSWER:
      return { ...state, answerList: [] };
    default:
      return state;
  }
};
