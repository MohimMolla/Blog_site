import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data, such as sending it to a server
    console.log('Form submitted:', name, email, message);
    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>
          For any inquiries or feedback, please don't hesitate to contact us.
          We'd love to hear from you!
        </p>
        <p>Phone: 123-456-7890</p>
        <p>Email: example@example.com</p>
      </div>
    </div>
  );
}
