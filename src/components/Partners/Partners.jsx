import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import partnersData from "./partners.json";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Initialize Swiper
SwiperCore.use([]);

const Partners = () => {
  return (
    <div className="bg-[#FFFAFD] py-[100px] px-5 xl:px-0" id="partners">
      <div className="container text-center  flex-col justify-center">
        <h1 className="text-4xl text-purple-400 font-primary">
          Əməkdaşlarımız
        </h1>
        <p className="font-montserrat text-green-500 mt-4 mb-12 text-base">
          Onlar bizi dəstəkləyirlər
        </p>
        <Swiper
          className="mt-16 mb-12"
          spaceBetween={50}
          slidesPerView={10}
          loopedSlides={10}
          breakpoints={{
            320: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 10,
            },
          }}
        >
          {partnersData.map((data) => (
            <SwiperSlide key={data.id}>
              <img src={data.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <a className="border-green-400 border-b-[1px] cursor-pointer text-green-400 font-montserrat text-[13px] font-medium">
          Hamısına bax
        </a>
      </div>
    </div>
  );
};

export default Partners;
