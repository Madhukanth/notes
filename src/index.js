import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";

import "./index.css";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import { NotesProvider } from "./contexts/NotesContext";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <NotesProvider>
        <Routes />
      </NotesProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
