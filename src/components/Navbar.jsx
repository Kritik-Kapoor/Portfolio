const Navbar = ({ isScrolled, scrollPos }) => {
  return (
    <nav
      className={`container-fluid ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      } ${
        isScrolled || scrollPos === 0 ? "visible" : "hidden"
      } transition-all duration-300 ease-in-out`}
    >
      <h2 className="font-medium text-3xl text-[#ccf381]">Kritik Kapoor</h2>
      <div className="w-4/12 flex items-center justify-between text-lg font-medium">
        <a href="#Home" className="hover:text-[#8258bf]">
          Home
        </a>
        <a href="#About" className="hover:text-[#8258bf]">
          About
        </a>
        <a href="#Projects" className="hover:text-[#8258bf]">
          Projects
        </a>
        <button className="px-3 py-1.5 bg-[#ccf381] rounded-md">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
