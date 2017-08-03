import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setupParticpantRequest: ['participantId'],
  setupParticpantSuccess: null,
  setupParticpantFailure: null
})

export const SetupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  saving: null,
  error: null,
  participantId: null
})

/* ------------- Reducers ------------- */

// save a setup response
export const request = (state, { participantId }) =>
  state.merge({ saving: true, participantId })

// successful save
export const success = (state, action) => {
  return state.merge({ saving: false, error: null })
}

// failed to save
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SETUP_PARTICIPANT_REQUEST]: request,
  [Types.SETUP_PARTICIPANT_SUCCESS]: success,
  [Types.SETUP_PARTICIPANT_FAILURE]: failure
})
