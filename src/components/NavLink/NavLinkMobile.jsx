import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, animateScroll, scroller } from "react-scroll";
import {
  faChevronDown,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function NavLinkMobile({ children, to, offset, links = [] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative font-montserrat">
      <div className="text-white text-xl flex gap-8 items-center">
        <Link className="font-bold">{children}</Link>
        {links.length > 1  && (
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={toggleDropdown}
            icon={isDropdownOpen ? faMinus : faPlus}
          />
        )}
      </div>
      <ul
        className={`pl-8 pt-2 text-white text-lg  ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        {links.map((item) => (
          <li>{item.title}</li>
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
