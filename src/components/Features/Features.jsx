import { useEffect, useState } from "react";
import { Feature } from "../index";
import leaf from "../../assets/img/image.png";
import axios from "axios";

const Features = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://stormy-bonnet-bear.cyclic.app/features")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="relative ">
      <div className="container gap-4 lg:gap-9 flex flex-wrap sm:flex-nowrap mt-24 flex-col md:flex-row px-5 xl:px-0 mb-32 z-50">
        {data.map((item, idx) => (
          <Feature key={idx} data={item} />
        ))}
      </div>
      <img
        src={leaf}
        className="absolute hidden md:block left-2/4 -bottom-2/4 z-[5]"
        alt=""
      />
    </div>
  );
};

export default Features;
