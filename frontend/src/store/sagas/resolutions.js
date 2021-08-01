import { put, takeEvery } from "redux-saga/effects";
import {
  GET_RESOLUTIONS_REQUEST,
  getResolutionsSuccess,
  getResolutionsError,
} from "../actions/resolutions";

import apiClient from "../../utils/apiClient";

function* getResolutionsRequest(action) {
  try {
    const result = yield apiClient.fetchResolutions();
    yield put(getResolutionsSuccess(result.data));
  } catch (error) {
    yield put(getResolutionsError(error));
  }
}

export default function* resolutionsSagas() {
  yield takeEvery(GET_RESOLUTIONS_REQUEST, getResolutionsRequest);
}
