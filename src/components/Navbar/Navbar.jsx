import { useState } from "react";
import { Link } from "react-scroll";
import logoIMG from "../../assets/img/header-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-shadow relative z-30 py-3">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="#" className="text-white font-bold text-xl">
              <img src={logoIMG} />
            </Link>
          </div>
          <div className="font-montserrat flex items-center gap-6 font-semibold text-xs">
            <div
              to="#"
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
              className={`relative flex gap-1 ${
                isDropdownOpen ? "h-14" : ""
              } items-center cursor-pointer`}
            >
              Haqqımızda
              <FontAwesomeIcon fontSize={8} icon={faChevronDown} />
              <div
                className={`absolute bg-white top-[51px] flex-nowrap w-48 shadow-shadow ${
                  isDropdownOpen ? "block" : "hidden"
                } flex flex-col p-5 gap-3 text-base`}
              >
                <Link
                  className="hover:text-green-400 transition-all hover:cursor-pointer"
                  to="#"
                  onClick={toggleDropdown}
                >
                  Saffron Agro MMC
                </Link>
                <Link
                  className="hover:text-green-400 transition-all hover:cursor-pointer"
                  to="#"
                  onClick={toggleDropdown}
                >
                  Rəhbərlik
                </Link>
                <Link
                  className="hover:text-green-400 transition-all hover:cursor-pointer"
                  to="#"
                  onClick={toggleDropdown}
                >
                  İşçilər
                </Link>
                <Link
                  className="hover:text-green-400 transition-all hover:cursor-pointer"
                  to="#"
                  onClick={toggleDropdown}
                >
                  Sifariş
                </Link>
                <Link
                  className="hover:text-green-400 transition-all hover:cursor-pointer"
                  to="#"
                  onClick={toggleDropdown}
                >
                  Daşınma
                </Link>
                <Link
                  className="hover:text-green-400 transition-all hover:cursor-pointer"
                  to="#"
                  onClick={toggleDropdown}
                >
                  Üstünlüklərimiz
                </Link>
              </div>
            </div>
            <Link
              className="hover:border-b-[1.5px] hover:border-green-400 cursor-pointer "
              to="#"
            >
              Məhsullarımız
            </Link>
            <Link
              className="hover:border-b-[1.5px] hover:border-green-400 cursor-pointer "
              to="#"
            >
              Xidmətlərimiz
            </Link>
            <Link
              className="hover:border-b-[1.5px] hover:border-green-400 cursor-pointer "
              to="#"
            >
              Əməkdaşlıq və tərəfdaşlar
            </Link>
            <Link
              className="hover:border-b-[1.5px] hover:border-green-400 cursor-pointer "
              to="#"
            >
              Təlim və tədbirlər
            </Link>
            <Link
              className="hover:border-b-[1.5px] hover:border-green-400 cursor-pointer "
              to="#"
            >
              Xəbərlər
            </Link>
            <Link
              className="hover:border-b-[1.5px] hover:border-green-400 cursor-pointer "
              to="#"
            >
              Qalereya
            </Link>
            <Link
              className="hover:border-b-[1.5px] hover:border-green-400 cursor-pointer "
              to="#"
            >
              Əlaqə
            </Link>
          </div>
          <div className="font-montserrat flex items-center gap-6 font-semibold text-xs">
            <Link to="#">
              Az
              <FontAwesomeIcon fontSize={8} icon={faChevronDown} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
