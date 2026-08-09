import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./home.module.css";
import FondHome from "../../Assets/FondHome.mp4";
import Footer from "../../Composants/Footer/footer";

import Partenaire1 from "../../Assets/Logos/partenaires/orchies.png";
import Partenaire2 from "../../Assets/Logos/partenaires/salonais.png";
import Partenaire3 from "../../Assets/Logos/partenaires/tarbes.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
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
          <p>{t("home.subtitle")}</p>
        </div>

        <Link to="/creations">
          <button className={style.boutonCreations}>
            {t("home.creations")}
          </button>
        </Link>

        {/* Indication de scroll */}
        <div className={style.scrollArrow}>
          <span></span>
        </div>
      </div>

      {/* Bandeau sponsors */}
      <div className={style.sponsors}>
        <div className={style.sponsorsTrack}>
          <img src={Partenaire1} alt="Sponsor" />
          <img src={Partenaire2} alt="Sponsor" />
          <img src={Partenaire3} alt="Sponsor" />
          <img src={Partenaire1} alt="Sponsor" />
          <img src={Partenaire2} alt="Sponsor" />

          {/* Duplication pour la boucle */}
          <img src={Partenaire1} alt="Sponsor" />
          <img src={Partenaire2} alt="Sponsor" />
          <img src={Partenaire3} alt="Sponsor" />
          <img src={Partenaire1} alt="Sponsor" />
          <img src={Partenaire2} alt="Sponsor" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;