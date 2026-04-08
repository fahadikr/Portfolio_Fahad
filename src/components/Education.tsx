import "./styles/Education.css";
const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My Education <span>&</span>
          <br /> Extra Courses
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>BE Civil Engineering</h4>
                <h5>National University of Sciences & Technology</h5>
                <span>Islamabad, Pakistan</span>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Graduated with a CGPA of 3.33. Final year project focused on
              developing a framework for Road Safety Audit of Islamabad,
              laying the groundwork for ML-based automated road safety
              analysis using dashcam imagery.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Intro to Deep Learning</h4>
                <h5>Kaggle</h5>
                <span>Online</span>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Kaggle's Introduction to Deep Learning course,
              building foundational knowledge in neural networks and
              their applications in real-world problems.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Introduction to Generative AI</h4>
                <h5>Google</h5>
                <span>Online</span>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed Google's Introduction to Generative AI course,
              gaining understanding of large language models, diffusion
              models and their applications in modern AI workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;