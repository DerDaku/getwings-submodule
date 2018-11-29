import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { reducer as formReducer } from 'redux-form'

import authReducer from './auth'
import dataReducer from './data'
import playerReducer from './player'
import cookieReducer from './cookie'

const appReducer = combineReducers({
  // form: formReducer,
  auth: authReducer,
  data: dataReducer,
  player: playerReducer,
  cookie: cookieReducer,
})

const middleware = applyMiddleware(thunk)

const store = createStore(
  appReducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
