import GalerieVisuels from "../../Composants/AffichageVisuels/GalerieVisuels";
import Footer from "../../Composants/Footer/footer";
import style from "./visuelsaffiches.module.css";
import Affiche1 from "../../Assets/Affiches/Affiche1.webp";
import Affiche2 from "../../Assets/Affiches/Affiche2.webp";
import Affiche3 from "../../Assets/Affiches/Affiche3.webp";
import Affiche4 from "../../Assets/Affiches/Affiche4.webp";
import Affiche5 from "../../Assets/Affiches/Affiche5.webp";
import Affiche6 from "../../Assets/Affiches/Affiche6.webp";

const visuelsaffiches = () => {
  return (
    <div>
      <h1 className={style.titre}>Affiches/Visuels</h1>
      <GalerieVisuels
        visuels={[
          {
            titre: "Alexis Thomas MVP - Berck",
            date: "24 janvier 2026",
            image: Affiche1,
            priorite: true,
          },
          {
            titre: "Jour de match - Berck vs Saint-Vallier",
            date: "24 janvier 2026",
            image: Affiche2,
            fictive: true,
            priorite: true,
          },
          {
            titre: "Statistiques - Berck vs Saint-Vallier",
            date: "24 janvier 2026",
            image: Affiche3,
            fictive: true,
            priorite: true,
          },
          {
            titre: "Victoire - Berck vs Besançon",
            date: "janviuer 2026",
            image: Affiche4,
            fictive: true,
            priorite: false,
          },
          {
            titre: "Jour de match - Berck vs Saint-Vallier",
            date: "25 octobre 2025",
            image: Affiche5,
            priorite: false,
          },
          {
            titre: "Affiche de Derby - Berck vs SOMB",
            date: "22 novembre 2025",
            image: Affiche6,
            priorite: false,
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default visuelsaffiches;
