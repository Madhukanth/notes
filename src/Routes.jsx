import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
