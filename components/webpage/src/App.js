import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import Preferences from "./components/preferences";

const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/html")));

app.listen(3000, function () {
  console.log("Starting listen on port", 3000);
});

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preference">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
