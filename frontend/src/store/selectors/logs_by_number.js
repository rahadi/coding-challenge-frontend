import { createSelector } from "reselect";

const allLogs = (state) => state.logs.entities;
const allResolutions = (state) => state.resolutions.entities;
const allAgents = (state) => state.agents.entities;

const getLogsByNumber = (number, logs, resolutions, agents) => {
  const matchedLogs = logs.filter((log) => {
    return log.number === number;
  });

  const data = [];

  for (const matchedLog of matchedLogs) {
    const obj = {
      call_date_and_time: matchedLog.dateTime,
    };

    const foundAgent = agents.find((agent) => {
      return agent.identifier === matchedLog.agentIdentifier;
    });

    if (foundAgent) {
      obj.agent = foundAgent;
    }

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

export const selectCallsByNumber = createSelector(
  [(_, number) => number, allLogs, allResolutions, allAgents],
  getLogsByNumber
);
