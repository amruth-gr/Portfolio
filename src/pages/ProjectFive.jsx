import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Image as ImageIcon } from "lucide-react";
import work5 from "../assets/WM.png";
import work51 from "../assets/five-1.png";
import work52 from "../assets/five-2.png";
import work53 from "../assets/five-3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/projects.css";
import "../styles/globals.css";

const showcaseImages = [
  work51,work52,work53,
];

export default function WarrantyManagement() {
  const [showEmbed, setShowEmbed] = useState(false);

  const webUrl =
    "https://www.figma.com/proto/iXPu4jzKh30koN8IM1jcfO/One-Platform?node-id=1-14834&p=f&t=9x9FUm53rZsO2JFC-9&scaling=contain&content-scaling=fixed&page-id=1%3A8335&starting-point-node-id=1%3A14834&hide-ui=1&embed-host=share";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project-page">

      {/* Back */}
      <div className="container nav-container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <header className="project-hero container">
        <span className="badge">Enterprise SaaS Platform</span>
        <h1 className="project-title">Warranty Management System</h1>
        <p className="project-subtitle">
          A centralized platform to manage warranty registrations, claims, and approvals.
        </p>

        <div className="project-meta glass">
          <div className="meta-item"><h3>Role</h3><p>UI/UX Designer</p></div>
          <div className="meta-item"><h3>Timeline</h3><p>3 Weeks</p></div>
          <div className="meta-item"><h3>Tools</h3><p>Figma</p></div>
          <div className="meta-item"><h3>Platform</h3><p>Web Application</p></div>
          <div className="meta-item">
  <h3>Live</h3>
  <a 
    href="https://www.figma.com/proto/iXPu4jzKh30koN8IM1jcfO/One-Platform?node-id=1-14834&p=f&t=9x9FUm53rZsO2JFC-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A8335&starting-point-node-id=1%3A14834"   // Put your actual link here
    className="live-link" 
    target="_blank"             // <--- This opens a new tab
    rel="noopener noreferrer"   // <--- Security best practice
  >
    View Site <ExternalLink size={14} />
  </a>
</div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="hero-image-container container">
        <img src={work5} alt="Warranty Dashboard" className="main-image" />
      </section>

      {/* Overview */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>The Overview</h2></div>
            <div className="section-right">
              <p>
                The Warranty Management System is a web-based platform designed 
                to manage warranty registrations, claims, and approval workflows 
                for machines and parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>The Challenge</h2></div>
            <div className="section-right">
              <ul className="bullet-list">
                <li>Designing complex warranty workflows</li>
                <li>Managing machine and parts dependencies</li>
                <li>Structuring approval lifecycle clearly</li>
                <li>Handling large datasets in tables</li>
                <li>Maintaining clarity in form-heavy interfaces</li>
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
                             src={webUrl} 
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

      {/* Contribution */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left"><h2>My Contribution</h2></div>
            <div className="section-right">
              <ul className="bullet-list">
                <li>Designed the complete web platform from scratch</li>
                <li>Structured warranty and claim workflows</li>
                <li>Created reusable table and form components</li>
                <li>Defined visual hierarchy and status system</li>
                <li>Delivered high-fidelity prototypes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="next-project container">
        <hr className="divider" />
        <div className="next-header"><span>End of Projects</span></div>
        <Link to="/contact" className="next-link">
          <h2>Let’s Work Together</h2>
          <ArrowRight size={32} />
        </Link>
      </section>

    </main>
  );
}
