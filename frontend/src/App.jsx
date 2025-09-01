import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          {/* Top Bar */}
          <div className="top-bar">
            <div className="contact-info">
              📞 +62 564 456 789
            </div>
            <div className="social-links">
              <span className="social-icon">📧</span>
              <span className="social-icon">📘</span>
              <span className="social-icon">🐦</span>
              <span className="social-icon">📷</span>
              <span className="social-icon">📺</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="navbar">
            <div className="logo">
              <h2>MEMORY TEST FOR KIDS</h2>
              <p>Your Partner, Your Child's Future</p>
            </div>
            <ul className="nav-menu">
              <li><a href="#home">HOME</a></li>
              <li><a href="#blog">BLOG</a></li>
              <li><a href="#courses">ALL TESTS ▼</a></li>
              <li><a href="#team">TEAM</a></li>
              <li><a href="#contact">CONTACT US</a></li>
            </ul>
          </nav>

          {/* Hero Content */}
          <div className="hero-content">
            <div className="hero-text">
              <h1>Boost Your Brain Power!</h1>
              <p>Fun and interactive IQ challenges designed for kids. Let’s make
            learning exciting while testing creativity, logic, and memory.</p>
            </div>
            
            {/* Scattered Letters */}
            <div className="scattered-letters">
              <span className="letter letter-1" style={{color: '#ef1010ff'}}>A</span>
              <span className="letter letter-2" style={{color: '#4ECDC4'}}>🧠</span>
              <span className="letter letter-3" style={{color: '#45B7D1'}}>🧠</span>
              <span className="letter letter-4" style={{color: '#0a7f49ff'}}>D</span>
              <span className="letter letter-5" style={{color: '#FFEAA7'}}>E</span>
              <span className="letter letter-6" style={{color: '#b12bb1ff'}}>F</span>
              <span className="letter letter-7" style={{color: '#98D8C8'}}>G</span>
              <span className="letter letter-8" style={{color: '#F7DC6F'}}>H</span>
              <span className="letter letter-9" style={{color: '#ab59ceff'}}>I</span>
              <span className="letter letter-10" style={{color: '#3f94cdff'}}>j</span>
              <span className="letter letter-11" style={{color: '#F8C471'}}>🧠</span>
              <span className="letter letter-12" style={{color: '#82E0AA'}}>🧠</span>
              <span className="letter letter-13" style={{color: '#F1948A'}}>🧠</span>
              <span className="letter letter-14" style={{color: '#85C1E9'}}>N</span>
              <span className="letter letter-15" style={{color: '#ce271eff'}}>O</span>
              <span className="letter letter-16" style={{color: '#1f12d2ff'}}>Q</span>
              <span className="letter letter-17" style={{color: '#F7DC6F'}}>V</span>
              
            </div>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="courses-header">
            <h2>Our Commnn Tests</h2>
            <button className="view-all-btn">View All</button>
          </div>
          
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image geography">
                <div className="image-placeholder">
                  🏛🗺🌍
                </div>
              </div>
              <span className="course-tag">Geography</span>
            </div>
            
            <div className="course-card">
              <div className="course-image creative">
                <div className="image-placeholder">
                  ⛄❄🎨
                </div>
              </div>
              <span className="course-tag">Creative Visiting</span>
            </div>
            
            <div className="course-card">
              <div className="course-image science">
                <div className="image-placeholder">
                  🌌🪐🌟
                </div>
              </div>
              <span className="course-tag">Science</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;