import React from "react";
import style from "./Formulaire.module.css";
import LogoDessin from "../../Assets/Logos/logoDessin.webp";

const Formulaire = () => {
  return (
    <section className={style.formulaireSection}>
      <div className={style.contactLayout}>
        <div className={style.imageContainer}>
          <img
            src={LogoDessin}
            alt="BallMakers"
            className={style.logoDessin}
          />
        </div>

        <div className={style.formulaireContainer}>
          <div className={style.intro}>
            <p className={style.surtitre}>CONTACT</p>

            <h2>Parlons de votre projet.</h2>

            <p className={style.description}>
              Vous avez un projet photo, vidéo ou graphique ? Décrivez-moi votre
              besoin et je reviendrai vers vous rapidement.
            </p>
          </div>

          <form className={style.formulaire}>
            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className={style.champ}>
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder="Votre prénom"
                  required
                />
              </div>
            </div>

            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="email">Adresse mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@email.com"
                  required
                />
              </div>

              <div className={style.champ}>
                <label htmlFor="organisation">Organisation</label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  placeholder="Club, entreprise, association..."
                />
              </div>
            </div>

            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="projet">Type de projet</label>

                <select id="projet" name="projet" defaultValue="" required>
                  <option value="" disabled>
                    Sélectionnez un type
                  </option>
                  <option value="photo">Photographie</option>
                  <option value="video">Vidéo</option>
                  <option value="graphisme">Graphisme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className={style.champ}>
                <label htmlFor="budget">Budget estimé</label>

                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    Sélectionnez un budget
                  </option>
                  <option value="moins-250">Moins de 250 €</option>
                  <option value="250-500">250 € - 500 €</option>
                  <option value="500-1000">500 € - 1 000 €</option>
                  <option value="1000-plus">Plus de 1 000 €</option>
                  <option value="a-definir">À définir</option>
                </select>
              </div>
            </div>

            <div className={style.champ}>
              <label htmlFor="message">Description du projet</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Parlez-moi de votre projet, de vos idées, de vos attentes..."
                required
              ></textarea>
            </div>

            <button type="submit" className={style.boutonEnvoyer}>
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulaire;