import { useState, useEffect } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Load data dari localStorage saat component mount
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Simpan ke localStorage setiap kali formData berubah
  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    localStorage.removeItem('contactFormData');
    alert('Form berhasil dikosongkan!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}! Pesan Anda telah tersimpan di localStorage.`);
  };

  return (
    <div className="contact page">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="contact-intro">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk 
          menghubungi saya melalui form di bawah ini atau media sosial.
        </p>

        <div className="contact-content">
          <div className="contact-form-wrapper glass-card">
            <h2 className="form-title">Send Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan Anda..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                <button 
                  type="button" 
                  onClick={handleClearForm} 
                  className="btn btn-outline"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-card glass-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>089649982681</p>
            </div>

            <div className="contact-info-card glass-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>ubedahmmad@gmail.com</p>
            </div>

            <div className="contact-info-card glass-card">
              <div className="info-icon">🌐</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a 
                  href="https://github.com/syi-ahmad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/na-no-694004372/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/syi_ahmmad/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
