import React from "react";
//import Layout from "./components/Layout";
import { Jumbotron } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      {/* <Layout></Layout> */}
    </div>
  );
}

export default App;
