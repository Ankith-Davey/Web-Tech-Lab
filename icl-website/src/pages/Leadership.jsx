// Leadership.jsx
import { Link } from "react-router-dom";
import Card from "../components/Card";

const leaders = [
  {
    icon: "👩‍🏫",
    title: "Dr. Elizabeth Hartley — Vice Chancellor",
    description:
      "Dr. Hartley has over 25 years of experience in academic administration and has led ICL's growth since 2015, with a strong focus on academic quality and student welfare.",
  },
  {
    icon: "👨‍🏫",
    title: "Dr. James Whitfield — Dean of Academics",
    description:
      "Dr. Whitfield oversees curriculum design and academic standards across all departments, with a background in Electronics and Communication Engineering.",
  },
  {
    icon: "👩‍🔬",
    title: "Dr. Charlotte Reeves — Dean of Research",
    description:
      "Dr. Reeves leads ICL's research initiatives, encouraging faculty and students to publish and collaborate on projects in emerging technology areas.",
  },
];

function Leadership() {
  return (
    <div className="page">
      <h1 className="page-title">Leadership</h1>
      <p className="page-text">
        ICL is guided by an experienced leadership team committed to
        academic excellence and institutional growth.
      </p>
      <div className="card-grid">
        {leaders.map((leader) => (
          <Card
            key={leader.title}
            icon={leader.icon}
            title={leader.title}
            description={leader.description}
          />
        ))}
      </div>

      <p className="page-text" style={{ marginTop: "2rem" }}>
        Each of ICL's eight departments has its own Head of Department who
        reports to the Dean of Academics. See the full list of departments
        on the <Link to="/about">About Us</Link> page.
      </p>
    </div>
  );
}

export default Leadership;
