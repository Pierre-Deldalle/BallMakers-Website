import React from "react";
import VisuelsAffiches from "./VisuelsAffiches";
import style from "./GalerieVisuels.module.css";

// La lightbox est maintenant gérée dans la page parente.
// GalerieVisuels reçoit onOuvrirLightbox et lui passe l'index global directement.
const GalerieVisuels = ({
  visuels = [],
  onOuvrirLightbox,
  offsetIndex = 0,
}) => {
  return (
    <div className={style.grille}>
      {visuels.map((visuel, index) => (
        <VisuelsAffiches
          key={index}
          titre={visuel.titre}
          date={visuel.date}
          image={visuel.image}
          onAgrandir={() => onOuvrirLightbox(offsetIndex + index)}
          fictive={visuel.fictive}
          priorite={visuel.priorite}
        />
      ))}
    </div>
  );
};

export default GalerieVisuels;
