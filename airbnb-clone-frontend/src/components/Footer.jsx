import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#008489',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <p>© 2025 AirBnB Clone. All rights reserved.</p>
      <div style={{ marginTop: '0.5rem' }}>
        <a href="#" style={{ color: '#fff', marginRight: '1rem' }}>About</a>
        <a href="#" style={{ color: '#fff', marginRight: '1rem' }}>Help</a>
        <a href="#" style={{ color: '#fff' }}>Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
