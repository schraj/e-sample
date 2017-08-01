import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import SurveyActions from '../Redux/SurveyRedux'

export function* submitSurveyData(api, action) {
  const { participantId } = action
  // make the call to the api
  const response = yield call(api.sendData, participantId)

  if (response.ok) {
    // do data conversion here if needed
    yield put(SurveyActions.saveSurveySuccess())
  } else {
    yield put(SurveyActions.saveSurveyFailure())
  }
}
