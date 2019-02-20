export const FETCH_QUESTIONS_REQUEST = 'fetch-questions-request';
export const FETCH_QUESTIONS_SUCCESS = 'fetch-questions-success';
export const FETCH_QUESTIONS_ERROR = 'fetch-questions-error';

const ACTIONS = Object.freeze({
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,

  fetchQuestionsRequest: () => ({
    type: FETCH_QUESTIONS_REQUEST,
  }),
  fetchQuestionsSuccess: questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions,
  }),
  fetchQuestionsError: error => ({
    type: FETCH_QUESTIONS_ERROR,
    payload: error,
  }),
});

export default ACTIONS;
