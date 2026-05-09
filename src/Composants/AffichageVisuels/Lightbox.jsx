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
  const hasPrecedent = indexActif > 0;
  const hasSuivant = indexActif < visuels.length - 1;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft" && hasPrecedent) onPrecedent();
      if (e.key === "ArrowRight" && hasSuivant) onSuivant();
    },
    [onFermer, onPrecedent, onSuivant, hasPrecedent, hasSuivant],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onFermer();
  };

  return createPortal(
    <div
      className={style.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Image agrandie : ${visuel.titre}`}
    >
      {hasPrecedent && (
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
      )}

      <div className={style.contenu}>
        <img
          src={visuel.image}
          alt={visuel.titre}
          className={style.imageLightbox}
        />
        <div className={style.legendes}>
          <p className={style.legendeTitre}>{visuel.titre}</p>
          <p className={style.legendeDate}>{visuel.date}</p>
        </div>
      </div>

      {hasSuivant && (
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
      )}

      <div className={style.compteur}>
        {indexActif + 1} / {visuels.length}
      </div>
    </div>,
    document.body,
  );
};

export default Lightbox;
