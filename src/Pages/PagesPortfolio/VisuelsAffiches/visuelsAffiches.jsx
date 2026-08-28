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
import Affiche13 from "../../../Assets/Affiches/Affiche13.webp";
import CarrouselAuto from "../../../Composants/CarrouselAuto/CarrouselAuto";
import Lightbox from "../../../Composants/AffichageVisuels/Lightbox";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const VisuelsAffiches = () => {
  const { t } = useTranslation();

  const visuelsGrille = [
    {
      titre: t("posters.items.alexisMvp"),
      date: t("posters.dates.january24"),
      image: Affiche1,
      priorite: true,
    },
    {
      titre: t("posters.items.matchSaintVallier"),
      date: t("posters.dates.january24"),
      image: Affiche2,
      fictive: true,
      priorite: true,
    },
    {
      titre: t("posters.items.raijonStats"),
      date: t("posters.dates.may24"),
      image: Affiche13,
      fictive: false,
      priorite: true,
    },
    {
      titre: t("posters.items.victoryBesancon"),
      date: t("posters.dates.january2026"),
      image: Affiche4,
      fictive: true,
      priorite: false,
    },
    {
      titre: t("posters.items.matchSaintVallier"),
      date: t("posters.dates.october25"),
      image: Affiche5,
      priorite: false,
    },
    {
      titre: t("posters.items.derby"),
      date: t("posters.dates.november22"),
      image: Affiche6,
      priorite: false,
    },
  ];

  const visuelsCarrousel = [
    {
      titre: t("posters.items.nextMatchSTB"),
      date: t("posters.dates.february2025"),
      image: Affiche9,
    },
    {
      titre: t("posters.items.thanksAlexis"),
      date: t("posters.dates.may2026"),
      image: Affiche10,
    },
    {
      titre: t("posters.items.thanksSevenPlayers"),
      date: t("posters.dates.june2024"),
      image: Affiche8,
    },
    {
      titre: t("posters.items.thanksRaijon"),
      date: t("posters.dates.may2026"),
      image: Affiche11,
    },
    {
      titre: t("posters.items.matchLevallois"),
      date: t("posters.dates.october2025"),
      image: Affiche7,
    },
    {
      titre: t("posters.items.thanksRaphael"),
      date: t("posters.dates.may2026"),
      image: Affiche12,
    },
  ];

  const tousLesVisuels = [...visuelsGrille, ...visuelsCarrousel];

  const [indexActif, setIndexActif] = useState(null);

  const ouvrirLightbox = (index) => setIndexActif(index);
  const fermerLightbox = () => setIndexActif(null);

  const precedent = () =>
    setIndexActif(
      (i) => (i - 1 + tousLesVisuels.length) % tousLesVisuels.length,
    );

  const suivant = () =>
    setIndexActif(
      (i) => (i + 1) % tousLesVisuels.length,
    );

  const offsetCarrousel = visuelsGrille.length;

  return (
    <div className={style.container}>
      <div className={style.alignementTextes}>
        <h1 className={style.titre}>
          · {t("posters.title")}
        </h1>

        <h4 className={style.sousTitre}>
          {t("posters.description")}
          <br />

          <em>
            {t("posters.fictiveNote")}
          </em>
        </h4>
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

export default VisuelsAffiches;