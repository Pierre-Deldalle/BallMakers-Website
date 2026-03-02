import React from "react";
import { Link } from "react-router-dom";
import style from "./AffichageVisuels.module.css";

const visuelsaffiches = ({ titre, date, image }) => {
  return (
    <div className={style.afficheGlobale}>
      <img src={image} alt={titre} className={style.imageAffiche} />
      <div className={style.textesAffiches}>
        <p className={style.texteTitre}>{titre}</p>
        <p className={style.texteDate}>{date}</p>
      </div>
    </div>
  );
};

export default visuelsaffiches;
