const Benefits = () => {
  return (
    <div
      id="benefits"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black py-16 sm:py-20"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-[15%] left-[10%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />
      <div className="absolute top-[15%] right-[15%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />
      <div className="absolute bottom-[15%] left-[10%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />
      <div className="absolute right-[15%] bottom-[15%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(91,31,156,0.9)_0%,_rgba(0,0,0,0.9)_100%)] opacity-50 blur-[32px] sm:h-[638px] sm:w-[638px] sm:blur-[52.5px]" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Title */}
        <h2 className="mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:mb-16 sm:text-5xl lg:text-6xl">
          Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:max-w-6xl sm:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Benefit 1 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tr-[60px] sm:rounded-bl-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              Preparation tips video lessons after registration
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tl-[60px] sm:rounded-br-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              Hands-on experience in Data Science, ML & AI
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tl-[60px] sm:rounded-br-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              1 200 000 ₸ Prize Fund and Exclusive Merchandise
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tr-[60px] sm:rounded-bl-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              Welcome Package for the first 50 participants
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tl-[60px] sm:rounded-br-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              Career opportunities as ML Engineers
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tr-[60px] sm:rounded-bl-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              Coffee Breaks & Engaging Activities
            </p>
          </div>

          {/* Benefit 7 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tl-[60px] sm:rounded-br-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              New technical skills & real teamwork experience
            </p>
          </div>

          {/* Benefit 8 */}
          <div className="flex h-auto min-h-[130px] items-center justify-center rounded-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-4 py-6 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:h-44 sm:rounded-tr-[60px] sm:rounded-bl-[60px] sm:px-12 sm:py-0 lg:h-52">
            <p className="text-center font-['Marcellus'] text-[15px] font-normal text-white [text-shadow:_0px_4px_15px_rgb(255_255_255_/_1.00)] sm:text-[20px] lg:text-[23px]">
              Certificates of Participation for every participant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
