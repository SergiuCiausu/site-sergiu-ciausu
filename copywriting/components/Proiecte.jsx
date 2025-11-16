import H3 from "../../components/H3";
import { bodyW } from "../../variables/variables";
import "../../proiecte/components/proiecte.css";
import { Link } from "react-router-dom";

const Proiecte = () => {
  const proiecte = [
    {
      titlu: "The Pure Muscle Gain Blueprint",
      descriere:
        "Pagină de opt-in a unui curs de 7 zile trimis prin email făcută pentru un Youtuber popular din industria fitness-ului, Jeff Nippard, care are o audiență de peste 10M de urmăritori pe Youtube, Instagram și Tik Tok.",
      eticheta: "Proiect de prestigiu",
      imagine: "/pure-muscle-gain-banner.jpg",
      link: "https://puremusclegain.carrd.co",
    },
    {
      titlu: "The Fitness Journey Starter Pack",
      descriere:
        "Pagină de opt-in pentru un lead magnet în domeniul fitness-ului, fiind pagina de prezentare a unui curs de 10 zile trimis prin email al unui creator de conținut din Statele Unite.",
      eticheta: "Proiect mare",
      imagine: "/fitness-journey-starter-pack-banner.jpg",
      link: "https://startyourfitnessjourney.carrd.co",
    },
    {
      titlu: "The V Shape Physique Accelerator Program",
      descriere:
        "Pagină de opt-in pentru un lead magnet în domeniul fitness-ului, fiind pagina de prezentare a unui curs de 7 zile trimis prin email al unui creator de conținut din Statele Unite.",
      eticheta: "Proiect mare",
      imagine: "/v-shape-accelerator-banner.jpg",
      link: "https://vshapeaccelerator.carrd.co",
    },
    {
      titlu: "The Light-Speed Website Playbook",
      descriere:
        "Pagină de opt-in pentru un lead magnet în domeniul web hosting-ului, fiind pagina de prezentare a unui curs de 3 zile trimis prin email al unei firme de web hosting.",
      eticheta: "Proiect mic",
      imagine: "/light-speed-website-playbook-banner.jpg",
      link: "https://lightspeedwebsite.carrd.co",
    },
    {
      titlu: "Așa Faci Abdomen",
      descriere:
        "Pagină de opt-in pentru un lead magnet în domeniul fitness-ului, acesta este un produs digital împachetat într-un curs cu 4 module trimis prin email pe care l-am creat pentru propria audiență.",
      eticheta: "Proiect mare",
      imagine: "/asa-faci-abdomen-banner.jpg",
      link: "https://asafaciabdomen.carrd.co",
    },
    {
      titlu: "Fully Optimized Blueprint",
      descriere:
        "Pagină de opt-in pentru un lead magnet în domeniul biohacking-ului, fiind pagina de prezentare a unui curs de 7 zile trimis prin email, pentru un client din Statele Unite.",
      eticheta: "Proiect mare",
      imagine: "/fully-optimized-blueprint-banner.jpg",
      link: "https://fullyoptimizedblueprint.carrd.co/",
    },
    {
      titlu: "Ed Latimore",
      descriere:
        "Pagină de opt-in a unui curs de 7 zile trimis prin email care contribuie la funnel-ul unui bestseller din Statele Unite, „Not Caring What Other People Think Is a Superpower”, iar scopul cursului era să convingă audiența lui Ed Latimore să se înscrie la un grup privat de dezvoltare personală.",
      eticheta: "Proiect compact",
      imagine: "/ed-latimore-banner.jpg",
      link: "https://edlatimore.carrd.co",
    },
  ];

  return (
    <section className="my-24 max-sm:my-4">
      <div id="proiecte">
        <H3 text="Proiecte de copywriting"></H3>
      </div>
      <div className={`${bodyW} flex justify-center flex-wrap max-sm:flex-col gap-5`}>
        {proiecte.map((proiect, index) => (
          <Link
            key={index}
            to={proiect.link}
            className={`p-8 flex flex-1 min-h-[600px] sm:basis-1/5 flex-col max-sm:items-center max-sm:justify-between max-sm:gap-2`}
            target="_blank"
          >
            <div className="relative mb-6 max-sm:flex max-sm:flex-col max-sm:items-center">
              <img src={proiect.imagine} alt={proiect.imagine.slice(1, proiect.imagine.length - 3)}></img>
              <p className={`eticheta ${proiect.titlu === "Make Me Fit" ? "eticheta-roz" : ""} absolute top-0 right-0`}>{proiect.eticheta}</p>
            </div>
            <h5 className="max-sm:text-center">{proiect.titlu}</h5>
            <p className="descriere sm:min-h-[80px] max-sm:text-center max-sm:max-w-[301px]">{proiect.descriere}</p>
            <button className="proiect-btn mt-auto">Vezi proiect</button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Proiecte;
