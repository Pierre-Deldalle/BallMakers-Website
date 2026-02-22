import "./index.css";
import Header from "./Composants/Header/Header";
import { Routes, Route } from "react-router-dom";
import FondHome from "./Assets/FondHome.gif";

import Home from "./Pages/home";
import Creations from "./Pages/creations";
import Collaborations from "./Pages/collaborations";
import Reseaux from "./Pages/reseaux";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${FondHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
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
