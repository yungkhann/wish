import chocoLogo from "../assets/choco.png";
import freedomLogo from "../assets/freedom.jpg";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const Sponsors = ({ lang: langProp }: { lang?: Lang }) => {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  return (
    <div id="sponsors" className="flex flex-col items-center py-16">
      <h2 className="mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {t("sponsors.title")}
      </h2>
      <div className="flex flex-row items-center justify-center gap-12">
        <img
          src={chocoLogo.src}
          alt="Choco Logo"
          className="h-24 w-auto object-contain"
        />
        <img
          src={freedomLogo.src}
          alt="Freedom Logo"
          className="h-24 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Sponsors;
