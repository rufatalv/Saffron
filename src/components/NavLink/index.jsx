import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavLink({ title, to, links=[] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div
      to="#"
      onMouseEnter={handleDropdownOpen}
      onMouseLeave={handleDropdownClose}
      className={`relative flex gap-1 ${
        isDropdownOpen ? "h-14" : ""
      } items-center cursor-pointer`}
    >
      {title}
      {links.length !== 0 && (
        <>
          <FontAwesomeIcon fontSize={8} icon={faChevronDown} />
          <div
            className={`absolute bg-white top-[51px] flex-nowrap w-48 shadow-shadow ${
              isDropdownOpen ? "block" : "hidden"
            } flex flex-col p-5 gap-3 text-base`}
          >
            {links.map(({ title, to }) => {
              return (
                <Link
                  className="hover:text-green-400 transition-all hover:cursor-pointer"
                  to={to}
                  key={to}
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
  );
}

NavLink.propTypes = {
    title: String,
    to: String,
    links: []
}

export default NavLink;
