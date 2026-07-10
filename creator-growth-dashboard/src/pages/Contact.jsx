import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    contactMethod: "Email",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      contactMethod: "Email",
      message: "",
    });
  }

  return (
    <section>
      <header>
        <h1>Contact Creator Growth Dashboard</h1>

        <p>
          Thank you for your interest in Creator Growth Dashboard. Questions,
          feedback, partnership opportunities, and product suggestions are
          welcome.
        </p>

        <p>
          Complete the form below and provide the best way to reach you.
        </p>
      </header>

      <section>
        <h2>Send Feedback or an Inquiry</h2>

        {submitted && (
          <p role="status">
            Thank you. Your information has been received for this
            demonstration.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jordan Lee"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jordan.lee@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="555-123-4567"
            />
          </div>

          <div>
            <label htmlFor="contactMethod">Preferred Contact Method</label>

            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Either">Either</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject">Subject</label>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="General Question">General Question</option>
              <option value="Product Feedback">Product Feedback</option>
              <option value="Feature Suggestion">Feature Suggestion</option>
              <option value="Partnership Inquiry">Partnership Inquiry</option>
              <option value="Professional Opportunity">
                Professional Opportunity
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help."
              rows="6"
              required
            />
          </div>

          <button type="submit">Submit Message</button>
        </form>
      </section>

      <section>
        <h2>Response Information</h2>

        <p>
          Messages are reviewed during standard business hours, Monday through
          Friday.
        </p>

        <p>
          Typical response time is within one to two business days.
        </p>
      </section>
    </section>
  );
}

export default Contact;