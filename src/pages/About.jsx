import '../styles/about.css';

function About() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 }
  ];

  return (
    <div className="about page">
      <div className="container">
        <h1 className="section-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-profile glass-card">
            <div className="profile-image">
              <span className="profile-text">UA</span>
            </div>
            <h2 className="profile-name">Ubaidillah Syfa Ahmad</h2>
            <p className="profile-role">Frontend Developer & Graphic Designer</p>
          </div>
          
          <div className="about-details">
            <div className="detail-card glass-card">
              <h3 className="detail-title">📖 Tentang Saya</h3>
              <p className="detail-text">
                Saya Ubaidillah Syifa Ahmad, seorang siswa di SMA IT HSI IDN yang 
                memiliki passion besar dalam dunia teknologi, khususnya desain grafis. 
                Bakat dan kreativitas saya tercermin dalam berbagai karya yang 
                menggabungkan estetika dan fungsi.
              </p>
            </div>
            
            <div className="detail-card glass-card">
              <h3 className="detail-title">🎓 Pendidikan</h3>
              <div className="education-item">
                <h4>SMA IT HSI IDN</h4>
                <p>Kelas XI B</p>
                <p className="education-year">2023 - Sekarang</p>
              </div>
            </div>
            
            <div className="detail-card glass-card">
              <h3 className="detail-title">📧 Kontak</h3>
              <div className="contact-info">
                <p>📱 089649982681</p>
                <p>✉️ ubedahmmad@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass-card">
                <div className="skill-icon">
                  <span className="skill-emoji">
                    {skill.name === 'HTML' && '🌐'}
                    {skill.name === 'CSS' && '🎨'}
                    {skill.name === 'JavaScript' && '⚡'}
                    {skill.name === 'React' && '⚛️'}
                  </span>
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="skill-level">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
