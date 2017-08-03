import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import { submitSurvey } from '../services/firebaseApi'
import SurveyActions from '../Redux/SurveyRedux'

export const getSuveyInfo = (state) => state.survey
export const getParticipantInfo = (state) => state.participant

export function* submitSurveyData(api) {
  let survey = yield select(getSurveyInfo); // <-- get the project
  let participantInfo = yield select(getParticipantInfo); // <-- get the project

  const survey = { surveyType: survey.surveyType, answers: answers }
  const participantId = participantInfo.participantId;

  // make the call to the api
  const response = yield call(api.submitSurvey, survey, participantId)

  if (response.ok) {
    // do data conversion here if needed
    yield put(SurveyActions.saveSurveySuccess())
  } else {
    yield put(SurveyActions.saveSurveyFailure())
  }
}
