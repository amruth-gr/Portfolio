import { useState } from "react";
import { NavLink } from 'react-router-dom';
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react"; 
import "../styles/navbar.css";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import myResume from "../assets/resume.pdf"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className={`navbar-pill ${isOpen ? "menu-open" : ""}`}>
        
        {/* Left: Logo */}
        <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
          <img src={logoWhite} alt="Logo" className="brand-logo-img logo-dark" />
          <img src={logoBlack} alt="Logo" className="brand-logo-img logo-light" />
        </NavLink>

        {/* Center: Links */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Home 
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            workss
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Contact
          </NavLink>
          
          {/* Mobile-only Resume Button */}
          <a href={myResume} download="Amrutha_Resume.pdf" className="mobile-resume-btn" onClick={() => setIsOpen(false)}>
            Resume
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="nav-right">
          <div className="resume-wrapper desktop-only">
            <a href={myResume} download="Amrutha_Resume.pdf" className="resume-btn">
              Resume
            </a>
            <span className="resume-tooltip">Download Resume</span>
          </div>

          <ThemeToggle />

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </header>
  );
}