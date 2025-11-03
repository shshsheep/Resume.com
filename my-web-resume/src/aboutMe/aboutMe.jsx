import { Link } from 'react-router-dom'
import { useRef, useState, useEffect }  from 'react'
import {motion, AnimatePresence} from "framer-motion"
import './aboutMe.css'
import ins from '../picture/instagram.png'
import github from '../picture/github.png'
import duck from '../picture/duck.png'
import PageTransition from '../pagetransition'

export default function AboutApp() {

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

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="header-inner flush">

          <h2 className="site-title">shshsheep <span className="px-1.5 text-[0.95rem]">/ Computer Science Enthusiast</span> </h2>
                    
          <nav className="site-nav desktop-nav" aria-label="Main navigation">
            <ul>
              <li className='text-red-600'><Link to="/about">About Me</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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

      <main className="site-main aboutMe-bg">
        <div className="aboutMe-main-inner">
            {/* 左邊卡片 */}
            <div className="profile-card">  

              <img src={duck} alt="Profile" className="profile-image" />

              <h2 className="name">shshsheep</h2>
              <div className="divider"></div>
              <p className="name-tag">Computer Science Enthusiast</p>

              <div className="profile-icons">
                <a href="https://www.instagram.com/sheep_01_09/" target="_blank" rel="noopener noreferrer">
                  <img src={ins} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://github.com/shshsheep" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className="social-icon" />
                </a>
              </div>
            </div>
            
            {/* 右邊內容 */}
            <div className="intro">
             <h1 className="text-black text-7xl font-black py-5">Hello</h1>
             <p className="text-black text-xl font-bold py-2 pl-1">A CS grad exploring AI.</p>

             <div className="button-group">
                <button className="button-style"><Link to="/resume">RESUME</Link></button>
                <button className="button-style"><Link to="/projects">PROJECTS</Link></button>
             </div>

              <p className="text-black py-2">
                A CS graduate from Southern Taiwan University of Science and Technology.
             </p>
              <p className="text-black py-2">
               Positive, Driven, and Team-oriented, Turning challenges into opportunities.
              </p>
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
