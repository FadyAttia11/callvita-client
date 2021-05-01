import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import AllTasks from "./AllTasks";
import EditTask from "./EditTask";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/alltasks" component={AllTasks} />
      <Route path="/edittask" component={EditTask} />
    </Switch>
  );
};

export default Routes;