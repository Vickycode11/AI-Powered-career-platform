import React from "react";

const resources = [
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Explore advanced React concepts like context, hooks, and render props.",
    videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
  },
  {
    id: 3,
    title: "Building a Full-Stack Application",
    description: "Create a full-stack application using React and Node.js.",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    description: "Master JavaScript essentials for modern web development.",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
  },
  {
    id: 5,
    title: "HTML & CSS Crash Course",
    description: "Get started with the building blocks of web development.",
    videoUrl: "https://www.youtube.com/embed/mU6anWqZJcc",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    description: "Learn how to create mobile-friendly, responsive websites.",
    videoUrl: "https://www.youtube.com/embed/srvUrASNj0s",
  },
  {
    id: 7,
    title: "Python for Beginners",
    description: "Learn Python programming from scratch.",
    videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
  },
  {
    id: 8,
    title: "Data Structures and Algorithms",
    description: "Understand data structures and algorithms with practical examples.",
    videoUrl: "https://www.youtube.com/embed/8hly31xKli0",
  },
  {
    id: 9,
    title: "Git and GitHub Essentials",
    description: "Learn version control and collaboration using Git and GitHub.",
    videoUrl: "https://www.youtube.com/embed/RGOj5yH7evk",
  },
  {
    id: 10,
    title: "Introduction to Node.js",
    description: "Discover how to use Node.js for backend development.",
    videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
  },
  {
    id: 11,
    title: "Introduction to Machine Learning",
    description: "Learn the basics of machine learning and AI.",
    videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
  },
  {
    id: 12,
    title: "DevOps Basics",
    description: "Understand the fundamentals of DevOps and CI/CD pipelines.",
    videoUrl: "https://www.youtube.com/embed/N4mEzFDjqtA",
  },
  {
    id: 13,
    title: "Cloud Computing with AWS",
    description: "An introduction to cloud computing services with AWS.",
    videoUrl: "https://www.youtube.com/embed/Ia-UEYYR44s", // Corrected URL for AWS Cloud Computing video
  },
  {
    id: 14,
    title: "Mobile App Development with Flutter",
    description: "Learn how to create cross-platform mobile apps using Flutter.",
    videoUrl: "https://www.youtube.com/embed/fq4N0hgOWzU",
  },
  {
    id: 15,
    title: "Cybersecurity Basics",
    description: "Introduction to cybersecurity principles and practices.",
    videoUrl: "https://www.youtube.com/embed/3Kq1MIfTWCE",
  },
];

const LearningResources = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Learning Resources</h1>
        <p>Explore curated resources to enhance your skills.</p>
      </header>
      <main style={styles.main}>
        {resources.map((resource) => (
          <div key={resource.id} style={styles.card}>
            <iframe
              style={styles.video}
              src={resource.videoUrl}
              title={resource.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div style={styles.content}>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
            </div>
          </div>
        ))}
      </main>
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
    marginBottom: "20px",
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
  },
  video: {
    width: "100%",
    height: "200px",
  },
  content: {
    padding: "15px",
  },
};

export default LearningResources;
