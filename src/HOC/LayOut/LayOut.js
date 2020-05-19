import React, { Component } from "react";
import classes from "./LayOut.css";
import Menu from "../../Componentes/Menu/Menu";

export class LayOut extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <main className={classes.Contenedor}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default LayOut;
