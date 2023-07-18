import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import userReducer from './userReducer'

const rootReducer = (state = {}, action) => {
    return {
        users: userReducer(state.users, action)
    };
};

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}, ) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore