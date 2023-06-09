import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar = () => {
  return (
    <div className="bg-green-400 hidden z-20 relative font-montserrat font-semibold text-xs lg:block text-white">
      <div className="container flex w-full py-3 px-[24px] lg:px-0">
        <div className="flex gap-2 hover:cursor-pointer basis-4/12 lg:basis-3/12 items-center">
          <FontAwesomeIcon fontSize={"16px"} icon={faLocationDot} />
          Məhsullarımızı haradan almaq olar?
        </div>
        <div className="flex gap-2 hover:cursor-pointer basis-4/12 lg:basis-4/12 items-center">
          <FontAwesomeIcon fontSize={"16px"} icon={faPhone} />
          Bizimlə əlaqə saxlayın
        </div>
        <div className="flex gap-3 basis-4/12 lg:basis-4/12 justify-end items-center">
          Bizi izlə:
          <div className="flex gap-4 hover:cursor-pointer items-center">
            <FontAwesomeIcon
              className="hover:text-purple-400 transition-all"
              fontSize={"16px"}
              icon={faYoutube}
            />
            <FontAwesomeIcon
              className="hover:text-purple-400 transition-all"
              fontSize={"16px"}
              icon={faEnvelope}
            />
            <FontAwesomeIcon
              className="hover:text-purple-400 transition-all"
              fontSize={"16px"}
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="hover:text-purple-400 transition-all"
              fontSize={"16px"}
              icon={faInstagram}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
