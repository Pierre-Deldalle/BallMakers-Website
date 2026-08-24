import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Formulaire.module.css";
import LogoDessin from "../../Assets/Logos/logoDessin.webp";

const Formulaire = () => {
  const { t } = useTranslation();

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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
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

      setStatut(t("contact.success"));

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

      setStatut(t("contact.error"));
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
            <p className={style.surtitre}>
              {t("contact.label")}
            </p>

            <h2>{t("contact.title")}</h2>

            <p className={style.description}>
              {t("contact.description")}
            </p>
          </div>

          <form
            className={style.formulaire}
            onSubmit={handleSubmit}
          >
            {/* NOM + PRÉNOM */}
            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="nom">
                  {t("contact.lastName")}
                </label>

                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder={t("contact.lastNamePlaceholder")}
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={style.champ}>
                <label htmlFor="prenom">
                  {t("contact.firstName")}
                </label>

                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder={t("contact.firstNamePlaceholder")}
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* EMAIL + ORGANISATION */}
            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="email">
                  {t("contact.email")}
                </label>

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
                  {t("contact.organization")}
                </label>

                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  placeholder={t("contact.organizationPlaceholder")}
                  value={formData.organisation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* TYPE DE PROJET + BUDGET */}
            <div className={style.doubleChamp}>
              <div className={style.champ}>
                <label htmlFor="projet">
                  {t("contact.projectType")}
                </label>

                <select
                  id="projet"
                  name="projet"
                  value={formData.projet}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    {t("contact.projectSelect")}
                  </option>

                  <option value="Photographie">
                    {t("contact.projectPhotography")}
                  </option>

                  <option value="Vidéo">
                    {t("contact.projectVideo")}
                  </option>

                  <option value="Graphisme">
                    {t("contact.projectGraphicDesign")}
                  </option>

                  <option value="Autre">
                    {t("contact.projectOther")}
                  </option>
                </select>
              </div>

              <div className={style.champ}>
                <label htmlFor="budget">
                  {t("contact.budget")}
                </label>

                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder={t("contact.budgetPlaceholder")}
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className={style.champ}>
              <label htmlFor="message">
                {t("contact.projectDescription")}
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder={t("contact.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* ENVOI */}
            <button
              type="submit"
              className={style.boutonEnvoyer}
              disabled={envoi}
            >
              {envoi
                ? t("contact.sending")
                : t("contact.submit")}
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