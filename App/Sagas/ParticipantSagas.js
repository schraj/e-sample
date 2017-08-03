import { call, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import { getSettings, saveSettings } from '../Services/storageApi'
import ParticipantActions from '../Redux/ParticipantRedux'

export function* activateParticipantData() {
  const response = yield call(getSettings);
  if (response) {
    yield put(ParticipantActions.SAVE_PARTICIPANT_REQUEST, response.participantId, response.eveningSurveyTimeHour, response.eveningSurveyTimeMinute);
  }
}

export function* saveParticipantData(setupInfo) {
  const response = yield call(setSettings, setupInfo.participantId, setupInfo.hour, setupInfo.minute);
  yield put(ParticipantActions.SAVE_PARTICIPANT_REQUEST, setupInfo.participantId, setupInfo.eveningSurveyTimeHour, setupInfo.eveningSurveyTimeMinute);
}
