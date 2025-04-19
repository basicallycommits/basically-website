import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(html.classList.contains("dark"));
  };

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-sky-500 dark:text-sky-400"
        >
          Vincent Walker
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="ml-4 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#about"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="mt-2 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
