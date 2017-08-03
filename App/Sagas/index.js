import { takeLatest, takeEvery } from 'redux-saga/effects'
import Api from '../Services/firebaseApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ParticipantTypes } from '../Redux/ParticipantRedux'
import { SurveyTypes } from '../Redux/SurveyRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { submitSurveyData } from './SurveySagas'
import { activateParticipantData, saveParticipantData } from './ParticipantSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
//const api = DebugConfig.useFixtures ? FixtureAPI : Api.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(SurveyTypes.SUBMIT_SURVEY_REQUEST, submitSurveyData, Api),

    takeLatest(ParticipantTypes.ACTIVATE_PARTICIPANT, activateParticipantData),

    takeLatest(ParticipantTypes.SAVE_PARTICIPANT_REQUEST, saveParticipantData),
  ]
}
