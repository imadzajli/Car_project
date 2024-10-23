import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Bienvenue from "./Components/Bienvenue";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import Voiture from "./Components/Voiture";
import VoitureListe from "./Components/VoitureListe";

import Proprietaire from "./Components/Proprietaire";
import ProprietaireListe from "./Components/ProprietaireListe";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Bienvenue />} />
        <Route path="/add" element={<Voiture />} />
        <Route path="/list" element={<VoitureListe />} />
        <Route path="/edit/:id" element={<Voiture />} />
        <Route path="/addProprietaire" element={<Proprietaire />}/>
        <Route path="/list_prop" element={<ProprietaireListe/>}/>
        <Route path="/edit_prop/:id" element={<Proprietaire />} />
     </Routes>
      <Footer />
    </Router>
  );
}

export default App;
