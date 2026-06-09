import GalerieVisuels from "../../../Composants/AffichageVisuels/GalerieVisuels";
import Footer from "../../../Composants/Footer/footer";
import style from "./visuelsaffiches.module.css";
import Affiche1 from "../../../Assets/Affiches/Affiche1.webp";
import Affiche2 from "../../../Assets/Affiches/Affiche2.webp";
import Affiche3 from "../../../Assets/Affiches/Affiche3.webp";
import Affiche4 from "../../../Assets/Affiches/Affiche4.webp";
import Affiche5 from "../../../Assets/Affiches/Affiche5.webp";
import Affiche6 from "../../../Assets/Affiches/Affiche6.webp";
import Affiche7 from "../../../Assets/Affiches/Affiche7.webp";
import Affiche8 from "../../../Assets/Affiches/Affiche8.webp";
import Affiche9 from "../../../Assets/Affiches/Affiche9.webp";
import Affiche10 from "../../../Assets/Affiches/Affiche10.webp";
import Affiche11 from "../../../Assets/Affiches/Affiche11.webp";
import Affiche12 from "../../../Assets/Affiches/Affiche12.webp";
import CarrouselAuto from "../../../Composants/CarrouselAuto/CarrouselAuto";
import Lightbox from "../../../Composants/AffichageVisuels/Lightbox";
import { useState } from "react";

const visuelsaffiches = () => {
  const visuelsGrille = [
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
      date: "janvier 2026",
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
  ];

  const visuelsCarrousel = [
    {
      titre: "Prochain Match - Berck vs STB",
      date: "Février 2025",
      image: Affiche9,
    },
    { titre: "Merci Alexis Thomas", date: "Mai 2026", image: Affiche10 },
    { titre: "Merci à 7 joueurs", date: "Juin 2024", image: Affiche8 },
    { titre: "Merci Raijon Kelly", date: "Mai 2026", image: Affiche11 },
    {
      titre: "Jour de Match - Berck vs Levallois",
      date: "Octobre 2025",
      image: Affiche7,
    },
    { titre: "Merci Raphaël Pascual", date: "Mai 2026", image: Affiche12 },
  ];

  const tousLesVisuels = [...visuelsGrille, ...visuelsCarrousel];

  const [indexActif, setIndexActif] = useState(null);

  const ouvrirLightbox = (index) => setIndexActif(index);
  const fermerLightbox = () => setIndexActif(null);

  const precedent = () =>
    setIndexActif(
      (i) => (i - 1 + tousLesVisuels.length) % tousLesVisuels.length,
    );
  const suivant = () => setIndexActif((i) => (i + 1) % tousLesVisuels.length);

  const offsetCarrousel = visuelsGrille.length;

  return (
    <div className={style.container}>
      <div className={style.alignementTextes}>
        <h1 className={style.titre}>· Affiches/Visuels</h1>
        <h4 className={style.sousTitre}>Description à venir...</h4>
      </div>
      <div className={style.fadeIn}>
        <GalerieVisuels
          visuels={visuelsGrille}
          onOuvrirLightbox={ouvrirLightbox}
          offsetIndex={0}
        />
      </div>
      <CarrouselAuto
        images={visuelsCarrousel}
        offsetIndex={offsetCarrousel}
        onOuvrirLightbox={ouvrirLightbox}
      />

      {indexActif !== null && (
        <Lightbox
          visuels={tousLesVisuels}
          indexActif={indexActif}
          onFermer={fermerLightbox}
          onPrecedent={precedent}
          onSuivant={suivant}
        />
      )}

      <Footer />
    </div>
  );
};

export default visuelsaffiches;
