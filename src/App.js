import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayOut from "./HOC/LayOut/LayOut";
import About from "./Componentes/About/About";
import Tasks from "./Componentes/Tasker/Tasker";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes.Contenedor}>
        <BrowserRouter>
          <LayOut>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/" component={Tasks} />
            </Switch>
          </LayOut>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
