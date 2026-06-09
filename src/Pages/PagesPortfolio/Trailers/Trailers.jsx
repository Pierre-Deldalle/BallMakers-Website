import React from "react";
import TuileVideo from "../../../Composants/TuileVidéo/tuileVideo";
import style from "./trailers.module.css";

const Trailers = () => {
  return (
    <div className={style.container}>
      <div className={style.alignementTextes}>
        <h1 className={style.titre}>· Trailers</h1>
        <h4 className={style.sousTitre}>Description à venir...</h4>
      </div>

      <div className={style.fadeIn}>
        <TuileVideo
          videoId="O3Ce14-CuHc"
          titre="Trailer Avenir Basket Berck Rang-du-Fliers - Saison 2025-26 N1"
          description="Lorem ipsum..."
          date="juin 2026"
        />
        <TuileVideo
          videoId="mLYqmGfo2Mc"
          titre="Trailer Avenir Basket Berck Rang du Fliers - Phase 2 - Saison 2025-26 N1"
          description="Lorem ipsum..."
          date="juin 2026"
        />
      </div>
    </div>
  );
};

export default Trailers;
