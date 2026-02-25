import "./index.css";
import Header from "./Composants/Header/header";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Creations from "./Pages/creations";
import Collaborations from "./Pages/collaborations";
import Reseaux from "./Pages/reseaux";

import HighlightsJoueurs from "./Pages/PagesPortfolio/highlightsjoueurs";
import PhotosShooting from "./Pages/PagesPortfolio/photosshooting";
import ReelsInstagram from "./Pages/PagesPortfolio/reelsinstagram";
import Trailers from "./Pages/PagesPortfolio/trailers";
import VidéosYoutube from "./Pages/PagesPortfolio/vidéosyoutube";
import VisuelsAffiches from "./Pages/PagesPortfolio/visuelsaffiches";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/reseaux" element={<Reseaux />} />

          <Route path="/highlightsjoueurs" element={<HighlightsJoueurs />} />
          <Route path="/photosshooting" element={<PhotosShooting />} />
          <Route path="/reelsinstagram" element={<ReelsInstagram />} />
          <Route path="/trailers" element={<Trailers />} />
          <Route path="/vidéosyoutube" element={<VidéosYoutube />} />
          <Route path="/visuelsaffiches" element={<VisuelsAffiches />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
