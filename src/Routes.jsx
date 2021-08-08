import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotesList from "./pages/NotesList";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NotesList />
        </Route>

        <Route exact path="/tags/:id">
          <NotesList />
        </Route>

        <Route>
          <NotesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
