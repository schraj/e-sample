import { call, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import { getSettings, setSettings } from '../Services/storageApi'
import ParticipantActions from '../Redux/ParticipantRedux'

export function* activateParticipantData() {
  const response = yield call(getSettings);
  console.tron.log({ message: 'in activate', object: response });

  if (response && response.participantId) {
    yield put(ParticipantActions.saveParticipantRequest(response.participantId, response.eveningSurveyTimeHour, response.eveningSurveyTimeMinute));
  }
}

export function* saveParticipantData(action) {
  if (action.participantId) {
    console.tron.log({ message: 'in save', object: action, setSettings: setSettings });
    const settings = {
      participantId: action.participantId,
      eveningSurveyTimeHour: action.eveningSurveyTimeHour,
      eveningSurveyTimeMinute: action.eveningSurveyTimeMinute,
    }
    yield call(setSettings, settings);
    yield put(ParticipantActions.saveParticipantSuccess());
  }
}