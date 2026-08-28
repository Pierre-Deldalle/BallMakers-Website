import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      header: {
        creations: "Créations",
        contact: "Contact",
      },

      home: {
        subtitle: "Photographie / Vidéo / Graphisme",
        creations: "Créations",

        portfolioTitle: "PORTFOLIO",
        portfolioDescription:
          "Quand la passion rencontre l'objectif.",

        portfolioPosters: "Visuels / Affiches",
        portfolioReels: "Reels / Shorts",
        portfolioPhotos: "Photos Shooting",
        portfolioYoutube: "Vidéos Youtube",

        portfolioButton:
          "Découvrir toutes les créations",
      },

      creations: {
        title: "Mon Portfolio",

        posters: "Visuels/Affiches",
        reels: "Reels Instagram",
        highlights: "Highlights Joueurs",
        photos: "Photos Shooting",
        trailers: "Trailers",
        youtube: "Vidéos Youtube",

        since2023: "2023 - maintenant",
        since2024: "2024 - maintenant",
        since2025: "2025 - maintenant",
      },

      posters: {
        title: "Affiches / Visuels",

        description:
          "Réalisations d'affiches annonçant des matchs, des départs et mettant en avant des statistiques.",

        fictiveNote:
          "Les affiches marquées d'une étoile rouge sont des créations fictives.",

        items: {
          alexisMvp:
            "Alexis Thomas MVP - Berck",

          matchSaintVallier:
            "Jour de match - Berck vs Saint-Vallier",

          raijonStats:
            "Statistiques Globales - Raijon Kelly",

          victoryBesancon:
            "Victoire - Berck vs Besançon",

          derby:
            "Affiche de Derby - Berck vs SOMB",

          nextMatchSTB:
            "Prochain Match - Berck vs STB",

          thanksAlexis:
            "Merci Alexis Thomas",

          thanksSevenPlayers:
            "Merci à 7 joueurs",

          thanksRaijon:
            "Merci Raijon Kelly",

          matchLevallois:
            "Jour de Match - Berck vs Levallois",

          thanksRaphael:
            "Merci Raphaël Pascual",
        },

        dates: {
          january24:
            "24 janvier 2026",

          may24:
            "24 mai 2026",

          january2026:
            "janvier 2026",

          october25:
            "25 octobre 2025",

          november22:
            "22 novembre 2025",

          february2025:
            "Février 2025",

          may2026:
            "Mai 2026",

          june2024:
            "Juin 2024",

          october2025:
            "Octobre 2025",
        },
      },

      highlights: {
        title: "Highlights Joueurs",

        description:
          "Réalisation de vidéos Highlights pour mettre en avant les performances des joueurs, que ce soit pour trouver un nouveau club ou simplement faire le bilan de leur saison.",

        play: "Lire",
      },

      shooting: {
        title: "Photos Shooting",

        description:
          "Réalisation de photos lors des shootings d’avant-match.",
      },

      reels: {
        title: "Reels / Shorts",

        description:
          "Réalisation de vidéos en format vertical pour mettre en avant les performances et actions des joueurs et alimenter les réseaux des équipes.",

        play: "Lire",

        statsLabel:
          "PORTÉE DES VIDÉOS",

        stats2024:
          "+395 K de vues",

        stats2024Detail:
          "durant la saison 2024–25",

        stats2025:
          "+1.2 M de vues",

        stats2025Detail:
          "durant la saison 2025–26",
      },

      trailers: {
        title: "Trailers",

        description:
          "Réalisation de vidéos évènements au cours de la saison pour prévenir les supporters.",

        trailer1Title:
          "Trailer Avenir Basket Berck Rang-du-Fliers - Saison 2025-26 N1",

        trailer1Description:
          "Réalisation d'un trailer pour annoncer le début de la saison de l'équipe de Nationale 1 de Berck.",

        trailer1Date:
          "juin 2026",

        trailer2Title:
          "Trailer Avenir Basket Berck Rang du Fliers - Phase 2 - Saison 2025-26 N1",

        trailer2Description:
          "Réalisation d'un trailer pour annoncer la deuxième phase de la saison de l'équipe de Nationale 1 de Berck.",

        trailer2Date:
          "juin 2026",
      },

      youtube: {
        title:
          "Vidéos Youtube",

        description:
          "Réalisation de vidéos YouTube autour de différents concepts, comme les Day in the Life ou les Mic’d Up, ainsi que de vidéos de remerciement pour marquer la fin de carrière d’un joueur.",

        play: "Lire",
      },

      contact: {
        label:
          "CONTACT",

        title:
          "Parlons de votre projet.",

        description:
          "Vous avez un projet photo, vidéo ou graphique ? Décrivez-moi votre besoin et je reviendrai vers vous rapidement.",

        lastName:
          "Nom",

        lastNamePlaceholder:
          "Votre nom",

        firstName:
          "Prénom",

        firstNamePlaceholder:
          "Votre prénom",

        email:
          "Adresse mail",

        organization:
          "Organisation",

        organizationPlaceholder:
          "Club, entreprise, association...",

        projectType:
          "Type de projet",

        projectSelect:
          "Sélectionnez un type",

        projectPhotography:
          "Photographie",

        projectVideo:
          "Vidéo",

        projectGraphicDesign:
          "Graphisme",

        projectOther:
          "Autre",

        budget:
          "Budget estimé",

        budgetPlaceholder:
          "A définir...",

        projectDescription:
          "Description du projet",

        messagePlaceholder:
          "Parlez-moi de votre projet, de vos idées, de vos attentes...",

        submit:
          "Envoyer ma demande",

        sending:
          "Envoi en cours...",

        success:
          "Votre demande a bien été envoyée !",

        error:
          "Une erreur est survenue pendant l'envoi. Veuillez réessayer.",
      },

      footer: {
        description:
          "Passionné de basket et de photographie depuis tout petit, j'ai créé BallMakers afin de partager mes créations dans le monde du basket. Je fais notamment des photos, des vidéos et des visuels pour mes différents projets.",

        navigation:
          "Navigation",

        home:
          "Accueil",

        creations:
          "Créations",

        collaborations:
          "Collaborations",

        networks:
          "Réseaux",

        contact:
          "Contact",

        socialNetworks:
          "Réseaux sociaux",

        rights:
          "Tous droits réservés",

        developedBy:
          "Site développé par",
      },
    },
  },

  en: {
    translation: {
      header: {
        creations: "Creations",
        contact: "Contact",
      },

      home: {
        subtitle:
          "Photography / Video / Graphic Design",

        creations:
          "Creations",

        portfolioTitle:
          "PORTFOLIO",

        portfolioDescription:
          "When passion meets the lens.",

        portfolioPosters:
          "Visuals / Posters",

        portfolioReels:
          "Reels / Shorts",

        portfolioPhotos:
          "Photo Shoots",

        portfolioYoutube:
          "YouTube Videos",

        portfolioButton:
          "Discover all creations",
      },

      creations: {
        title:
          "My Portfolio",

        posters:
          "Visuals/Posters",

        reels:
          "Instagram Reels",

        highlights:
          "Player Highlights",

        photos:
          "Photo Shoots",

        trailers:
          "Trailers",

        youtube:
          "YouTube Videos",

        since2023:
          "2023 - present",

        since2024:
          "2024 - present",

        since2025:
          "2025 - present",
      },

      posters: {
        title:
          "Posters / Visuals",

        description:
          "Creation of posters announcing games, departures and highlighting player statistics.",

        fictiveNote:
          "Posters marked with a red star are fictional creations.",

        items: {
          alexisMvp:
            "Alexis Thomas MVP - Berck",

          matchSaintVallier:
            "Game Day - Berck vs Saint-Vallier",

          raijonStats:
            "Overall Statistics - Raijon Kelly",

          victoryBesancon:
            "Victory - Berck vs Besançon",

          derby:
            "Derby Poster - Berck vs SOMB",

          nextMatchSTB:
            "Next Game - Berck vs STB",

          thanksAlexis:
            "Thank You Alexis Thomas",

          thanksSevenPlayers:
            "Thank You to 7 Players",

          thanksRaijon:
            "Thank You Raijon Kelly",

          matchLevallois:
            "Game Day - Berck vs Levallois",

          thanksRaphael:
            "Thank You Raphaël Pascual",
        },

        dates: {
          january24:
            "January 24, 2026",

          may24:
            "May 24, 2026",

          january2026:
            "January 2026",

          october25:
            "October 25, 2025",

          november22:
            "November 22, 2025",

          february2025:
            "February 2025",

          may2026:
            "May 2026",

          june2024:
            "June 2024",

          october2025:
            "October 2025",
        },
      },

      highlights: {
        title:
          "Player Highlights",

        description:
          "Highlight videos designed to showcase players' performances, whether they are looking for a new club or simply want to look back on their season.",

        play:
          "Play",
      },

      shooting: {
        title:
          "Photo Shoots",

        description:
          "Photography created during pre-game photo shoots.",
      },

      reels: {
        title:
          "Reels / Shorts",

        description:
          "Producing vertical-format videos to showcase players' performances and actions and populate team social media channels.",

        play:
          "Play",

        statsLabel:
          "VIDEO REACH",

        stats2024:
          "+395K views",

        stats2024Detail:
          "during the 2024–25 season",

        stats2025:
          "+1.2M views",

        stats2025Detail:
          "during the 2025–26 season",
      },

      trailers: {
        title:
          "Trailers",

        description:
          "Production of event videos throughout the season to keep fans informed.",

        trailer1Title:
          "Avenir Basket Berck Rang-du-Fliers Trailer - 2025-26 N1 Season",

        trailer1Description:
          "Creation of a trailer announcing the start of the season for Berck's Nationale 1 team.",

        trailer1Date:
          "June 2026",

        trailer2Title:
          "Avenir Basket Berck Rang-du-Fliers Trailer - Phase 2 - 2025-26 N1 Season",

        trailer2Description:
          "Creation of a trailer announcing the second phase of the season for Berck's Nationale 1 team.",

        trailer2Date:
          "June 2026",
      },

      youtube: {
        title:
          "YouTube Videos",

        description:
          "Creation of YouTube videos based on different concepts such as Day in the Life and Mic’d Up, as well as tribute videos marking the end of a player’s career.",

        play:
          "Play",
      },

      contact: {
        label:
          "CONTACT",

        title:
          "Let's talk about your project.",

        description:
          "Do you have a photography, video or graphic design project? Tell me about your needs and I will get back to you shortly.",

        lastName:
          "Last name",

        lastNamePlaceholder:
          "Your last name",

        firstName:
          "First name",

        firstNamePlaceholder:
          "Your first name",

        email:
          "Email address",

        organization:
          "Organization",

        organizationPlaceholder:
          "Club, company, association...",

        projectType:
          "Project type",

        projectSelect:
          "Select a project type",

        projectPhotography:
          "Photography",

        projectVideo:
          "Video",

        projectGraphicDesign:
          "Graphic Design",

        projectOther:
          "Other",

        budget:
          "Estimated budget",

        budgetPlaceholder:
          "To be determined...",

        projectDescription:
          "Project description",

        messagePlaceholder:
          "Tell me about your project, your ideas and what you are looking for...",

        submit:
          "Send my request",

        sending:
          "Sending...",

        success:
          "Your request has been sent successfully!",

        error:
          "An error occurred while sending your request. Please try again.",
      },

      footer: {
        description:
          "Passionate about basketball and photography from a young age, I created BallMakers to share my work within the basketball world. I mainly create photos, videos and visuals for my various projects.",

        navigation:
          "Navigation",

        home:
          "Home",

        creations:
          "Creations",

        collaborations:
          "Collaborations",

        networks:
          "Socials",

        contact:
          "Contact",

        socialNetworks:
          "Social media",

        rights:
          "All rights reserved",

        developedBy:
          "Website developed by",
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