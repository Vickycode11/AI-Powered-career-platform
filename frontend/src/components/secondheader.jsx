import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>MENTORX - Career Guidance With AI</h1> {/* White color applied */}
      <nav style={styles.nav}>
        <a href="/LearningResources" style={styles.link}>Resources</a>
        <a href="#contact" style={styles.link}>Contact</a>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#004080',
    color: '#fff',
  },
  title: { 
    margin: 0,
    color: '#fff', // Explicitly set title color to white
  },
  nav: { display: 'flex', gap: '15px' },
  link: { color: '#fff', textDecoration: 'none' },
};

export default Header;
