import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    setSubmitted(true);
    // Here you'd usually send data to your backend
  };

  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.</p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="success-msg">✅ Thank you! We'll get back to you soon.</p>}
        </form>

        <div className="contact-info">
          <h3>Our Store</h3>
          <p>123 Retail Street, Fashion City</p>
          <p>Email: support@retailvibe.com</p>
          <p>Phone: +1 (234) 567-890</p>
          <div className="map-placeholder">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
