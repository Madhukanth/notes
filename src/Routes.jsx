import { useEffect, useContext, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as localForage from "localforage";

import { NotesContext } from "./contexts/NotesContext";
import NotesList from "./pages/NotesList";
import { useState } from "react";

function Routes() {
  const { initialRender, extractData, saveData, notes, tags } =
    useContext(NotesContext);

  const [loading, setLoading] = useState(true);

  const saving = useRef(false);

  useEffect(() => {
    if (localForage.supports(localForage.INDEXEDDB)) {
      localForage.setDriver(localForage.INDEXEDDB);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await extractData();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initialRender.current || saving.current) return;

    (async () => {
      saving.current = true;
      await saveData();
      saving.current = false;
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes, tags, initialRender]);

  if (loading) return <div>Loading...</div>;

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
