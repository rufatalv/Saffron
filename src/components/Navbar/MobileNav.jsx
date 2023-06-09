import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoIMG from "../../assets/img/header-logo.png";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavLinkMobile from "../NavLink/NavLinkMobile";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOpen = () => {
    console.log(isNavOpen);
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="shadow-shadow fixed lg:hidden top-0 w-full bg-white z-[400]">
      <div className="wrapper relative">
        <div className="container px-5 flex items-center justify-between py-2 md:px-2">
          <img src={logoIMG} alt="" />
          <button className="flex items-center" onClick={handleNavOpen}>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className="text-green-500 text-2xl"
            />
          </button>
        </div>
        <div
          className={`absolute w-2/3 h-screen z-[500] transition-all duration-700 ease-in-out shadow-shadow flex flex-col p-9 bg-green-500 top-0 ${
            isNavOpen ? "right-0" : "right-[-200%]"
          }`}
        >
          <button
            className="flex self-end items-center"
            onClick={handleNavOpen}
          >
            <FontAwesomeIcon icon={faXmark} className="text-white text-3xl" />
          </button>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLinkMobile
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
              </NavLinkMobile>
            </li>
            <li>
              <NavLinkMobile
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
              </NavLinkMobile>
            </li>
            <li>
              <NavLinkMobile
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
              </NavLinkMobile>
            </li>
            <li>
              <NavLinkMobile>Əməkdaşlıq və tərəfdaşlar</NavLinkMobile>
            </li>
            <li>
              <NavLinkMobile>Təlim və tədbirlər</NavLinkMobile>
            </li>
            <li>
              <NavLinkMobile>Xəbərlər</NavLinkMobile>
            </li>
            <li>
              <NavLinkMobile>Qalereya</NavLinkMobile>
            </li>
            <li>
              <NavLinkMobile>Əlaqə</NavLinkMobile>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
