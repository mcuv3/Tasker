import React from "react";
import classes from "./About.css";
import back from "../../Assets/Imagenes/About.jpg";
import profile from "../../Assets/Imagenes/profile.jpg";

import insta from "../../Assets/Imagenes/insta.png";
import face from "../../Assets/Imagenes/face.png";
import linkedin from "../../Assets/Imagenes/linkedin.png";
import git from "../../Assets/Imagenes/git.png";
import twitter from "../../Assets/Imagenes/twitter.png";
//
const About = (props) => {
  return (
    <div className={classes.About} style={{ backgroundImage: `url(${back})` }}>
      <div className={classes.Perfil}>
        <div className={classes.Name}>
          <img className={classes.Img} src={profile} alt="Profile" />
          <h1>Mauricio Antonio Martínez Martínez</h1>

          <span>- mcuve -</span>
        </div>
        <div className={classes.Content}>
          Esta es una página web desarrollada con react, creada con la inteción
          de organizar tareas del dia al dia dandole prioridad a unas sobre
          otras, dividiendolas en secciones y horarios para su realización.
        </div>
        <div className={classes.Redes}>
          <a href="https://www.instagram.com/mcuvee/">
            <img src={insta} alt="instagram" className={classes.red} />
          </a>
          <a href="https://www.facebook.com/mauricioantonio.martinezmartinez.1">
            <img src={face} alt="FaceBook" className={classes.red} />
          </a>
          <a href="https://mobile.twitter.com/eMCuve">
            <img src={twitter} alt="Twitter" className={classes.red} />
          </a>
          <a href="https://www.linkedin.com/in/mauricio-antonio-mart%C3%ADnez-mart%C3%ADnez-478019192/">
            <img src={linkedin} alt="LinkedIn" className={classes.red} />
          </a>
          <a href="https://github.com/MauricioAntonioMartinez">
            <img src={git} alt="GitHub" className={classes.red} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
