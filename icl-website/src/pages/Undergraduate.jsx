// Undergraduate.jsx

const programs = [
  {
    name: "BEng Computer Science & Engineering",
    duration: "4 Years",
    eligibility: "A-Levels including Physics, Chemistry, and Mathematics (AAA or equivalent)",
    description:
      "Covers programming, data structures, operating systems, and software engineering with a strong project-based curriculum.",
  },
  {
    name: "BEng Artificial Intelligence & Data Science",
    duration: "4 Years",
    eligibility: "A-Levels including Physics, Chemistry, and Mathematics (AAA or equivalent)",
    description:
      "Focuses on machine learning, statistics, and data analytics, preparing students for careers in AI-driven industries.",
  },
  {
    name: "BEng Mechanical Engineering",
    duration: "4 Years",
    eligibility: "A-Levels including Physics, Chemistry, and Mathematics (AAB or equivalent)",
    description:
      "Provides a strong foundation in design, thermodynamics, manufacturing, and automation technologies.",
  },
  {
    name: "BEng Electronics & Communication Engineering",
    duration: "4 Years",
    eligibility: "A-Levels including Physics, Chemistry, and Mathematics (AAB or equivalent)",
    description:
      "Covers electronics, signal processing, and communication systems with hands-on lab and project work.",
  },
];

function Undergraduate() {
  return (
    <div className="page">
      <h1 className="page-title">Undergraduate Programs</h1>
      <p className="page-text">
        ICL offers a range of four-year BEng programs designed to build
        strong technical foundations along with practical, industry-relevant
        skills.
      </p>

      <div className="program-list">
        {programs.map((program) => (
          <div className="program-box" key={program.name}>
            <h3>{program.name}</h3>
            <p className="program-meta">
              <strong>Duration:</strong> {program.duration}
            </p>
            <p className="program-meta">
              <strong>Eligibility:</strong> {program.eligibility}
            </p>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Undergraduate;
