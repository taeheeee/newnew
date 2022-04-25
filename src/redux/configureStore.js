import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import user from '../redux/modules/user'
import post from '../redux/modules/post'
const rootReducer = combineReducers({
  user: user,
  post: post,
});

const middlewares = [thunk];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
    ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;
