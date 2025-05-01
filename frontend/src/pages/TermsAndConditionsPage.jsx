import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditionsPage = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleAgree = () => {
    navigate("/signup"); // Redirect to the signup page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms and Conditions</h1>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          Welcome to our Career Guidance system! By using our services, you agree to the following terms and conditions.
        </p>

        <h3 style={styles.subHeading}>1. Acceptance of Terms</h3>
        <p style={styles.paragraph}>
          By accessing or using the Career Guidance system, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you are prohibited from using our services.
        </p>

        <h3 style={styles.subHeading}>2. User Responsibilities</h3>
        <p style={styles.paragraph}>
          You agree to provide accurate and complete information when signing up and using the services. You are responsible for maintaining the confidentiality of your account details and for all activities under your account.
        </p>

        <h3 style={styles.subHeading}>3. Privacy Policy</h3>
        <p style={styles.paragraph}>
          We are committed to protecting your privacy. Any personal data you provide will be used in accordance with our Privacy Policy. Please review our Privacy Policy for more information.
        </p>

        <h3 style={styles.subHeading}>4. Modifications to the Service</h3>
        <p style={styles.paragraph}>
          We reserve the right to modify, suspend, or discontinue any part of the Career Guidance system at any time, with or without notice.
        </p>

        <h3 style={styles.subHeading}>5. Account Termination</h3>
        <p style={styles.paragraph}>
          We reserve the right to terminate your account if we determine that you have violated these terms or engaged in unauthorized activities.
        </p>

        <h3 style={styles.subHeading}>6. Limitation of Liability</h3>
        <p style={styles.paragraph}>
          Our Career Guidance system is provided "as is" without warranties of any kind. We are not liable for any damages resulting from the use of the system, including but not limited to direct, indirect, or consequential damages.
        </p>

        <h3 style={styles.subHeading}>7. Governing Law</h3>
        <p style={styles.paragraph}>
          These terms and conditions are governed by the laws of the jurisdiction in which the service is operated. Any legal disputes will be resolved within the appropriate courts.
        </p>

        <h3 style={styles.subHeading}>8. Agreement</h3>
        <p style={styles.paragraph}>
          By using our Career Guidance system, you acknowledge that you have read and understood these terms and agree to be bound by them.
        </p>

        <div style={styles.buttonContainer}>
          <button style={styles.agreeButton} onClick={handleAgree}>
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "30px",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5em",
    marginBottom: "20px",
    color: "#333",
  },
  content: {
    fontSize: "1em",
    color: "#555",
    lineHeight: "1.6",
  },
  paragraph: {
    marginBottom: "15px",
  },
  subHeading: {
    fontSize: "1.5em",
    marginTop: "20px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },
  agreeButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
};

export default TermsAndConditionsPage;
