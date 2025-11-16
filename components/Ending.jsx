import FadeInOnScroll from "./FadeInOnScroll";
import Anchor from "./Anchor";
import { bodyW } from "../variables/variables";
import H3 from "./H3";
import { Link } from "react-router-dom";

const Ending = () => {
  return (
    <FadeInOnScroll>
      <section className="sm:my-24">
        <Anchor text="section" />
        <H3 text="Nu ești convins dacă m-aș potrivi în echipa ta?" />
        <div className={`${bodyW} flex justify-center`}>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <button className="hero-cta-btn">Vezi portofoliu</button>
          </Link>
        </div>
        <div className="mt-4 mb-16">
          <Anchor text="section" type="end" />
        </div>
        <div className="mt-4 mb-16">
          <Anchor text="body" type="end" />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Ending;
