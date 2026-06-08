import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home page">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Ubaidillah Syfa Ahmad</span>
              </h1>
              <h2 className="hero-subtitle">
                Frontend Developer & Graphic Design Enthusiast
              </h2>
              <p className="hero-description">
                Seorang siswa SMA IT HSI IDN yang passionate dalam dunia teknologi 
                dan desain grafis. Saya senang mengeksplorasi cara-cara baru untuk 
                menciptakan pengalaman digital yang menarik dan bermakna.
              </p>
              <div className="hero-buttons">
                <Link to="/project" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="floating-card glass-card">
              <div className="avatar">
                <span className="avatar-text">UA</span>
              </div>
              <div className="card-content">
                <h3>Ubaidillah Syfa Ahmad</h3>
                <p>XI B - SMA IT HSI IDN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
