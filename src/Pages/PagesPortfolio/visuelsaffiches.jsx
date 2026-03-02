import React from "react";
import { Link } from "react-router-dom";
import AffichageVisuels from "../../Composants/AffichageVisuels/AffichageVisuels";
import Affiche1 from "../../Assets/Affiches/Affiche1.png";

const visuelsaffiches = () => {
  return (
    <div>
      <AffichageVisuels nom="test" date="1 mars 2026" image={Affiche1} />
    </div>
  );
};

export default visuelsaffiches;
