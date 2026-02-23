import chocoLogo from "../assets/choco.png";
import datasciLogo from "../assets/datasci.png";
import freedomLogo from "../assets/freedom.jpg";
import issaiLogo from "../assets/issai.jpg";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const resolveSrc = (img: any) => (img?.src ?? img);

const sponsorsData = [
  {
    name: "Choco",
    logo: resolveSrc(chocoLogo),
    descriptionKey: "sponsors.choco.description",
  },
  {
    name: "Freedom",
    logo: resolveSrc(freedomLogo),
    descriptionKey: "sponsors.freedom.description",
  },
  {
    name: "Issai",
    logo: resolveSrc(issaiLogo),
    descriptionKey: "sponsors.issai.description",
  },
];

const partnersData = [
  {
    name: "NU DataSci Club",
    logo: resolveSrc(datasciLogo),
    descriptionKey: "sponsors.nuDatasciClub.description",
  },
];

const Sponsors = ({ lang: langProp }: { lang?: Lang }) => {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);
 
  return (
    <div id="sponsors" className="flex flex-col items-center py-16">
            <h2 className="mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {t("sponsors.title")}
            </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        {sponsorsData.map((sponsor) => (
          <div key={sponsor.name} className="group relative">
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} Logo`}
              className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-zinc-900/95 p-4 text-sm text-zinc-100 opacity-0 shadow-xl transition-all duration-200 group-focus-within:translate-y-1 group-focus-within:opacity-100 group-hover:translate-y-1 group-hover:opacity-100">
              {t(sponsor.descriptionKey as any)}
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-16 mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {t("sponsors.infoPartners")}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        {partnersData.map((partner) => (
          <div key={partner.name} className="group relative">
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-zinc-900/95 p-4 text-sm text-zinc-100 opacity-0 shadow-xl transition-all duration-200 group-focus-within:translate-y-1 group-focus-within:opacity-100 group-hover:translate-y-1 group-hover:opacity-100">
              {t(partner.descriptionKey as any)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
