import React from 'react';

function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#FF5A5F',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>AirBnB Clone</div>
      <div>
        <a href="#" style={{ marginRight: '15px', color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
