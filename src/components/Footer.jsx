import { Linkedin, Twitter, Instagram, Mail, Github } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top Glow Effect */}
      <div className="footer-glow"></div>

      <div className="container footer-container">
        
        {/* MAIN ROW: Brand (Left) & Socials (Right) */}
        <div className="footer-main">
          
          {/* Left: Brand */}
          <div className="footer-brand">
            <h2 className="brand-logo">GR AMRUTHA</h2>
            <p className="copyright">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="social-icons">
            <a href="mailto:gramrutha1612@gmail.com" className="icon-btn" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gr-amrutha/" target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            {/* <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <Github size={20} />
            </a> */}
          </div>

        </div>

      </div>
    </footer>
  );
}