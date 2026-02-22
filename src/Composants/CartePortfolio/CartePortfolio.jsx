import style from "./CartePortfolio.module.css";
import Affiche from "../../Assets/Cartes/Affiche.png";

const CartePortfolio = () => {
  return (
    <div className={style.CartePortfolio}>
      <img src={Affiche} alt="Affiche" className={style.imageContainer} />
      <div className={style.textes}>
        <p className={style.texteTitre}>Création de visuels</p>
        <p className={style.texteDate}>2023-maintenant</p>
      </div>
    </div>
  );
};

export default CartePortfolio;
