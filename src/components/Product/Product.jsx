import React from "react";
import Skeleton from "react-loading-skeleton";

const Product = ({ data, styles }) => {
  return (
    <div
      className={`hover:shadow-shadow transition-all  max-w-[375px] ${styles}`}
    >
      {data ? (
        <>
          <img className="object-cover" src={data.image} alt="" />
          <h1 className="px-[90px] flex justify-center items-center py-5 text-base text-green-500 font-primary">
            {data.name}
          </h1>
        </>
      ) : (
        // Display skeleton for loading state
        <>
          <Skeleton height={250} width={250} />
          <Skeleton height={50} width={150} style={{ margin: "10px auto" }} />
        </>
      )}
    </div>
  );
};

export default Product;
