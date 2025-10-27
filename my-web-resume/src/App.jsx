import { useState } from 'react'
import './App.css'
import ins from './picture/instagram.png'
import github from './picture/github.png'

function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="header-inner flush">
          <h2 className="site-title">Jay's Resume</h2>

          <nav className="site-nav" aria-label="Main navigation">
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="main-inner">
          <h2>Vite + React</h2>
          <p>在這裡放你的履歷內容或元件 </p>
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
                  <a href="https://www.instagram.com/sheep_01_09/">
                    <img src={ins} alt="Instagram" className="social-icon" />
                  </a>
                  <a href="https://github.com/shshsheep">
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

export default App
