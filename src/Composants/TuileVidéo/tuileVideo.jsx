import styles from "./tuileVideo.module.css";
import Video from "../Video/video";

const TuileVideo = ({ videoId, titre, description, date }) => {
  return (
    <div className={styles.tuile}>
      <div className={styles.videoWrapper}>
        <Video videoId={videoId} controls={false} rel={false} />
      </div>

      <div className={styles.meta}>
        <div className={styles.textes}>
          <p className={styles.titre}>{titre}</p>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.bas}>
          <span className={styles.date}>
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
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noreferrer"
            className={styles.boutonYoutube}
          >
            Regarder sur YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default TuileVideo;
