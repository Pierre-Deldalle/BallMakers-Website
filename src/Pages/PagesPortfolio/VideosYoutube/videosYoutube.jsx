import React, { useState } from "react";
import Footer from "../../../Composants/Footer/footer";
import style from "./videosYoutube.module.css";

const getYoutubeId = (url) => {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&?/]+)/
  );

  return match ? match[1] : null;
};

const VideosYoutube = () => {
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=y6YCmQRfq20",
      titre: "Vidéo 1",
    },
    {
      url: "https://www.youtube.com/watch?v=GXJ5A9zSuiY",
      titre: "Vidéo 2",
    },
    {
      url: "https://www.youtube.com/watch?v=DCuJ7xf1Ctg",
      titre: "Vidéo 3",
    },
    {
      url: "https://www.youtube.com/watch?v=MMS1K-iuCmc",
      titre: "Vidéo 4",
    },
    {
      url: "https://www.youtube.com/watch?v=XIvI5rb1Oy0",
      titre: "Vidéo 5",
    },
  ];

  const [videoActive, setVideoActive] = useState(null);

  const afficherVideo = (video, index, classe = "") => {
    const videoId = getYoutubeId(video.url);

    if (!videoId) return null;

    const miniature = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
      <div className={`${style.videoCard} ${classe}`} key={index}>
        {videoActive === index ? (
          <iframe
            className={style.iframe}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={video.titre}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className={style.miniature}
            onClick={() => setVideoActive(index)}
            style={{
              backgroundImage: `url(${miniature})`,
            }}
            aria-label={`Lire ${video.titre}`}
          >
            <div className={style.overlay}></div>

            <div className={style.playButton}>
              <span className={style.playTriangle}></span>
            </div>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={style.container}>
      <h1 className={style.titre}>· Vidéos Youtube</h1>

      <p className={style.sousTitre}>
        Réalisation de vidéos YouTube autour de différents concepts, comme les Day in the Life ou les Mic’d Up, ainsi que de vidéos de remerciement pour marquer la fin de carrière d’un joueur.
      </p>

      <main className={style.contenu}>
        {/* 2 petites vidéos */}
        <section className={`${style.deuxVideos} ${style.fadeIn}`}>
          {afficherVideo(videos[0], 0)}
          {afficherVideo(videos[1], 1)}
        </section>

        {/* 1 grande vidéo */}
        <section className={style.fadeIn}>
          {afficherVideo(videos[2], 2, style.grandeVideo)}
        </section>

        {/* 2 petites vidéos */}
        <section className={`${style.deuxVideos} ${style.fadeIn}`}>
          {afficherVideo(videos[3], 3)}
          {afficherVideo(videos[4], 4)}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VideosYoutube;