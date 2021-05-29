import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Popup from "./components/popup";
import HomePage from "./pages/homepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hen-lich" component={Popup} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
