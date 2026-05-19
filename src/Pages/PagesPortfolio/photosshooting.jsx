import GalerieVisuels from "../../Composants/AffichageVisuels/GalerieVisuels";
import Footer from "../../Composants/Footer/footer";
import style from "./visuelsaffiches.module.css";
import Shooting1 from "../../Assets/Shooting/Shooting1.webp";
import Shooting2 from "../../Assets/Shooting/Shooting2.webp";
import Shooting3 from "../../Assets/Shooting/Shooting3.webp";
import Shooting4 from "../../Assets/Shooting/Shooting4.webp";
import Shooting5 from "../../Assets/Shooting/Shooting5.webp";
import Shooting6 from "../../Assets/Shooting/Shooting6.webp";
import Shooting7 from "../../Assets/Shooting/Shooting7.webp";
import Shooting8 from "../../Assets/Shooting/Shooting8.webp";
import Shooting9 from "../../Assets/Shooting/Shooting9.webp";
import Shooting10 from "../../Assets/Shooting/Shooting10.webp";
import Shooting11 from "../../Assets/Shooting/Shooting11.webp";
import Shooting12 from "../../Assets/Shooting/Shooting12.webp";
import CarrouselAuto from "../../Composants/CarrouselAuto/CarrouselAuto";
import Affiche1 from "../../Assets/Affiches/Affiche1.webp";
import Affiche2 from "../../Assets/Affiches/Affiche2.webp";
import Affiche3 from "../../Assets/Affiches/Affiche3.webp";
import Affiche4 from "../../Assets/Affiches/Affiche4.webp";
import Affiche5 from "../../Assets/Affiches/Affiche5.webp";
import Affiche6 from "../../Assets/Affiches/Affiche6.webp";
import Affiche7 from "../../Assets/Affiches/Affiche7.webp";
import Affiche8 from "../../Assets/Affiches/Affiche8.webp";
import Affiche9 from "../../Assets/Affiches/Affiche9.webp";
import Affiche10 from "../../Assets/Affiches/Affiche10.webp";
import Affiche11 from "../../Assets/Affiches/Affiche11.webp";
import Affiche12 from "../../Assets/Affiches/Affiche12.webp";
import Lightbox from "../../Composants/AffichageVisuels/Lightbox";
import { useState } from "react";

const photosshooting = () => {
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

  const visuelsGrille2 = [
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

  const visuelsCarrousel2 = [
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

  const tousLesVisuels = [
    ...visuelsGrille,
    ...visuelsCarrousel,
    ...visuelsGrille2,
    ...visuelsCarrousel2,
  ];

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
    <div>
      <h1 className={style.titre}>· Affiches/Visuels</h1>
      <GalerieVisuels
        visuels={visuelsGrille}
        onOuvrirLightbox={ouvrirLightbox}
        offsetIndex={0}
      />

      <CarrouselAuto
        images={visuelsCarrousel}
        offsetIndex={offsetCarrousel}
        onOuvrirLightbox={ouvrirLightbox}
      />

      <GalerieVisuels
        visuels={visuelsGrille2}
        onOuvrirLightbox={ouvrirLightbox}
        offsetIndex={0}
      />

      <CarrouselAuto
        images={visuelsCarrousel2}
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

export default photosshooting;
