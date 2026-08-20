// Contact.jsx
// Demonstrates useState (controlled form inputs) and event handling
// (onChange, onSubmit with preventDefault). No backend is used.

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="page">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Imperial College London</h3>
          <p>27 Queensgate Terrace</p>
          <p>London, United Kingdom – SW7 5PL</p>
          <p>Phone: +44 20 7946 0958</p>
          <p>Email: info@icl.ac.uk</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          {submitted && (
            <p className="form-success">
              Thank you! Your message has been submitted successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
