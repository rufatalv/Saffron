import React from "react";
import footerLOGO from "../../assets/img/footer-logo.png";
import footerTree from "../../assets/img/footer-tree.png";
import footerTree2 from "../../assets/img/footer-tree2.png";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      className="shadow-[0px_-5px_10px_rgba(173,173,173,0.25)] overflow-hidden relative px-5 xl:px-0 pt-[72px]"
      id="footer"
    >
      <img
        className="absolute hidden z-10 md:block left-[65%]"
        src={footerTree}
        alt=""
      />
      <img
        className="absolute hidden z-10 md:block left-[25%]"
        src={footerTree2}
        alt=""
      />
      <div className="container relative z-20 flex flex-col md:flex-row lg:gap-32">
        <div className="flex flex-col basis-3/5 lg:basis-auto justify-between md:justify-start items-start max-w-[418px] text-sm lg:text-base text-green-500 font-opensans">
          <img src={footerLOGO} className="mb-5" alt="" />
          <p className="mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="flex flex-col gap-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry(adres)
            </p>
            <div className="flex flex-col gap-[10px]">
              <a href="#">+994 50 123 45 67</a>
              <a href="#">+994 70 123 45 67</a>
            </div>
            <a href="#">info@dafronagro.com</a>
          </div>
        </div>
        <div className="flex lg:gap-32">
          <div className="basis-2/4 lg:basis-auto">
            <h1 className="font-opensans text-sm lg:text-base text-green-500 font-semibold">
              Menu
            </h1>
            <ul className="font-opensans text-sm lg:text-base flex flex-col gap-4 mt-9 text-green-500">
              <li className="cursor-pointer">
                <Link to="about" smooth="true">
                  Haqqımızda
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="products" smooth="true">
                  Məhsullarımız
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="services" smooth="true">
                  Xidmətlərimiz
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="partners" smooth="true">
                  Əməkdaşlıq və tərəfdaşlar
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="#">Təlim və tədbirlər</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="news">Xəbərlər</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="gallery">Qalereya</Link>
              </li>
              <li className="cursor-pointer">
                <Link>Əlaqə</Link>
              </li>
            </ul>
          </div>
          <div className="basis-2/4 lg:basis-auto">
            <h1 className="font-opensans text-sm lg:text-base text-green-500 font-semibold">
              Praktik məlumatlar
            </h1>
            <ul className="font-opensans text-sm lg:text-base flex flex-col gap-4 mt-9 mb-[54px] text-green-500">
              <li className="cursor-pointer">Gübrələr</li>
              <li className="cursor-pointer">Bitki mühafizə məhsulları</li>
              <li className="cursor-pointer">Aqronom məsləhəti</li>
              <li className="cursor-pointer">Aqronom təlimləri</li>
              <li className="cursor-pointer">Təcrübə proqramı</li>
            </ul>
            <div>
              <div className="text-sm lg:text-base font-opensans text-green-500 font-semibold mb-[21px]">
                Bizi izlə:
              </div>
              <ul className="flex gap-[22px] text-sm lg:text-base text-purple-400">
                <li className="cursor-pointer">
                  <Link to="#">
                    <FontAwesomeIcon fontSize={18} icon={faYoutube} />
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="#">
                    <FontAwesomeIcon fontSize={18} icon={faEnvelope} />
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="#">
                    <FontAwesomeIcon fontSize={18} icon={faFacebookF} />
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="#">
                    <FontAwesomeIcon fontSize={18} icon={faInstagram} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="font-primary py-[30px] mt-[80px] container flex justify-between border-t-[1px] border-green-400 text-xs text-green-500">
        <li>© 2022 Safron Aqro</li>
        <li>Müəllif hüquqları qorunur</li>
        <li>Site by: JedAi</li>
      </ul>
    </div>
  );
};

export default Footer;
