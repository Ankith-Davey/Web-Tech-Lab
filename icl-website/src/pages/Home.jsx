// Home.jsx
import { Link } from "react-router-dom";
import Card from "../components/Card";
import StatCard from "../components/StatCard";

const stats = [
  { number: "5,000+", label: "Students" },
  { number: "250+", label: "Faculty" },
  { number: "25+", label: "Programs" },
  { number: "90%", label: "Placement Rate" },
];

const whyChooseUs = [
  {
    icon: "🎓",
    title: "Experienced Faculty",
    description:
      "Our faculty members bring years of teaching and industry experience, guiding students with practical, real-world knowledge.",
  },
  {
    icon: "🔬",
    title: "Modern Laboratories",
    description:
      "Well-equipped labs across all departments give students hands-on experience with the latest tools and technologies.",
  },
  {
    icon: "🏢",
    title: "Industry Exposure",
    description:
      "Regular internships, guest lectures, and industry visits keep students connected to real workplace practices.",
  },
  {
    icon: "🤝",
    title: "Active Student Clubs",
    description:
      "From coding to robotics to music, our student clubs help learners explore interests beyond the classroom.",
  },
];

const updates = [
  {
    title: "Admissions Open for 2026–27",
    description:
      "Applications for the 2026–27 academic year are now open across all undergraduate and postgraduate programs.",
  },
  {
    title: "Annual Technical Fest Scheduled for September",
    description:
      "ICL's flagship technical fest will be held this September, featuring hackathons, workshops, and project exhibitions.",
  },
  {
    title: "ICL Students Win Inter-College Hackathon",
    description:
      "A team from the Computer Science department won first place at the regional inter-college hackathon held last month.",
  },
];

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Imperial College London</h1>
          <p className="hero-tagline">Learn • Innovate • Grow</p>
          <p className="hero-description">
            Imperial College London provides quality technical
            education with a focus on practical learning, innovation,
            research, and career development.
          </p>
          <div className="hero-buttons">
            <Link to="/academics/undergraduate" className="btn btn-primary">
              Explore Academics
            </Link>
            <Link to="/admissions/application" className="btn btn-secondary">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <h2 className="section-title">Why Choose ICL?</h2>
        <div className="card-grid">
          {whyChooseUs.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Latest Updates</h2>
        <div className="card-grid">
          {updates.map((update) => (
            <Card
              key={update.title}
              title={update.title}
              description={update.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
