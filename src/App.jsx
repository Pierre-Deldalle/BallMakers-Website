import "./index.css";
import Header from "./Composants/Header/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Creations from "./Pages/creations";
import Collaborations from "./Pages/collaborations";
import Reseaux from "./Pages/reseaux";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/reseaux" element={<Reseaux />} />
      </Routes>
    </>
  );
}

export default App;
