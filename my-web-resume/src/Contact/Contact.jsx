import { Link } from 'react-router-dom'
import './contact.css'
import ins from '../picture/instagram.png'
import github from '../picture/github.png'

export default function ContactApp() {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="header-inner flush">
          <h2 className="site-title">shshsheep <span className="px-1.5 text-[0.95rem]">/ Computer Science Enthusiast</span> </h2>

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

          <h2 className="text-black text-[35px] font-black py-15 text-center"><span className='title-dot'></span> Contact</h2>

          <div className="contact-card">
            <form action="">

              <div className="form-name">
                <div className='form-name-input'>
                  <label >First Name *</label>
                  <input type="text" required />
                </div>
                <div className='form-name-input'>
                  <label >Last Name *</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="form-full-line">
                <label >Email Address *</label>
                <input type="email" required />
              </div>

              <div className="form-full-line">
                <label >Subject </label>
                <input type="text" />
              </div>

              <div className="form-full-line">
                <label >Message </label>
                <textarea rows="3"></textarea>
              </div>

                <button className='button-send' type="submit">Send</button>
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
