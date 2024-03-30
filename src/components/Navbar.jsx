const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between mx-auto py-5">
      <h2 className="font-medium text-3xl text-[#ccf381]">Kritik Kapoor</h2>
      <div className="w-4/12 flex items-center justify-between text-lg font-medium">
        <a href="#Home" className="hover:text-sky-200">
          Home
        </a>
        <a href="#About" className="hover:text-sky-200">
          About
        </a>
        <a href="#" className="hover:text-sky-200">
          Projects
        </a>
        {/* <button className="px-3 py-1.5 bg-[#ccf381] rounded-md">Contact</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
