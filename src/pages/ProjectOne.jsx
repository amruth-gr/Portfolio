import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Image as ImageIcon } from "lucide-react";
import work1 from "../assets/project-1.png";
import work11 from "../assets/One-1.png";
import work12 from "../assets/One-2.png";
import work13 from "../assets/One-3.png";

// 1. SWIPER IMPORTS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 2. SWIPER STYLES
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../styles/projects.css";
import "../styles/globals.css";

// PLACEHOLDER IMAGES
const showcaseImages = [
  work11, work12, work13  
];

export default function ProjectOne() {
  
  // STATE TO TOGGLE VIEW
  const [showEmbed, setShowEmbed] = useState(false);
  const [viewMode, setViewMode] = useState("mobile"); // 'mobile' or 'web'

// 2. DEFINE YOUR TWO FIGMA LINKS HERE
const mobileUrl = "https://www.figma.com/proto/FmomCwTpXvXdH1KeN7vCGi/Portfolio-Screens?node-id=432-16348&p=f&t=5sduAfAzYamdsrDz-9&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=432%3A16348&hide-ui=1&embed-host=share";

// PASTE YOUR DESKTOP LINK BELOW (Make sure to add &hide-ui=1 at the end)
const webUrl = "https://www.figma.com/proto/FmomCwTpXvXdH1KeN7vCGi/Portfolio-Screens?node-id=167-8006&p=f&t=5sduAfAzYamdsrDz-9&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=167%3A8006&hide-ui=1&embed-host=share"; 


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project-page">
      
      {/* 1. BACK NAVIGATION */}
      <div className="container nav-container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* 2. PROJECT HERO */}
      <header className="project-hero container">
        <span className="badge">Product Design</span>
        <h1 className="project-title">Remote Condition Monitoring (RCM)</h1>
        <p className="project-subtitle">
          Designing a real-time monitoring platform for operational clarity at scale
        </p>

        {/* Key Details */}
        <div className="project-meta glass">
          <div className="meta-item"><h3>Role</h3><p>Visual Designer</p></div>
          <div className="meta-item"><h3>Timeline</h3><p>4 Weeks</p></div>
          <div className="meta-item"><h3>Tools</h3><p>Figma</p></div>
          <div className="meta-item"><h3>Platform</h3><p>Web & Mobile</p></div>
          <div className="meta-item">
  <h3>Live</h3>
  <a 
    href="https://www.figma.com/proto/FmomCwTpXvXdH1KeN7vCGi/Portfolio-Screens?node-id=432-16348&p=f&t=5sduAfAzYamdsrDz-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=432%3A16348&show-proto-sidebar=1"   // Put your actual link here
    className="live-link" 
    target="_blank"             // <--- This opens a new tab
    rel="noopener noreferrer"   // <--- Security best practice
  >
    View Site <ExternalLink size={14} />
  </a>
</div>
        </div>
      </header>

      {/* 3. HERO IMAGE */}
      <section className="hero-image-container container">
        <img 
          src={work1}
          alt="SaaS Dashboard Hero" 
          className="main-image"
        />
      </section>

      {/* 4. OVERVIEW */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left">
              <h2>The Overview</h2>
            </div>
            <div className="section-right">
              <p>RCM is a SaaS-based remote condition monitoring platform that enables businesses to track asset performance, monitor geographic distribution, and identify critical issues in real time. The goal was to transform complex operational data into a clear, actionable dashboard experience across web and mobile.</p>
            <p>

                <strong>The Goal:</strong> Redesign the core dashboard experience to prioritize

                clarity, improve data visualization, and reduce the time-to-value for new users.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE CHALLENGE */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>The Challenge</h2></div>
            <div className="section-right">
              <p>The existing product surfaced large volumes of operational data but lacked visual hierarchy and clarity. Users struggled to quickly identify critical insights, especially when monitoring assets across locations and devices.</p>
            <ul className="bullet-list">

                <li>High cognitive load caused by dense data and weak information hierarchy.</li>

                <li>Inconsistent visual patterns reducing usability and trust.</li>

                <li>Limited mobile optimization for users monitoring systems on the go.</li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          VISUAL SHOWCASE SECTION
         ========================================= */}
      <section className="project-section container">
        <div className="glass-panel">
          
          {/* HEADER */}
          <div className="showcase-header" style={{ marginBottom: '2rem' }}>
            <div className="header-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ margin: 0 }}>Visual Showcase</h2>
              
              <button 
                onClick={() => setShowEmbed(!showEmbed)}
                className="button-primary prototype-btn"
                style={{ margin: 0, display: 'inline-flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}
              >
                {showEmbed ? (
                  <> <ImageIcon size={18} /> View Static Slides </>
                ) : (
                  <> <PlayCircle size={18} /> Interactive Prototype </>
                )}
              </button>
            </div>
            <p className="caption" style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Swipe through the key interface designs, or switch to the interactive view.
            </p>
          </div>
            
          {/* CONTENT AREA */}
          <div className="slideshow-wrapper" style={{ 
            width: '80%', 
            margin: '0 auto',
            minHeight: '500px', 
            background: '#1a1a1a',
            position: 'relative', // IMPORTANT: Allows absolute positioning inside
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
             
             {showEmbed ? (
               <>
                 {/* --- FLOATING TOGGLE SWITCH --- */}
<div className="view-toggle" style={{
    position: 'absolute',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    /* 1. The Outer Shell: Dark & Deeply Blurred */
    background: 'rgba(15, 15, 15, 0.4)', 
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '4px',
    borderRadius: '99px',
    display: 'flex',
    gap: '4px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
}}>
    <button 
        onClick={() => setViewMode("mobile")}
        style={{
            /* 2. Active State: High Contrast White Glass */
            background: viewMode === "mobile" 
                ? "rgba(255, 255, 255, 0.12)" 
                : "transparent",
            color: viewMode === "mobile" ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)",
            border: viewMode === "mobile" 
                ? "1px solid rgba(255, 255, 255, 0.2)" 
                : "1px solid transparent",
            boxShadow: viewMode === "mobile" 
                ? "var(--glass-shadow)" 
                : "none",
            padding: "8px 24px",
            borderRadius: "99px",
            fontSize: "0.85rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            /* Subtle depth effect */
            transform: viewMode === "mobile" ? "scale(1)" : "scale(0.96)"
        }}
    >
        Mobile
    </button>
    <button 
        onClick={() => setViewMode("web")}
        style={{
            background: viewMode === "web" 
                ? "rgba(255, 255, 255, 0.12)" 
                : "transparent",
            color: viewMode === "web" ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)",
            border: viewMode === "web" 
                ? "1px solid rgba(255, 255, 255, 0.2)" 
                : "1px solid transparent",
            boxShadow: viewMode === "web" 
                ? "var(--glass-shadow)" 
                : "none",
            padding: "8px 24px",
            borderRadius: "99px",
            fontSize: "0.85rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: viewMode === "web" ? "scale(1)" : "scale(0.96)"
        }}
    >
        Web
    </button>
</div>
      
                 {/* --- THE IFRAME --- */}
                 <iframe 
                   key={viewMode} /* Key forces reload when switching */
                   style={{ border: "none", width: "100%", height: "500px" }} 
                   src={viewMode === "mobile" ? mobileUrl : webUrl}
                   allowFullScreen
                   title="Figma Prototype"
                 />
               </>
             ) : (
               /* --- SLIDESHOW MODE --- */
               <Swiper
                 modules={[Navigation, Pagination, Autoplay]}
                 spaceBetween={20}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 autoplay={{ delay: 3500, disableOnInteraction: false }}
                 loop={true}
                 className="project-swiper"
                 style={{ height: '100%' }}
               >
                 {showcaseImages.map((src, index) => (
                   <SwiperSlide key={index}>
                     <div className="slide-image-container" style={{ height: '500px' }}>
                       <img src={src} alt={`Project Screenshot ${index + 1}`} />
                     </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
             )}
      
           </div>
      
        </div>
      </section>

      {/* 7. THE SOLUTION */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>The Solution</h2></div>
            <div className="section-right">
              <p>I redesigned the experience with a focus on clarity, scalability, and decision-making speed. A modular, card-based layout was introduced to organize key metrics and separate critical information from secondary data.The interface was optimized for both desktop and mobile, ensuring users could monitor assets seamlessly across devices. Visual consistency and spacing improvements helped create a more reliable and professional product experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. My contribution (The Challenge - Glass Panel) */}

      <section className="project-section container">

        <div className="glass-panel">

          <div className="section-grid">

            <div className="section-left">

              <h2>My Contribution</h2>

            </div>

            <div className="section-right">

              <ul className="bullet-list">

                <li>Designed end-to-end UI screens for web and mobile platforms.</li>

                <li>Structured dashboards to surface critical metrics and alerts clearly.</li>

                <li>Created responsive layouts for monitoring across devices.</li>

                <li>Collaborated with product and engineering teams to align design with technical constraints.</li>

                <li>Delivered high-fidelity designs and interactive prototypes in Figma.</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* 9. NEXT PROJECT CTA */}
      <section className="next-project container">
        <hr className="divider"/>
        <div className="next-header"><span>Next Project</span></div>
        <Link to="/projects/project-2" className="next-link">
          <h2>Pre-Delivery Inspection (PDI)</h2>
          <ArrowRight size={32} />
        </Link>
      </section>

    </main>
  );
}