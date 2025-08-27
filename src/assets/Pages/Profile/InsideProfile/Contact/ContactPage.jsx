import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending message

    setSubmitted(true);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback?</p>

      {submitted ? (
        <p className="success-message">✅ Your message has been sent successfully!</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </label>

          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </label>

          <label>
            Message:
            <textarea 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      )}

      
    </div>
  );
};

export default ContactPage;
