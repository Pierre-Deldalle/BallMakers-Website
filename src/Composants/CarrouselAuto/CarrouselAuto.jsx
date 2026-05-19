import { useState } from "react";
import style from "./CarrouselAuto.module.css";

const IMAGE_WIDTH = 300;

export default function CarrouselAuto({
  images,
  offsetIndex = 0,
  onOuvrirLightbox,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const totalWidth = images.length * IMAGE_WIDTH;

  return (
    <div className={style.banner} onMouseLeave={() => setHoveredIndex(null)}>
      <div
        className={style.bannerTrack}
        style={{
          "--total-width": `${totalWidth}px`,
          animationPlayState: hoveredIndex !== null ? "paused" : "running",
        }}
      >
        {[...images, ...images].map((img, i) => {
          const realIndex = i % images.length;
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              className={style.imageContainer}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.image}
                className={style.bannerImage}
                alt={img.titre || ""}
              />
              <div
                className={`${style.overlay} ${isHovered ? style.overlayVisible : ""}`}
              >
                <button
                  className={style.boutonAgrandir}
                  onClick={() => onOuvrirLightbox(offsetIndex + realIndex)}
                  aria-label="Agrandir l'image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>
                {img.titre && <p className={style.imageTitre}>{img.titre}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
