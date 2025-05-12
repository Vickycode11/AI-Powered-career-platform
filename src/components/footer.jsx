import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <h2 style={styles.title}>MENTORX - Career Guidance With AI.</h2> {/* White color applied */}
        <p>Shivbasav nagar belgaum</p>
        <p>590010</p>
        <p>Phone : 8792928237</p>
      </div>
      <form style={styles.form}>
        <h3>Contact Us</h3>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Comments" style={styles.textarea} required />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '40px',
    backgroundColor: '#004080',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  title: { color: '#fff' }, // Style applied for the title
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', borderRadius: '5px', border: '1px solid #ddd' },
  textarea: { padding: '10px', height: '80px', borderRadius: '5px', border: '1px solid #ddd' },
  button: { padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' },
};

export default Footer;
