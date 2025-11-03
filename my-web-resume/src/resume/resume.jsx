import { Link } from 'react-router-dom'
import { useRef, useState, useEffect }  from 'react'
import {motion, AnimatePresence} from "framer-motion"
import './resume.css'
import ins from '../picture/instagram.png'
import github from '../picture/github.png'

export default function ResumeApp() {

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
              <li className='text-red-600'><Link to="/resume">Resume</Link></li>
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

      <main className="site-main resume-bg">
          <div className="resume-main-inner">

              <h2 className="text-black text-[35px] font-black py-15"><span className='title-dot'></span> Resume</h2>

              <ul className="resume-list">

                <h3 className="text-black text-[25px] font-bold text-left pb-3">Experience</h3>

                <li className="resume-item">
                  <div className='exp-item-left'>
                    <h3 className='py-1 text-[21px] font-black text-blue-500'>2024 - 2025</h3>
                    <p className='pb-1.5 text-[15px]'>MAE-"模組副工程師"</p>
                    <p className='pb-1.5 text-[14px]'>TSMC</p>
                    <p className='pb-1.5 text-[12px]'>Tainan, Taiwan </p>
                  </div>
                  <div className='exp-item-right'>
                    <p className='pt-12 text-[14px]'>
                      I diligently fulfilled my responsibilities in the company, and whenever I had the opportunity, I learned new skills and knowledge so that I could become a valuable asset to the company.
                    </p>
                  </div>
                </li>
                {/* 新增(工作經歷) */}

                <h3 className="text-black text-[25px] font-bold text-left pb-3">Education</h3>

                <li className="resume-item">
                  <div className='edu-item-left'>
                    <h3 className='py-1 text-[21px] font-black text-blue-500'>2021 - 2025</h3>
                    <p className='pb-2 text-[15px]'>Southern Taiwan University of Science and Technology</p>
                    <p className='pb-2 text-[12px]'>Bachelor of Science (B.Sc.) in Computer Science</p>
                    <p className='pb-1.5 text-[12px]'>Tainan, Taiwan </p>
                  </div>
                  <div className='edu-item-right'>
                    <p className='pt-12 text-[14px]'>
                      During my studies, I maintained above-average grades and once ranked fourth in my class. I got along well with my classmates and often helped each other with academic questions.
                    </p>
                  </div>
                </li>
                {/* 新增(教育背景) */}

                <h3 className="pb-3"></h3>

                <li className="resume-skills-item">
                  <h3 className="text-black text-[20px] font-black text-left pt-7 pb-5">Professional Certificates</h3>
                  <ul className='skills-item'>
                    <li className='text-[13px]'><span className='dot'></span>Industrial Electronics Technician, Class C</li>
                    <li className='PC-name'><span className='dot'></span>Computer Hardware Technician, Class C</li>
                    <li className='PC-name'><span className='dot'></span>OCP Java SE 11 Developer</li>
                  </ul>
                  <h3 className="text-black text-[20px] font-black text-left pt-7 pb-5">Competition Certificates</h3>
                  <ul className='skills-item'>
                    <li className='PC-name'><span className='dot'></span>2019 – Electric Vehicle Creative Competition, Honorable Mention</li>
                    <li className='PC-name'><span className='dot'></span>2019 – E-sports Practical Training Camp, 3rd Place</li>
                    <li className='PC-name'><span className='dot'></span>2021 – Smart Energy Saving Innovation & Creativity Competition, Honorable Mention</li>
                  </ul>
                </li>
                {/* 新增(技能) */}
                
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
