import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import LayOut from "./HOC/LayOut/LayOut";
import Tasks from "./Componentes/Tasker/Tasker";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes.Contenedor}>
        <BrowserRouter>
          <LayOut>
            <Tasks />
          </LayOut>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
