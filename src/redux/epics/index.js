import { combineEpics } from 'redux-observable';

import questionsEpic from './questions-epic';

export default combineEpics(questionsEpic);
