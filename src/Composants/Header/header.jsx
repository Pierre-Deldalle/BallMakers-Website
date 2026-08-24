import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBehance, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import style from "./header.module.css";
import logoTexte from "../../Assets/Logos/logo-petit.webp";

const Header = () => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={style.headerHome}>
      <Link to="/" onClick={closeMenu}>
        <img
          src={logoTexte}
          alt="Logo BallMakers"
          className={style.logo}
        />
      </Link>

      {/* Navigation desktop */}
      <div className={style.nav}>
        <Link to="/creations">
          {t("header.creations")}
        </Link>

        <Link to="/contact">
          {t("header.contact")}
        </Link>

        <a
          href="https://www.behance.net/ballmakers"
          target="_blank"
          rel="noopener noreferrer"
          className={style.socialIcon}
          aria-label="Behance"
        >
          <FaBehance />
        </a>

        <a
          href="https://www.instagram.com/_ballmakers_/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.socialIcon}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Bouton burger mobile */}
      <button
        className={`${style.burger} ${menuOpen ? style.burgerOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu mobile */}
      <div
        className={`${style.mobileMenu} ${
          menuOpen ? style.mobileMenuOpen : ""
        }`}
      >
        <Link to="/creations" onClick={closeMenu}>
          {t("header.creations")}
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          {t("header.contact")}
        </Link>

        <div className={style.mobileSocials}>
          <a
            href="https://www.behance.net/ballmakers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FaBehance />
          </a>

          <a
            href="https://www.instagram.com/_ballmakers_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;