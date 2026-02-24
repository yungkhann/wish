import timelineImg1 from "../assets/wish-timeline-1.png";
import timelineImg2 from "../assets/wish-timeline-2.png";
import timelineImg3 from "../assets/wish-timeline-3.png";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const Timeline = ({ lang: langProp }: { lang?: Lang }) => {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black py-20">
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-10 text-center font-['Marcellus'] text-4xl font-bold text-white sm:mb-14 sm:text-5xl lg:mb-20 lg:text-6xl">
          {t("timeline.title")}
        </h2>

        {/* Timeline Cards */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3 md:gap-16 lg:gap-24">
          {/* Card 1 - Registration Period */}
          <div className="flex flex-col items-center">
            <img
              src={timelineImg1.src}
              alt={t("timeline.label1")}
              className="mb-6 h-72 w-full max-w-[400px] rounded-[20px] object-cover shadow-[8px_8px_80px_0px_rgba(154,68,233,1)]"
            />
            <p className="mb-3 max-w-[320px] text-center font-['Marcellus'] text-xl font-normal text-purple-500/95 [text-shadow:_0px_0px_4px_rgb(119_22_208_/_1.00)] sm:text-2xl lg:text-2xl">
              {t("timeline.date1")}
            </p>
            <p className="max-w-[320px] text-center font-['Marcellus'] text-xl font-normal text-white [text-shadow:_0px_0px_3px_rgb(255_255_255_/_1.00)] sm:text-2xl lg:text-2xl">
              {t("timeline.label1")}
            </p>
          </div>

          {/* Card 2 - Confirmation Period */}
          <div className="flex flex-col items-center">
            <img
              src={timelineImg2.src}
              alt={t("timeline.label2")}
              className="mb-6 h-72 w-full max-w-[400px] rounded-[20px] object-cover shadow-[0px_8px_120px_0px_rgba(154,68,233,0.7)]"
            />
            <p className="mb-3 max-w-[320px] text-center font-['Marcellus'] text-xl font-normal text-purple-500 [text-shadow:_0px_0px_4px_rgb(119_22_208_/_1.00)] sm:text-2xl lg:text-2xl">
              {t("timeline.date2")}
            </p>
            <p className="max-w-[320px] text-center font-['Marcellus'] text-xl font-normal text-white [text-shadow:_0px_0px_3px_rgb(255_255_255_/_1.00)] sm:text-2xl lg:text-2xl">
              {t("timeline.label2")}
            </p>
          </div>

          {/* Card 3 - Women's Hack Day */}
          <div className="flex flex-col items-center">
            <img
              src={timelineImg3.src}
              alt={t("timeline.label3")}
              className="mb-6 h-72 w-full max-w-[400px] rounded-[20px] object-cover shadow-[0px_8px_120px_0px_rgba(154,68,233,0.7)]"
            />
            <p className="mb-3 max-w-[320px] text-center font-['Marcellus'] text-xl font-normal text-purple-500 [text-shadow:_0px_0px_4px_rgb(119_22_208_/_1.00)] sm:text-2xl lg:text-2xl">
              {t("timeline.date3")}
            </p>
            <p className="max-w-[320px] text-center font-['Marcellus'] text-xl font-normal text-white [text-shadow:_0px_0px_3px_rgb(255_255_255_/_1.00)] sm:text-2xl lg:text-2xl">
              {t("timeline.label3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
