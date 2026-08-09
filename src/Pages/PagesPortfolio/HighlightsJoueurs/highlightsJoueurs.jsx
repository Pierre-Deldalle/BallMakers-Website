import { useState } from "react";
import style from "./highlightsJoueurs.module.css";
import TuileVideoVerticale from "./../../../Composants/TuileVidéoVerticale/tuileVideoVerticale";

const VIDEOS = [
  {
    videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcW",
    titre: "Highlight — Match 1",
    description: "Une ligne de description courte.",
    date: "juin 2026",
  },
  {
    videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcW",
    titre: "Highlight — Match 2",
    description: "Une ligne de description courte.",
    date: "juin 2026",
  },
  {
    videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcW",
    titre: "Highlight — Match 3",
    description: "Une ligne de description courte.",
    date: "mai 2026",
  },
  {
    videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcW",
    titre: "Highlight — Match 4",
    description: "Une ligne de description courte.",
    date: "mai 2026",
  },
  {
    videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcW",
    titre: "Highlight — Match 5",
    description: "Une ligne de description courte.",
    date: "avril 2026",
  },
  {
    videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcW",
    titre: "Highlight — Match 6",
    description: "Une ligne de description courte.",
    date: "avril 2026",
  },
];

const PER_PAGE = 3;

const HighlightsJoueurs = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(VIDEOS.length / PER_PAGE);
  const current = VIDEOS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className={style.container}>
      <div className={style.alignementTextes}>
        <h1 className={style.titre}>· Highlights</h1>
        <h4 className={style.sousTitre}>Description à venir...</h4>
      </div>

      <div className={style.contenu}>
        <div className={style.grille}>
          {current.map((video, i) => (
            <TuileVideoVerticale key={page * PER_PAGE + i} {...video} />
          ))}
        </div>

        <div className={style.navigation}>
          <button
            className={style.fleche}
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            aria-label="Groupe précédent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <span className={style.pageInfo}>
            {page + 1} / {totalPages}
          </span>

          <button
            className={style.fleche}
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPages - 1}
            aria-label="Groupe suivant"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighlightsJoueurs;
