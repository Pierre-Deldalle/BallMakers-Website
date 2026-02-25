import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import logoTexte from "../../Assets/Logos/logo-petit.png";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className={style.headerHome}>
      <Link to="/">
        <img src={logoTexte} alt="LogoBallMakers" className={style.logo} />
      </Link>
      <div className={style.nav}>
        <Link to="/creations">Créations</Link>
        <Link to="/collaborations">Collaborations</Link>
        <Link to="/reseaux">Réseaux</Link>
      </div>
    </header>
  );
};

export default Header;
