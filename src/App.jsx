import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

const MainLayout = () => (
  <div className="bg-background text-white min-h-screen selection:bg-primary/30 selection:text-white">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <Skills />
    <Projects />
    <Education />
    <Certifications />
    <Contact />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects/:projectId" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;