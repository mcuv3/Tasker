import React, { Component } from "react";
import classes from "./Ventana.css";
import BackDrop from "../BackDrop/BackDrop";

export class Ventana extends Component {
  render() {
    return (
      <React.Fragment>
        <BackDrop
          mostrar={this.props.mostrar}
          clicked={this.props.cerrarVentana}
        />
        <div
          className={classes.Ventana}
          style={{
            transform: this.props.mostrar
              ? "translate(0)"
              : "translateY(-100vh)",
            opacity: this.props.mostrar ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Ventana;
