import { useEffect, useState } from "react";
import leaf2 from "../../assets/img/image-2.png";
import Service from "../Service/Service";
import axios from "axios";
const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://0b40386c-03d9-4e62-91e5-d60c317525b7.mock.pstmn.io/services"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <div className="text-center flex-col items-center relative container max-w-[1172px] flex mt-24 mb-32 z-50">
      <h1 className="text-4xl text-purple-400 font-primary">Xidmətlərimiz</h1>
      <p className="font-montserrat text-green-500 mt-4 text-base max-w-[420px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      {/* <img src={leaf2} className="absolute right-2/4 -bottom-2/4 z-10" alt="" /> */}
      {data.map((item, idx) => (
        <Service key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Services;
