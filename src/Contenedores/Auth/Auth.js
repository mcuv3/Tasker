import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import classes from "./Auth.css";
import Input from "../../UI/Input/Input";
import Boton from "../../UI/Buttoms/Botones/Botones";
import { useStore } from "../../store/store";

const Auth = (props) => {
  const [form, setForm] = useState([
    {
      campo: "email",
      tag: "input-text",
      config: {
        required: true,
        type: "email",
        placeholder: "Email",
      },
      value: "",
      valid: false,
    },
    {
      campo: "password",
      tag: "input-text",
      config: {
        required: true,
        type: "password",
        placeholder: "Contraseña",
      },
      value: "",
      valid: false,
    },
  ]);

  const [store, dispatch] = useStore();
  const [isSignUp, setSign] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);

  useEffect(() => {
    return () => {
      if(!store.auth.idToken) dispatch("RESET_AUTH");
    };
  }, []);

  const changeInput = (e, id) => {
    setForm(
      form.map((campo) => {
        if (campo.campo === id) campo.value = e.target.value;
        return campo;
      })
    );
  };
  const authSubmit = (e) => {
    dispatch("TOGGLE_LOADING");
    e.preventDefault();
    const credentials = {
      email: form[0].value,
      password: form[1].value,
      isSignUp,
    };
    dispatch("AUTH_USER", credentials).then(() => {
      setSuccessLogin(true);
    });
  };
  if (successLogin && !store.auth.error) return <Redirect to="/" />;
  //console.log(store.auth);
  return (
    <div className={classes.Auth}>
      <form onSubmit={authSubmit}>
        <h2>Inicia Sesion / Registrate</h2>
        {form.map((campo) => {
          return (
            <Input
              key={campo.campo}
              tag={campo.tag}
              config={campo.config}
              value={campo.value}
              change={(event) => changeInput(event, campo.campo)}
            />
          );
        })}
        {store.auth.error && (
          <div className={classes.Error}>{store.auth.error.message}</div>
        )}
        <div className={classes.Botones}>
          <Boton
            type="primario"
            size="small"
            click={() => setSign(false)}
            disabled={store.loading}
          >
            Iniciar Sesion
          </Boton>
          <Boton
            type="secundario"
            size="small"
            click={() => setSign(true)}
            disabled={store.loading}
          >
            Registrate
          </Boton>
        </div>
      </form>
    </div>
  );
};

export default Auth;
