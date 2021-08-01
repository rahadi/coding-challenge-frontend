import update from "immutability-helper";
import { GET_RESOLUTIONS_SUCCESS } from "../actions/resolutions";

/**
 * Initial state for this section of the store
 * @type {Object}
 */
const InitialState = {
  entities: [],
};

export const resolutions = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RESOLUTIONS_SUCCESS:
      return update(state, {
        entities: { $push: payload },
      });

    default:
      return state;
  }
};
