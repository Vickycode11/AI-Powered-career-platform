import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from '../components/secondheader'; // Replacing Header with SecondHeader
import Footer from '../components/footer';
import landingImage from '../assets/landing.png'; // Ensure the path matches where you store the image
import image1 from '../assets/aptitude.png';  // Replace with actual image paths
import image3 from '../assets/counslers.png';  // Replace with actual image paths

const Homepage = () => {
  const [showChatbot, setShowChatbot] = useState(false);  // State to toggle chatbot visibility

  // Toggle chatbot visibility
  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      <SecondHeader /> {/* Use SecondHeader here */}
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

        {/* Images Section with Links */}
        <section id="resources" style={styles.section}>
          <h2>Explore Our Resources</h2>
          <div style={styles.imageContainer}>
            <Link to="/testPage">
              <img src={image1} alt="Aptitude Test" style={styles.image} />
            </Link>
            <Link to="/Counselors">
              <img src={image3} alt="Counselors" style={styles.image} />
            </Link>
          </div>
        </section>

        {/* Button to Chatbot Page */}
        <section style={styles.section}>
          <button onClick={handleChatbotClick} style={styles.button}>
            Chat With Me
          </button>
        </section>

        {/* Display Chatbot in the same tab when clicked */}
        {showChatbot && (
          <section style={styles.chatbotContainer}>
            <iframe
              src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/08/14/20241208142753-51W79098.json"
              width="100%"
              height="500px"
              frameBorder="0"
              title="Chatbot"
            />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  main: { 
    padding: '20px', 
    textAlign: 'center', 
    backgroundColor: '#f4f4f9',  // Light background color for overall page
  },
  heroSection: {
    position: 'relative',
    textAlign: 'center',
    color: '#fff',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: '600px', // Set max height for better view
  },
  section: {
    marginBottom: '40px',
    padding: '10px', // Add padding for spacing
  },
  imageContainer: { 
    display: 'flex', 
    justifyContent: 'space-between',  // Ensures images fit tightly across
    marginBottom: '30px',
    padding: 0,  // Ensures no extra padding/margin is added
  },
  image: { 
    width: '33.33%',  // Adjusted to ensure 3 images take up full screen width
    height: 'auto', 
    objectFit: 'cover', // Ensures the image maintains aspect ratio
    padding: 0, // Removes any extra padding
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff5722',  // Primary button color
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px', // Slightly larger text size
    transition: 'background-color 0.3s ease',
  },
  chatbotContainer: {
    marginTop: '30px',  // Adds space between the button and the chatbot
    width: '100%',
  },
};

export default Homepage;
