import { useEffect, useState } from "react";

const terminalLines = [
  "Initializing security environment...",
  "Loading vulnerability assessment modules...",
  "Checking network interfaces...",
  "Running security diagnostics...",
  "Scanning open ports and services...",
  "Analyzing potential vulnerabilities...",
  "Monitoring suspicious activity...",
  "Security status: OPERATIONAL",
];

function SecurityTerminal() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLines((current) => {
        if (index >= terminalLines.length) {
          index = 0;
          return [];
        }

        const next = [...current, terminalLines[index]];
        index++;
        return next;
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="security-terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="terminal-title">
          jay@cybersecurity:~
        </span>

        <span className="terminal-live">LIVE</span>
      </div>

      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span>security-monitor --status</span>
        </div>

        {visibleLines.map((line, index) => (
          <div className="terminal-line" key={`${line}-${index}`}>
            <span className="terminal-arrow">›</span>
            <span>{line}</span>
          </div>
        ))}

        <div className="terminal-cursor">_</div>
      </div>
    </div>
  );
}

export default SecurityTerminal;