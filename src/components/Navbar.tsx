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
    <nav className="w-full bg-[var(--colour-accent)] dark:bg-[var(--colour-accent-dark)] shadow-md fixed top-0 left-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-[var(--colour-primary)] dark:text-[var(--colour-primary-dark)]"
        >
          Vincent Walker
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#find-me">Find Me</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} className="ml-4">
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#about" className="block py-2 ">
            About
          </a>
          <a href="#projects" className="block py-2 ">
            Projects
          </a>
          <a href="#find-me" className="block py-2 ">
            Find Me
          </a>
          <a href="#contact" className="block py-2 ">
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="mt-2 flex items-center gap-2 "
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
