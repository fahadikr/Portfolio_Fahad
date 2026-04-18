import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
  { num: "01", title: "Road Safety Audit Framework", category: "Final Year Project", tools: "GIS, Python, Dashcam Imagery, ML", image: "/images/fyp.webp" },
  { num: "02", title: "Open Channel Canal System", category: "Hydraulic Design", tools: "AutoCAD, Civil-3D, Irrigation Design", image: "/images/2.webp" },
  { num: "03", title: "Intersection & Signal Timing", category: "Traffic Engineering", tools: "SIDRA, Synchro Traffic, Yolov8", image: "/images/3.webp" },
  { num: "04", title: "Cafe Renovation Project", category: "Project Management", tools: "Primavera P6, BOQ, Cost Estimation", image: "/images/4.webp" },
  { num: "05", title: "Marshall Mix Design", category: "Pavement Engineering", tools: "Lab Testing, ASTM Standards", image: "/images/5.webp" },
  { num: "06", title: "Sustainable Multi-Storey Building", category: "Structural Design", tools: "AutoCAD, Revit, Etabs", image: "/images/6.webp" },
];

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Work = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const overflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Keep counter in sync with native scroll on mobile
  const handleScroll = useCallback(() => {
    if (!overflowRef.current || !isMobile) return;
    const { scrollLeft, offsetWidth } = overflowRef.current;
    const idx = Math.round(scrollLeft / offsetWidth);
    setCurrent(Math.max(0, Math.min(projects.length - 1, idx)));
  }, [isMobile]);

  const prev = () => {
    if (isMobile && overflowRef.current) {
      overflowRef.current.scrollTo({
        left: Math.max(0, current - 1) * overflowRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      setCurrent((c) => Math.max(0, c - 1));
    }
  };

  const next = () => {
    if (isMobile && overflowRef.current) {
      overflowRef.current.scrollTo({
        left: Math.min(projects.length - 1, current + 1) * overflowRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      setCurrent((c) => Math.min(projects.length - 1, c + 1));
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Projects</span>
          </h2>
          <div className="work-arrows">
            <button
              className="work-arrow"
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous project"
            >
              <ChevronLeft />
            </button>
            <span className="work-counter">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <button
              className="work-arrow"
              onClick={next}
              disabled={current === projects.length - 1}
              aria-label="Next project"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          className="work-overflow"
          ref={overflowRef}
          onScroll={handleScroll}
        >
          <div
            className="work-flex"
            style={isMobile ? undefined : { transform: `translateX(calc(${current} * -100%))` }}
          >
            {projects.map((project) => (
              <div className="work-box" key={project.num}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>{project.num}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <div className="work-tools">
                    <h4>Tools and features</h4>
                    <p>{project.tools}</p>
                  </div>
                </div>
                <WorkImage
                  image={project.image || "/images/placeholder.webp"}
                  alt={project.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
