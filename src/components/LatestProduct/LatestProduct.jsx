import React from "react";
import Button from "../../UI/Button";

const LatestProduct = ({ data }) => {
  return (
    <div className="max-w-[315px] shadow-shadow flex flex-col p-8 items-center relative">
      <img className="relative -top-36 basis-1/3" src={data.image} alt="" />
      <div className="flex flex-col basis-2/3">
        <h2 className="font-primary text-purple-400 text-2xl mb-[10px]">
          {data.name}
        </h2>
        <p className="font-montserrat text-[13px] text-green-500">
          {data.description}
        </p>
        <Button styles="text-white inline-block bg-green-400">Ətraflı</Button>
      </div>
    </div>
  );
};

export default LatestProduct;
