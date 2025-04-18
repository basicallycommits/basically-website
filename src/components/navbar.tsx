import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">MyApp</div>
      <ul className="navbar__links">
        <li className="navbar__link">Home</li>
        <li className="navbar__link">About</li>
        <li className="navbar__link">Contact</li>
      </ul>
    </nav>
  );
};

export { Navbar };
