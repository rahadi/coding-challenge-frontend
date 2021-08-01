import React from "react";
import { connect } from "react-redux";
import { selectCallsByNumber } from "../store/selectors/logs_by_number";
import CallLogs from "../components/call_logs";

const LogsByNumber = ({ calls }) => {
  if (calls.length === 0) {
    return <p>No data</p>;
  }
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <CallLogs data={calls} filter="number" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { number } = ownProps.match.params;
  return {
    calls: selectCallsByNumber(state, number),
  };
};
export default connect(mapStateToProps, null)(LogsByNumber);
