import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import memberReducer from './memberReducer'
import sessionReducer from './session'
import errorReducer from './errorReducer'
import trailsReducer from './trailsReducer'
import reviewReducer from './reviewReducer'
import uiReducer from './uiReducer'
import searchReducer from './searchReducer'
import favoritesReducer from './favoritesReducer'


const entitiesReducer = combineReducers({
  members: memberReducer,
  trails: trailsReducer,
  reviews: reviewReducer,
  search: searchReducer,
  favorites: favoritesReducer
})

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorReducer,
    ui: uiReducer
});


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
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;