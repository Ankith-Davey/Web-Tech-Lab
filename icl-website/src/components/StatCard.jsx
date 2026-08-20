// StatCard.jsx
// Small component to display a single statistic (number + label).
// Reused four times on the Home page with different props.

function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <h2 className="stat-number">{number}</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default StatCard;
