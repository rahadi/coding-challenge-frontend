import React from "react";
import CallLogs from "../components/call_logs";
import { connect } from "react-redux";
import { selectAggregatedCalls } from "../store/selectors/calls";

const HomePage = ({ calls }) => {
  if (calls.length === 0) {
    return <div>No data</div>;
  }
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <CallLogs data={calls} filter="aggregated" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    calls: selectAggregatedCalls(state),
  };
};
export default connect(mapStateToProps)(HomePage);
