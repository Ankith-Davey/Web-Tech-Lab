// CampusLife.jsx
import Card from "../components/Card";

const clubs = [
  { icon: "💻", title: "Coding Club", description: "Weekly coding challenges, workshops, and peer learning sessions for all skill levels." },
  { icon: "🤖", title: "Robotics Club", description: "Hands-on robotics projects, from line-following bots to competition-ready machines." },
  { icon: "📷", title: "Photography Club", description: "Covers campus events and organizes photo walks and editing workshops." },
  { icon: "📚", title: "Literary Club", description: "Debates, creative writing sessions, and the annual college magazine." },
  { icon: "🎵", title: "Music Club", description: "Regular jam sessions and performances at cultural events throughout the year." },
];

const facilities = [
  { icon: "📖", title: "Central Library", description: "A large collection of technical books, journals, and digital resources for all departments." },
  { icon: "🖥️", title: "Computer Labs", description: "Modern labs with updated hardware and software for practical coursework." },
  { icon: "⚽", title: "Sports Ground", description: "Facilities for cricket, football, athletics, and other outdoor sports." },
  { icon: "🍽️", title: "Cafeteria", description: "A spacious cafeteria offering a variety of meals at affordable prices." },
  { icon: "🏠", title: "Hostel", description: "Separate hostel facilities for men and women with mess and recreation areas." },
  { icon: "🎭", title: "Auditorium", description: "A 1,000-seat auditorium used for fests, seminars, and guest lectures." },
];

const events = [
  { icon: "🚀", title: "Technical Fest", description: "An annual event featuring hackathons, project expos, and technical workshops." },
  { icon: "🎨", title: "Cultural Fest", description: "A three-day celebration of music, dance, drama, and art competitions." },
  { icon: "🏅", title: "Sports Day", description: "An inter-department sports meet held every year to promote fitness and teamwork." },
  { icon: "💡", title: "Hackathon", description: "A 24-hour coding event where students build solutions to real-world problems." },
];

function CampusLife() {
  return (
    <div className="page">
      <h1 className="page-title">Campus Life</h1>
      <p className="page-text">
        Life at ICL goes beyond the classroom, with a wide range of clubs,
        facilities, and events that help students grow personally and
        socially.
      </p>

      <h2 className="section-subtitle">Student Clubs</h2>
      <div className="card-grid">
        {clubs.map((club) => (
          <Card key={club.title} icon={club.icon} title={club.title} description={club.description} />
        ))}
      </div>

      <h2 className="section-subtitle">Facilities</h2>
      <div className="card-grid">
        {facilities.map((facility) => (
          <Card key={facility.title} icon={facility.icon} title={facility.title} description={facility.description} />
        ))}
      </div>

      <h2 className="section-subtitle">Events</h2>
      <div className="card-grid">
        {events.map((event) => (
          <Card key={event.title} icon={event.icon} title={event.title} description={event.description} />
        ))}
      </div>
    </div>
  );
}

export default CampusLife;
