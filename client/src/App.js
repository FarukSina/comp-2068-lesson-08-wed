import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history"
import NavBar from "./layouts/NavBar"
import PeopleList from "./components/PeopleList"
import CreatePerson from "./components/CreatePerson"
import EditPerson from "./components/EditPerson"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
       <Router history={history}>
        <div className="container">
          <NavBar />
          <br />
          <Route path="/" exact component={PeopleList} />
          <Route path="/people/:id" component={EditPerson} />
          <Route path="/people" exact component={CreatePerson} />
        </div>
      </Router>
    </div>
  );
}

export default App;
