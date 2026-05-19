import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import style from "./Lightbox.module.css";

const Lightbox = ({
  visuels,
  indexActif,
  onFermer,
  onPrecedent,
  onSuivant,
}) => {
  const visuel = visuels[indexActif];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") onPrecedent();
      if (e.key === "ArrowRight") onSuivant();
      if (e.key === "Escape") onFermer();
    },
    [onFermer, onPrecedent, onSuivant],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return createPortal(
    <div
      className={style.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Image agrandie : ${visuel.titre}`}
    >
      {/* Zone de fond cliquable pour fermer — derrière tout le reste */}
      <div className={style.fond} onClick={onFermer} aria-hidden="true" />
      {/* Bouton fermer */}
      <button
        className={style.boutonFermer}
        onClick={onFermer}
        aria-label="Fermer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Bouton précédent — toujours visible car navigation circulaire */}
      <button
        className={`${style.boutonNav} ${style.boutonPrecedent}`}
        onClick={onPrecedent}
        aria-label="Image précédente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className={style.contenu}>
        <img
          src={visuel.image}
          alt={visuel.titre}
          className={style.imageLightbox}
        />
        <div className={style.legendes}>
          {visuel.titre && <p className={style.legendeTitre}>{visuel.titre}</p>}
          {visuel.date && <p className={style.legendeDate}>{visuel.date}</p>}
        </div>
      </div>

      {/* Bouton suivant — toujours visible car navigation circulaire */}
      <button
        className={`${style.boutonNav} ${style.boutonSuivant}`}
        onClick={onSuivant}
        aria-label="Image suivante"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className={style.compteur}>
        {indexActif + 1} / {visuels.length}
      </div>
    </div>,
    document.body,
  );
};

export default Lightbox;
