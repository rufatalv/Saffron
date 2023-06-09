import heroBG from "../../assets/img/hero-bg.png";
const Hero = () => {
  return (
    <div
      className="container relative px-5 xl:px-0 z-20 mt-24 lg:mt-32"
      id="hero"
    >
      <div className="h-72 w-auto md:h-auto">
        <img className="object-cover h-full" src={heroBG} />
      </div>
      <div className="max-w-[427px] flex gap-8 md:gap-3 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-primary text-purple-500 text-xl sm:text-3xl md:text-5xl">
          Saffron Aqro
        </h1>
        <p className="text-center font-medium font-montserrat text-sm md:text-base text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s
        </p>
      </div>
    </div>
  );
};

export default Hero;
