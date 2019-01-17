import { applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {MonitorReducerEnhancer, LoggerMiddleware} from '../middlewares/middlewares';
import { reducer as formReducer } from 'redux-form'
import {SigninReducer} from '../signin/Signin';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  signin: SigninReducer,
  form: formReducer,
})
export default function configureStore(preloadedState) {
  const middlewares = [LoggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, MonitorReducerEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
