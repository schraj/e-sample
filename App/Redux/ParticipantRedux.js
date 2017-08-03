import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  activateParticipant: ['participantId', 'eveningSurveyTimeHour', 'eveningSurveyTimeMinute'],
  saveParticipantRequest: ['participantId', 'eveningSurveyTimeHour', 'eveningSurveyTimeMinute'],
  saveParticipantSuccess: null,
  saveParticipantFailure: null
})

export const ParticipantTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  saving: null,
  error: null,
  participantId: null,
  eveningSurveyTimeHour: null,
  eveningSurveyTimeMinute: null,
})

/* ------------- Reducers ------------- */
// successful save
export const activate = (state, action) => {
  return state;
}

// save a setup response
export const request = (state, { participantId, eveningSurveyTimeHour, eveningSurveyTimeMinute }) =>
  state.merge({ saving: true, participantId, eveningSurveyTimeHour, eveningSurveyTimeMinute })

// successful save
export const success = (state, action) => {
  return state.merge({ saving: false, error: null })
}

// failed to save
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ACTIVATE_PARTICIPANT]: activate,
  [Types.SAVE_PARTICIPANT_REQUEST]: request,
  [Types.SAVE_PARTICIPANT_SUCCESS]: success,
  [Types.SAVE_PARTICIPANT_FAILURE]: failure
})
