import React, { useState } from "react";
import VisuelsAffiches from "./VisuelsAffiches";
import Lightbox from "./Lightbox";
import style from "./GalerieVisuels.module.css";

const GalerieVisuels = ({ visuels = [] }) => {
  const [indexActif, setIndexActif] = useState(null);

  const ouvrirLightbox = (index) => setIndexActif(index);
  const fermerLightbox = () => setIndexActif(null);
  const precedent = () => setIndexActif((i) => Math.max(0, i - 1));
  const suivant = () =>
    setIndexActif((i) => Math.min(visuels.length - 1, i + 1));

  return (
    <>
      <div className={style.grille}>
        {visuels.map((visuel, index) => (
          <VisuelsAffiches
            key={index}
            titre={visuel.titre}
            date={visuel.date}
            image={visuel.image}
            onAgrandir={() => ouvrirLightbox(index)}
          />
        ))}
      </div>

      {indexActif !== null && (
        <Lightbox
          visuels={visuels}
          indexActif={indexActif}
          onFermer={fermerLightbox}
          onPrecedent={precedent}
          onSuivant={suivant}
        />
      )}
    </>
  );
};

export default GalerieVisuels;
