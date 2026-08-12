import { Link } from "react-router-dom";
import { FaBehance, FaInstagram } from "react-icons/fa";

import style from "./header.module.css";
import logoTexte from "../../Assets/Logos/logo-petit.webp";

const Header = () => {
  return (
    <header className={style.headerHome}>
      <Link to="/">
        <img
          src={logoTexte}
          alt="Logo BallMakers"
          className={style.logo}
        />
      </Link>

      <div className={style.nav}>
        <Link to="/creations">Créations</Link>

        <Link to="/contact">Contact</Link>

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
    </header>
  );
};

export default Header;