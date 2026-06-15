import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <img 
          src="profile_photo.jpeg" 
          alt="Your Profile" 
          className="profile-img" 
        />
        <h1 className="name">Eklavya</h1>
        <p className="tagline">First-year BTech Computer Science Student</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I’m Eklavya! I’m passionate about AI/ML, web design, and coding. 
          I love experimenting with embeddings, building ML models, and designing 
          clean workflows. My goal is to grow as a developer while sharing my 
          projects and learnings.
        </p>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href="mailto:yourgmail@gmail.com">yourgmail@gmail.com</a></li>
          <li>Phone: <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2026 Eklavya | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
