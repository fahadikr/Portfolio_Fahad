import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My Work <span>&</span>
          <br /> Internship Experience 
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Data & Project Operations Specialist</h4>
                <h5>Openspace.ai</h5>
<span>Islamabad, Pakistan</span>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Working with 360-degree construction site imagery pipelines for
              AI-based progress tracking across 20+ active projects in the US,
              UK, Australia, and GCC region. Developing AI-based workflow
              automation tools and annotating technical drawings using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Engineer</h4>
                <h5>Frontier Works Organization</h5>
<span>Jagraan, Pakistan</span>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed day-to-day operations for construction of a 48 MW
              Hydropower Project. Supervised major components including a
              Headrace tunnel, Desander and Weir of the Dam. Coordinated
              with consultants for cost-efficient design changes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Defence Housing Authority</h5>
<span>Islamabad, Pakistan</span>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Supervised excavation and raft foundation work for a B+G+13
              building project. Involved in cost estimation and laboratory
              experiments including Field Dry Density and Compressive
              Strength tests per ASTM standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;