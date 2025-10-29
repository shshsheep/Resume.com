import { Link } from 'react-router-dom'
import './contact.css'
import ins from '../picture/instagram.png'
import github from '../picture/github.png'

export default function ContactApp() {
  return (
    <div className="site-wrapper">
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

      <main className="site-main contact-bg">
        <div className="contact-main-inner">
          <h2>Contact</h2>
          <p>這裡放你的聯絡資訊。</p>
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
