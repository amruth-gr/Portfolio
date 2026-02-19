import { Link } from "react-router-dom";
import "../styles/about.css";
import "../styles/globals.css";
import "../styles/navbar.css";

// IMPORT ICONS
import { 
  SiFigma, SiReact, SiNotion, SiMiro, SiAdobeillustrator, 
  SiHtml5, SiCss3 
} from "react-icons/si";
import { 
  LayoutTemplate, Smartphone, Sparkles, Search, Zap 
} from "lucide-react";

export default function About() {

  // 1. DATA WITH BRAND COLORS
  const tools = [
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Notion", icon: <SiNotion />, color: "#000000" }, 
    { name: "Miro", icon: <SiMiro />, color: "#FFD02F" },
    { name: "Illustrator", icon: <SiAdobeillustrator />, color: "#FF9A00" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "Design Systems", icon: <LayoutTemplate size={18} />, color: "#A855F7" },
    { name: "Mobile Design", icon: <Smartphone size={18} />, color: "#EC4899" },
    { name: "UX Research", icon: <Search size={18} />, color: "#14B8A6" },
    { name: "Prototyping", icon: <Zap size={18} />, color: "#EAB308" },
    { name: "Visual Polish", icon: <Sparkles size={18} />, color: "#6366F1" },
  ];

  return (
    <main className="about">

      {/* 1. HERO SECTION */}
      <section className="about-hero container">
        <span className="badge">About Me</span>

        <h1 className="about-title">
          I design scalable product systems 
  that turn complex workflows into 
  intuitive digital experiences.
        </h1>

        <p className="about-intro">
          I’m a Visual Designer focused on SaaS and operational platforms. 
  I specialize in designing structured dashboards, workflow-driven systems, 
  and cross-platform experiences that balance clarity, usability, and strong visual hierarchy.
        </p>
      </section>

      {/* 2. PRINCIPLES SECTION */}
      <section className="about-principles container">
        <h2 className="section-title">How I design</h2>

        <div className="principles-grid">
          <div className="principle-card">
            <h3>Clarity before complexity</h3>
            <p>
              I reduce cognitive load by structuring information clearly 
and prioritizing what truly matters.
            </p>
          </div>

          <div className="principle-card">
            <h3>Systems over screens</h3>
            <p>
              I design scalable components and consistent patterns — 
so products grow without losing clarity.
            </p>
          </div>

          <div className="principle-card">
            <h3>Design with engineering in mind</h3>
            <p>
              With working knowledge of React and Angular, 
I design solutions that are realistic, scalable, and implementation-ready.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE & TOOLS (Infinite Scroll) */}
      <section className="experience">
        <h2 className="section-title">Experience & Tools</h2>
        <p>
          I’ve designed end-to-end service platforms, inspection workflows, 
  monitoring dashboards, and role-based management systems. 
  My work spans web and mobile products, where I collaborate closely 
  with product teams and developers to to ship structured, high-quality interfaces.
  </p>

        {/* MARQUEE WRAPPER */}
        <div className="marquee-container">
          {/* We render the list TWICE to create the seamless loop */}
          <div className="marquee-track">
            
            {/* List 1 */}
            {tools.map((item, i) => (
              <div 
                key={i} 
                className="tool-item" 
                style={{ "--brand-color": item.color }} /* Pass color to CSS */
              >
                <span className="tool-icon">{item.icon}</span>
                {item.name}
              </div>
            ))}

            {/* List 2 (Duplicate for Loop) */}
            {tools.map((item, i) => (
              <div 
                key={`dup-${i}`} 
                className="tool-item" 
                style={{ "--brand-color": item.color }}
              >
                <span className="tool-icon">{item.icon}</span>
                {item.name}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (The Perfect Ending) */}
      <section className="about-cta container">
        <h2>Building a complex product that needs clarity?</h2>
        <p>
          I’m currently seeking a Visual / Product Designer role in a strong SaaS or product company. 
  I’m also actively open to freelance collaborations — especially with startups and teams 
  building dashboards, admin panels, and workflow-driven systems.
        </p>
        <Link to="/contact" className="button-primary">
          Let's Talk
        </Link>
      </section>

    </main>
  );
}