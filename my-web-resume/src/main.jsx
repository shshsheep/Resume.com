import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AboutApp from './aboutMe/aboutMe.jsx'
import ResumeApp from './resume/resume.jsx'
import ProjectApp from './Project/Project.jsx'
import ContactApp from './Contact/Contact.jsx'
import PageTransition from './pagetransition.jsx'
import './index.css'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<PageTransition><AboutApp /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><ResumeApp /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectApp /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactApp /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/Resume.com'>
    <AnimatedRoutes />

    {/* <Routes> */}
      {/* <Route path="/" element={<Navigate to="/about" replace />} /> */}
      {/* <Route path="/about" element={<AboutApp />} /> */}
      {/* <Route path="/resume" element={<ResumeApp />} /> */}
      {/* <Route path="/projects" element={<ProjectApp />} /> */}
      {/* <Route path="/contact" element={<ContactApp />} /> */}
      {/* 若要其他頁面再加 route */}
    {/* </Routes> */}

  </BrowserRouter>
)
