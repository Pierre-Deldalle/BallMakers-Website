import Footer from "../../../Composants/Footer/footer";
import Lightbox from "../../../Composants/AffichageVisuels/Lightbox";
import style from "./photosshooting.module.css";
import { useState } from "react";

import Shooting1 from "../../../Assets/Shooting/Shooting1.webp";
import Shooting2 from "../../../Assets/Shooting/Shooting2.webp";
import Shooting3 from "../../../Assets/Shooting/Shooting3.webp";
import Shooting4 from "../../../Assets/Shooting/Shooting4.webp";
import Shooting5 from "../../../Assets/Shooting/Shooting5.webp";
import Shooting6 from "../../../Assets/Shooting/Shooting6.webp";
import Shooting7 from "../../../Assets/Shooting/Shooting7.webp";
import Shooting8 from "../../../Assets/Shooting/Shooting8.webp";
import Shooting9 from "../../../Assets/Shooting/Shooting9.webp";
import Shooting10 from "../../../Assets/Shooting/Shooting10.webp";
import Shooting11 from "../../../Assets/Shooting/Shooting11.webp";
import Shooting12 from "../../../Assets/Shooting/Shooting12.webp";
import Shooting13 from "../../../Assets/Shooting/Shooting13.webp";
import Shooting14 from "../../../Assets/Shooting/Shooting14.webp";

import ShootingVideo1 from "../../../Assets/Shooting/ShootingVideo1.mp4";
import ShootingVideo2 from "../../../Assets/Shooting/ShootingVideo2.mp4";

const PhotosShooting = () => {
  const photos = [
    {
      titre: "",
      date: "",
      image: Shooting1,
    },
    {
      titre: "",
      date: "",
      image: Shooting2,
    },
    {
      titre: "",
      date: "",
      image: Shooting3,
    },
    {
      titre: "",
      date: "",
      image: Shooting4,
    },
    {
      titre: "",
      date: "",
      image: Shooting5,
    },
    {
      titre: "",
      date: "",
      image: Shooting6,
    },
    {
      titre: "",
      date: "",
      image: Shooting13,
    },
    {
      titre: "",
      date: "",
      image: Shooting14,
    },
    {
      titre: "",
      date: "",
      image: Shooting7,
    },
    {
      titre: "",
      date: "",
      image: Shooting8,
    },
    {
      titre: "",
      date: "",
      image: Shooting9,
    },
    {
      titre: "",
      date: "",
      image: Shooting10,
    },
    {
      titre: "",
      date: "",
      image: Shooting11,
    },
    {
      titre: "",
      date: "",
      image: Shooting12,
    },
  ];

  const [indexActif, setIndexActif] = useState(null);

  const ouvrirLightbox = (index) => {
    setIndexActif(index);
  };

  const fermerLightbox = () => {
    setIndexActif(null);
  };

  const precedent = () => {
    setIndexActif(
      (index) => (index - 1 + photos.length) % photos.length
    );
  };

  const suivant = () => {
    setIndexActif(
      (index) => (index + 1) % photos.length
    );
  };

  return (
    <div className={style.container}>
      <h1 className={style.titre}>· Photos Shooting</h1>

      <p className={style.sousTitre}>
        Réalisation de photos lors des shootings d’avant-match.
      </p>

      <main className={style.contenu}>

        {/* =========================
            GALERIE EDITORIALE
        ========================= */}

        <section className={style.galerieEditoriale}>

          <div className={`${style.duo} ${style.grandeGauche}`}>
            <button
              className={`${style.photoEditoriale} ${style.photoGrande}`}
              onClick={() => ouvrirLightbox(0)}
            >
              <img src={Shooting1} alt="" />
            </button>

            <button
              className={`${style.photoEditoriale} ${style.photoPetite}`}
              onClick={() => ouvrirLightbox(1)}
            >
              <img src={Shooting2} alt="" />
            </button>
          </div>

          <div className={`${style.duo} ${style.grandeDroite}`}>
            <button
              className={`${style.photoEditoriale} ${style.photoPetite}`}
              onClick={() => ouvrirLightbox(2)}
            >
              <img src={Shooting3} alt="" />
            </button>

            <button
              className={`${style.photoEditoriale} ${style.photoGrande}`}
              onClick={() => ouvrirLightbox(3)}
            >
              <img src={Shooting4} alt="" />
            </button>
          </div>

          <div className={`${style.duo} ${style.grandeGauche}`}>
            <button
              className={`${style.photoEditoriale} ${style.photoGrande}`}
              onClick={() => ouvrirLightbox(4)}
            >
              <img src={Shooting5} alt="" />
            </button>

            <button
              className={`${style.photoEditoriale} ${style.photoPetite}`}
              onClick={() => ouvrirLightbox(5)}
            >
              <img src={Shooting6} alt="" />
            </button>
          </div>

        </section>

        {/* =========================
            DEUX PHOTOS COTE A COTE
        ========================= */}

        <section className={style.deuxPhotos}>
          <button
            className={style.photoDouble}
            onClick={() => ouvrirLightbox(6)}
          >
            <img
              src={Shooting13}
              alt=""
            />
          </button>

          <button
            className={style.photoDouble}
            onClick={() => ouvrirLightbox(7)}
          >
            <img
              src={Shooting14}
              alt=""
            />
          </button>
        </section>

        {/* =========================
            GRILLE 2 x 3
        ========================= */}

        <section className={style.grillePhotos}>
          {photos.slice(8, 14).map((photo, index) => (
            <button
              className={style.photoGrille}
              key={index}
              onClick={() => ouvrirLightbox(index + 8)}
            >
              <img
                src={photo.image}
                alt={photo.titre}
              />
            </button>
          ))}
        </section>

        {/* =========================
            VIDEOS
        ========================= */}

        <section className={style.videosShooting}>
        <video
          className={style.videoShooting}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={ShootingVideo1} type="video/mp4" />
        </video>

        <video
          className={style.videoShooting}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={ShootingVideo2} type="video/mp4" />
        </video>
      </section>

      </main>

      {indexActif !== null && (
        <Lightbox
          visuels={photos}
          indexActif={indexActif}
          onFermer={fermerLightbox}
          onPrecedent={precedent}
          onSuivant={suivant}
        />
      )}

      <Footer />
    </div>
  );
};

export default PhotosShooting;