import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import Heading from "/cv/components/Heading";
import React from "react";
import "./despre-zari.css";
import { bodyW } from "/variables/variables";

const DespreZari = () => {
  return (
    <FadeInOnScroll>
      <section>
        <div>
          <Anchor text="section" />
        </div>
        <div className={`${bodyW} flex sm:gap-16 items-center max-sm:flex-col max-sm:p-4`}>
          <div className="sm:w-3/5">
            <div>
              <Heading text="Despre Zări Alb Astre" />
            </div>
            <p className="despre-p max-sm:px-4">
              Zări Alb Astre este revista Colegiului Național „Mircea cel Bătrân” și este{" "}
              <strong>
                un proiect ce-și propune să distribuie gândurile tinerilor mirciști și să reflecte cunoștințele, interesele și convingerile viitorilor
                adulți
              </strong>{" "}
              din elita învățământului românesc.
            </p>
            <p className="despre-p max-sm:px-4">
              Revista încurajează scrisul ca un mod de ordonare a ideilor nu doar pentru cititori, dar și pentru însuși autorii. Mai departe, redacția
              se ocupă de promovarea articolelor și de atragerea audienței către fiecare nou articol publicat. La urma urmei, cui nu-i place să fie
              văzută munca?
            </p>
            <p className="despre-p max-sm:px-4">
              Zări Alb Astre <strong>a reușit să dăinuie în ultimii 78 de ani</strong> tocmai datorită reușitei redacției de a încuraja scrisul și de
              a le recompensa autorilor eforturile prin a determina oamenii să citească articolele din reviste.
            </p>
          </div>
          <div className="max-sm:px-4">
            <img src="/story-poza.jpg" width={1021} height={768} alt="despre zari alb astre"></img>
          </div>
        </div>
        <div className="sm:mt-16">
          <Anchor text="section" type="end" />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default DespreZari;
