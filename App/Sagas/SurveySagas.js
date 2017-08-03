import { call, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import { submitSurvey } from '../Services/firebaseApi'
import SurveyActions from '../Redux/SurveyRedux'

export function* submitSurveyData(api) {
  let survey = yield select((state) => state.survey);
  let participantInfo = yield select((state) => state.participant);

  const newSurvey = { surveyType: survey.surveyType, answers: survey.answers };
  //const participantId = participantInfo.participantId;
  const participantId = 1;

  // make the call to the api
  const response = yield call(api.submitSurvey, participantId, newSurvey);

  yield put(SurveyActions.submitSurveySuccess());

  // if (response.ok) {
  //   // do data conversion here if needed
  //   yield put(SurveyActions.saveSurveySuccess())
  // } else {
  //   yield put(SurveyActions.saveSurveyFailure())
  // }
}
