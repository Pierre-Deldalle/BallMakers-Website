import React from "react";
import { useTranslation } from "react-i18next";
import CartePortfolio from "../../Composants/CartePortfolio/CartePortfolio";
import style from "./creations.module.css";

import Affiche from "../../Assets/Cartes/Affiche.webp";
import Instagram from "../../Assets/Cartes/Instagram.webp";
import Shooting from "../../Assets/Cartes/Shooting.webp";
import Trailer from "../../Assets/Cartes/Trailer.webp";
import Youtube from "../../Assets/Cartes/Youtube.webp";
import Highlights from "../../Assets/Cartes/Highlights.webp";
import Footer from "../../Composants/Footer/footer";

const Creations = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={style.container}>
        <div className={style.blob1} />
        <div className={style.blob2} />

        <h1 className={style.titre}>
          · {t("creations.title")}
        </h1>

        <div className={style.grid}>
          <CartePortfolio
            link="/visuelsaffiches"
            image={Affiche}
            titre={t("creations.posters")}
            date={t("creations.since2023")}
          />

          <CartePortfolio
            link="/reelsinstagram"
            image={Instagram}
            titre={t("creations.reels")}
            date={t("creations.since2023")}
          />

          <CartePortfolio
            link="/highlightsjoueurs"
            image={Highlights}
            titre={t("creations.highlights")}
            date={t("creations.since2024")}
          />

          <CartePortfolio
            link="/photosshooting"
            image={Shooting}
            titre={t("creations.photos")}
            date={t("creations.since2025")}
          />

          <CartePortfolio
            link="/trailers"
            image={Trailer}
            titre={t("creations.trailers")}
            date=""
          />

          <CartePortfolio
            link="/videosyoutube"
            image={Youtube}
            titre={t("creations.youtube")}
            date={t("creations.since2023")}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Creations;