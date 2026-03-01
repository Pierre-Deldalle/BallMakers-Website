import React from "react";
import CartePortfolio from "../Composants/CartePortfolio/CartePortfolio";
import style from "./Creations.module.css";

import Affiche from "../Assets/Cartes/Affiche.png";
import Instagram from "../Assets/Cartes/Instagram.png";
import Shooting from "../Assets/Cartes/Shooting.png";
import Trailer from "../Assets/Cartes/Trailer.png";
import Youtube from "../Assets/Cartes/Youtube.png";
import Highlights from "../Assets/Cartes/Highlights.png";
import Footer from "../Composants/Footer/footer";

const Creations = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.titre}>· Mon Portfolio</h1>

        <div className={style.grid}>
          <CartePortfolio
            link="/visuelsaffiches"
            image={Affiche}
            titre="Visuels/Affiches"
            date="2023 - maintenant"
          />
          <CartePortfolio
            link="/reelsinstagram"
            image={Instagram}
            titre="Reels Instagram"
            date="2023 - maintenant"
          />
          <CartePortfolio
            link="/highlightsjoueurs"
            image={Highlights}
            titre="Highlights Joueurs"
            date="2024 - maintenant"
          />
          <CartePortfolio
            link="/photosshooting"
            image={Shooting}
            titre="Photos Shooting"
            date="2025 - maintenant"
          />
          <CartePortfolio
            link="/trailers"
            image={Trailer}
            titre="Trailers"
            date="2025 - maintenant"
          />
          <CartePortfolio
            link="/vidéosyoutube"
            image={Youtube}
            titre="Vidéos Youtube"
            date="2023 - maintenant"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Creations;
