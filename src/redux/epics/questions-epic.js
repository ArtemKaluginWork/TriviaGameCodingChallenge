import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import questionsApi from '../../services/questions-api';
import questionsActions, { FETCH_QUESTIONS_REQUEST } from '../actions/questions-actions';

const fetchQuestionsActionsEpic = action$ =>
  action$.pipe(
    ofType(FETCH_QUESTIONS_REQUEST),
    mergeMap(() =>
      from(questionsApi.fetchQuestions()).pipe(
        map(questionsActions.fetchQuestionsSuccess),
        catchError(error => of(questionsActions.fetchQuestionsError(error))),
      ),
    ),
  );

export default combineEpics(fetchQuestionsActionsEpic);
