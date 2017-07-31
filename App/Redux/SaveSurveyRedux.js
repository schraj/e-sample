import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveAnswer: ['id', 'answer'],
  saveSurveyRequest: null,
  saveSurveySuccess: null,
  saveSurveyFailure: null
})

export const SurveyTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  answers: [],
  saving: null,
  error: null
})

/* ------------- Reducers ------------- */
export const saveAnswer = (state, { id, answer }) => {
  newAnswers = [...state.answers, [id, answer]];
  state.merge({ saving: true, answers: newAnswers });
  console.tron.log(state);
  return state;
}

// save a survey array response to server
export const request = (state, action) =>
  state.merge({ saving: true })

// successful save
export const success = (state, action) => {
  return state.merge({ saving: false, error: null })
}

// failed to save
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVEANSWER]: saveAnswer,
  [Types.SAVESURVEY_REQUEST]: request,
  [Types.SAVESURVEY_SUCCESS]: success,
  [Types.SAVESURVEY_FAILURE]: failure
})
