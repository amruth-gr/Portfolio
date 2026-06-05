import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Image as ImageIcon } from "lucide-react";
import work4 from "../assets/project-4.png";
import work41 from "../assets/Four-1.png";
import work42 from "../assets/Four-2.png";
import work43 from "../assets/Four-3.png";
import work44 from "../assets/Four-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/projects.css";
import "../styles/globals.css";

const showcaseImages = [
work41, work42, work43, work44  
];

export default function UserManagementSystem() {
  const [showEmbed, setShowEmbed] = useState(false);

  const webUrl =
    "https://www.figma.com/proto/iXPu4jzKh30koN8IM1jcfO/One-Platform?node-id=1-7845&p=f&t=2Ss9O6vicKU5CPjA-9&scaling=contain&content-scaling=fixed&page-id=1%3A4964&starting-point-node-id=1%3A7845&hide-ui=1&embed-host=share";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project-page">
      
      {/* Back Navigation */}
      <div className="container nav-container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <header className="project-hero container">
        <span className="badge">Enterprise Admin System</span>
        <h1 className="project-title">User Management System</h1>
        <p className="project-subtitle">
          A centralized admin platform to manage dealers and PDI inspectors efficiently.
        </p>

        <div className="project-meta glass">
          <div className="meta-item"><h3>Role</h3><p>UI/UX Designer</p></div>
          <div className="meta-item"><h3>Timeline</h3><p>2 Weeks</p></div>
          <div className="meta-item"><h3>Tools</h3><p>Figma</p></div>
          <div className="meta-item"><h3>Platform</h3><p>Web Application</p></div>
          <div className="meta-item">
  <h3>Live</h3>
  <a 
    href="https://www.figma.com/proto/iXPu4jzKh30koN8IM1jcfO/One-Platform?node-id=1-7845&p=f&t=2Ss9O6vicKU5CPjA-1&scaling=contain&content-scaling=fixed&page-id=1%3A4964&starting-point-node-id=1%3A7845"   // Put your actual link here
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
        <img src={work4} alt="User Management Dashboard" className="main-image" />
      </section>

      {/* Overview */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left">
              <h2>The Overview</h2>
            </div>
            <div className="section-right">
              <p>
                The User Management System is a web-based admin platform designed
                to manage and control different user types within the organization —
                primarily Dealers and PDI Inspectors.
              </p>
              <p>The system enables administrators to:</p>
              <ul className="bullet-list">
                <li>Add and manage users</li>
                <li>Assign roles</li>
                <li>Control access</li>
                <li>Monitor status</li>
                <li>Maintain structured user records</li>
              </ul>
              <p>
                <strong>The Goal:</strong> Design a structured, scalable admin
                system that simplifies user control and management without
                unnecessary visual clutter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left">
              <h2>The Challenge</h2>
            </div>
            <div className="section-right">
              <p>
                There was no existing interface or reference. The platform had
                to be structured entirely from functional explanations and
                workflow discussions.
              </p>
              <ul className="bullet-list">
                <li>Translate verbal requirements into structured UI</li>
                <li>Define information architecture from scratch</li>
                <li>Organize user roles clearly</li>
                <li>Create consistent form and table patterns</li>
                <li>Maintain enterprise-level clarity and hierarchy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left">
              <h2>Information Architecture</h2>
            </div>
            <div className="section-right">
              <p>
                The system was structured into predictable modules to ensure
                clarity and scalability:
              </p>
              <ul className="bullet-list">
                <li>Dashboard Overview</li>
                <li>Dealer Management</li>
                <li>PDI Inspector Management</li>
                <li>Add / Edit User Forms</li>
                <li>User Detail View</li>
              </ul>
              <p>
                Each module follows a consistent layout pattern to reduce
                cognitive load and improve admin efficiency.
              </p>
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

      {/* Solution */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left">
              <h2>The Solution</h2>
            </div>
            <div className="section-right">
              <p>
                I structured the platform with a modular layout and consistent
                component system. Tables, forms, and detail views follow
                predictable patterns, allowing administrators to manage users
                efficiently without confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="project-section container">
        <div className="glass-panel">
          <div className="section-grid">
            <div className="section-left">
              <h2>My Contribution</h2>
            </div>
            <div className="section-right">
              <ul className="bullet-list">
                <li>Designed the entire web-based system from scratch</li>
                <li>Defined information architecture and module hierarchy</li>
                <li>Created reusable table and form patterns</li>
                <li>Designed consistent role-based management structure</li>
                <li>Delivered high-fidelity interactive prototypes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="next-project container">
        <hr className="divider" />
        <div className="next-header"><span>Next Project</span></div>
        <Link to="/projects/project-5" className="next-link">
          <h2>Warranty Management</h2>
          <ArrowRight size={32} />
        </Link>
      </section>

    </main>
  );
}
