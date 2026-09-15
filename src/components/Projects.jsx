function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-tag">// PROJECTS</span>
          <h2>Follow the signal.</h2>
          <p>
            Practical cybersecurity projects focused on detection, assessment,
            and securing digital infrastructure.
          </p>
        </div>

        <div className="projects-grid">

          {/* PROJECT 01 */}
          <div className="project-card">
            <div className="project-top">
              <div className="project-icon">🛡</div>
              <span className="project-number">01</span>
            </div>

            <div className="project-status">
              <span className="status-dot"></span>
              Completed
            </div>

            <h3>Phishing Detection Platform</h3>

            <p>
              A web-based cybersecurity platform designed to analyze URLs and
              identify potential phishing threats.
            </p>

            <div className="project-technologies">
              <span>Python</span>
              <span>FastAPI</span>
              <span>React</span>
              <span>SQLAlchemy</span>
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/jaypawar04/phishing-detection-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                GitHub
              </a>

              <a href="#contact" className="project-details">
                View Details ↗
              </a>
            </div>
          </div>


          {/* PROJECT 02 */}
          <div className="project-card">
            <div className="project-top">
              <div className="project-icon">⌕</div>
              <span className="project-number">02</span>
            </div>

            <div className="project-status">
              <span className="status-dot"></span>
              Completed
            </div>

            <h3>Vulnerability Assessment & Penetration Testing</h3>

            <p>
              Security testing projects focused on identifying vulnerabilities
              in web applications and network infrastructure.
            </p>

            <div className="project-technologies">
              <span>Nmap</span>
              <span>Nessus</span>
              <span>Burp Suite</span>
              <span>Metasploit</span>
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/jaypawar04/vulnx-vulnerability-scanner"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                GitHub
              </a>

              <a href="#contact" className="project-details">
                View Details ↗
              </a>
            </div>
          </div>


          {/* PROJECT 03 */}
          <div className="project-card">
            <div className="project-top">
              <div className="project-icon">◉</div>
              <span className="project-number">03</span>
            </div>

            <div className="project-status">
              <span className="status-dot"></span>
              In Progress
            </div>

            <h3>SOC Monitoring Environment</h3>

            <p>
              A security monitoring environment for analyzing logs, detecting
              suspicious activity, and improving incident response.
            </p>

            <div className="project-technologies">
              <span>Splunk</span>
              <span>Wireshark</span>
              <span>Snort</span>
              <span>Linux</span>
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/jaypawar04/soc-monitoring-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                GitHub
              </a>

              <a href="#contact" className="project-details">
                View Details ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;