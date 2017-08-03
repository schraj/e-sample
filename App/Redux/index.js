import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as formReducer } from 'redux-form'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    survey: require('./SurveyRedux').reducer,
    participant: require('./ParticipantRedux').reducer,
    form: formReducer
  })

  return configureStore(rootReducer, rootSaga)
}
