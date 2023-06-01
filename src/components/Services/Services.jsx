import leaf2 from "../../assets/img/image-2.png";
const Services = () => {
  return (
    <div className="text-center flex-col items-center relative container flex mt-24 mb-32 z-50">
      <h1 className="text-4xl text-purple-400 font-primary">Xidmətlərimiz</h1>
      <p className="font-montserrat text-green-500 mt-4 text-base max-w-[420px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <img src={leaf2} className="absolute right-2/4 -bottom-2/4 z-10" alt="" />
    </div>
  );
};

export default Services;
