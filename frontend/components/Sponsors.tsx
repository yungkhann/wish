import datasciLogo from "../assets/datasci.png";
import freedomAILabsLogo from "../assets/freedom_ai_labs.svg";
import freedomLifestyleLogo from "../assets/freedom_lifestyle.svg";
import issaiLogo from "../assets/issaiWhite.svg";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const resolveSrc = (img: any) => img?.src ?? img;

const sponsorsData = [
  {
    name: "Freedom AI Labs",
    popoutTitle: "General Sponsor - Freedom AI Labs",
    logo: resolveSrc(freedomAILabsLogo),
    descriptionKey: "sponsors.freedomAILabs.description",
  },
  {
    name: "Freedom",
    popoutTitle: "Official Sponsor - Freedom Lifestyle",
    logo: resolveSrc(freedomLifestyleLogo),
    descriptionKey: "sponsors.freedom.description",
  },
  {
    name: "Issai",
    popoutTitle: "ISSAI",
    logo: resolveSrc(issaiLogo),
    descriptionKey: "sponsors.issai.description",
  },
];

const partnersData = [
  {
    name: "NU DataSci Club",
    popoutTitle: "NU DataSci Club",
    logo: resolveSrc(datasciLogo),
    descriptionKey: "sponsors.nuDatasciClub.description",
  },
];

const Sponsors = ({ lang: langProp }: { lang?: Lang }) => {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  return (
    <div
      id="sponsors"
      className="flex flex-col items-center overflow-x-clip py-8"
    >
      <h2 className="mb-10 text-center font-['Marcellus'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {t("sponsors.title")}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        {sponsorsData.map((sponsor, i) => (
          <div key={sponsor.name} className="group relative">
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} Logo`}
              className={
                i === 0
                  ? "h-34 w-auto max-w-[300px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:max-w-[300px] md:h-40 md:max-w-[280px] lg:h-48 lg:max-w-[340px] xl:h-56 xl:max-w-[400px]"
                  : "h-28 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:max-w-[220px] md:h-36 md:max-w-[220px] lg:h-40 lg:max-w-[280px] xl:h-44 xl:max-w-[300px]"
              }
            />
            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 hidden w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-zinc-900/95 p-4 text-sm text-zinc-100 opacity-0 shadow-xl transition-all duration-200 group-focus-within:translate-y-1 group-focus-within:opacity-100 group-hover:translate-y-1 group-hover:opacity-100 md:block">
              <p className="mb-2 font-semibold text-white">
                {sponsor.popoutTitle}
              </p>
              {t(sponsor.descriptionKey as any)}
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-16 mb-10 text-center font-['Marcellus'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {t("sponsors.infoPartners")}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        {partnersData.map((partner) => (
          <div key={partner.name} className="group relative">
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="h-56 w-auto max-w-[400px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-56 sm:max-w-[400px] md:h-56 md:max-w-[400px] lg:h-56 lg:max-w-[400px] xl:h-56 xl:max-w-[400px]"
            />
            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 hidden w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-zinc-900/95 p-4 text-sm text-zinc-100 opacity-0 shadow-xl transition-all duration-200 group-focus-within:translate-y-1 group-focus-within:opacity-100 group-hover:translate-y-1 group-hover:opacity-100 md:block">
              <p className="mb-2 font-semibold text-white">
                {partner.popoutTitle}
              </p>
              {t(partner.descriptionKey as any)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
