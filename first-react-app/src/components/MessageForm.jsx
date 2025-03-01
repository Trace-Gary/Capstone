import React, { useState } from 'react';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to an API)
    console.log(formData);
  };

  return (
    <section className="message-section">
      <h2>Message Us</h2>
      <form className="message-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="First"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            placeholder="Last"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Your email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            placeholder="Your message"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default MessageForm;