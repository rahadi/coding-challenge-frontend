import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLogsRequest } from "../store/actions/logs";
import { getAgentsRequest } from "../store/actions/agent";
import { getResolutionsRequest } from "../store/actions/resolutions";
import { selectGetLogsStatus } from "../store/selectors/logs";

const App = ({
  getLogsRequest,
  getAgentsRequest,
  getResolutionsRequest,
  children,
  status,
}) => {
  useEffect(() => {
    getLogsRequest();
    getAgentsRequest();
    getResolutionsRequest();
  }, [getLogsRequest, getAgentsRequest, getResolutionsRequest]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return <div>{children}</div>;
};

const mapDispatchToProps = {
  getLogsRequest,
  getAgentsRequest,
  getResolutionsRequest,
};

const mapStateToProps = (state) => ({
  status: selectGetLogsStatus(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
