import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import LogoJoueur from "../../Assets/Logos/logoDessin.PnG";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img className={style.logoJoueur} src={LogoJoueur} alt="Logo" />
      <div className={style.container}>
        <div className={style.section}>
          <h3 className={style.logo}>BallMakers</h3>
          <p>
            Passionné de basket et de photographie depuis tout petit, j'ai créé
            BallMakers afin de partager mes créations dans le monde du basket.
            Je fais notamment des photos, des vidéos et des visuels pour mes
            différents projets.
            <br />
            <br />
            deufefueuh
          </p>
        </div>

        <div className={style.section}>
          <h4>Navigation</h4>
          <ul className={style.list}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/creations">Créations</Link>
            </li>
            <li>
              <Link to="/collaborations">Collaborations</Link>
            </li>
            <li>
              <Link to="/reseaux">Réseaux</Link>
            </li>
          </ul>
        </div>

        <div className={style.section}>
          <h4>Contact</h4>
          <p>Email : ballmakers92@icloud.com</p>
        </div>

        <div className={style.section}>
          <h4>Réseaux sociaux</h4>
          <div className={style.socials}>
            <a
              href="https://www.instagram.com/_ballmakers_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@_ballmakers_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>

      <div className={style.bottom}>
        © {new Date().getFullYear()} BallMakers — Tous droits réservés - Site
        développé par{" "}
        <a
          href="https://www.linkedin.com/in/pierre-deldalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DELDALLE Pierre
        </a>
      </div>
    </footer>
  );
};

export default Footer;
