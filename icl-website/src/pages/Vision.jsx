// Vision.jsx
const missionPoints = [
  "Provide quality technical education.",
  "Encourage practical and industry-oriented learning.",
  "Promote research and innovation.",
  "Develop responsible and skilled professionals.",
];

function Vision() {
  return (
    <div className="page">
      <h1 className="page-title">Vision &amp; Mission</h1>

      <div className="vision-box">
        <h2>Our Vision</h2>
        <p className="quote">
          "To become a leading institution for quality education,
          innovation, and responsible leadership."
        </p>
      </div>

      <div className="mission-box">
        <h2>Our Mission</h2>
        <ul className="mission-list">
          {missionPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vision;
