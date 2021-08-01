import update from "immutability-helper";
import { GET_LOGS_SUCCESS, GET_LOGS_REQUEST } from "../actions/logs";

/**
 * Initial state for this section of the store
 * @type {Object}
 */
const InitialState = {
  entities: [],
  status: "idle",
  error: null,
};

export const logs = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOGS_REQUEST:
      return update(state, {
        status: { $set: "loading" },
      });

    case GET_LOGS_SUCCESS:
      return update(state, {
        status: { $set: "success" },
        entities: { $push: payload },
      });

    default:
      return state;
  }
};
