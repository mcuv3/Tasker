import React, { Component } from "react";
import Calendar from "react-calendar";
import Ventana from "../../../UI/Ventana/Ventana";
import classes from "./configTasker.css";
import CreateTask from "../Task/CreateTask/CreateTask";
import Arrow from "../../../Assets/Imagenes/Arrow.png";
import Plus from "../../../Assets/Imagenes/plus.png";

class ConfigTasker extends Component {
  state = {
    date: new Date(),
    show: false,
    showCreate: false,
    formatDate: "",
  };
  componentDidMount() {
    this.onChange(this.state.date);
  }

  onChange = (date) => {
    const realDate =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "" +
      (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) +
      "" +
      date.getFullYear();

    this.setState({ date, formatDate: realDate });
    this.props.updateDate(date);
  };
  openCalendar = () => this.setState({ show: true });

  ocultarCalendario = () => {
    this.setState({ show: false });
  };
  ocultarCreate = (e) => {
    if (e) this.props.reUpdate();
    this.setState({ showCreate: false });
  };
  openCreate = () => {
    this.setState({ showCreate: true });
  };
  btnNextPrev = (flag) => {
    let fecha = new Date(this.state.date);
    flag
      ? fecha.setDate(fecha.getDate() + 1)
      : fecha.setDate(fecha.getDate() - 1);
    this.onChange(fecha);
  };

  render() {
    let fecha = this.state.date.toLocaleDateString();

    return (
      <React.Fragment>
        <Ventana
          mostrar={this.state.show}
          cerrarVentana={this.ocultarCalendario}
          calendario
        >
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            className={classes.Calendario}
          />
        </Ventana>
        <Ventana
          mostrar={this.state.showCreate}
          cerrarVentana={this.ocultarCreate}
        >
          <CreateTask
            cerrarVentana={() => this.ocultarCreate(true)}
            update={false}
            date={this.state.formatDate}
          />
        </Ventana>
        <div className={classes.Configuracion}>
          <div
            className={classes.newDate}
            onClick={() => this.btnNextPrev(false)}
          >
            <img src={Arrow} alt="logo" className={classes.left} />
          </div>

          <p onClick={this.openCalendar} className={classes.Date}>
            {fecha}
          </p>

          <div
            className={classes.newDate}
            onClick={() => this.btnNextPrev(true)}
          >
            <img src={Arrow} alt="logo" className={classes.right} />
          </div>
        </div>
        <div className={classes.Controles}>
          <img src={Plus} alt="Agregar" onClick={this.openCreate} />
        </div>
      </React.Fragment>
    );
  }
}

export default ConfigTasker;
