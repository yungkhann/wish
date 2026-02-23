import chocoLogo from "../assets/choco.png";
import datasciLogo from "../assets/datasci.png";
import freedomLogo from "../assets/freedom.jpg";
import issaiLogo from "../assets/issai.jpg";

const sponsors = [
  {
    name: "Choco",
    logo: chocoLogo.src,
    description:
      "Kazakhstan's leading IT company and SuperApp. The Choco ecosystem integrates projects like Chocolife.me, Chocofood, Smart Restaurant, Ryadom, and Idoctor, providing essential digital services for everyday life. For this hackathon, Choco provides two real-world business cases, which will serve as the primary challenges for the participants..",
  },
  {
    name: "Freedom",
    logo: freedomLogo.src,
    description:
      "A lifestyle service ecosystem within the Freedom holding. It integrates leading leisure and ticketing projects such as Ticketon, Sxodim, Kino.kz, Aviata, and Chocotravel, making your travel and entertainment experiences more accessible.",
  },
  {
    name: "Issai",
    logo: issaiLogo.src,
    description:
      "The Institute of Smart Systems and Artificial Intelligence (ISSAI) at Nazarbayev University is a driver of AI innovation in Kazakhstan. It facilitates collaboration with sponsors.",
  },
];

const partners = [
  {
    name: "NU DataSci Club",
    logo: datasciLogo.src,
    description:
      "A student club at Nazarbayev University dedicated to promoting Data Science. As a content partner for WISH, the club provided the essential video lessons to help participants prepare for the hackathon.",
  },
];

const Sponsors = () => {
  return (
    <div id="sponsors" className="flex flex-col items-center py-16">
      <h2 className="mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        Sponsors
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="group relative">
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} Logo`}
              className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-zinc-900/95 p-4 text-sm text-zinc-100 opacity-0 shadow-xl transition-all duration-200 group-focus-within:translate-y-1 group-focus-within:opacity-100 group-hover:translate-y-1 group-hover:opacity-100">
              {sponsor.description}
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-16 mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        Partners
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        {partners.map((partner) => (
          <div key={partner.name} className="group relative">
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-zinc-900/95 p-4 text-sm text-zinc-100 opacity-0 shadow-xl transition-all duration-200 group-focus-within:translate-y-1 group-focus-within:opacity-100 group-hover:translate-y-1 group-hover:opacity-100">
              {partner.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
