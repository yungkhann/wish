import timelineImg1 from "../assets/wish-timeline-1.png";
import timelineImg2 from "../assets/wish-timeline-2.png";
import timelineImg3 from "../assets/wish-timeline-3.png";

const Timeline = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black py-20">
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-20 text-center font-['Cinzel_Decorative'] text-7xl font-bold text-white">
          Timeline
        </h2>

        {/* Timeline Cards */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-24">
          {/* Card 1 - Registration Period */}
          <div className="flex flex-col items-center">
            <img
              src={timelineImg1.src}
              alt="Registration Period"
              className="mb-6 h-80 w-full max-w-[400px] rounded-[20px] object-cover shadow-[5px_5px_80px_0px_rgba(154,68,233,1.00)]"
            />
            <p className="mb-3 text-center font-['Cinzel'] text-4xl font-normal text-purple-500/95 [text-shadow:_0px_0px_4px_rgb(119_22_208_/_1.00)]">
              February 16 - March 11
            </p>
            <p className="text-center font-['Cinzel'] text-4xl font-normal text-white [text-shadow:_0px_0px_3px_rgb(255_255_255_/_1.00)]">
              Registration Period
            </p>
          </div>

          {/* Card 2 - Confirmation Period */}
          <div className="flex flex-col items-center">
            <img
              src={timelineImg2.src}
              alt="Confirmation Period"
              className="mb-6 h-80 w-full max-w-[400px] rounded-[20px] object-cover shadow-[0px_5px_80px_0px_rgba(154,68,233,1.00)]"
            />
            <p className="mb-3 text-center font-['Cinzel'] text-4xl font-normal text-purple-500 [text-shadow:_0px_0px_4px_rgb(119_22_208_/_1.00)]">
              March 11 - 13
            </p>
            <p className="text-center font-['Cinzel'] text-4xl font-normal text-white [text-shadow:_0px_0px_3px_rgb(255_255_255_/_1.00)]">
              Confirmation Period
            </p>
          </div>

          {/* Card 3 - Women's Hack Day */}
          <div className="flex flex-col items-center">
            <img
              src={timelineImg3.src}
              alt="Women's Hack Day"
              className="mb-6 h-80 w-full max-w-[400px] rounded-[20px] object-cover shadow-[0px_5px_80px_0px_rgba(154,68,233,1.00)]"
            />
            <p className="mb-3 text-center font-['Cinzel'] text-4xl font-normal text-purple-500 [text-shadow:_0px_0px_4px_rgb(119_22_208_/_1.00)]">
              March 14 - 15
            </p>
            <p className="text-center font-['Cinzel'] text-4xl font-normal text-white [text-shadow:_0px_0px_3px_rgb(255_255_255_/_1.00)]">
              Women&apos;s Hack Day
            </p>
          </div>
        </div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute right-[150px] bottom-[140px] h-28 w-28 rounded-[50px] bg-indigo-950 blur-[10px]" />
      <div className="absolute right-[165px] bottom-[140px] h-40 w-40 rounded-[50px] bg-gray-900 blur-[100px]" />
    </div>
  );
};

export default Timeline;
