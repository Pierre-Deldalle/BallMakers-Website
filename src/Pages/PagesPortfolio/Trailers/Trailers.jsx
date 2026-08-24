import React from "react";
import { useTranslation } from "react-i18next";
import TuileVideo from "../../../Composants/TuileVidéo/tuileVideo";
import style from "./trailers.module.css";
import Footer from "../../../Composants/Footer/footer";

const Trailers = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.alignementTextes}>
        <h1 className={style.titre}>
          · {t("trailers.title")}
        </h1>

        <h4 className={style.sousTitre}>
          {t("trailers.description")}
        </h4>
      </div>

      <div className={style.fadeIn}>
        <TuileVideo
          videoURL="https://www.youtube.com/watch?v=O3Ce14-CuHc"
          titre={t("trailers.trailer1Title")}
          description={t("trailers.trailer1Description")}
          date={t("trailers.trailer1Date")}
        />

        <TuileVideo
          videoURL="https://www.youtube.com/watch?v=mLYqmGfo2Mc"
          titre={t("trailers.trailer2Title")}
          description={t("trailers.trailer2Description")}
          date={t("trailers.trailer2Date")}
        />

        <Footer />
      </div>
    </div>
  );
};

export default Trailers;