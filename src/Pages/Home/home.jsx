import React from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import FondHome from "../../Assets/FondHome.mp4";

const Home = () => {
  return (
    <div className={style.home}>
      <video
        className={style.videoBg}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={FondHome} type="video/mp4" />
      </video>
      <div className={style.textes}>
        <h1 className={style.titreBM}>BALLMAKERS</h1>
        <p>Photographie / Vidéo / Graphisme</p>
      </div>
      <Link to="/creations">
        <button className={style.boutonCreations}>Créations</button>
      </Link>

      <p className={style.signature}>
        Site développé par{" "}
        <a
          href="https://www.linkedin.com/in/pierre-deldalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pierre DELDALLE
        </a>
      </p>
    </div>
  );
};

export default Home;
