import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducers as postsReducers } from './posts';
import { reducers as taskReducers } from './tasks';
import reduxThunk from 'redux-thunk';

//STORE SETUP
const appReducer = combineReducers({
    ...postsReducers,
    ...taskReducers
})

const { NODE_ENV } = process.env;

const composeEnhancers =
  NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(reduxThunk)
  )
)

export default store;