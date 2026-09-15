import { motion } from "framer-motion";
import { ShieldCheck, Server, Code2, Activity } from "lucide-react";

const skillCategories = [
  {
    title: "Offensive Security",
    icon: ShieldCheck,
    skills: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Web Application Security",
      "API Security",
      "Mobile Application Security",
    ],
  },
  {
    title: "Infrastructure Security",
    icon: Server,
    skills: [
      "Network Security",
      "Linux Administration",
      "Windows Server",
      "Patch Management",
      "System Hardening",
    ],
  },
  {
    title: "Security Operations",
    icon: Activity,
    skills: [
      "SIEM Monitoring",
      "Log Analysis",
      "Incident Detection",
      "Network Traffic Analysis",
      "Threat Monitoring",
    ],
  },
  {
    title: "Security Tools",
    icon: Code2,
    skills: [
      "Nessus",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Splunk",
      "Wireshark",
      "OpenVAS",
    ],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-tag">// SKILLS</span>
          <h2>Tools for the mission.</h2>
          <p>
            A practical technical foundation across cybersecurity concepts,
            security operations, and programming.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                className="skill-category"
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{category.title}</h3>
                </div>

                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span className="skill-item" key={skill}>
                      <span className="skill-check">✓</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Security Concepts and Programming Languages */}
          <motion.div
            className="skill-category skill-category-wide"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <ShieldCheck size={22} />
              </div>

              <h3>Security Concepts & Programming Languages</h3>
            </div>

            <h4 className="skill-subheading">Security Concepts</h4>

            <div className="skill-list">
              {[
                "Networking",
                "OWASP Top 10",
                "Operating Systems",
                "Threat Intelligence",
                "Incident Response",
                "Risk Management",
                "Security Architecture",
              ].map((skill) => (
                <span className="skill-item" key={skill}>
                  <span className="skill-check">✓</span>
                  {skill}
                </span>
              ))}
            </div>

            <h4 className="skill-subheading programming-heading">
              Programming Languages
            </h4>

            <div className="skill-list">
              {["Python", "Bash Scripting"].map((skill) => (
                <span className="skill-item" key={skill}>
                  <span className="skill-check">✓</span>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;