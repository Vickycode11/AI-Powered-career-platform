import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    userId: "8", // Example user ID (should dynamically fetch based on logged-in user)
    name: "",
    email: "",
    contactInfo: "",
    address: "",
    collegeName: "",
    cgpa: "",
    profileImage: "",
  });
  const [isProfileFilled, setIsProfileFilled] = useState(false);

  // Fetch existing profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/profile/${profileData.userId}`);
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setProfileData(data); // Populate the form with existing data
            setIsProfileFilled(true); // Prevent editing
          }
        } else {
          console.log("No profile found for this user.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [profileData.userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Profile saved successfully!");
        setIsProfileFilled(true);
      } else {
        console.error("Failed to save profile:", data);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarHeading}>Welcome Back!</h2>
        <p style={styles.sidebarText}>
          {isProfileFilled
            ? "Your profile is already updated."
            : "Update your profile to get started!"}
        </p>
      </aside>

      <main style={styles.formContainer}>
        <h1 style={styles.pageTitle}>Update Profile</h1>
        {isProfileFilled ? (
          <p style={styles.infoText}>Your profile has been completed. Editing is disabled.</p>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
              { label: "Contact Info", name: "contactInfo", type: "text", placeholder: "Enter your contact info" },
              { label: "Address", name: "address", type: "text", placeholder: "Enter your address" },
              { label: "College Name", name: "collegeName", type: "text", placeholder: "Enter your college name" },
              { label: "CGPA", name: "cgpa", type: "text", placeholder: "Enter your CGPA" },
              { label: "Profile Image", name: "profileImage", type: "text", placeholder: "Profile image URL" },
            ].map((field, index) => (
              <div key={index} style={styles.inputContainer}>
                <label style={styles.inputLabel}>{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={profileData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={styles.inputField}
                  disabled={isProfileFilled} // Disable input if profile is filled
                />
              </div>
            ))}
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.saveButton} disabled={isProfileFilled}>
                Save Profile
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "90%",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    gap: "20px",
  },
  sidebar: {
    flex: "1",
    padding: "20px",
    backgroundColor: "#003366",
    color: "#fff",
    borderRadius: "8px",
    textAlign: "center",
  },
  sidebarHeading: {
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  sidebarText: {
    fontSize: "1rem",
  },
  formContainer: {
    flex: "2",
  },
  pageTitle: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#003366",
  },
  form: {
    display: "grid",
    gap: "20px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  inputLabel: {
    fontWeight: "bold",
  },
  inputField: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  buttonContainer: {
    textAlign: "center",
  },
  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  infoText: {
    textAlign: "center",
    fontSize: "1.2rem",
    margin: "20px 0",
  },
};

export default ProfilePage;
