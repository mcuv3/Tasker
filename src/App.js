import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import LayOut from "./HOC/LayOut/LayOut";
import Tasks from "./Componentes/Tasker/Tasker";

class App extends Component {
  render() {
    return (
      <div>
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
