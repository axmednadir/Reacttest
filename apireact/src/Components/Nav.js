
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><NavLink style={styles.navLink} to="/">Ana Sayfa</NavLink></li>
        <li style={styles.navItem}><NavLink style={styles.navLink} to="/about">Hakkında</NavLink></li>
        <li style={styles.navItem}><NavLink style={styles.navLink} to="/contact">İletişim</NavLink></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '15px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Nav;
