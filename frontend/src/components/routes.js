import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../pages/not_found";
import LogsByAgent from "../pages/call_logs_by_agent";
import HomePage from "../pages/home";
import LogsByNumber from "../pages/call_logs_by_number";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/agent/:agentId" exact component={LogsByAgent} />
      <Route path="/call/:number" exact component={LogsByNumber} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default Routes;
