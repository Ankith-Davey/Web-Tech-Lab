// Research.jsx
// Combines Research Areas and Publications into a single page.
// Research no longer needs its own dropdown in the navbar.

import Card from "../components/Card";

const areas = [
  {
    icon: "🧠",
    title: "Artificial Intelligence",
    description:
      "Research on intelligent systems, natural language processing, and computer vision for real-world applications.",
  },
  {
    icon: "📊",
    title: "Machine Learning",
    description:
      "Development of predictive models and algorithms used in healthcare, finance, and smart campus systems.",
  },
  {
    icon: "🤖",
    title: "Robotics",
    description:
      "Design and control of autonomous robots for navigation, automation, and industrial applications.",
  },
  {
    icon: "🔋",
    title: "Renewable Energy",
    description:
      "Studies on solar and wind energy systems aimed at improving efficiency and sustainability.",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    description:
      "Research into network security, cryptography, and safe practices for protecting digital systems.",
  },
];

const publications = [
  { title: "AI Based Smart Campus System", author: "R. Bennett", area: "Artificial Intelligence", year: "2025" },
  { title: "Energy Efficient IoT Networks", author: "H. Clarke", area: "IoT", year: "2025" },
  { title: "Vision Based Robot Navigation", author: "T. Sinclair", area: "Robotics", year: "2024" },
  { title: "Predictive Maintenance Using Machine Learning", author: "E. Morgan", area: "Machine Learning", year: "2024" },
  { title: "Secure Authentication for Campus Networks", author: "O. Fletcher", area: "Cybersecurity", year: "2023" },
];

function Research() {
  return (
    <div className="page">
      <h1 className="page-title">Research</h1>
      <p className="page-text">
        ICL actively encourages faculty and students to work on research
        projects and publish their findings across several focus areas.
      </p>

      <h2 className="section-subtitle">Research Areas</h2>
      <div className="card-grid">
        {areas.map((area) => (
          <Card
            key={area.title}
            icon={area.icon}
            title={area.title}
            description={area.description}
          />
        ))}
      </div>

      <h2 className="section-subtitle">Recent Publications</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Publication Title</th>
            <th>Author</th>
            <th>Area</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((pub) => (
            <tr key={pub.title}>
              <td>{pub.title}</td>
              <td>{pub.author}</td>
              <td>{pub.area}</td>
              <td>{pub.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Research;
