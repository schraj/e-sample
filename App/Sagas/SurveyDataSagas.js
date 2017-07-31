import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import SaveSurveyActions from '../Redux/SaveSurveyRedux'

export function* saveSurveyData(api, action) {
  const { participantId } = action
  // make the call to the api
  const response = yield call(api.sendData, participantId)

  if (response.ok) {
    // do data conversion here if needed
    yield put(SaveSurveyActions.saveSurveySuccess())
  } else {
    yield put(SaveSurveyActions.saveSurveyFailure())
  }
}
