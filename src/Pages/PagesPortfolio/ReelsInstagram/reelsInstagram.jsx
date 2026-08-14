import React, { useState } from "react";
import Footer from "../../../Composants/Footer/footer";
import style from "./reelsinstagram.module.css";

const getYoutubeId = (url) => {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&?/]+)/
  );

  return match ? match[1] : null;
};

const ReelsInstagram = () => {
  const videos = [
    {
      url: "https://youtube.com/shorts/qAwZ3L0puX8?feature=share",
      titre: "Vidéo 1",
      vertical: true,
    },
    {
      url: "https://youtube.com/shorts/nl4B9AV_oAI?feature=share",
      titre: "Vidéo 2",
      vertical: true,
    },
    {
      url: "https://youtube.com/shorts/b2qucnal0T0?feature=share",
      titre: "Vidéo 3",
      vertical: true,
    },
    {
      url: "https://youtu.be/iT0RzuaR7wg",
      titre: "Vidéo 4",
      vertical: false,
    },
    {
      url: "https://youtube.com/shorts/3cVTqEU_K-4?feature=share",
      titre: "Vidéo 5",
      vertical: true,
    },
    {
      url: "https://youtube.com/shorts/1byHE-ENHQc?feature=share",
      titre: "Vidéo 6",
      vertical: true,
    },
    {
      url: "https://youtube.com/shorts/OIg7Jz_Ypts?feature=share",
      titre: "Vidéo 7",
      vertical: true,
    },
    {
      url: "https://youtu.be/iOPRPziK2lc",
      titre: "Vidéo 8",
      vertical: false,
    },
  ];

  const [videoActive, setVideoActive] = useState(null);

  const afficherVideo = (video, index, classe = "") => {
    const videoId = getYoutubeId(video.url);

    if (!videoId) return null;

    const miniature = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
      <div
        className={`${style.videoCard} ${
          video.vertical ? style.videoVerticale : style.videoHorizontale
        } ${classe}`}
        key={index}
      >
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
      <h1 className={style.titre}>· Reels / Shorts</h1>

      <p className={style.sousTitre}>À remplir plus tard</p>

      <main className={style.contenu}>
        {/* 3 vidéos verticales */}
        <section className={`${style.troisVideos} ${style.fadeIn}`}>
          {afficherVideo(videos[0], 0)}
          {afficherVideo(videos[1], 1)}
          {afficherVideo(videos[2], 2)}
        </section>

        {/* Grande vidéo */}
        <section className={style.fadeIn}>
          {afficherVideo(videos[3], 3)}
        </section>

        {/* 3 vidéos verticales */}
        <section className={`${style.troisVideos} ${style.fadeIn}`}>
          {afficherVideo(videos[4], 4)}
          {afficherVideo(videos[5], 5)}
          {afficherVideo(videos[6], 6)}
        </section>

        {/* Dernière grande vidéo */}
        <section className={style.fadeIn}>
          {afficherVideo(videos[7], 7)}
        </section>

        <section className={style.statsBloc}>
        <p className={style.statsLabel}>PORTÉE DES VIDÉOS</p>

        <h2>
          +395 K de vues
          <span> durant la saison 2024–25</span>
        </h2>

        <h2>
          +1.2 M de vues
          <span> durant la saison 2025–26</span>
        </h2>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReelsInstagram;