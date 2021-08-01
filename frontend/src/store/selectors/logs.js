import { createSelector } from "reselect";

const getStatus = (state) => state.logs.status;

export const selectGetLogsStatus = createSelector(
  getStatus,
  (status) => status
);
