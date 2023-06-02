import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Product from "../Product/Product";
import Button from "../../UI/Button";

const Products = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("firstTab");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://0b40386c-03d9-4e62-91e5-d60c317525b7.mock.pstmn.io/products"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredData =
    activeTab === "firstTab" ? data.slice(0, 3) : data.slice(3);

  return (
    <div className="">
      <div className="container text-center flex flex-col items-center">
        <h1 className="text-4xl text-purple-400 font-primary">Məhsullarımız</h1>
        <p className="font-montserrat text-green-500 mt-4 text-base max-w-[745px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div className="flex gap-5 mt-12 mb-20">
          <Button
            styles={
              activeTab === "firstTab"
                ? "bg-purple-400 hover:bg-purple-400 text-white"
                : "bg-purple-400/10 hover:bg-purple-400/60 hover:text-white transition-all text-purple-400"
            }
            onClick={() => handleTabClick("firstTab")}
          >
            Gübrələr
          </Button>
          <Button
            onClick={() => handleTabClick("secondTab")}
            styles={
              activeTab === "secondTab"
                ? "bg-purple-400 hover:bg-purple-400 text-white"
                : "bg-purple-400/10 hover:bg-purple-400/60 hover:text-white transition-all text-purple-400"
            }
          >
            Bitki mühafizə məhsulları
          </Button>
        </div>
        <div className="flex gap-9 mb-[172px]">
          {loading ? (
            // Display skeleton placeholders while loading
            <>
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
            </>
          ) : (
            // Display products when loaded
            filteredData.map((item, idx) => (
              <Product data={item} key={idx} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const SkeletonProduct = () => {
  return (
    <div className="max-w-[375px]">
      <Skeleton height={200} />
      <Skeleton height={50} width={150} style={{ margin: "10px auto" }} />
    </div>
  );
};

export default Products;
