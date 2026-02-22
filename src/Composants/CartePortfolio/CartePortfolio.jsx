import style from "./CartePortfolio.module.css";
import { Link } from "react-router-dom";

const CartePortfolio = ({ link, image, titre, date }) => {
  return (
    <Link to={link} className={style.CartePortfolio}>
      <img src={image} alt={titre} className={style.imageContainer} />
      <div className={style.textes}>
        <p className={style.texteTitre}>{titre}</p>
        <p className={style.texteDate}>{date}</p>
      </div>
    </Link>
  );
};

export default CartePortfolio;
