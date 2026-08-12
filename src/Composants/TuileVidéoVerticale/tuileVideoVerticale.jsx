import style from "./tuileVideoVerticale.module.css";
import Video from "../Video/video";

function getPlatformLabel(url) {
  if (!url) return "Regarder la vidéo";
  if (url.includes("youtube.com") || url.includes("youtu.be"))
    return "Regarder sur YouTube";
  if (url.includes("vimeo.com")) return "Regarder sur Vimeo";
  return "Regarder la vidéo";
}

const TuileVideoVerticale = ({ videoURL, titre, description, date }) => {
  return (
    <div className={style.tuile}>
      <div className={style.videoWrapper}>
        <Video videoURL={videoURL} />
      </div>

      <div className={style.meta}>
        <div className={style.textes}>
          <p className={style.titre}>{titre}</p>
          <p className={style.description}>{description}</p>
        </div>

        <div className={style.bas}>
          <span className={style.date}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M12 7v5l3 3" />
            </svg>
            {date}
          </span>

          <a
            href={videoURL}
            target="_blank"
            rel="noreferrer"
            className={style.bouton}
          >
            {getPlatformLabel(videoURL)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TuileVideoVerticale;
