import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          JAY<span>.</span>
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;