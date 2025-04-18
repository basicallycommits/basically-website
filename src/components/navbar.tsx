import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-sky-500">
          Vincent Walker
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a
            href="#about"
            className="block py-2 text-gray-600 hover:text-sky-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-600 hover:text-sky-500 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-600 hover:text-sky-500 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-600 hover:text-sky-500 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
