import Hero from "../components/Hero";
import Anchor from "../components/Anchor";
import Proiecte from "./components/Proiecte";
import Navbar from "../components/Navbar";
import FadeInOnLoad from "../components/FadeInOnLoad";
import Ending from "../components/Ending";
import "/src/globals.css";
import FadeInOnScroll from "../components/FadeInOnScroll";
import NavMobileBtn from "../src/NavMobileBtn";

const Copywriting = () => {
  return (
    <div>
      <NavMobileBtn />
      <Navbar />
      <div className={`sm:my-16`}>
        <FadeInOnLoad>
          <Anchor text="body" />
        </FadeInOnLoad>
      </div>
      <Hero
        htext="lui Sergiu de Copywriting"
        evtext="Proiectele"
        ptext="Mai jos puteți să aruncați o privire prin fiecare proiect de copywriting pe care l-am pregătit pentru portofoliul meu. Lipsesc formulare de înscriere de pe fiecare pagină, deoarece contul meu de Kit (fost ConvertKit) nu mai este activ, iar formularele nu se încarcă dacă nu există legătură cu Kit. Tot ce se poate vedea în proiectele de mai jos (inclusiv mockup-urile) sunt făcute de mine."
        btext="Vezi proiecte"
        elementId="proiecte"
      />
      <FadeInOnScroll>
        <Anchor text="main" />
      </FadeInOnScroll>
      <Proiecte />
      <Ending />
    </div>
  );
};

export default Copywriting;
