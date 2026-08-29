import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FranceFlag from "../../Assets/France.jpg";
import UsaFlag from "../../Assets/USA.jpg";

import LogoJoueur from "../../Assets/Logos/logoDessin.webp";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className={style.footer}>

      <div className={style.container}>
        <div className={style.section}>
          <h3 className={style.logo}>BallMakers</h3>

          <p>{t("footer.description")}</p>
        </div>

        <div className={style.section}>
          <h4>{t("footer.navigation")}</h4>

          <ul className={style.list}>
            <li>
              <Link to="/">{t("footer.home")}</Link>
            </li>

            <li>
              <Link to="/creations">
                {t("footer.creations")}
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.section}>
          <h4>{t("footer.contact")}</h4>

          <p>Email : ballmakers92@icloud.com</p>

          <div className={style.languages}>
          <button
            onClick={() => i18n.changeLanguage("fr")}
            className={i18n.language === "fr" ? style.activeLanguage : ""}
            aria-label="Français"
          >
          <img src={FranceFlag} alt="Français" />
          </button>

          <button
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? style.activeLanguage : ""}
            aria-label="English"
          >
            <img src={UsaFlag} alt="English" />
          </button>
        </div>
        </div>

        <div className={style.section}>
          <h4>{t("footer.socialNetworks")}</h4>

          <div className={style.socials}>
            <a
              href="https://www.instagram.com/_ballmakers_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.behance.net/ballmakers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
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
        © {new Date().getFullYear()} BallMakers — {t("footer.rights")} -{" "}
        {t("footer.developedBy")}{" "}
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