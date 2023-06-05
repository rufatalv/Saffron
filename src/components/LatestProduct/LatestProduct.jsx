import React from "react";
import Button from "../../UI/Button";

const LatestProduct = ({ data }) => {
  return (
    <div className="max-w-[315px] shadow-shadow group transition-all duration-200 ease-in-out flex flex-col p-8 align-middle justify-center items-center relative">
      <img className="relative -top-36 basis-1/3" src={data.image} alt="" />
      <div className="flex flex-col align-middle justify-center items-center basis-2/3 -mt-40">
        <h2 className="font-primary text-purple-400 text-2xl mb-[10px]">
          {data.name}
        </h2>
        <p className="font-montserrat text-[13px] text-green-500">
          {data.description}
        </p>
        <Button styles="text-white py-[10px] px-[60px] border-[1px] hover:bg-white hover:text-green-400 hover:border-green-400 transition-all duration-500 ease-in-out inline-block mt-[30px] bg-green-400">
          Ətraflı
        </Button>
      </div>
    </div>
  );
};

export default LatestProduct;
