// Postgraduate.jsx
// Combines Postgraduate programs and the PhD program on one page,
// since both are "advanced study" options and don't need separate routes.

const pgPrograms = [
  {
    name: "MEng Computer Science",
    duration: "2 Years",
    description:
      "Advanced study in algorithms, distributed systems, and software architecture, with an emphasis on research and project work.",
  },
  {
    name: "MEng Data Science",
    duration: "2 Years",
    description:
      "Focuses on statistical modeling, big data tools, and machine learning techniques used in modern data-driven organizations.",
  },
  {
    name: "MBA",
    duration: "2 Years",
    description:
      "Covers management fundamentals such as finance, marketing, operations, and human resources with a technology-focused elective track.",
  },
  {
    name: "MEng VLSI Design",
    duration: "2 Years",
    description:
      "Specializes in chip design, digital electronics, and semiconductor technology for careers in the electronics industry.",
  },
];

const phdAreas = [
  "Artificial Intelligence",
  "Data Science",
  "Robotics",
  "Renewable Energy",
  "Electronics",
];

function Postgraduate() {
  return (
    <div className="page">
      <h1 className="page-title">Postgraduate &amp; PhD Programs</h1>
      <p className="page-text">
        Our postgraduate and doctoral programs are designed for students who
        wish to specialize further and build advanced technical or
        managerial expertise.
      </p>

      <h2 className="section-subtitle">Postgraduate Programs</h2>
      <div className="program-list">
        {pgPrograms.map((program) => (
          <div className="program-box" key={program.name}>
            <h3>{program.name}</h3>
            <p className="program-meta">
              <strong>Duration:</strong> {program.duration}
            </p>
            <p>{program.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-subtitle">PhD Program</h2>
      <p className="page-text">
        The PhD program is designed for students who want to pursue
        in-depth research and contribute to their chosen field of study.
        Scholars work closely with faculty guides, publish papers in
        reputed journals, and take part in departmental seminars. The
        program typically takes three to five years and includes
        coursework, a comprehensive review, and a final thesis defense.
      </p>
      <ul className="simple-list">
        {phdAreas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
    </div>
  );
}

export default Postgraduate;
