import { useEffect, useState } from "react";
import { Feature } from "../index";
import leaf from "../../assets/img/image.png";
import axios from "axios";
const Features = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://0b40386c-03d9-4e62-91e5-d60c317525b7.mock.pstmn.io/features"
      )
      .then((response) => setData(response.data));
  }, []);
  return (
    <div className="relative">
      <div className="container gap-9 flex mt-24 mb-32 z-50">
        {data.map((item, idx) => (
          <Feature key={idx} data={item} />
        ))}
      </div>
      <img src={leaf} className="absolute left-2/4 -bottom-2/4 z-[5]" alt="" />
    </div>
  );
};

export default Features;
