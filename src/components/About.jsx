import { motion } from "framer-motion";
import { Shield, Target, Code, Lock } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function About() {
  const { about } = portfolioData;

  const highlights = [
    {
      icon: Shield,
      title: "Security First",
      description: "Protecting systems through proactive security practices.",
    },
    {
      icon: Target,
      title: "Continuous Learning",
      description: "Constantly improving skills in modern cybersecurity.",
    },
    {
      icon: Code,
      title: "Technical Approach",
      description: "Hands-on experience with security tools and technologies.",
    },
    {
      icon: Lock,
      title: "Risk Awareness",
      description: "Identifying vulnerabilities before they become threats.",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="section-tag">// ABOUT_ME</span>
          <h2>{about.heading}</h2>
          <p>{about.description}</p>
        </motion.div>

        <div className="about-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="highlight-card"
              >
                <Icon size={28} className="highlight-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;