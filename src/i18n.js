import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      home: {
        subtitle: "Photographie / Vidéo / Graphisme",
        creations: "Créations",
      },

      footer: {
        description:
          "Passionné de basket et de photographie depuis tout petit, j'ai créé BallMakers afin de partager mes créations dans le monde du basket. Je fais notamment des photos, des vidéos et des visuels pour mes différents projets.",

        navigation: "Navigation",
        home: "Accueil",
        creations: "Créations",
        collaborations: "Collaborations",
        networks: "Réseaux",

        contact: "Contact",
        socialNetworks: "Réseaux sociaux",

        rights: "Tous droits réservés",
        developedBy: "Site développé par",
      },
    },
  },

  en: {
    translation: {
      home: {
        subtitle: "Photography / Video / Graphic Design",
        creations: "Creations",
      },

      footer: {
        description:
          "Passionate about basketball and photography from a young age, I created BallMakers to share my work within the basketball world. I mainly create photos, videos and visuals for my various projects.",

        navigation: "Navigation",
        home: "Home",
        creations: "Creations",
        collaborations: "Collaborations",
        networks: "Socials",

        contact: "Contact",
        socialNetworks: "Social media",

        rights: "All rights reserved",
        developedBy: "Website developed by",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;