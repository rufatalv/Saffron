import heroBG from "../../assets/img/hero-bg.png";
const Hero = () => {
  return (
    <div className="container relative z-20 mt-8">
      <img src={heroBG} />
      <div className="max-w-[427px] flex gap-3 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-primary text-purple-500 text-5xl">
          Saffron Aqro 
        </h1>
        <p className="text-center font-medium font-montserrat text-base text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s
        </p>
      </div>
    </div>
  );
};

export default Hero;
