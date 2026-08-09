import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
          href="LIEN_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          className={style.socialIcon}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="LIEN_INSTAGRAM"
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