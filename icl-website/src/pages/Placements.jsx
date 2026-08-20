// Placements.jsx
import StatCard from "../components/StatCard";

const stats = [
  { number: "90%", label: "Placement Rate" },
  { number: "£55,000", label: "Highest Starting Salary" },
  { number: "£34,000", label: "Average Starting Salary" },
  { number: "100+", label: "Recruiting Companies" },
];

const recruiters = ["Goldman Sachs", "Rolls-Royce", "Google", "BP", "Deloitte", "ARM"];

const processSteps = [
  "Registration",
  "Aptitude Test",
  "Technical Interview",
  "HR Interview",
  "Job Offer",
];

function Placements() {
  return (
    <div className="page">
      <h1 className="page-title">Placements</h1>
      <p className="page-text">
        ICL's placement cell works closely with leading companies to provide
        students with strong career opportunities.
      </p>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.label} number={stat.number} label={stat.label} />
        ))}
      </div>

      <h2 className="section-subtitle">Our Recruiters</h2>
      <div className="badge-list">
        {recruiters.map((company) => (
          <span className="badge" key={company}>
            {company}
          </span>
        ))}
      </div>

      <h2 className="section-subtitle">Placement Process</h2>
      <div className="process-flow">
        {processSteps.map((step, index) => (
          <div className="process-step" key={step}>
            <div className="process-circle">{index + 1}</div>
            <p>{step}</p>
            {index < processSteps.length - 1 && <div className="process-arrow">↓</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Placements;
