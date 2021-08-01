import update from "immutability-helper";
import { GET_AGENTS_SUCCESS } from "../actions/agent";

/**
 * Initial state for this section of the store
 * @type {Object}
 */
const InitialState = {
  entities: [],
};

export const agents = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_AGENTS_SUCCESS:
      return update(state, {
        entities: { $push: payload },
      });

    default:
      return state;
  }
};
