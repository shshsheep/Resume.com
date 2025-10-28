import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AboutApp from './aboutMe/aboutMe.jsx'
import ResumeApp from './resume/resume.jsx'
import ProjectApp from './Project/Project.jsx'
import ContactApp from './Contact/Contact.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<AboutApp />} />
      <Route path="/resume" element={<ResumeApp />} />
      <Route path="/projects" element={<ProjectApp />} />
      <Route path="/contact" element={<ContactApp />} />
      {/* 若要其他頁面再加 route */}
    </Routes>
  </BrowserRouter>
)
