import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-[#187cf8] dark:text-[#187cf8]"
        >
          Vincent
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-[#187cf8] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[#187cf8] transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#187cf8] transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-[#187cf8] transition">
            Contact
          </a>
          <button onClick={() => setIsDark(!isDark)} className="ml-4">
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#about"
            className="block py-2 hover:text-[#187cf8] transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 hover:text-[#187cf8] transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 hover:text-[#187cf8] transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-[#187cf8] transition"
          >
            Contact
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="mt-2 flex items-center space-x-1"
          >
            {isDark ? (
              <>
                <Sun className="h-5 w-5" /> <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-5 w-5" /> <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
