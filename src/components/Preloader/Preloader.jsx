import React from "react";
import preloaderIMG from "../../assets/img/header-logo.png";
const Preloader = ({ isLoading }) => {
  return (
    <div
      className={`h-screen w-full transition-all duration-1000 ease-out ${
        !isLoading && "-translate-y-[1200px]"
      } fixed z-[9999] bg-green-400`}
    >
      <div className="relative w-full h-full">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 rounded-full"
          src={preloaderIMG}
        />
      </div>
    </div>
  );
};

export default Preloader;
