import React, { useState } from "react";
import style from "./Formulaire.module.css";
import LogoDessin from "../../Assets/Logos/logoDessin.webp";

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    organisation: "",
    projet: "",
    budget: "",
    message: "",
  });

  const [statut, setStatut] = useState("");
  const [envoi, setEnvoi] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((ancienFormulaire) => ({
      ...ancienFormulaire,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEnvoi(true);
    setStatut("");

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatut("Votre demande a bien été envoyée !");

      setFormData({
        nom: "",
        prenom: "",
        email: "",
        organisation: "",
        projet: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatut(
        "Une erreur est survenue pendant l'envoi. Veuillez réessayer."
      );
    } finally {
      setEnvoi(false);
    }
  };

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

          <form
            className={style.formulaire}
            onSubmit={handleSubmit}
          >
            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="nom">Nom</label>

                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleChange}
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
                  value={formData.prenom}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={style.champ}>
                <label htmlFor="organisation">
                  Organisation
                </label>

                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  placeholder="Club, entreprise, association..."
                  value={formData.organisation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="projet">
                  Type de projet
                </label>

                <select
                  id="projet"
                  name="projet"
                  value={formData.projet}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Sélectionnez un type
                  </option>

                  <option value="Photographie">
                    Photographie
                  </option>

                  <option value="Vidéo">
                    Vidéo
                  </option>

                  <option value="Graphisme">
                    Graphisme
                  </option>

                  <option value="Autre">
                    Autre
                  </option>
                </select>
              </div>

              <div className={style.champ}>
                <label htmlFor="budget">
                  Budget estimé
                </label>

                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Sélectionnez un budget
                  </option>

                  <option value="Moins de 250 €">
                    Moins de 250 €
                  </option>

                  <option value="250 € - 500 €">
                    250 € - 500 €
                  </option>

                  <option value="500 € - 1 000 €">
                    500 € - 1 000 €
                  </option>

                  <option value="Plus de 1 000 €">
                    Plus de 1 000 €
                  </option>

                  <option value="À définir">
                    À définir
                  </option>
                </select>
              </div>
            </div>

            <div className={style.champ}>
              <label htmlFor="message">
                Description du projet
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Parlez-moi de votre projet, de vos idées, de vos attentes..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={style.boutonEnvoyer}
              disabled={envoi}
            >
              {envoi ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>

            {statut && (
              <p className={style.messageStatut}>
                {statut}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulaire;