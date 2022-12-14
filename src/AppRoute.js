import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home from "./Page/Home";
import Contacto from "./Page/Contacto";
import QuienesSomos from "./Page/QuienesSomos";
import Login from "./Page/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/quienesSomos" component={QuienesSomos}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>

  );
}

export default App;
