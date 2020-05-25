import React from "react";
import classes from "./Botones.css";

const Botones = (props) => {
  let estilos = [classes.Boton];

  switch (props.size) {
    case "small":
      estilos.push(classes.small);
      break;
    case "medium":
      estilos.push(classes.medium);
      break;
    case "Large":
      estilos.push(classes.large);
      break;
    default:
      break;
  }

  switch (props.type) {
    case "primario":
      estilos.push(classes.primario);
      break;
    case "secundario":
      estilos.push(classes.secundario);
      break;
    default:
      break;
  }

  return (
    <button
      className={estilos.join(" ")}
      onClick={props.click}
      type={props.tipo}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Botones;
