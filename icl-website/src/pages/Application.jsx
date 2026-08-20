// Application.jsx
// Demonstrates simple event handling: clicking "Apply Now" shows an alert.
// No backend is required for this lab assignment.

const steps = [
  {
    title: "Register Online",
    description: "Create an account on the admissions portal using a valid email address.",
  },
  {
    title: "Fill Application Form",
    description: "Complete the application form with personal, academic, and program details.",
  },
  {
    title: "Upload Documents",
    description: "Upload scanned copies of mark sheets, ID proof, and passport-size photographs.",
  },
  {
    title: "Pay Application Fee",
    description: "Pay the non-refundable application fee through the available online options.",
  },
  {
    title: "Check Admission Status",
    description: "Track your application status and entrance exam updates on the portal.",
  },
];

function Application() {
  const handleApplyClick = () => {
    alert("Application portal opened.");
  };

  return (
    <div className="page">
      <h1 className="page-title">Application Process</h1>
      <p className="page-text">
        Follow these five simple steps to apply for admission at ICL.
      </p>

      <ol className="steps-list">
        {steps.map((step, index) => (
          <li className="step-item" key={step.title}>
            <span className="step-number">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <button className="btn btn-primary" onClick={handleApplyClick}>
        Apply Now
      </button>
    </div>
  );
}

export default Application;
