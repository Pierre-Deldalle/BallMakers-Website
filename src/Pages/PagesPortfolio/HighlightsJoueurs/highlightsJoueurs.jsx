import React, { useState } from "react";
import Footer from "../../../Composants/Footer/footer";
import style from "./highlightsJoueurs.module.css";

const getYoutubeId = (url) => {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&?/]+)/
  );

  return match ? match[1] : null;
};

const HighlightsJoueurs = () => {
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=NZhaMrLV-0U&t",
      titre: "Vidéo 1",
    },
    {
      url: "https://www.youtube.com/watch?v=Vrl-G-jgl4U",
      titre: "Vidéo 2",
    },
    {
      url: "https://www.youtube.com/watch?v=fJ5Ept9jLTM",
      titre: "Vidéo 3",
    },
    {
      url: "https://www.youtube.com/watch?v=KeIiBJ6uR9w",
      titre: "Vidéo 4",
    },
    {
      url: "https://www.youtube.com/watch?v=jjbgeuzy30I",
      titre: "Vidéo 5",
    },
    {
      url: "https://www.youtube.com/watch?v=o-KWbpr_248",
      titre: "Vidéo 6",
    },
    {
      url: "https://www.youtube.com/watch?v=1VAwTiFIfPU",
      titre: "Vidéo 7",
    },
    {
      url: "https://www.youtube.com/watch?v=Hkqb1dCb7tE",
      titre: "Vidéo 8",
    },
  ];

  const [videoActive, setVideoActive] = useState(null);

  const afficherVideo = (video, index, classe = "") => {
    const videoId = getYoutubeId(video.url);

    if (!videoId) return null;

    const miniature = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

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
      <h1 className={style.titre}>· Highlights Joueurs</h1>

      <p className={style.sousTitre}>
        Réalisation de vidéos Highlights pour mettre en avant les performances des joueurs, que ce soit pour trouver un nouveau club ou simplement faire le bilan de leur saison.
      </p>

      <main className={style.contenu}>
        {/* Deux vidéos */}
        <section className={`${style.deuxVideos} ${style.fadeIn}`}>
          {afficherVideo(videos[0], 0)}
          {afficherVideo(videos[1], 1)}
        </section>

        {/* Grande vidéo */}
        <section className={style.fadeIn}>
          {afficherVideo(videos[2], 2, style.grandeVideo)}
        </section>

        {/* Quatre vidéos */}
        <section className={`${style.quatreVideos} ${style.fadeIn}`}>
          {afficherVideo(videos[3], 3)}
          {afficherVideo(videos[4], 4)}
          {afficherVideo(videos[5], 5)}
          {afficherVideo(videos[6], 6)}
        </section>

        {/* Dernière grande vidéo */}
        <section className={style.fadeIn}>
          {afficherVideo(videos[7], 7, style.grandeVideo)}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HighlightsJoueurs;