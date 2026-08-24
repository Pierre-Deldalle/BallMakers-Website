import "./index.css";
import Header from "./Composants/Header/header";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./Composants/ScrollToTop/ScrollToTop";

// Pages principales
import Home from "./Pages/Home/home";
const Creations = lazy(() => import("./Pages/Creations/creations"));
const Contact = lazy(() => import("./Pages/Contact/contact"));

// Pages portfolio
const HighlightsJoueurs = lazy(
  () => import("./Pages/PagesPortfolio/HighlightsJoueurs/highlightsJoueurs"),
);
const PhotosShooting = lazy(
  () => import("./Pages/PagesPortfolio/PhotosShooting/photosShooting"),
);
const ReelsInstagram = lazy(
  () => import("./Pages/PagesPortfolio/ReelsInstagram/reelsInstagram"),
);
const Trailers = lazy(() => import("./Pages/PagesPortfolio/Trailers/Trailers"));
const VideosYoutube = lazy(
  () => import("./Pages/PagesPortfolio/VideosYoutube/videosYoutube"),
);
const VisuelsAffiches = lazy(
  () => import("./Pages/PagesPortfolio/VisuelsAffiches/visuelsAffiches"),
);

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <div className="pages">
        <Suspense
          fallback={
            <div
              style={{ color: "#fff", textAlign: "center", marginTop: "100px" }}
            >
              Chargement...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/highlightsjoueurs" element={<HighlightsJoueurs />} />
            <Route path="/photosshooting" element={<PhotosShooting />} />
            <Route path="/reelsinstagram" element={<ReelsInstagram />} />
            <Route path="/trailers" element={<Trailers />} />
            <Route path="/videosyoutube" element={<VideosYoutube />} />
            <Route path="/visuelsaffiches" element={<VisuelsAffiches />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
