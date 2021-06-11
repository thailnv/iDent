import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppointmentPage } from "./pages/AppointmentPage";
import { AppointmentListPage } from "./pages/AppointmentListPage";
import { HomePage } from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/make-appointment" component={AppointmentPage} />
        <Route path="/appointment-list" component={AppointmentListPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
