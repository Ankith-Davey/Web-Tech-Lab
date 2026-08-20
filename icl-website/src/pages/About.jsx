// About.jsx
import { Link } from "react-router-dom";
import Card from "../components/Card";

const facts = [
  { label: "Established", value: "2008" },
  { label: "Location", value: "London, United Kingdom" },
  { label: "Student Strength", value: "5,000+" },
  { label: "Departments", value: "8" },
];

const departments = [
  {
    icon: "💻",
    title: "Computer Science & Engineering",
    description:
      "Focuses on programming, algorithms, databases, and software development for careers in the IT industry.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence & Data Science",
    description:
      "Covers machine learning, data analytics, and AI systems used to build intelligent, data-driven applications.",
  },
  {
    icon: "⚙️",
    title: "Mechanical Engineering",
    description:
      "Training in design, manufacturing, thermodynamics, and automation with access to modern workshops.",
  },
  {
    icon: "📡",
    title: "Electronics & Communication Engineering",
    description:
      "Circuit design, embedded systems, and communication networks through a mix of theory and lab work.",
  },
  {
    icon: "🔌",
    title: "Electrical Engineering",
    description:
      "Power systems, control systems, and electrical machines for roles in energy and automation.",
  },
  {
    icon: "🏗️",
    title: "Civil Engineering",
    description:
      "Structural design, construction technology, and surveying with exposure to real construction sites.",
  },
];

function About() {
  return (
    <div className="page">
      <h1 className="page-title">About Us</h1>

      <p className="page-text">
        <em>
          Note: this is a mock version of Imperial College London built for
          a Web Technology Lab assignment — the history and figures below
          are fictional placeholder content, not the real institution's
          actual history.
        </em>
      </p>

      <p className="page-text">
        For the purposes of this project, Imperial College London is shown
        as having been established in 2008 with the goal of providing
        quality technical education and creating skilled professionals.
        The institute focuses on academic excellence, practical learning,
        innovation, and industry interaction. Over the years, ICL has
        grown into one of the region's trusted institutions for
        engineering and technology education.
      </p>

      <div className="facts-grid">
        {facts.map((fact) => (
          <div className="fact-box" key={fact.label}>
            <h3>{fact.value}</h3>
            <p>{fact.label}</p>
          </div>
        ))}
      </div>

      <h2 className="section-subtitle">Our Departments</h2>
      <div className="card-grid">
        {departments.map((dept) => (
          <Card
            key={dept.title}
            icon={dept.icon}
            title={dept.title}
            description={dept.description}
          />
        ))}
      </div>

      <p className="page-text" style={{ marginTop: "2rem" }}>
        Learn more about our <Link to="/about/vision">Vision &amp; Mission</Link>{" "}
        or meet our <Link to="/about/leadership">Leadership</Link>.
      </p>
    </div>
  );
}

export default About;
