import React from "react";

function MessageSection() {
  return (
    <section className="message-section">
      <h2>Message Us</h2>
      <form className="message-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="First" />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default MessageSection;