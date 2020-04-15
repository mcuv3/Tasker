import React, { Component } from "react";
import classes from "./LayOut.css";
import Menu from "../../Componentes/Menu/Menu";

export class LayOut extends Component {
  render() {
    return (
      <div className={classes.Contenedor}>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default LayOut;
