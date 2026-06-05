import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "../styles/works.css";
import "../styles/globals.css";
import work1 from "../assets/project-1.png";
import work2 from "../assets/pdi.png";
import work3 from "../assets/project-3.png";
import work4 from "../assets/project-4.png";
import work5 from "../assets/WM.png";


export default function Works() {
  
  const projects = [
    // 1. SAME AS HOME PAGE (Selected Work)
    {
      id: 1,
      title: "Remote Condition Monitoring (RCM)",
      category: "Web & mobile Design",
      description: "A scalable SaaS dashboard designed to help businesses monitor asset health, track real-time performance, and make faster operational decisions through clear data visualization and responsive layouts.",
      image: work1, 
      fit: "contain",
      tags: ["UX Research", "Figma"],
      link: "/projects/project-1" 
    },
    // 2. SAME AS HOME PAGE (Selected Work)
    {
      id: 2,
      title: "Pre-Delivery Inspection (PDI)",
      category: "Mobile App",
      description: "A mobile application designed from the ground up to help teams perform structured pre-delivery inspections, capture issues, and complete handovers efficiently through a guided, step-by-step workflow.",
      image: work2,
      fit: "contain",
      tags: ["Figma", "Design Systems"],
      link: "/projects/project-2"
    },
    // 3. ADDITIONAL PROJECT
    {
      id: 3,
      title: "Help Desk",
      category: "Web & Mobile Design",
      description: "A role-based service management platform designed to streamline customer support, technician workflows, and machine tracking across web and mobile systems.",
      image: work3,
      fit: "contain",
      tags: ["Web Design", "Mobile Design", "Prototyping"],
      link: "/projects/project-3"
    },
    // 4. ADDITIONAL PROJECT
    {
      id: 4,
      title: "User Management System",
      category: "Enterprise Admin System",
      description: "An enterprise-grade admin system built to manage dealers, service leaders, and inspectors through structured permissions, scalable tables, and operational clarity.",
      image: work4,
      fit: "contain",
      tags: ["Web Design", "Prototyping", "UX Research"],
      link: "/projects/project-4"
    },
    // 5. ADDITIONAL PROJECT
    {
      id: 5,
      title: "Warranty Management",
      category: "Web Design",
      description: "A structured warranty management platform designed to manage claims, job cards, and service validation workflows with clarity and operational efficiency.",
      image: work5,
      fit: "contain",
      tags: ["Web Design"],
      link: "/projects/project-5"
    }
  ];

  return (
    <main className="works">
      
      {/* 1. HERO SECTION */}
      <section className="works-hero container">
        <span className="badge">PROJECTS</span>
        <h1 className="works-title">
          Projects & case studies.
        </h1>
        <p className="works-intro">
          A collection of SaaS platforms, dashboards, and workflow-driven systems — 
  designed to transform operational complexity into structured, scalable interfaces.
        </p>
      </section>

      {/* 2. ZIG-ZAG PROJECTS LIST */}
      <section className="works-list container">
        {projects.map((project) => (
          <Link to={project.link} key={project.id} className="project-row glass">
            
            {/* Image Side */}
            <div className="row-image">
              <img src={project.image} alt={project.title} 
              style={{ objectFit: project.fit || "cover" }}/>
              <div className="overlay">
                <span className="view-text">View Case Study <ArrowUpRight size={18} /></span>
              </div>
            </div>

            {/* Content Side */}
            <div className="row-content">
              <div className="row-header">
                <span className="badge">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              
              <p>{project.description}</p>
              
              <div className="row-footer">
                <div className="card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </Link>
        ))}
      </section>

      {/* 3. CTA */}
      <section className="works-cta container">
        <h2>Building a SaaS product that needs structure and clarity?</h2>
        <p>I’m open to freelance collaborations and product design roles 
  within SaaS and system-driven teams.</p>
        <Link to="/contact" className="button-primary">
          Start a Project
        </Link>
      </section>

    </main>
  );
}