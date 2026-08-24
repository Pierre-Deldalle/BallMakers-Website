import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./home.module.css";
import FondHome from "../../Assets/FondHome.mp4";
import Footer from "../../Composants/Footer/footer";

import Partenaire1 from "../../Assets/Logos/partenaires/orchies.webp";
import Partenaire2 from "../../Assets/Logos/partenaires/salonais.webp";
import Partenaire3 from "../../Assets/Logos/partenaires/tarbes.webp";
import Partenaire4 from "../../Assets/Logos/partenaires/wilfried.webp";
import Partenaire5 from "../../Assets/Logos/partenaires/hsa.webp";
import Partenaire6 from "../../Assets/Logos/partenaires/abbr.webp";
import Partenaire7 from "../../Assets/Logos/partenaires/areus.webp";
import Partenaire8 from "../../Assets/Logos/partenaires/courtcuts.webp";
import Partenaire9 from "../../Assets/Logos/partenaires/congo.webp";
import Partenaire10 from "../../Assets/Logos/partenaires/au_rebond.webp";

import Creation1 from "../../Assets/Accueil/accueil-affiches.webp";
import Creation2 from "../../Assets/Cartes/Instagram.webp";
import Creation3 from "../../Assets/Accueil/accueil-photos.webp";
import Creation4 from "../../Assets/Accueil/accueil-videos.webp";

const SPONSOR_WIDTH = 200;

const Home = () => {
  const { t } = useTranslation();

  const partenaires = [
    Partenaire1,
    Partenaire2,
    Partenaire3,
    Partenaire4,
    Partenaire5,
    Partenaire6,
    Partenaire7,
    Partenaire8,
    Partenaire9,
    Partenaire10,
  ];

  const totalWidth = partenaires.length * SPONSOR_WIDTH;

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

        <div className={style.scrollArrow}>
          <span></span>
        </div>
      </div>

      {/* Bandeau sponsors */}
      <div className={style.sponsors}>
        <div
          className={style.sponsorsTrack}
          style={{
            "--total-width": `${totalWidth}px`,
          }}
        >
          {[...partenaires, ...partenaires].map((partenaire, index) => (
            <div className={style.sponsorItem} key={index}>
              <img src={partenaire} alt="Sponsor" />
            </div>
          ))}
        </div>
      </div>

      {/* Aperçu créations */}
      <section className={style.portfolioPreview}>
        <div className={style.portfolioHeader}>
          <h2>{t("home.portfolioTitle")}</h2>

          <p>
            {t("home.portfolioDescription")}
          </p>
        </div>

        <div className={style.portfolioGrid}>
          <Link
            to="/visuelsaffiches"
            className={style.portfolioCard}
          >
            <div className={style.portfolioImage}>
              <img
                src={Creation1}
                alt="Visuels et affiches BallMakers"
              />
            </div>

            <h3>{t("home.portfolioPosters")}</h3>
          </Link>

          <Link
            to="/reelsinstagram"
            className={style.portfolioCard}
          >
            <div className={style.portfolioImage}>
              <img
                src={Creation2}
                alt="Reels et Shorts BallMakers"
              />
            </div>

            <h3>{t("home.portfolioReels")}</h3>
          </Link>

          <Link
            to="/photosshooting"
            className={style.portfolioCard}
          >
            <div className={style.portfolioImage}>
              <img
                src={Creation3}
                alt="Photos Shooting BallMakers"
              />
            </div>

            <h3>{t("home.portfolioPhotos")}</h3>
          </Link>

          <Link
            to="/videosyoutube"
            className={style.portfolioCard}
          >
            <div className={style.portfolioImage}>
              <img
                src={Creation4}
                alt="Vidéos Youtube BallMakers"
              />
            </div>

            <h3>{t("home.portfolioYoutube")}</h3>
          </Link>
        </div>

        <Link
          to="/creations"
          className={style.portfolioButton}
        >
          {t("home.portfolioButton")}
          <span>→</span>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default Home;