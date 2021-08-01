import { put, takeEvery } from "redux-saga/effects";
import {
  GET_AGENTS_REQUEST,
  getAgentsSuccess,
  getAgentsError,
} from "../actions/agent.js";

import apiClient from "../../utils/apiClient";

function* getAgentsRequest(action) {
  try {
    const result = yield apiClient.fetchAgents();
    yield put(getAgentsSuccess(result.data));
  } catch (error) {
    yield put(getAgentsError(error));
  }
}

export default function* agentsSagas() {
  yield takeEvery(GET_AGENTS_REQUEST, getAgentsRequest);
}
