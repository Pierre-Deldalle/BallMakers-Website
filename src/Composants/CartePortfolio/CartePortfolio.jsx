import style from "./CartePortfolio.module.css";
import { Link } from "react-router-dom";

const CartePortfolio = ({ link, image, titre, date }) => {
  return (
    <Link to={link} className={style.CartePortfolio}>
      <div className={style.imageWrapper}>
        <img src={image} alt={titre} />
      </div>

      <div className={style.textes}>
        <p className={style.texteTitre}>{titre}</p>
        <p className={style.texteDate}>{date}</p>
      </div>
    </Link>
  );
};

export default CartePortfolio;
