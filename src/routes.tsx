import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeachForm from "./pages/TeacherForm";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeachForm} />
    </Router>
  );
}

export default Routes;
