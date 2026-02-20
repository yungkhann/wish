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
  return (
    <>
      <div className="mx-auto mt-20 flex flex-col items-center bg-black py-20">
        <div className="inline-flex h-auto w-full max-w-4xl flex-col items-center justify-start gap-10 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-2 pt-8 pb-10 shadow-[0px_0px_40px_0px_rgba(119,22,208,0.40)] sm:max-w-3xl sm:px-4 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-16 xl:max-w-6xl">
          <h1 className="mt-2 text-center font-['Marcellus'] text-base font-normal tracking-widest text-purple-600 uppercase sm:text-lg md:text-xl lg:text-2xl">
            Team Videos
          </h1>

          {videos.map((url, idx) => (
            <div key={url} className="flex w-full flex-col items-center gap-8">
              {/* Description Text Block */}
              <div className="w-full max-w-2xl px-2 text-justify">
                <span className="font-['Marcellus'] text-sm font-normal text-purple-600 sm:text-base md:text-lg lg:text-xl">
                  Team Project {idx + 1}
                </span>
                <span className="font-['Marcellus'] text-sm font-normal text-white sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  is a result of the 24-hour Women in STEM Hackathon, where
                  participants collaborated on real-world challenges in
                </span>
                <span className="font-['Marcellus'] text-sm font-normal text-purple-600 sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  Data Analytics and AI.
                </span>
                <span className="font-['Marcellus'] text-sm font-normal text-white sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  This video showcases their innovative solution and technical
                  pitch developed during the competition.
                </span>
              </div>

              {/* Video Media Block with White Outline */}
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(url)}
                  title={`Team Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}

          {/* Footer / Links Section */}
          <div className="mt-8 flex w-full flex-col items-center gap-6">
            <div className="w-full max-w-2xl text-center font-['Marcellus'] text-sm font-normal text-white sm:text-base md:text-lg">
              Useful Links:
            </div>
            <div className="w-full max-w-2xl space-y-2 text-center font-['Marcellus'] text-xs font-normal text-purple-500 sm:text-sm md:text-base">
              <p>Official Documentation</p>
              <p>GitHub Repository</p>
              <p>Submission Portal</p>
              <p>Event Gallery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamVideos;
