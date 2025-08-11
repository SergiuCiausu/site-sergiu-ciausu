import "./globals.css";
import Hero from "../landing-page-components/Hero";
import Anchor from "../components/Anchor";
import FadeInOnLoad from "../components/FadeInOnLoad";
import Proiecte from "../landing-page-components/Proiecte";
import FadeInOnScroll from "../components/FadeInOnScroll";
import AbilitatiTehnice from "../landing-page-components/AbilitatiTehnice";
import ExperienteAnterioare from "../landing-page-components/ExperienteAnterioare";
import DespreMine from "../landing-page-components/DespreMine";
import Navbar from "../components/Navbar";
import NavMobileBtn from "./NavMobileBtn";

export default function Home() {
  return (
    <div className="max-sm:w-full max-sm:overflow-x-hidden">
      <NavMobileBtn />
      <Navbar />
      <FadeInOnLoad>
        <div className="sm:my-16">
          <Anchor text="body" />
        </div>
      </FadeInOnLoad>
      <Hero elementId="proiecte" />
      <FadeInOnLoad>
        <Anchor text="main" />
        <Proiecte />
      </FadeInOnLoad>
      <FadeInOnScroll>
        <Anchor text="main" type="end" />
      </FadeInOnScroll>
      <AbilitatiTehnice />
      <ExperienteAnterioare />
      <DespreMine />
      <div className="my-16">
        <Anchor text="section" type="end" />
      </div>
      <div className="my-16">
        <Anchor text="main" type="end" />
      </div>
      <div className="my-16">
        <Anchor text="body" type="end" />
      </div>
    </div>
  );
}
