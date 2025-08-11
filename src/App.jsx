import "./App.css";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProiecteComponent from "../proiecte/ProiecteComponent";
import StudiiComponent from "../studii/StudiiComponent";
import CV from "../cv/CV";
import Hobbyuri from "../hobby-uri/Hobby-uri";
import ZariAlbAstre from "../zari-alb-astre/ZariAlbAstre";
import ConsiliulScolarAlElevilor from "../consiliul-scolar-al-elevilor/ConsiliulScolarAlElevilor";
import ConsiliulJudeteanAlElevilor from "../consiliul-judetean-al-elevilor/ConsiliulJudeteanAlElevilor";
import ZiuaDeConstanta from "../ziua-de-constanta/ZiuaDeConstanta";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proiecte" element={<ProiecteComponent />} />
          <Route path="/studii" element={<StudiiComponent />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/hobby-uri" element={<Hobbyuri />} />
          <Route path="/zari-alb-astre" element={<ZariAlbAstre />} />
          <Route path="/consiliul-scolar-al-elevilor" element={<ConsiliulScolarAlElevilor />} />
          <Route path="/consiliul-judetean-al-elevilor" element={<ConsiliulJudeteanAlElevilor />} />
          <Route path="/ziua-de-constanta" element={<ZiuaDeConstanta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
