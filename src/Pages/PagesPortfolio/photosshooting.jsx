import GalerieVisuels from "../../Composants/AffichageVisuels/GalerieVisuels";
import Footer from "../../Composants/Footer/footer";
import style from "./visuelsaffiches.module.css";
import Shooting1 from "../../Assets/Shooting/Shooting1.webp";
import Shooting2 from "../../Assets/Shooting/Shooting2.webp";
import Shooting3 from "../../Assets/Shooting/Shooting3.webp";
import Shooting4 from "../../Assets/Shooting/Shooting4.webp";
import Shooting5 from "../../Assets/Shooting/Shooting5.webp";
import Shooting6 from "../../Assets/Shooting/Shooting6.webp";
import Shooting7 from "../../Assets/Shooting/Shooting7.webp";
import Shooting8 from "../../Assets/Shooting/Shooting8.webp";
import Shooting9 from "../../Assets/Shooting/Shooting9.webp";
import Shooting10 from "../../Assets/Shooting/Shooting10.webp";
import Shooting11 from "../../Assets/Shooting/Shooting11.webp";
import Shooting12 from "../../Assets/Shooting/Shooting12.webp";

const photosshooting = () => {
  return (
    <div>
      <h1 className={style.titre}>Affiches/Visuels</h1>
      <GalerieVisuels
        visuels={[
          {
            date: "22 novembre 2025",
            image: Shooting12,
            priorite: false,
          },
          {
            date: "24 janvier 2026",
            image: Shooting1,
            priorite: true,
          },
          {
            date: "24 janvier 2026",
            image: Shooting2,
            priorite: true,
          },
          {
            date: "24 janvier 2026",
            image: Shooting3,
            priorite: true,
          },
          {
            date: "janviuer 2026",
            image: Shooting4,
            priorite: false,
          },
          {
            date: "25 octobre 2025",
            image: Shooting5,
            priorite: false,
          },
          {
            date: "22 novembre 2025",
            image: Shooting8,
            priorite: false,
          },
          {
            date: "22 novembre 2025",
            image: Shooting6,
            priorite: false,
          },
          {
            date: "22 novembre 2025",
            image: Shooting9,
            priorite: false,
          },
          {
            date: "22 novembre 2025",
            image: Shooting7,
            priorite: false,
          },
          {
            date: "22 novembre 2025",
            image: Shooting11,
            priorite: false,
          },
          {
            date: "22 novembre 2025",
            image: Shooting10,
            priorite: false,
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default photosshooting;
