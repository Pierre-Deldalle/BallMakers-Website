import { useState, useEffect, useRef } from "react";
import style from "./videoSlide.module.css";

const VIDEOS = [
  {
    videoId: "dQw4w9WgXcW",
    titre: "Highlight — Match 1",
    description: "Une ligne de description courte.",
    date: "juin 2026",
  },
  {
    videoId: "dQw4w9WgXcW",
    titre: "Highlight — Match 2",
    description: "Une ligne de description courte.",
    date: "mai 2026",
  },
  {
    videoId: "dQw4w9WgXcW",
    titre: "Highlight — Match 3",
    description: "Une ligne de description courte.",
    date: "avril 2026",
  },
];

const VideoSlide = ({ videoId, titre, description, date, active }) => {
  const params = new URLSearchParams({
    autoplay: active ? "1" : "0",
    mute: "1",
    controls: "1",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    fs: "0",
  });
  const src = `https://www.youtube.com/embed/${videoId}?${params}`;
  const ytURL = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className={style.slide}>
      <div className={style.videoWrapper}>
        <iframe
          src={src}
          allow="autoplay; fullscreen"
          allowFullScreen
          className={style.iframe}
          title={titre}
        />
      </div>

      <div className={style.carte}>
        <div className={style.carteGauche}>
          <p className={style.titre}>{titre}</p>
          <p className={style.sousTitre}>
            <span className={style.description}>{description}</span>
            <span className={style.separateur}>·</span>
            <span className={style.date}>{date}</span>
          </p>
        </div>
        <a
          href={ytURL}
          target="_blank"
          rel="noreferrer"
          className={style.bouton}
        >
          Voir sur YouTube
        </a>
      </div>
    </div>
  );
};

const Videos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 },
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.container}>
      {VIDEOS.map((h, i) => (
        <div
          key={i}
          ref={(el) => (slideRefs.current[i] = el)}
          className={style.slideWrapper}
        >
          <VideoSlide {...h} active={activeIndex === i} />
        </div>
      ))}
    </div>
  );
};

export default Videos;
