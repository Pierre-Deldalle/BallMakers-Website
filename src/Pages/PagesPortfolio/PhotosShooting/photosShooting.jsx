import GalerieVisuels from "../../../Composants/AffichageVisuels/GalerieVisuels";
import Footer from "../../../Composants/Footer/footer";
import style from "./photosshooting.module.css";
import Shooting1 from "../../../Assets/Shooting/ShootingNB1.webp";
import Shooting2 from "../../../Assets/Shooting/Shooting2.webp";
import Shooting3 from "../../../Assets/Shooting/ShootingNB3.webp";
import Shooting4 from "../../../Assets/Shooting/Shooting4.webp";
import Shooting5 from "../../../Assets/Shooting/ShootingNB5.webp";
import Shooting6 from "../../../Assets/Shooting/ShootingNB6.webp";
import Shooting7 from "../../../Assets/Shooting/ShootingNB7.webp";
import Shooting8 from "../../../Assets/Shooting/Shooting8.webp";
import Shooting9 from "../../../Assets/Shooting/Shooting9.webp";
import Shooting10 from "../../../Assets/Shooting/ShootingNB10.webp";
import Shooting11 from "../../../Assets/Shooting/Shooting11.webp";
import Shooting12 from "../../../Assets/Shooting/Shooting12.webp";
import ShootingVideo1 from "../../../Assets/Shooting/ShootingVidéo1.mp4";
import ShootingVideo2 from "../../../Assets/Shooting/ShootingVidéo2.mp4";
import CarrouselAuto from "../../../Composants/CarrouselAuto/CarrouselAuto";
import Lightbox from "../../../Composants/AffichageVisuels/Lightbox";
import { useState } from "react";

const photosshooting = () => {
  const visuelsGrille = [
    {
      titre: "Alexis Thomas MVP - Berck",
      date: "24 janvier 2026",
      image: Shooting5,
      priorite: true,
    },
    {
      titre: "Jour de match - Berck vs Saint-Vallier",
      date: "24 janvier 2026",
      image: Shooting11,
      priorite: true,
    },
    {
      titre: "Statistiques - Berck vs Saint-Vallier",
      date: "24 janvier 2026",
      image: Shooting8,
      priorite: true,
    },
  ];

  const visuelsCarrousel = [
    {
      titre: "Prochain Match - Berck vs STB",
      date: "Février 2025",
      image: Shooting5,
    },
    { titre: "Merci Alexis Thomas", date: "Mai 2026", image: Shooting2 },
    { titre: "Merci à 7 joueurs", date: "Juin 2024", image: Shooting3 },
    { titre: "Merci Raijon Kelly", date: "Mai 2026", image: Shooting4 },
    {
      titre: "Jour de Match - Berck vs Levallois",
      date: "Octobre 2025",
      image: Shooting6,
    },
    { titre: "Merci Raphaël Pascual", date: "Mai 2026", image: Shooting7 },
  ];

  const visuelsGrille2 = [
    {
      titre: "Alexis Thomas MVP - Berck",
      date: "24 janvier 2026",
      image: ShootingVideo1,
      priorite: true,
    },
    {
      titre: "Jour de match - Berck vs Saint-Vallier",
      date: "24 janvier 2026",
      image: ShootingVideo2,
      fictive: true,
      priorite: true,
    },
  ];

  const visuelsCarrousel2 = [
    {
      titre: "Prochain Match - Berck vs STB",
      date: "Février 2025",
      image: Shooting5,
    },
    { titre: "Merci Alexis Thomas", date: "Mai 2026", image: Shooting2 },
    { titre: "Merci à 7 joueurs", date: "Juin 2024", image: Shooting3 },
    { titre: "Merci Raijon Kelly", date: "Mai 2026", image: Shooting4 },
    {
      titre: "Jour de Match - Berck vs Levallois",
      date: "Octobre 2025",
      image: Shooting6,
    },
    { titre: "Merci Raphaël Pascual", date: "Mai 2026", image: Shooting7 },
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
