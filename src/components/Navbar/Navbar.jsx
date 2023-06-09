import { useState } from "react";
import { Link } from "react-scroll";
import logoIMG from "../../assets/img/header-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  return (
    <nav className="hidden fixed top-0 w-full lg:block shadow-shadow bg-white z-[400] py-3">
      <div className="px-4xl:px-0 xl:container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="#" className="text-white font-bold text-xl">
              <img src={logoIMG} />
            </Link>
          </div>
          <div className="font-montserrat flex items-center gap-2 xl:gap-6 font-semibold text-xs">
            <NavLink
              offset={-200}
              links={[
                { title: "Saffron Agro MMC", to: "" },
                { title: "Rəhbərlik", to: "" },
                { title: "İşçilər", to: "" },
                { title: "Sifariş", to: "" },
                { title: "Daşınma", to: "" },
                { title: "Üstünlüklərimiz", to: "" },
              ]}
            >
              Haqqımızda
            </NavLink>
            <NavLink
              offset={-100}
              links={[
                { title: "Saffron Agro MMC", to: "" },
                { title: "Rəhbərlik", to: "" },
                { title: "İşçilər", to: "" },
                { title: "Sifariş", to: "" },
                { title: "Daşınma", to: "" },
                { title: "Üstünlüklərimiz", to: "" },
              ]}
              to={"products"}
            >
              Məhsullarımız
            </NavLink>
            <NavLink
              offset={-50}
              links={[
                { title: "Saffron Agro MMC", to: "" },
                { title: "Rəhbərlik", to: "" },
                { title: "İşçilər", to: "" },
                { title: "Sifariş", to: "" },
                { title: "Daşınma", to: "" },
                { title: "Üstünlüklərimiz", to: "" },
              ]}
              to={"services"}
            >
              Xidmətlərimiz
            </NavLink>
            <NavLink>Əməkdaşlıq və tərəfdaşlar</NavLink>
            <NavLink>Təlim və tədbirlər</NavLink>
            <NavLink>Xəbərlər</NavLink>
            <NavLink>Qalereya</NavLink>
            <NavLink>Əlaqə</NavLink>
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