import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotesList from "./pages/NotesList";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route>
          <NotesList />
        </Route>

        <Route exact path="/signin">
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
