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

          {/* Intro Text */}
          <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
            These videos were prepared by the NU DataSci Club to help you master
            the essentials before you start. Learn the best tips and strategies
            to build a great project and get ready for the hackathon.
          </div>

          {/* Video Descriptions and Embeds */}
          <div className="flex w-full flex-col gap-12">
            {/* Video 1 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
                <span className="font-bold text-purple-500">
                  How to Win a Hackathon
                </span>
                <br />
                The first video explains how to navigate the full hackathon
                process, from forming a small, effective team to delivering a
                winning 3-minute pitch. You will learn how to focus on a working
                demo rather than technical complexity and how to confidently
                handle the judges' Q&A session.
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[0])}
                  title="How to Win a Hackathon"
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
                  Working with AI Agents as an Architect
                </span>
                <br />
                This video introduces "Vibe Coding," where you act as a system
                architect by designing logic and creating clear technical tasks
                for AI. You will learn how to efficiently fix bugs by finding
                their root cause and guiding AI agents to the right solution.
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[1])}
                  title="Working with AI Agents as an Architect"
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
                  Effective Workflow & Toolset
                </span>
                <br />
                Now, you will understand how to work faster by using AI agents
                like Cursor or Claude for code generation and analysis. You will
                learn how to choose the right tech stack (React, FastAPI,
                PyTorch) and why it is better to focus on a working prototype
                rather than overcomplicating the project with unnecessary
                features.
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[2])}
                  title="Effective Workflow & Toolset"
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
                  Pretrained Models for Rapid Prototyping
                </span>
                <br />
                Let`s look at why using pretrained models is the best strategy
                for a hackathon to save time and get better results. You will
                learn about popular models for different tasks and see a real
                example of how to quickly fine-tune a model to create a
                high-quality demo.
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[3])}
                  title="Pretrained Models for Rapid Prototyping"
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
                  Version Control with Git
                </span>
                <br />
                Finally, we will show how to use GitHub to keep your project
                safe and work effectively in a team. You will learn how to save
                working versions of your code, use branches for experiments, and
                resolve conflicts when merging your team's changes together.
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-2.5">
                <iframe
                  className="aspect-video w-full max-w-3xl rounded-xl bg-black"
                  src={getYoutubeEmbed(videos[4])}
                  title="Version Control with Git"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Outro Text */}
          <div className="mt-10 w-full max-w-2xl px-2 text-justify font-['Marcellus'] text-base text-white md:text-lg lg:text-xl">
            That’s it for our video series! We hope these lessons help you
            navigate the hackathon with confidence. Focus on building a
            presentable prototype, stay aligned with the task requirements, and
            use AI as your main superpower to speed up development.
            <br />
            <span className="font-bold text-purple-500">
              DON'T JUST WISH. BUILD IT.
            </span>{" "}
            This is your moment to turn inspiration into impact and code into
            reality. We can’t wait to see the incredible projects you’ll bring
            to life. Believe in your vision, trust your team, and make it
            happen.
            <br />
            Good luck - we’ll see you at WISH!
          </div>

          {/* Footer / Links Section */}
          <div className="mt-8 flex w-full flex-col items-center gap-6">
            <div className="w-full max-w-2xl text-center font-['Marcellus'] text-sm font-normal text-white sm:text-base md:text-lg">
              Useful Links:
            </div>
            <div className="w-full max-w-2xl space-y-2 text-center font-['Marcellus'] text-xs font-normal text-purple-500 sm:text-sm md:text-base">
              <p>
                <a
                  href="https://education.github.com/pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-purple-300"
                >
                  GitHub Student Developer Pack - Get free access to GitHub
                  Copilot Pro and other premium developer tools.
                </a>
              </p>
              <p>
                <a
                  href="https://cursor.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-purple-300"
                >
                  Cursor - The most effective AI code editor for rapid
                  development.
                </a>
              </p>
              <p>
                <a
                  href="https://claude.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-purple-300"
                >
                  Claude - Powerful AI agent for code generation and analysis.
                </a>
              </p>
              <p>
                <a
                  href="https://huggingface.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-purple-300"
                >
                  Hugging Face - The go-to platform for finding pretrained
                  models (Text, Image, Audio) to jumpstart your prototype.
                </a>
              </p>
              <p>
                <a
                  href="https://docs.ultralytics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-purple-300"
                >
                  YOLO by Ultralytics - A powerful tool for quick object
                  detection and computer vision tasks.
                </a>
              </p>
              <p>
                <a
                  href="https://fastapi.tiangolo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-purple-300"
                >
                  FastAPI Documentation - A fast and modern framework for
                  building your project's backend.
                </a>
              </p>
              <p>
                <a
                  href="https://docs.github.com/en/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-purple-300"
                >
                  Git & GitHub Guide - Master branching and version control to
                  collaborate without losing your code.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamVideos;
