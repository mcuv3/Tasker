import React from "react";
import classes from "./LayOut.css";
import Menu from "../../Componentes/Menu/Menu";
import LoadingBar from "../../UI/LoadingBar/LoadingBar";
import { useStore } from "../../store/store";

const LayOut = (props) => {
  const loading = useStore()[0].loading;
  return (
    <React.Fragment>
      <Menu />
      <div className={classes.loading}>{loading ? <LoadingBar /> : null}</div>
      <main className={classes.Contenedor}>{props.children}</main>
    </React.Fragment>
  );
};

export default LayOut;
