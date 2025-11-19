import { Link } from 'react-router-dom'
import { useRef, useState, useEffect }  from 'react'
import {motion, AnimatePresence} from "framer-motion"
import './Project.css'
import ins from '../picture/instagram.png'
import github from '../picture/github.png'

export default function ProjectApp() {

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
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li className='text-red-600'><Link to="/projects">Projects</Link></li>
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

      <main className="site-main project-bg">
        <div className="project-main-inner">

          <h2 className="text-black text-[35px] font-black py-15"><span className='title-dot'></span> Projects</h2>
          <p className='pb-15 text-[14px] font-bold'>
            Showcasing selected projects completed independently <br />
            during my four years at university.
          </p>

          <ul className="project-list">

            <li className="project-item">
              <div className='pro-item-right'>
              <h3 className="text-[20px] font-black text-left text-blue-500">"最速奧迪R8"</h3>
              <p className="text-[14px] font-bold text-left pt-2 pb-7">Raspberry Pi Web-Controlled RC Car</p>
              <p className="text-[13px] text-left pr-5">
                Built a web-controlled RC car using Raspberry Pi, integrating hardware control with a simple web interface.
              </p>
              </div>
              <div className='pro-item-left'>
                <h5 className="pt-2 pb-2">__</h5>
                <ul>
                  <li className='pro-tech'><span className='dot'></span>Project Date: 2022</li>
                  <li className='pro-tech'><span className='dot'></span>Role: Hardware Developer</li>
                  <li className='pro-tech'><span className='dot'></span>Languages: Python, HTML, JavaScript</li>
                  <li className='pro-tech'><span className='dot'></span>Framework / Libraries: Flask, RPi.GPIO</li>
                  <li className='pro-tech'><span className='dot'></span>Hardware: Raspberry Pi</li>
                </ul>
              </div>
            </li>

            <li className="project-item">
              <div className='pro-item-right'>
              <h3 className="text-[20px] font-black text-left text-blue-500">YoBroAI</h3>
              <p className="text-[14px] font-bold text-left pt-2 pb-7">Travel Planning Generator</p>
              <p className="text-[13px] text-left pr-5">
                Developed a local AI-based travel planning generator using Mistral‑7B, integrating backend logic with a React frontend to create personalized itineraries.
              </p>
              </div>
              <div className='pro-item-left'>
                <h5 className="pt-2 pb-2">__</h5>
                <ul>
                  <li className='pro-tech'><span className='dot'></span>Project Date: Nov 2024 – May 2025</li>
                  <li className='pro-tech'><span className='dot'></span>Role: Backend Developer</li>
                  <li className='pro-tech'><span className='dot'></span>Languages: Python, HTML, JavaScript</li>
                  <li className='pro-tech'><span className='dot'></span>Frameworks: React, AutoGen, LangChain</li>
                  <li className='pro-tech'><span className='dot'></span>Models: Qwen3-VL</li>
                  <li className='pro-tech'><span className='dot'></span>Database / Tools: SQL Server, LM Studio</li>
                </ul>
              </div>
            </li>
            {/* 新增(專案經歷) */}

          </ul>

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
