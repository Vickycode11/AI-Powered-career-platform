import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import landingImage from '../assets/landing.png'; // Ensure the path matches where you store the image

const App = () => {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        {/* Hero Section with the Image */}
        <section style={styles.heroSection}>
          <img src={landingImage} alt="Landing" style={styles.heroImage} />
        </section>
        {/* "Who We Are" Section */}
        <section id="about" style={styles.section}>
          <h2>Who We Are</h2>
          <p>

            Career Guidance is a webpage that offers insights into life, social, and school skills.
            We strive to give you world-class advice on career choices based on interests, IQ, and a stable position in the days of tomorrow.
            With a team of diversity in culture and ethnicity, we give you access to banks of information from all corners of the globe.
            We guarantee you a blissful experience as we help you navigate the perilous waters of life after high school on this great journey.
            Join us and be part of the experience.
          </p>
        </section>
        {/* Resources Section */}
        <section id="resources" style={styles.section}>
          <h2>Resources</h2>
          <p>
          Explore a wealth of curated resources designed to guide you toward your dream career. Our platform provides access to personalized learning materials, career insights, industry trends,
           and skill-building tools tailored to your interests and goals. Whether you're a student, a professional, or someone looking to switch careers, our comprehensive resource hub ensures you 
           stay ahead in a competitive job market. From video tutorials and expert articles to recommended courses and certifications, everything you need to grow is just a click away. Start your journey to success today!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  main: { padding: '20px', textAlign: 'center' },
  heroSection: {
    position: 'relative',
    textAlign: 'center',
    color: '#fff',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional for better readability
    padding: '20px',
    borderRadius: '10px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  section: { marginBottom: '40px' },
};

export default App;
