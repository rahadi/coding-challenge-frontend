import { createSelector } from "reselect";

const allLogs = (state) => state.logs.entities;
const allResolutions = (state) => state.resolutions.entities;

const getLogsByAgentId = (agentId, logs, resolutions) => {
  const matchedLogs = logs.filter((log) => {
    return log.agentIdentifier === agentId;
  });

  const data = [];

  for (const matchedLog of matchedLogs) {
    const obj = {
      number: matchedLog.number,
      call_date_and_time: matchedLog.dateTime,
    };

    const foundResolution = resolutions.find(
      (item) => item.identifier === matchedLog.identifier
    );

    if (foundResolution) {
      obj.resolution = foundResolution.resolution;
    }

    data.push(obj);
  }

  return data;
};

export const selectCallsByAgentID = createSelector(
  [(_, agentId) => agentId, allLogs, allResolutions],
  getLogsByAgentId
);
