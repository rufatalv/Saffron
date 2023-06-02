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
        "https://0b40386c-03d9-4e62-91e5-d60c317525b7.mock.pstmn.io/latestproducts"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <div
      className="container text-center mt-[120px] mb-28 w-full flex flex-col items-center"
      id="latestProducts"
    >
      <h1 className="text-[35px] text-purple-400 font-primary mb-4">
        Son əlavə edilən məhsullar
      </h1>
      <p className="text-green-500 font-montserrat text-base max-w-[420px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="flex gap-5 mt-[70px]">
        {data.map((item, idx) => (
          <LatestProduct key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
