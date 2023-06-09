import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, animateScroll, scroller } from "react-scroll";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function NavLinkMobile({ children, to, offset, links = [] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative font-montserrat">
      <div className="text-white text-xl flex gap-8 items-center">
        <Link
          onClick={() =>
            scroller.scrollTo(to || "hero", {
              duration: 1000,
              offset: offset,
              delay: 0,
              smooth: "easeInOutQuart",
            })
          }
          className="font-bold cursor-pointer"
        >
          {children}
        </Link>
        {links.length > 1 && (
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={toggleDropdown}
            icon={isDropdownOpen ? faMinus : faPlus}
          />
        )}
      </div>
      <ul
        className={`pl-8 pt-2 flex flex-col gap-2 text-white text-lg  ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        {links.map((item, idx) => (
          <li key={idx} className="cursor-pointer">
            <Link>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// NavLink.propTypes = {
//   title: String,
//   to: String,
//   links: [],
// };

export default NavLinkMobile;
