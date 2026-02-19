import { NavLink } from 'react-router-dom';
import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";

// 1. IMPORT YOUR RESUME FILE
import myResume from "../assets/resume.pdf"; 

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-pill">
        {/* Left */}
        <NavLink to="/" className="brand">
  {/* Image 1: Visible in Dark Mode */}
  <img src={logoWhite} alt="Logo" className="brand-logo-img logo-dark" />
  
  {/* Image 2: Visible in Light Mode */}
  <img src={logoBlack} alt="Logo" className="brand-logo-img logo-light" />
</NavLink>

        {/* Center */}
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Home 
          </NavLink>
          <NavLink to="/works" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Contact
          </NavLink>
        </nav>

        {/* Right */}
        <div className="nav-right">
          
          {/* === RESUME BUTTON WITH TOOLTIP === */}
          <div className="resume-wrapper">
            <a 
              href={myResume} 
              download="Amrutha_Resume.pdf" // The name of the file when downloaded
              className="resume-btn"        // Styles defined in navbar.css
            >
              Resume
            </a>
            
            {/* The Tooltip Text */}
            <span className="resume-tooltip">Download Resume</span>
          </div>

          <ThemeToggle />
          
        </div>

      </div>
    </header>
  );
}