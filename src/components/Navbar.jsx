import { useState } from "react";
import { BarsIcon } from "../Icons";
import useScreenWidth from "../hooks/useScreenWidth";

const Navbar = ({ isScrolled, scrollPos }) => {
  const screenWidth = useScreenWidth();

  const [navDropdown, setNavDropdown] = useState(false);

  return (
    <nav
      className={`navbar container-fluid bg-transparent text-white ${
        navDropdown ? "bg-black" : "bg-transparent"
      } ${screenWidth < 768 ? "responsive" : "normal"}`}
    >
      {screenWidth < 768 ? (
        <>
          <BarsIcon
            onClick={() => setNavDropdown(!navDropdown)}
            classes={`ml-auto ${navDropdown ? "rotate-90" : ""}`}
          />
          <ul className={`${navDropdown ? "visible" : "hidden"}`}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a
                href="mailto:kritik0401@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </>
      ) : (
        <>
          <h2 className="font-medium text-3xl text-[#ccf381]">Kritik Kapoor</h2>
          <div className="w-6/12 xl:w-4/12 flex items-center justify-between text-lg font-medium">
            <a href="#Home" className="hover:text-[#8258bf]">
              Home
            </a>
            <a href="#About" className="hover:text-[#8258bf]">
              About
            </a>
            <a href="#Projects" className="hover:text-[#8258bf]">
              Projects
            </a>
            <button className="px-3 py-1.5 bg-[#ccf381] rounded-md">
              Contact
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
