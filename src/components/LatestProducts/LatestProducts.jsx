import axios from "axios";
import { useEffect, useState } from "react";
import LatestProduct from "../LatestProduct/LatestProduct";

const LatestProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://stormy-bonnet-bear.cyclic.app/productslatest"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <div
      className="container text-center mt-[120px] mb-28 px-5 xl:px-0 w-full flex flex-col items-center"
      id="latestProducts"
    >
      <h1 className="lg:text-[35px] text-3xl text-purple-400 font-primary mb-4">
        Son əlavə edilən məhsullar
      </h1>
      <p className="text-green-500 font-montserrat text-base max-w-[420px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="flex gap-20 xl:gap-5 mt-[110px] xl:flex-nowrap flex-wrap justify-center align-middle items-center">
        {data.map((item, idx) => (
          <LatestProduct key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
