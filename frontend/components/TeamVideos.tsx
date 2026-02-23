import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const videos = [
  "https://youtu.be/WwnTk-EElYM",
  "https://youtu.be/hA10d3ZM7zk",
  "https://youtu.be/gTtkwspT4WI",
  "https://youtu.be/PXQBxInDA74",
  "https://youtu.be/OMl46bChFl8",
];

function getYoutubeEmbed(url: string) {
  const match = url.match(
    /(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/))([\w-]{11})/,
  );
  const id = match ? match[1] : null;
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

const TeamVideos = () => {
  const lang = getLangFromCookieClient();
  const t = useTranslations(lang);

  return (
    <>
      <div className="mx-auto mt-20 flex flex-col items-center bg-black py-20">
        <div className="inline-flex h-auto w-full max-w-4xl flex-col items-center justify-start gap-10 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md bg-linear-to-r from-black/20 via-black/20 to-black/20 px-2 pt-8 pb-10 shadow-[0px_0px_40px_0px_rgba(119,22,208,0.40)] sm:max-w-3xl sm:px-4 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-16 xl:max-w-6xl">
          <h1 className="mt-2 text-center font-['Marcellus'] text-base font-normal tracking-widest text-purple-600 uppercase sm:text-lg md:text-xl lg:text-2xl">
            {t("videos.title")}
          </h1>

          {/* Intro Text */}
          <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
            {t("videos.intro")}
          </div>

          {/* Video Descriptions and Embeds */}
          <div className="flex w-full flex-col gap-12">
            {/* Video 1 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
                <span className="font-bold text-purple-500">
                  {t("videos.video1Title")}
                </span>
                <br />
                {t("videos.video1Desc")}
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[0])}
                  title={t("videos.video1Title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
                <span className="font-bold text-purple-500">
                  {t("videos.video2Title")}
                </span>
                <br />
                {t("videos.video2Desc")}
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[1])}
                  title={t("videos.video2Title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Video 3 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
                <span className="font-bold text-purple-500">
                  {t("videos.video3Title")}
                </span>
                <br />
                {t("videos.video3Desc")}
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[2])}
                  title={t("videos.video3Title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Video 4 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
                <span className="font-bold text-purple-500">
                  {t("videos.video4Title")}
                </span>
                <br />
                {t("videos.video4Desc")}
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[3])}
                  title={t("videos.video4Title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Video 5 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
                <span className="font-bold text-purple-500">
                  {t("videos.video5Title")}
                </span>
                <br />
                {t("videos.video5Desc")}
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[4])}
                  title={t("videos.video5Title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Outro Text */}
          <div className="mt-10 w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
            {t("videos.outro1")}
            <br />
            <span className="font-bold text-purple-500">
              {t("videos.outro2")}
            </span>{" "}
            {t("videos.outro3")}
            <br />
            {t("videos.outro4")}
          </div>

          {/* Footer / Links Section */}
          <div className="mt-8 flex w-full flex-col items-center gap-6">
            <div className="w-full max-w-2xl text-start font-['Marcellus'] text-sm font-normal text-white sm:text-base md:text-lg">
              {t("videos.linksTitle")}:
            </div>
            <div className="w-full max-w-2xl space-y-2 text-start font-['Marcellus'] text-xs font-normal text-white sm:text-sm md:text-base">
              <p>
                <a
                  href="https://education.github.com/pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 underline hover:text-purple-300"
                >
                  {t("videos.link1Title")}
                </a>
                {" - "}
                {t("videos.link1Desc")}
              </p>
              <p>
                <a
                  href="https://cursor.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 underline hover:text-purple-300"
                >
                  {t("videos.link2Cursor")}
                </a>
                {" & "}
                <a
                  href="https://claude.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 underline hover:text-purple-300"
                >
                  {t("videos.link2Claude")}
                </a>
                {" - "}
                {t("videos.link2Desc")}
              </p>
              <p>
                <a
                  href="https://huggingface.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 underline hover:text-purple-300"
                >
                  {t("videos.link3Title")}
                </a>
                {" - "}
                {t("videos.link3Desc")}
              </p>
              <p>
                <a
                  href="https://docs.ultralytics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 underline hover:text-purple-300"
                >
                  {t("videos.link4Title")}
                </a>
                {" - "}
                {t("videos.link4Desc")}
              </p>
              <p>
                <a
                  href="https://fastapi.tiangolo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 underline hover:text-purple-300"
                >
                  {t("videos.link5Title")}
                </a>
                {" - "}
                {t("videos.link5Desc")}
              </p>
              <p>
                <a
                  href="https://docs.github.com/en/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 underline hover:text-purple-300"
                >
                  {t("videos.link6Title")}
                </a>
                {" - "}
                {t("videos.link6Desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamVideos;
