import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./pages/Signin";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
