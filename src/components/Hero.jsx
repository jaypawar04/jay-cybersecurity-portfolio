import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import { Link } from "react-scroll";
import { portfolioData } from "../data/portfolioData";
import SecurityTerminal from "./SecurityTerminal";

function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="terminal-label">
            <Terminal size={16} />
            <span>SECURITY_ENGINEER.exe</span>
          </div>

          <h1>{personal.name}</h1>

          <h2>{personal.title}</h2>

          <p>
            I identify vulnerabilities, secure systems, and build resilient
            infrastructure through practical cybersecurity solutions.
          </p>

          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn primary-btn">View Projects</button>
            </Link>

            <a href="/resume.pdf" download>
              <button className="btn secondary-btn">
                Download Resume
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-visual"
        >
          <SecurityTerminal />
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <ArrowDown size={18} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;