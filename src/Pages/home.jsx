import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import FondHome from "../Assets/FondHome.gif";

const Home = () => {
  return (
    <div
      className={style.home}
      style={{
        backgroundImage: `url(${FondHome})`,
      }}
    >
      <div className={style.textes}>
        <h1 className={style.titreBM}>BALLMAKERS</h1>
        <p>Photographie / Vidéo / Graphisme</p>
      </div>
      <Link to="/creations">
        <button className={style.boutonCreations}>Créations</button>
      </Link>
    </div>
  );
};

export default Home;
