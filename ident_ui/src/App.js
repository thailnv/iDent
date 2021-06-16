import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppointmentPage } from "./pages/AppointmentPage";
import { AppointmentListPage } from "./pages/AppointmentListPage";
import { HomePage } from "./pages/HomePage";
import { DentistsPage } from "./pages/DentistList";
import "./App.css";

function App() {
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/make-appointment" component={AppointmentPage} />
        <Route path="/appointment-list">
          {loggedIn ? <AppointmentListPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/dentists" component={DentistsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
