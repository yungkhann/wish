import chocoLogo from "../assets/choco.png";
import freedomLogo from "../assets/freedom.jpg";

const Sponsors = () => {
  return (
    <div id="sponsors" className="flex flex-col items-center py-16">
      <h2 className="mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:text-6xl">
        Our Sponsors
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
