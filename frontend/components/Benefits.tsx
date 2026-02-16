import bgBenefits from "../assets/bg-benefits.png";

const Benefits = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Image */}
      <img
        src={bgBenefits.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      {/* Gradient Blobs */}
      <div className="absolute top-[15%] left-[10%] h-[638px] w-[638px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[52.5px]" />
      <div className="absolute top-[15%] right-[15%] h-[638px] w-[638px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[52.5px]" />
      <div className="absolute bottom-[15%] left-[10%] h-[638px] w-[638px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[52.5px]" />
      <div className="absolute right-[15%] bottom-[15%] h-[638px] w-[638px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[52.5px]" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-16 text-center font-['Cinzel_Decorative'] text-7xl font-bold text-white">
          Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Benefit 1 */}
          <div className="flex h-60 items-center justify-center rounded-tl-[60px] rounded-tr-lg rounded-br-[60px] rounded-bl-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-12 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)]">
            <p className="text-center font-['Marcellus'] text-5xl font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)]">
              Hands-on experience in ML, AI, and data analytics
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex h-60 items-center justify-center rounded-tl-[60px] rounded-tr-lg rounded-br-[60px] rounded-bl-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-12 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)]">
            <p className="text-center font-['Marcellus'] text-5xl font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)]">
              New technical skills and real-world teamwork experience
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex h-60 items-center justify-center rounded-tl-lg rounded-tr-[60px] rounded-br-lg rounded-bl-[60px] bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-12 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)]">
            <p className="text-center font-['Marcellus'] text-5xl font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)]">
              Cash prizes and merchandise
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex h-60 items-center justify-center rounded-tl-lg rounded-tr-[60px] rounded-br-lg rounded-bl-[60px] bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-12 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)]">
            <p className="text-center font-['Marcellus'] text-5xl font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)]">
              Coffee breaks, a photobooth, and engaging activities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
