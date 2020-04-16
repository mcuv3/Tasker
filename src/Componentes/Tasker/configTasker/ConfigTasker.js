import React, { Component } from "react";
import Calendar from "react-calendar";
import Ventana from "../../../UI/Ventana/Ventana";
import classes from "./configTasker.css";
import CreateTask from "../Task/CreateTask/CreateTask";

class ConfigTasker extends Component {
  state = {
    date: new Date(),
    show: false,
    showCreate: false,
  };

  onChange = (date) => this.setState({ date });
  openCalendar = () => this.setState({ show: true });
  ocultarCalendario = () => {
    this.props.updateDate(this.state.date);
    this.setState({ show: false });
  };
  ocultarCreate = () => {
    this.setState({ showCreate: false });
  };
  openCreate = () => {
    this.setState({ showCreate: true });
  };

  render() {
    let fecha = this.state.date.toLocaleDateString();

    return (
      <React.Fragment>
        <Ventana
          mostrar={this.state.show}
          cerrarVentana={this.ocultarCalendario}
        >
          <Calendar onChange={this.onChange} value={this.state.date} />
        </Ventana>
        <Ventana
          mostrar={this.state.showCreate}
          cerrarVentana={this.ocultarCreate}
        >
          <CreateTask />
        </Ventana>
        <p onClick={this.openCalendar} className={classes.Date}>
          {fecha}
        </p>
        <button onClick={this.openCreate}>Agregar</button>
      </React.Fragment>
    );
  }
}

export default ConfigTasker;
