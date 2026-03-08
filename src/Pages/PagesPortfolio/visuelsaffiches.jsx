import React from "react";
import { Link } from "react-router-dom";
import GalerieVisuels from "../../Composants/AffichageVisuels/GalerieVisuels";
import Affiche1 from "../../Assets/Affiches/Affiche1.png";
import Affiche2 from "../../Assets/Affiches/Affiche2.png";

const visuelsaffiches = () => {
  return (
    <div>
      <h1>Test</h1>
      <h1>dfjjei</h1>
      <GalerieVisuels
        visuels={[
          { titre: "Mon affiche", date: "2024", image: Affiche1 },
          {
            titre: "Une autre affiche",
            date: "2023",
            image: Affiche2,
          },
        ]}
      />
    </div>
  );
};

export default visuelsaffiches;
