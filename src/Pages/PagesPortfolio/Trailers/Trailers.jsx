import React from "react";
import TuileVideo from "../../../Composants/TuileVidéo/tuileVideo";
import style from "./trailers.module.css";

const trailers = () => {
  return (
    <div>
      <div className={style.container}>
        <TuileVideo
          videoId="O3Ce14-CuHc"
          titre="Trailer Avenir Basket Berck Rang-du-Fliers - Saison 2025-26 N1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor dolor quis turpis vestibulum finibus. Proin finibus, nibh at consequat semper, eros mauris ullamcorper quam, vel viverra velit erat nec eros. Nulla sagittis, diam sed molestie gravida, ligula leo suscipit neque, ac iaculis odio arcu aliquam lorem. Sed sagittis porttitor metus sit amet sagittis. Duis bibendum tortor et leo aliquet, a accumsan dolor iaculis. Aliquam bibendum nulla a dolor dapibus porttitor."
          date="juin 2026"
        />
        <TuileVideo
          videoId="mLYqmGfo2Mc"
          titre="Trailer Avenir Basket Berck Rang du Fliers - Phase 2 - Saison 2025-26 N1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor dolor quis turpis vestibulum finibus. Proin finibus, nibh at consequat semper, eros mauris ullamcorper quam, vel viverra velit erat nec eros. Nulla sagittis, diam sed molestie gravida, ligula leo suscipit neque, ac iaculis odio arcu aliquam lorem. Sed sagittis porttitor metus sit amet sagittis. Duis bibendum tortor et leo aliquet, a accumsan dolor iaculis. Aliquam bibendum nulla a dolor dapibus porttitor."
          date="juin 2026"
        />
      </div>
    </div>
  );
};

export default trailers;
