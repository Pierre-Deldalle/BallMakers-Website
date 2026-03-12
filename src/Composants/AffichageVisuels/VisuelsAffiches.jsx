import React from "react";
import style from "./VisuelsAffiches.module.css";

const VisuelsAffiches = ({
  titre,
  date,
  image,
  onAgrandir,
  fictive,
  priorite,
}) => {
  return (
    <div className={style.afficheGlobale}>
      {fictive && (
        <button className={style.iconeFictive} aria-label="Image fictive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="red"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9" />
          </svg>
        </button>
      )}

      <div className={style.imageWrapper}>
        <img
          src={image}
          alt={titre}
          className={style.imageAffiche}
          priorite={priorite ? "eager" : "lazy"}
        />

        <button
          className={style.boutonAgrandir}
          onClick={onAgrandir}
          aria-label="Agrandir l'image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>

        <div className={style.textesAffiches}>
          <p className={style.texteTitre}>{titre}</p>
          <p className={style.texteDate}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default VisuelsAffiches;
