import React from "react";
import Header from "./Header.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
         <Route path="/chat">
           <h1>I am the chatpag</h1>
         </Route>
         <Route path="/">
           <h1>I am homepage</h1>
         </Route>
       </Switch>
     
      </Router>
    </div>
  );
}

export default App;
