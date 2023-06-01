import React from "react";

const Product = ({ data, styles }) => {
  return (
    <div
      className={`hover:shadow-shadow transition-all  max-w-[375px] ${styles}`}
    >
      <img className="object-cover" src={data.image} alt="" />
      <h1 className="px-[90px] flex justify-center items-center py-5 text-base text-green-500 font-primary">
        {data.name}
      </h1>
    </div>
  );
};

export default Product;
