import React from "react";
import CartePortfolio from "../Composants/CartePortfolio/CartePortfolio";
import style from "./Creations.module.css";

import Affiche from "../Assets/Cartes/Affiche.png";
import Instagram from "../Assets/Cartes/Instagram.png";
import Shooting from "../Assets/Cartes/Shooting.png";
import Trailer from "../Assets/Cartes/Trailer.png";
import Youtube from "../Assets/Cartes/Youtube.png";
import Highlights from "../Assets/Cartes/Highlights.png";

const Creations = () => {
  return (
    <div className={style.container}>
      <h1 className={style.titre}>Mon Portfolio</h1>

      <div className={style.grid}>
        <CartePortfolio
          link="/"
          image={Affiche}
          titre="Visuels/Affiches"
          date="2023-"
        />
        <CartePortfolio
          link="/"
          image={Instagram}
          titre="ReelsInstagram"
          date="2023-"
        />
        <CartePortfolio
          link="/"
          image={Highlights}
          titre="Highlights Joueurs"
          date="2024"
        />
        <CartePortfolio
          link="/"
          image={Shooting}
          titre="Photos Shooting"
          date="2024"
        />
        <CartePortfolio link="/" image={Trailer} titre="Trailers" date="2024" />
        <CartePortfolio
          link="/"
          image={Youtube}
          titre="Vidéos Youtube"
          date="2024"
        />
      </div>
    </div>
  );
};

export default Creations;
