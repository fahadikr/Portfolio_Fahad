import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const cyclingWords = ["National University Of Sciences & Technology - 2025" , "NUST '25", "School Of Civil & Environmental Engineering"];

const Landing = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cyclingWords.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {/* Left Side: Name */}
          <div className="landing-intro">
            <h2>Hello!{"\u00A0"}I'm</h2>
            <h1>
              FAHAD{"\u00A0"}<span>IKRAM</span>
            </h1>
            <div className="landing-badges">
              <span className="landing-badge landing-badge--accent">Data & Project Operations Specialist @Openspace</span>
            </div>
          </div>
          {/* Right Side: Titles */}
          <div className="landing-info">
            <h3>Building{"\u00A0"}The{"\u00A0"}Future</h3>
            <div className="landing-titles-wrapper">
              {/* Purple layer - both words */}
              <h2 className="landing-info-h2">
                <div style={{ position: 'relative', left: '-2px', top: '-2px' }}>CIVIL</div>
                <div style={{ position: 'relative', left: '-2px', top: '-2px' }}>ENGINEER</div>
              </h2>
              {/* White layer - only ENGINEER, CIVIL is invisible to show purple underneath */}
              <h2 className="landing-info-foreground">
                <div style={{ visibility: 'hidden' }}>CIVIL</div>
                <div>ENGINEER</div>
              </h2>
            </div>
            <p
              className="landing-descriptor--visible"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {cyclingWords[index]}
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
export default Landing;