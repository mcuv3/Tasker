import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayOut from "./HOC/LayOut/LayOut";
import About from "./Contenedores/About/About";
import Tasks from "./Contenedores/Tasker/Tasker";
import Auth from "./Contenedores/Auth/Auth";
import LogOut from "./Contenedores/Logout/Logout";
import classes from "./App.css";
import { useStore } from "./store/store";
import { Redirect } from "react-router-dom";

const App = () => {
  const dispatch = useStore()[1];

  useEffect(() => {
    dispatch("CHECK_AUTH");
  }, []);

  return (
    <div className={classes.Contenedor}>
      <BrowserRouter>
        <LayOut>
          <Switch>
            <Route path="/Auth" component={Auth} />
            <Route path="/About" component={About} />
            <Route path="/logout" component={LogOut} />
            <Route path="/" component={Tasks} />
            <Redirect to="/Auth" />
          </Switch>
        </LayOut>
      </BrowserRouter>
    </div>
  );
};

export default App;
