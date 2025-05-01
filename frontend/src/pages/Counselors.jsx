import React from "react";
import Footer from "../components/footer"; // Adjust the path as needed

const counselors = [
  {
    id: 1,
    name: "John Doe",
    title: "Career Counselor",
    linkedinUrl: "https://www.linkedin.com/in/johndoe/",
    youtubeUrl: "https://www.youtube.com/channel/UC1234567890",
    imageUrl: "https://via.placeholder.com/150", // Placeholder profile image
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Career Coach",
    linkedinUrl: "https://www.linkedin.com/in/janesmith/",
    youtubeUrl: "https://www.youtube.com/channel/UC0987654321",
    imageUrl: "https://via.placeholder.com/150", // Placeholder profile image
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Personal Development Specialist",
    linkedinUrl: "https://www.linkedin.com/in/emilyjohnson/",
    youtubeUrl: "https://www.youtube.com/channel/UC3456789012",
    imageUrl: "https://via.placeholder.com/150", // Placeholder profile image
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Workplace Strategist",
    linkedinUrl: "https://www.linkedin.com/in/michaelbrown/",
    youtubeUrl: "https://www.youtube.com/channel/UC4567890123",
    imageUrl: "https://via.placeholder.com/150", // Placeholder profile image
  },
];

const Counselors = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Counselors</h1>
        <p>Connect with our professional counselors for career guidance.</p>
      </header>
      <main style={styles.main}>
        {counselors.map((counselor) => (
          <div key={counselor.id} style={styles.card}>
            <img src={counselor.imageUrl} alt={counselor.name} style={styles.image} />
            <div style={styles.content}>
              <h2>{counselor.name}</h2>
              <p>{counselor.title}</p>
              <div style={styles.links}>
                <a
                  href={counselor.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  LinkedIn
                </a>
                <a
                  href={counselor.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "8px",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  image: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "15px",
  },
  content: {
    textAlign: "center",
  },
  links: {
    marginTop: "10px",
  },
  link: {
    display: "inline-block",
    margin: "0 10px",
    padding: "8px 15px",
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  linkHover: {
    backgroundColor: "#0056b3",
  },
};

export default Counselors;
