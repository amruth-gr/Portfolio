import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Image as ImageIcon } from "lucide-react";
import work3 from "../assets/project-3.png";
import work31 from "../assets/Three-1.png";
import work32 from "../assets/Three-2.png";
import work33 from "../assets/Three-3.png";
import work34 from "../assets/Three-4.png";

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
  work31, work32, work33, work34
];

export default function ProjectOne() {
  
  // STATE TO TOGGLE VIEW
  const [showEmbed, setShowEmbed] = useState(false);
  const [viewMode, setViewMode] = useState("mobile"); // 'mobile' or 'web'

// 2. DEFINE YOUR TWO FIGMA LINKS HERE
const mobileUrl = "https://www.figma.com/proto/FmomCwTpXvXdH1KeN7vCGi/Portfolio-Screens?node-id=318-12177&p=f&t=PNo6GzbYeuukclFo-9&scaling=contain&content-scaling=fixed&page-id=61%3A1978&starting-point-node-id=318%3A12177&hide-ui=1&embed-host=share";

// PASTE YOUR DESKTOP LINK BELOW (Make sure to add &hide-ui=1 at the end)
const webUrl = "https://www.figma.com/proto/FmomCwTpXvXdH1KeN7vCGi/Portfolio-Screens?node-id=302-14010&p=f&t=PNo6GzbYeuukclFo-9&scaling=contain&content-scaling=fixed&page-id=61%3A1978&starting-point-node-id=302%3A14010&hide-ui=1&embed-host=share"; 


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project-page">
      
      {/* 1. BACK NAVIGATION */}
      <div className="container nav-container">
        <Link to="/works" className="back-link">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* 2. PROJECT HERO */}
      <header className="project-hero container">
        <span className="badge">Enterprise System Design</span>
        <h1 className="project-title">Help Desk System</h1>
        <p className="project-subtitle">
          Redesigning a centralized service platform for customers, technicians, and operations teams</p>

        {/* Key Details */}
        <div className="project-meta glass">
          <div className="meta-item"><h3>Role</h3><p>Visual Designer</p></div>
          <div className="meta-item"><h3>Timeline</h3><p>3-4 Weeks</p></div>
          <div className="meta-item"><h3>Tools</h3><p>Figma</p></div>
          <div className="meta-item"><h3>Platform</h3><p>Web (Redesign) & Mobile (New Design)</p></div>
          <div className="meta-item">
  <h3>Live</h3>
  <a 
    href="https://www.figma.com/proto/FmomCwTpXvXdH1KeN7vCGi/Portfolio-Screens?node-id=302-14010&p=f&t=PNo6GzbYeuukclFo-1&scaling=contain&content-scaling=fixed&page-id=61%3A1978&starting-point-node-id=302%3A14010&show-proto-sidebar=1"   // Put your actual link here
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
          src={work3}
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
              <p>The Help Desk System is the core enterprise platform used to manage customers, technicians, machines, service tickets, and enquiry tickets in one centralized system. It acts as the operational backbone of the organization, handling all service workflows and data management.

The web platform previously existed but suffered from usability and visual clarity issues. I was responsible for redesigning the web experience and designing the mobile application from scratch to create a unified, scalable, and modern service management system.</p>
            <p>
              <strong>The Goal:</strong> Redesign the web platform for clarity and efficiency while creating a new mobile experience that enables on-the-go ticket management for technicians and service teams.
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
              <p>The original web system lacked proper visual hierarchy, consistent UI components, and workflow clarity. As the system grew, managing customers, machines, technicians, and tickets became increasingly complex.</p>
            <ul className="bullet-list">

                <li>Dense data tables with limited visual organization.</li>

                <li>Poor information grouping across modules.</li>

                <li>Inconsistent UI patterns across screens.</li>

                <li>No mobile experience for technicians.</li>

                <li>High operational dependency on desktop usage.</li>

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
          className="button-primary"
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
             bottom: '20px',  /* Places it at the bottom center */
             left: '50%',
             transform: 'translateX(-50%)',
             zIndex: 10,      /* Sits on top of iframe */
             background: 'rgba(0, 0, 0, 0.6)',
             backdropFilter: 'blur(10px)',
             border: '1px solid rgba(255,255,255,0.1)',
             padding: '4px',
             borderRadius: '99px',
             display: 'flex',
             gap: '4px'
           }}>
             <button 
               onClick={() => setViewMode("web")}
               style={{
                 background: viewMode === "web" ? "white" : "transparent",
                 color: viewMode === "web" ? "black" : "white",
                 border: "none",
                 padding: "8px 16px",
                 borderRadius: "99px",
                 fontSize: "0.85rem",
                 fontWeight: "600",
                 cursor: "pointer",
                 transition: "all 0.2s ease"
               }}
             >
               Web
             </button>
             <button 
               onClick={() => setViewMode("mobile")}
               style={{
                 background: viewMode === "mobile" ? "white" : "transparent",
                 color: viewMode === "mobile" ? "black" : "white",
                 border: "none",
                 padding: "8px 16px",
                 borderRadius: "99px",
                 fontSize: "0.85rem",
                 fontWeight: "600",
                 cursor: "pointer",
                 transition: "all 0.2s ease"
               }}
             >
               Mobile
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
              <p>I approached the redesign by first restructuring the information architecture of the system. The goal was to make each module — Customers, Technicians, Machines, Service Tickets, and Enquiries — feel consistent and predictable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. System Architecture / Modules */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>System Architecture / Modules</h2></div>
            <div className="section-right">
              <p>The system is structured into 5 primary modules:</p>
            <ul className="bullet-list">

                <li>Service Ticket Management</li>

                <li>Enquiry Ticket Management</li>

                <li>Customer Management</li>

                <li>Technician Management</li>

                <li>Machine Management</li>

              </ul>

              <p>Each module follows a consistent structure:</p>
            <ul className="bullet-list">

                <li>List View (Dashboard)</li>

                <li>Detail View</li>

                <li>Create Forms</li>

                <li>Status & Activity Tracking</li>

              </ul>

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

                <li>Led complete redesign of existing web help desk system.</li>

                <li>Rebuilt UI components and design system foundation.</li>

                <li>Designed responsive dashboards and data tables.</li>

                <li>Designed mobile app from scratch.</li>

                <li>Built interactive prototypes for web and mobile.</li>

                <li>Worked closely with developers to ensure feasibility.</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* 9. NEXT PROJECT CTA */}
      <section className="next-project container">
        <hr className="divider"/>
        <div className="next-header"><span>Next Project</span></div>
        <Link to="/works/project-4" className="next-link">
          <h2>User Management System</h2>
          <ArrowRight size={32} />
        </Link>
      </section>

    </main>
  );
}