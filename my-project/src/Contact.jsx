import React, { useState } from 'react';

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
    <div className="py-20 px-6 md:px-16 bg-orange-50 text-center font-sans">
      <h2 className="text-4xl font-bold text-[#264653] mb-2">Get in Touch</h2>
      <p className="text-gray-600 mb-10">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl text-left flex-1"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-5 p-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-5 p-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-5 p-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#e76f51] hover:bg-[#d45d43] text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-600 mt-4 font-medium">
              ✅ Thank you! We'll get back to you soon.
            </p>
          )}
        </form>

        {/* Contact Info + Map */}
        <div className="max-w-md text-left flex-1">
          <h3 className="text-xl font-semibold text-[#264653] mb-3">Our Store</h3>
          <p className="text-gray-800 mb-2">123 Retail Street, Fashion City</p>
          <p className="text-gray-800 mb-2">Email: support@retailvibe.com</p>
          <p className="text-gray-800 mb-4">Phone: +1 (234) 567-890</p>

          <div className="rounded-md overflow-hidden mt-4">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              className="w-full rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
