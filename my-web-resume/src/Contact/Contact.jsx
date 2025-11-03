import React, { useRef, useState, useEffect } from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { Link } from 'react-router-dom'
import './contact.css'
import ins from '../picture/instagram.png'
import github from '../picture/github.png'
import emailJs from 'emailjs-com'

// Service ID:service_tldoeor
// Template ID:template_1o45cvq
// public key: qkiucFGMR3Dq8pz0q

const ServiceID = 'service_tldoeor';
const TemplateID = 'template_1o45cvq';
const PublicKey = 'qkiucFGMR3Dq8pz0q';

export default function ContactApp() {

  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuOpen){
            if(
            menuRef.current &&
            buttonRef.current &&
            !menuRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
          ) {
            setMenuOpen(false);
          }
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);


  const [form,setform] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullname = `${form.firstName} ${form.lastName}`;

    emailJs.send(
      ServiceID,
      TemplateID,
      {
        name: fullname,
        email: form.email,
        Subject: form.subject,
        message: form.message
      }, 
      PublicKey
    )
    .then((result) => {
    alert("Email sent successfully!");
    })
    .catch((error) => {
    alert("Failed to send email: " + error.text);
    });
  }

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="header-inner flush">
          <h2 className="site-title">shshsheep <span className="px-1.5 text-[0.95rem]">/ Computer Science Enthusiast</span> </h2>

          <nav className="site-nav desktop-nav" aria-label="Main navigation">
            <ul>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li className='text-red-600'><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Hamburger Button */}
          <div ref={buttonRef} className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              ref={menuRef} 
              className="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li onClick={() => setMenuOpen(false)}><Link to="/about">About Me</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link to="/resume">Resume</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link to="/projects">Projects</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

      </header>

      <main className="site-main contact-bg">
        <div className="contact-main-inner">

          <h2 className="text-black text-[35px] font-black py-15 text-center"><span className='title-dot'></span> Contact</h2>

          <div className="contact-card">
            <form onSubmit ={handleSubmit}>

              <div className="form-name">
                <div className='form-name-input'>
                  <label >First Name *</label>
                  <input type="text" name='firstName' value={form.firstName} onChange={handleChange} required />
                </div>
                <div className='form-name-input'>
                  <label >Last Name *</label>
                  <input type="text" name='lastName' value={form.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-full-line">
                <label >Email Address *</label>
                <input type="email" name='email' value={form.email} onChange={handleChange} required />
              </div>

              <div className="form-full-line">
                <label >Subject </label>
                <input type="text" name='subject' value={form.subject} onChange={handleChange}/>
              </div>

              <div className="form-full-line">
                <label >Message </label>
                <textarea rows="3" name='message' value={form.message} onChange={handleChange}></textarea>
              </div>

                <button className='button-send' type="submit">Submit</button>
            </form>
          </div>

        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p>© {new Date().getFullYear()} by shshsheep</p>
          </div>

          <nav className="footer-right" aria-label="Footer contact">
            <ul>
              <li>
                <p className="footer-label">Call</p>
                <p className="footer-value">0965423420</p>
              </li>
              <li>
                <p className="footer-label">Email</p>
                <p className="footer-value">tung.lung38@gmail.com</p>
              </li>
              <li>
                <p className="footer-label">Social</p>
                <div className="social-links">
                  <a href="https://www.instagram.com/sheep_01_09/" target="_blank" rel="noopener noreferrer">
                    <img src={ins} alt="Instagram" className="social-icon" />
                  </a>
                  <a href="https://github.com/shshsheep" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
