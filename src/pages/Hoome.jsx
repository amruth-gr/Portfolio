import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import heroMockup from "../assets/Mockup.png";
import work1 from "../assets/project-1.png";
import work2 from "../assets/pdi.png";
import "../styles/globals.css";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section id="home" className="hero container">
        <div className="hero-content">
          <div className="hero-text">
            {/* <span className="badge">Visual Designer</span>  */}
            <h2 className="hero-intro">
    Hi, I'm GR Amrutha <span className="wave">👋</span>
  </h2>
            <h1 className="hero-title">
              Designing structured product systems for complex SaaS platforms.
            </h1>

            <p className="hero-subtitle">
              Visual designer specializing in dashboards, admin panels, and workflow-driven applications — from wireframes to high-fidelity, production-ready UI.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="button-primary">View Works</Link>
              <Link to="/contact" className="button-secondary">Get in touch</Link>
            </div>
          </div>

          <div className="hero-image">
            <img src={heroMockup} alt="Hero Mockup" />
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="work container">
        <h2 className="section-title">Featured Projects</h2>

        {/* Project 1 */}
        <Link to="/projects/project-1" className="work-item">
          <div className="work-item-image">
            <img src={work1} alt="SaaS Dashboard Redesign" />
            {/* Overlay Removed */}
          </div>
          
          <div className="work-item-details">
            <div className="details-text">
              {/* <span className="badge">Product Design</span> */}
              <h3>Remote Condition Monitoring (RCM)</h3>
              <p>A SaaS-based monitoring platform designed to transform 
complex machine data into clear, actionable insights — 
helping businesses track performance, detect issues, 
and make faster operational decisions.</p>
            </div>
            {/* New Button Here */}
            <span className="case-study-btn">
              View Case Study <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>

        {/* Project 2 (reversed layout) */}
        <Link to="/projects/project-2" className="work-item reverse">
          <div className="work-item-image">
            <img src={work2} alt="Pre-Delivery Inspection (PDI)" />
            {/* Overlay Removed */}
          </div>
          
          <div className="work-item-details">
            <div className="details-text">
              {/* <span className="badge">Mobile Application Design</span> */}
              <h3>Pre-Delivery Inspection (PDI)</h3>
              <p>A mobile-first inspection platform built to guide teams 
through structured pre-delivery workflows — enabling 
accurate reporting, issue tracking, and seamless handovers.</p>
            </div>
            {/* New Button Here */}
            <span className="case-study-btn">
              View Case Study <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>

        {/* View All Button */}
        <div className="center-btn">
          <Link to="/projects" className="button-secondary">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

      </section>

    </main>
  );
}