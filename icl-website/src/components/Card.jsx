// Card.jsx
// A single reusable card component. Different pages pass different
// title/description/icon props into this same component instead of
// creating a brand new component for every section.

function Card({ icon, title, description }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
