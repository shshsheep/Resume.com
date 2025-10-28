import { Link } from 'react-router-dom'
import './aboutMe.css'
import ins from '../picture/instagram.png'
import github from '../picture/github.png'
import duck from '../picture/duck.png'

export default function AboutApp() {
  return (
    <div className="about-page">
      <header className="site-header">
        <div className="header-inner flush">
          <h2 className="site-title">Jay Yang <span className="px-1.5 text-[0.95rem]">/ Computer Science Enthusiast</span> </h2>
                    
          <nav className="site-nav" aria-label="Main navigation">
            <ul>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="main-inner">
            {/* 左邊卡片 */}
            <div className="profile-card">  

              <img src={duck} alt="Profile" className="profile-image" />

              <h2 className="name">Jay Yang</h2>
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
             <p className="text-black text-xl font-bold py-2 pl-1">Jay — CS grad exploring AI.</p>

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
