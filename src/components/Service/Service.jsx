import Skeleton from "react-loading-skeleton";
import Button from "../../UI/Button";
const Service = ({ data }) => {
  return (
    <div className="flex flex-row group even:flex-row-reverse mt-[72px] gap-5 justify-between w-full">
      <div className="w-5/12 text-left flex flex-col justify-center items-start align-center gap-7 max-w-[485px]">
        <h1 className="text-2xl text-purple-400 font-primary">{data.name || <Skeleton />}</h1>
        <p className="text-base text-green-500 font-montserrat leading-6">
          {data.description || <Skeleton />}
        </p>
        <Button
          styles={
            "bg-green-400 py-[14px] px-[56px] hover:bg-green-400/60 inline-block  hover:text-black font-montserrat transition-all text-[15px] text-white"
          }
        >
          Ətraflı
        </Button>
      </div>
      <div className="w-7/12">
        <div className="w-full bg-green-400 h-full">
          <img
            className="object-cover w-full group-even:translate-x-1.5 group-even:translate-y-1.5 group-odd:-translate-x-1.5 group-odd:-translate-y-1.5 h-full"
            src={data.image || <Skeleton />}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
