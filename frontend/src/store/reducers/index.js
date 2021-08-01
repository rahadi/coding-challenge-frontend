import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { logs } from "./logs";
import { agents } from "./agent";
import { resolutions } from "./resolutions";

const createRootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    logs,
    agents,
    resolutions,
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  return rootReducer;
};

export default createRootReducer;
