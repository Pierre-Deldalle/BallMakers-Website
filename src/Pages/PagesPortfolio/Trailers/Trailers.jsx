import React from "react";
import TuileVideo from "../../../Composants/TuileVidéo/tuileVideo";
import style from "./trailers.module.css";
import Footer from "../../../Composants/Footer/footer";

const Trailers = () => {
  return (
    <div className={style.container}>
      <div className={style.alignementTextes}>
        <h1 className={style.titre}>· Trailers</h1>
        <h4 className={style.sousTitre}>Description à venir...</h4>
      </div>

      <div className={style.fadeIn}>
        <TuileVideo
          videoURL="https://www.youtube.com/watch?v=O3Ce14-CuHc"
          titre="Trailer Avenir Basket Berck Rang-du-Fliers - Saison 2025-26 N1"
          description="Réalisation d'un trailer pour annoncer le début de la saison de l'équipe de Nationale 1 de Berck."
          date="juin 2026"
        />
        <TuileVideo
          videoURL="https://www.youtube.com/watch?v=mLYqmGfo2Mc"
          titre="Trailer Avenir Basket Berck Rang du Fliers - Phase 2 - Saison 2025-26 N1"
          description="Réalisation d'un trailer pour annoncer la deuxième phase de la saison de l'équipe de Nationale 1 de Berck."
          date="juin 2026"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Trailers;
