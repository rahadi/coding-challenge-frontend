import React from "react";
import CallLogs from "../components/call_logs";
import { connect } from "react-redux";
import { selectCallsByAgentID } from "../store/selectors/logs_by_agent";

const LogsByAgent = ({ calls }) => {
  if (calls.length === 0) {
    return <p>No data</p>;
  }

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <CallLogs data={calls} filter="agentId" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { agentId } = ownProps.match.params;
  return {
    calls: selectCallsByAgentID(state, agentId),
  };
};
export default connect(mapStateToProps, null)(LogsByAgent);
