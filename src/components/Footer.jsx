function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <p style={styles.text}>
          © 2024 Ubaidillah Syfa Ahmad. Made with ❤️ using React
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(124, 131, 253, 0.1)',
    padding: '30px 0',
    marginTop: '50px',
  },
  text: {
    textAlign: 'center',
    color: '#1e293b',
    fontSize: '14px',
  }
};

export default Footer;
