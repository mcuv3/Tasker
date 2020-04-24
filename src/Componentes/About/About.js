import React from "react";
import classes from "./About.css";
import back from "../../Assets/Imagenes/About.jpg";
import profile from "../../Assets/Imagenes/profile.jpg";
// style={{ backgroundImage: `url(${back})` }}
const About = (props) => {
  return (
    <div className={classes.About}>
      <div className={classes.Perfil}>
        <div className={classes.Name}>
          <img className={classes.Img} src={profile} alt="Profile" />
          <h1>Mauricio Antonio Martinez Martinez</h1>
          <span>mcuve</span>
        </div>
        <div className={classes.Content}>
          Esta es una pagina web hecha con react, creada con la intecion de
          organizar tareas del dia al dia dandole prioridad a unas sobre otras,
          dividiendolas en secciones y horarios para su realizacion.
        </div>
        <div className={classes.Redes}>
          FaceBook twitter instagram tiktok linked github
        </div>
      </div>
    </div>
  );
};

export default About;
