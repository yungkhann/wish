import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const Benefits = ({ lang: langProp }: { lang?: Lang }) => {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  return (
    <div
      id="benefits"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black py-16 sm:py-20"
    >
      <div className="absolute top-[15%] left-[10%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(91,31,156,0.9)_0%,rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />
      <div className="absolute top-[15%] right-[15%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(91,31,156,0.9)_0%,rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />
      <div className="absolute bottom-[15%] left-[10%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(91,31,156,0.9)_0%,rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />
      <div className="absolute right-[15%] bottom-[15%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(91,31,156,0.9)_0%,rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-['Marcellus'] text-4xl font-bold text-white sm:mb-16 sm:text-5xl lg:text-6xl">
          {t("benefits.title")}
        </h2>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:max-w-6xl sm:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {([1, 2, 3, 4, 5, 6, 7, 8] as const).map((n) => {
            const isOdd = n % 2 === 1;
            const useRoundedDown = n === 3 || n === 4 || n === 7 || n === 8;
            const base =
              "flex h-auto min-h-[100px] items-center justify-center rounded-2xl bg-linear-to-r from-black/20 via-black/20 to-black/20 px-4 py-5 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-36 sm:px-12 sm:py-0 lg:h-44";
            const roundedUp = isOdd
              ? "md:rounded-tl-lg md:rounded-tr-[60px] md:rounded-br-lg md:rounded-bl-[60px]"
              : "md:rounded-tl-[60px] md:rounded-tr-lg md:rounded-br-[60px] md:rounded-bl-lg";
            const roundedDown = isOdd
              ? "md:rounded-tl-[60px] md:rounded-tr-lg md:rounded-br-[60px] md:rounded-bl-lg"
              : "md:rounded-tl-lg md:rounded-tr-[60px] md:rounded-br-lg md:rounded-bl-[60px]";
            return (
              <div
                key={n}
                className={`${base} ${useRoundedDown ? roundedDown : roundedUp}`}
              >
                <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:0px_4px_15px_rgb(255_255_255_1.00)] sm:text-[18px] lg:text-[20px]">
                  {t(`benefits.card${n}`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
