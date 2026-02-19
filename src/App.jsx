import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar'; // Make sure the path is correct
import Home from './pages/Hoome';
import Works from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import ProjectFive from "./pages/ProjectFive";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* 1. The Navbar stays here so it shows on every page */}
      <Navbar /> 
      
      {/* 2. This area changes based on the URL */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works/project-1" element={<ProjectOne />} />
          <Route path="/works/project-2" element={<ProjectTwo />} />
          <Route path="/works/project-3" element={<ProjectThree />} />
          <Route path="/works/project-4" element={<ProjectFour />} />
          <Route path="/works/project-5" element={<ProjectFive />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;