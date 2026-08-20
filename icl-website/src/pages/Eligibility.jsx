// Eligibility.jsx
// Combines eligibility criteria and the important dates table on one page.

const dates = [
  { event: "Applications Open", date: "10 January 2026" },
  { event: "Application Deadline", date: "30 April 2026" },
  { event: "Entrance Examination", date: "15 May 2026" },
  { event: "Counseling", date: "25 May 2026" },
  { event: "Classes Begin", date: "15 July 2026" },
];

function Eligibility() {
  return (
    <div className="page">
      <h1 className="page-title">Eligibility &amp; Important Dates</h1>
      <p className="page-text">
        Below are the basic eligibility requirements and key dates for
        admission at ICL. These are mock requirements and mock dates
        created for the Web Technology Lab project.
      </p>

      <div className="eligibility-box">
        <h3>Undergraduate</h3>
        <p>
          Candidates must have completed A-Levels (or an equivalent
          qualification) with Physics, Chemistry, and Mathematics as core
          subjects, achieving grades of at least AAB. Admission is based on
          predicted or achieved grades, a personal statement, and an
          interview.
        </p>
      </div>

      <div className="eligibility-box">
        <h3>Postgraduate</h3>
        <p>
          Candidates must hold a Bachelor's degree in a relevant field from
          a recognised university, normally with at least an Upper Second
          Class Honours (2:1) classification. Some programmes may also
          require a relevant English language qualification.
        </p>
      </div>

      <div className="eligibility-box">
        <h3>PhD</h3>
        <p>
          Candidates must hold a Master's degree in the relevant discipline
          with strong academic results, along with a qualifying score in
          the ICL research aptitude test or an equivalent national exam.
        </p>
      </div>

      <h2 className="section-subtitle">Important Dates</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((row) => (
            <tr key={row.event}>
              <td>{row.event}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Eligibility;
