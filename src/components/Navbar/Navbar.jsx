import { useState } from "react";
import { Link } from "react-scroll";
import logoIMG from "../../assets/img/header-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import NavLink from "../NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
            <NavLink
              title="Haqqimizda"
              links={[
                {
                  to: "#",
                  title: "Saffron Agro MMC",
                },
                { title: "Rəhbərlik", to: "#" },
                { title: "İşçilər", to: "#" },
                { title: "Sifariş", to: "#" },
                { title: "Daşınma", to: "#" },
                { title: "Üstünlüklərimiz", to: "#" },
              ]}
            />
            <NavLink
              title="Məhsullarımız"
              links={[
                {
                  to: "#",
                  title: "Saffron Agro MMC",
                },
                { title: "Rəhbərlik", to: "#" },
                { title: "İşçilər", to: "#" },
                { title: "Sifariş", to: "#" },
                { title: "Daşınma", to: "#" },
                { title: "Üstünlüklərimiz", to: "#" },
              ]}
            />
            <NavLink
              title="Xidmətlərimiz"
              links={[
                {
                  to: "#",
                  title: "Saffron Agro MMC",
                },
                { title: "Rəhbərlik", to: "#" },
                { title: "İşçilər", to: "#" },
                { title: "Sifariş", to: "#" },
                { title: "Daşınma", to: "#" },
                { title: "Üstünlüklərimiz", to: "#" },
              ]}
              to="#"
            />
            <NavLink
              title="Əməkdaşlıq və tərəfdaşlar"
              links={[
                {
                  to: "#",
                  title: "Saffron Agro MMC",
                },
                { title: "Rəhbərlik", to: "#" },
                { title: "İşçilər", to: "#" },
                { title: "Sifariş", to: "#" },
                { title: "Daşınma", to: "#" },
                { title: "Üstünlüklərimiz", to: "#" },
              ]}
              to="#"
            />
            <NavLink title="Təlim və tədbirlər" to="#" />
            <NavLink title="Xəbərlər" to="#" />
            <NavLink title="Qalereya" to="#" />
            <NavLink title="Əlaqə" to="#" />
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
