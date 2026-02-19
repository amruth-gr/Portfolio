import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Image as ImageIcon } from "lucide-react";
import work2 from "../assets/project-2.png";
import work21 from "../assets/Two-1.png";
import work22 from "../assets/Two-2.png";
import work23 from "../assets/Two-3.png";
import work24 from "../assets/Two-4.png";
import work25 from "../assets/Two-5.png";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// SWIPER STYLES
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../styles/projects.css";
import "../styles/globals.css";

// ==========================================
// PLACEHOLDER IMAGES (Mobile App Screenshots)
// ==========================================
const showcaseImages = [
  work21, work22, work23, work24, work25 
];

export default function ProjectTwo() {
  
  // STATE TO TOGGLE VIEW
  const [showEmbed, setShowEmbed] = useState(false);
  const [viewMode, setViewMode] = useState("mobile"); // 'mobile' or 'web'

// 2. DEFINE YOUR TWO FIGMA LINKS HERE
// const mobileUrl = "https://www.figma.com/proto/iXPu4jzKh30koN8IM1jcfO/One-Platform?node-id=1-7&p=f&t=0JtlLt6ZjqPzo0Ws-9&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&hide-ui=1&embed-host=share";

// PASTE YOUR DESKTOP LINK BELOW (Make sure to add &hide-ui=1 at the end)
const mobileUrl = "https://www.figma.com/proto/iXPu4jzKh30koN8IM1jcfO/One-Platform?node-id=1-7&p=f&t=0JtlLt6ZjqPzo0Ws-9&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&hide-ui=1&embed-host=share"; 
  
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
        <span className="badge">Product Design</span>
        <h1 className="project-title">Pre-Delivery Inspection (PDI)</h1>
        <p className="project-subtitle">
          Designing a streamlined mobile inspection experience for on-field teams
        </p>
        
        {/* Key Details */}
        <div className="project-meta glass">
          <div className="meta-item"><h3>Role</h3><p>Visual Designer</p></div>
          <div className="meta-item"><h3>Timeline</h3><p>2 Weeks</p></div>
          <div className="meta-item"><h3>Tools</h3><p>Figma</p></div>
          <div className="meta-item"><h3>Platform</h3><p>Mobile (Android / iOS)</p></div>
          <div className="meta-item">
  <h3>Live</h3>
  <a 
    href="https://www.figma.com/proto/iXPu4jzKh30koN8IM1jcfO/One-Platform?node-id=1-7&p=f&t=r8MDP1QPNOJb5qq9-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7"   // Put your actual link here
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
          src={work2}
          alt="PDI Mobile App" 
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
              <p>PDI is a newly designed mobile application created to support pre-delivery inspections by guiding users through structured checklists, defect reporting, and final approvals. The goal was to build a clear, reliable inspection workflow that works seamlessly in real-world, on-field conditions.</p>
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
              
              {/* MAIN TOGGLE: SLIDES vs PROTOTYPE */}
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
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
             
             {showEmbed ? (
               /* --- IFRAME (Toggle Removed) --- */
               <iframe 
                 style={{ border: "none", width: "100%", height: "500px" }} 
                 /* Ensure 'webUrl' is defined at the top of your file, or switch this to 'mobileUrl' */
                 src={mobileUrl} 
                 allowFullScreen
                 title="Figma Prototype"
               />
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
                     <div className="slide-image-container" style={{ height: '100%' }}>
                       <img src={src} alt={`Project Screenshot ${index + 1}`} />
                     </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
             )}
      
           </div>
      
        </div>
      </section>

      {/* 6. THE CHALLENGE */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>The Challenge</h2></div>
            <div className="section-right">
              <p>Pre-delivery inspections were often handled through manual processes, resulting in inconsistencies and missed checks. There was a need for a dedicated mobile solution built specifically for inspection workflows.</p>
              <ul className="bullet-list">
                <li>No standardized inspection flow across teams.</li>
                <li>High chances of missing critical checks.</li>
                <li>Difficulty documenting defects on the go.</li>
                <li>Poor usability in fast-paced, field environments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE SOLUTION */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>The Solution</h2></div>
            <div className="section-right">
              <p>I designed a mobile-first inspection application focusing on clarity, structure, and speed. The experience was built around guided inspection steps and simple defect reporting to ensure inspections could be completed accurately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MY CONTRIBUTION */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left">
              <h2>My Contribution</h2>
            </div>
            <div className="section-right">
              <ul className="bullet-list">
                <li>Designed the complete mobile application from concept to final UI.</li>
                <li>Defined inspection flows, checklists, and user journeys.</li>
                <li>Designed defect reporting and inspection status tracking.</li>
                <li>Created interactive prototypes to validate usability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUTCOME */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>Outcome</h2></div>
            <div className="section-right">
              <p>The PDI application established a clear and consistent inspection process, reduced manual effort, and improved inspection accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEXT PROJECT CTA */}
      <section className="next-project container">
        <hr className="divider"/>
        <div className="next-header"><span>Next Project</span></div>
        <Link to="/works/project-3" className="next-link">
          <h2>Help Desk System</h2>
          <ArrowRight size={32} />
        </Link>
      </section>

    </main>
  );
}