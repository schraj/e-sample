import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveSurveyType: ['surveyType'],
  saveAnswer: ['questionId', 'answer'],
  submitSurveyRequest: null,
  submitSurveySuccess: null,
  submitSurveyFailure: null
})

export const SurveyTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  answers: [],
  surveyType: null,
  saving: null,
  error: null
})

/* ------------- Reducers ------------- */
export const saveSurveyType = (state, action) => {
  const { surveyType } = action;
  console.tron.log({ message: 'in save survey type', state: state, action: action });
  return state.merge({ surveyType: surveyType });
}

export const saveAnswer = (state, action) => {
  const { questionId, answer } = action;
  console.tron.log({ message: 'in save answer', state: state, action: action });
  newAnswers = [...state.answers, [questionId, answer]];
  return Immutable.set(state, 'answers', newAnswers);
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
  [Types.SAVE_SURVEY_TYPE]: saveSurveyType,
  [Types.SAVE_ANSWER]: saveAnswer,
  [Types.SUBMIT_SURVEY_REQUEST]: request,
  [Types.SUBMIT_SURVEY_SUCCESS]: success,
  [Types.SUBMIT_SURVEY_FAILURE]: failure
})
