import { style } from "./tuileVideo.module.css";

const TuileVideo = () => {
  return (
    <div className={style.tuile}>
      <div className={style.AlignementHorizontal}>
        <div className={style.AlignementVertical}>
          <div className={style.titre}>Nom Vidéo</div>
          <div className={style.description}>Description de la vidéo</div>
        </div>
        <div className={style.date}>15 avril 2026</div>
        <div className={style.images}></div>
      </div>
    </div>
  );
};

export default TuileVideo;
