import React from "react";
import { NavLink } from "react-router-dom";
import Table from "./table";
import moment from "moment";

const CallLogs = ({ data, filter }) => {
  let rows;
  let columns;

  switch (filter) {
    case "number":
      columns = ["Agent name", "Call date and time", "Resolution"];
      break;
    case "agentId":
      columns = ["Phone number", "Call date and time", "Resolution"];
      break;
    default:
      columns = ["Phone number", "Number of calls", "Last call details"];
      break;
  }

  rows = data.map((call, i) => {
    return (
      <tr key={i}>
        <td>
          {filter === "number" && (
            <NavLink to={`/agent/${call.agent.identifier}`}>
              {`${call.agent.firstName} ${call.agent.lastName}`}
            </NavLink>
          )}
          {filter === "agentId" && (
            <NavLink to={`/call/${call.number}`}>{call.number}</NavLink>
          )}
          {filter === "aggregated" && (
            <NavLink to={`/call/${call.number}`}>{call.number}</NavLink>
          )}
        </td>
        <td>
          {(filter === "number" || filter === "agentId") &&
            moment
              .utc(call.call_date_and_time)
              .format("DD-MM-YYYY hh:mm:ss A")
              .toString()}
          {filter === "aggregated" && call.number_of_calls}
        </td>
        <td>
          {(filter === "number" || filter === "agentId") && call.resolution}
          {filter === "aggregated" && (
            <div>
              <NavLink to={`/agent/${call.last_call_details.agent.id}`}>
                {`${call.last_call_details.agent.name} / `}
              </NavLink>
              {moment
                .utc(call.last_call_details.date_time)
                .format("DD-MM-YYYY hh:mm:ss A")
                .toString()}
            </div>
          )}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default CallLogs;
