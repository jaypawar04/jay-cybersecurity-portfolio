function Contact() {
  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="section-container">
          <div className="section-heading contact-heading">
            <span className="section-tag">// CONTACT</span>

            <h2>Start a conversation.</h2>

            <p>
              Interested in cybersecurity, collaboration, or discussing
              security projects? Feel free to get in touch.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">✉</div>
              <h3>Email</h3>
              <a href="mailto:pawarjay2002@gmail.com">
                pawarjay2002@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">in</div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/jay-pawar-120a01257/">
                Connect with me
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">⌘</div>
              <h3>GitHub</h3>
              <a href="https://github.com/jaypawar04">
                View my projects
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">⌖</div>
              <h3>Location</h3>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            JAY<span>.</span>
          </div>

          <p>© 2026 Jay Ananda Pawar. Built with React.</p>

          <div className="footer-status">
            <span className="status-dot"></span>
            Open to opportunities
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;