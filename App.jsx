import { useEffect, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">

      {/* VIDEO BACKGROUND */}
      <video className="bg-video" autoPlay loop muted>
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* NAV */}
      <nav className="navbar">
        <h1>Mphela Academy</h1>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Enroll</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div
          className="hero-content"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        >
          <h1>Design. Create. Master.</h1>
          <p>Art & Jewellery Academy for Future Creators</p>
        </div>
      </header>

      {/* SOCIAL ICON BAR */}
      <div className="social-bar">
        <a href="https://wa.me/27634668020" target="_blank">💬</a>
        <a href="tel:+27635824293">📞</a>
        <a href="https://www.linkedin.com/in/keith-gotohori" target="_blank">in</a>
        <a href="https://github.com" target="_blank">GH</a>
        <a href="https://twitter.com" target="_blank">𝕏</a>
      </div>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Mphela Academy</h2>
        <p>
          We train artists and jewellery designers into real-world creators
          who can design, build, and monetize their craft.
        </p>
      </section>

      {/* COURSES */}
      <section id="courses" className="section grid">
        <h2>Courses</h2>

        <div className="card">Jewellery Basics</div>
        <div className="card">Advanced Art Design</div>
        <div className="card">Bead Craft Mastery</div>
        <div className="card">Creative Business Systems</div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section dark">
        <h2>Student Work</h2>

        <div className="gallery">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Enroll Now</h2>

        <form>
          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Apply</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h3>Mphela Academy</h3>
          <p>Where creativity becomes income.</p>
        </div>

        <div className="footer-links">
          <a href="https://wa.me/27634668020">WhatsApp</a>
          <a href="tel:+27635824293">Call</a>
          <a href="https://www.linkedin.com/in/keith-gotohori">LinkedIn</a>
        </div>

        <p className="copyright">© 2026 Mphela Academy</p>
      </footer>
    </div>
  );
}
