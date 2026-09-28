function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-tag">// EXPERIENCE</span>

          <h2>Experience under pressure.</h2>

          <p>
            Professional experience across IT infrastructure, system support,
            server administration, and cybersecurity operations.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">
                February 2026 – Present
              </span>

              <h3>Jr.Cybersecurity Analyst</h3>

                <h4>Saga technologies innovative solutions</h4>

              <p>
                Performed SIEM monitoring and log analysis using Splunk, investigating security events, correlating logs, and
supporting alert triage and proactive threat detection.

Monitored endpoint security using Bitdefender EDR and Safetica DLP, supporting threat detection, endpoint
protection, data-loss prevention, and security incident investigation.

Supported incident response activities by analyzing security alerts, identifying suspicious activity, and assisting
with investigation and remediation of security events.

Performed VAPT and vulnerability assessments using Nessus across network environments, with findings
aligned to OWASP Top 10 and security best practices
              </p>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">
                September 2025 – February 2026
              </span>

              <h3>Offensive Cyber Security Intern</h3>

              <h4>InLighnx Global Pvt.Ltd</h4>

              <p>
                Assisted in VAPT engagements for web applications and network environments using Burp Suite, Nmap, Nessus,
Metasploit.
Performed reconnaissance, enumeration, vulnerability identification, exploitation validation, and security testing,
documenting findings and supporting remediation activities.
Conducted web application security testing aligned with OWASP Top 10, identifying security weaknesses and
preparing technical vulnerability reports.
Developed hands-on experience with Kali Linux, network security testing, vulnerability scanning, penetrationtesting methodologies, and security assessment tools.


              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;