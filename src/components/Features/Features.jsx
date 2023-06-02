import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Feature } from "../index";
import leaf from "../../assets/img/image.png";
import axios from "axios";

const Features = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://0b40386c-03d9-4e62-91e5-d60c317525b7.mock.pstmn.io/features"
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative">
      <div className="container gap-9 flex mt-24 mb-32 z-50">
        {loading ? (
          <>
            <SkeletonFeature />
            <SkeletonFeature />
            <SkeletonFeature />
          </>
        ) : (
          data.map((item, idx) => <Feature key={idx} data={item} />)
        )}
      </div>
      <img src={leaf} className="absolute left-2/4 -bottom-2/4 z-[5]" alt="" />
    </div>
  );
};

const SkeletonFeature = () => {
  return (
    <div className="flex flex-col max-w-[440px] w-full hover:bg-white gap-[10px] z-50 transition-all px-[30px] first:shadow-shadow text-center justify-center py-[60px] hover:shadow-shadow">
      <div className="text-center mb-[40px] flex justify-center">
        <Skeleton circle={true} height={120} width={120} />
      </div>
      <h1 className="text-green-400 font-primary text-[30px]">
        <Skeleton />
      </h1>
      <p className="font-montserrat leading-5 font-normal">
        <Skeleton count={3} />
      </p>
    </div>
  );
};

export default Features;
