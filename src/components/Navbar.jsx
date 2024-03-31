const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between mx-auto py-5">
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
