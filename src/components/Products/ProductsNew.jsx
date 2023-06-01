import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import { Product } from "../index";
const Products = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("firstTab");
  const fetchData = () => {
    fetch("https://0b40386c-03d9-4e62-91e5-d60c317525b7.mock.pstmn.io/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const filteredData = data.slice(0, 3);
  const handleTabClick = (tab) => {
    console.log(tab);
  };
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
            styles={"bg-purple-400 hover:bg-purple-400 text-white"}
            onClick={handleTabClick("firstTab")}
          >
            Gübrələr
          </Button>
          <Button
            onClick={handleTabClick("secondTab")}
            styles={
              "bg-purple-400/10 hover:bg-purple-400/60 hover:text-white transition-all text-purple-400"
            }
          >
            Bitki mühafizə məhsulları
          </Button>
        </div>
        <div className="flex gap-9 mb-[172px]">
          {filteredData.map((item, idx) => (
            <Product data={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
