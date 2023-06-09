import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, animateScroll, scroller } from "react-scroll";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavLink({ children, to, offset, links = [] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let scroll = animateScroll;

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div
        onClick={() =>
          scroller.scrollTo(to || "hero", {
            duration: 1000,
            offset: offset,
            delay: 0,
            smooth: "easeInOutQuart",
          })
        }
        onMouseEnter={handleDropdownOpen}
        onMouseLeave={handleDropdownClose}
        className={`relative flex cursor-pointer gap-1 ${
          isDropdownOpen ? "h-14" : ""
        } items-center `}
      >
        {children}
        {links.length !== 0 && (
          <>
            <FontAwesomeIcon fontSize={8} icon={faChevronDown} />
            <div
              className={`absolute bg-white top-[51px] flex-nowrap w-48 shadow-shadow ${
                isDropdownOpen ? "block" : "hidden"
              } flex flex-col p-5 gap-3 text-base`}
            >
              {links.map(({ title, to }, idx) => {
                return (
                  <Link
                    className="hover:text-green-400 transition-all hover:cursor-pointer"
                    to={to}
                    key={idx}
                    onClick={toggleDropdown}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// NavLink.propTypes = {
//   title: String,
//   to: String,
//   links: [],
// };

export default NavLink;