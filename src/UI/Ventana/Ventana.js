import React, { Component } from "react";
import classes from "./Ventana.css";
import BackDrop from "../BackDrop/BackDrop";

export class Ventana extends Component {
  render() {
    return (
      <React.Fragment>
        <BackDrop mostrar={this.props.mostrar} clicked={this.reallyClose}>
          <div
            className={classes.Ventana}
            style={{
              transform: this.props.mostrar
                ? "translate(0)"
                : "translateY(-100vh)",
              opacity: this.props.mostrar ? "1" : "0",
              backgroundColor: this.props.calendario ? "#00000000" : "white",
              border: this.props.calendario ? "#00000000" : "1px solid #ccc",
              boxShadow: this.props.calendario ? "none" : "1px 1px 1px black",
            }}
          >
            <div className={classes.out} onClick={this.props.cerrarVentana}>
              +
            </div>
            {this.props.children}
          </div>
        </BackDrop>
      </React.Fragment>
    );
  }
}

export default Ventana;
