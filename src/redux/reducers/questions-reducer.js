import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS } from '../actions/questions-actions';

const initState = {
  questionList: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_QUESTIONS_REQUEST: {
      return { ...initState };
    }
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, questionList: payload };
    default:
      return state;
  }
};
