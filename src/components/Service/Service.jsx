import Button from "../../UI/Button";
const Service = ({ data }) => {
  return (
    <div className="flex md:flex-row group md:even:flex-row-reverse even:flex-col md:odd:flex-row flex-col mt-[72px] gap-10 justify-between w-full">
      <div className="md:w-5/12 text-left flex flex-col justify-center items-start align-center gap-7 max-w-[485px]">
        <h1 className="text-xl lg:text-2xl text-purple-400 font-primary">
          {data.name}
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-green-500 font-montserrat md:leading-4 lg:leading-6">
          {data.description}
        </p>
        <Button
          styles={
            "bg-green-400 border-green-400 py-[13px] px-[56px] inline-block hover:bg-white hover:text-green-400 border-[1px] transition-all duration-500 ease-in-out font-montserrat transition-all text-[15px] text-white"
          }
        >
          Ətraflı
        </Button>
      </div>
      <div className="md:w-7/12">
        <div className="w-full bg-green-400 h-full">
          <img
            className="object-cover w-full md:group-even:translate-x-1.5 md:group-even:translate-y-1.5 md:group-odd:-translate-x-1.5 md:group-odd:-translate-y-1.5 h-full"
            src={data.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
