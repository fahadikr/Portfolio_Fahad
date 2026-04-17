import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }
    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {[
            { num: "01", title: "Road Safety Audit Framework", category: "Final Year Project", tools: "GIS, Python, Dashcam Imagery, ML", image: "/images/fyp.webp" },
            { num: "02", title: "Open Channel Canal System", category: "Hydraulic Design", tools: "AutoCAD, Civil-3D, Irrigation Design", image: "/images/2.webp" },
            { num: "03", title: "Intersection & Signal Timing", category: "Traffic Engineering", tools: "SIDRA, Synchro Traffic, Yolov8", image: "/images/3.webp" },
            { num: "04", title: "Cafe Renovation Project", category: "Project Management", tools: "Primavera P6, BOQ, Cost Estimation", image: "/images/4.webp" },
            { num: "05", title: "Marshall Mix Design", category: "Pavement Engineering", tools: "Lab Testing, ASTM Standards", image: "/images/5.webp" },
            { num: "06", title: "Sustainable Multi-Storey Building", category: "Structural Design", tools: "AutoCAD, Revit, Etabs", image: "/images/6.webp" },
          ].map((project) => (
            <div className="work-box" key={project.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;