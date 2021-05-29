import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppointmentPage from "./pages/appointment";
import HomePage from "./pages/homepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hen-lich" component={AppointmentPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
