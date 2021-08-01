import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import sagas from "./sagas/index";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const history = createBrowserHistory();

/**
 * Configure store
 */
export default function configureStore() {
  const middlewares = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  middlewares.push(routerMiddleware(history));

  const middlewareEnhancer = applyMiddleware(...middlewares);
  enhancers.push(middlewareEnhancer);

  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(...enhancers)
  );

  sagas.map((saga) => sagaMiddleware.run(saga));
  return { store, history };
}
