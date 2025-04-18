const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-sky-500">
          Vincent
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-sky-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-sky-500 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-sky-500 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-sky-500 transition">
            Contact
          </a>
        </div>
      </div>

      <div className="md:hidden px-4 pb-4 space-y-2">
        <a href="#about" className="block py-2 hover:text-sky-500 transition">
          About
        </a>
        <a
          href="#projects"
          className="block py-2 hover:text-sky-500 transition"
        >
          Projects
        </a>
        <a href="#skills" className="block py-2 hover:text-sky-500 transition">
          Skills
        </a>
        <a href="#contact" className="block py-2 hover:text-sky-500 transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export { Navbar };
