import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import questions from './questions-reducer';
import answers from './answer-reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    questions,
    answers,
  });
