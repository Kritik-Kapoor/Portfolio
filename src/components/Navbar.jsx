import { useState } from "react";
import { BarsIcon } from "../Icons";
import useScreenWidth from "../hooks/useScreenWidth";
import ContactModal from "./modal/ContactModal";

const Navbar = ({ isScrolled, scrollPos }) => {
  const screenWidth = useScreenWidth();

  const [navDropdown, setNavDropdown] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <nav
      className={`navbar container-fluid bg-transparent text-white ${
        navDropdown ? "bg-black" : "bg-transparent"
      } ${screenWidth < 768 ? "responsive" : "normal"}`}
    >
      {screenWidth < 768 ? (
        <>
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-3xl text-[#ccf381]">
              Kritik Kapoor
            </h2>
            <BarsIcon
              onClick={() => setNavDropdown(!navDropdown)}
              classes={`ml-auto ${navDropdown ? "rotate-90" : ""}`}
            />
          </div>
          <ul className={`${navDropdown ? "visible" : "hidden"}`}>
            <li>
              <a href="#Home" onClick={() => setNavDropdown(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" onClick={() => setNavDropdown(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={() => setNavDropdown(false)}>
                Projects
              </a>
            </li>
            <li
              onClick={() => {
                setOpenContactModal(true);
                setNavDropdown(false);
              }}
            >
              Contact
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
            <button
              className="px-3 py-1.5 bg-[#3f0d87] rounded-md"
              onClick={() => {
                setOpenContactModal(true);
              }}
            >
              Contact
            </button>
          </div>
        </>
      )}
      <ContactModal
        open={openContactModal}
        onClose={() => setOpenContactModal(false)}
      />
    </nav>
  );
};

export default Navbar;
