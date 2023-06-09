import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import Button from "../../UI/Button";

const Products = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("firstTab");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://stormy-bonnet-bear.cyclic.app/products"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredData =
    activeTab === "firstTab" ? data.slice(0, 3) : data.slice(3);

  return (
    <div className="" id="products">
      <div className="container relative z-[70] text-center flex flex-col items-center px-5 xl:px-0">
        <h1 className="lg:text-4xl text-3xl text-purple-400 font-primary">Məhsullarımız</h1>
        <p className="font-montserrat text-green-500 mt-4 text-sm lg:text-base lg:max-w-[745px]">
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
        <div className="flex gap-4 justify-center flex-wrap xl:flex-nowrap mb-[172px]">
          {filteredData &&
            filteredData.map((item, idx) => <Product data={item} key={idx} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
