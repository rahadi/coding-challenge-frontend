import { put, takeEvery } from "redux-saga/effects";
import {
  GET_LOGS_REQUEST,
  getLogsSuccess,
  getLogsError,
} from "../actions/logs";

import apiClient from "../../utils/apiClient";

function* getLogsRequest(action) {
  try {
    const result = yield apiClient.fetchLogs();
    yield put(getLogsSuccess(result.data));
  } catch (error) {
    yield put(getLogsError(error));
  }
}

export default function* logsSagas() {
  yield takeEvery(GET_LOGS_REQUEST, getLogsRequest);
}
