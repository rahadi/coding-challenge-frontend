import { createSelector } from "reselect";

const logsSelector = (state) => state.logs.entities;
const agentsSelector = (state) => state.agents.entities;

function group(arr, key) {
  return [
    ...arr
      .reduce((accumulator, currentValue) => {
        return accumulator.set(
          currentValue[key],
          (accumulator.get(currentValue[key]) || []).concat(currentValue)
        );
      }, new Map())
      .values(),
  ];
}

const getAggregatedCalls = (logs, agents) => {
  const groupedLogs = group(logs, "number");

  const result = groupedLogs.map((groupedLog) => {
    const agent = {};
    const dataWithRecentCalls = groupedLog.reduce((a, b) => {
      return new Date(a.dateTime) > new Date(b.dateTime) ? a : b;
    });

    const foundAgent = agents.find((agent) => {
      return agent["identifier"] === dataWithRecentCalls.agentIdentifier;
    });

    if (foundAgent) {
      agent.id = foundAgent.identifier;
      agent.name = `${foundAgent.firstName} ${foundAgent.lastName}`;
    }

    return {
      number: groupedLog[0].number,
      number_of_calls: groupedLog.length,
      last_call_details: {
        date_time: dataWithRecentCalls.dateTime,
        agent,
      },
    };
  });

  return result;
};

export const selectAggregatedCalls = createSelector(
  [logsSelector, agentsSelector],
  getAggregatedCalls
);
