import React from "react";

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Get in Touch</h2>
      <div className="contact-info">
        <div className="contact-card">
          <h3>Address</h3>
          <p>
            <strong>The Kit Stop (Louisiana Division Office)</strong>
            <br /> 5555 Bourbon Street
            <br /> New Orleans, LA 70116
          </p>
          <p>
            <strong>The Kit Stop (California Division Office)</strong>
            <br /> 6834 Hollywood Blvd.
            <br /> Los Angeles, CA 80550
          </p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>
            <strong>The Kit Stop (Louisiana Division Office)</strong>
            <br /> 504.123.4567 (phone)
          </p>
          <p>
            <strong>The Kit Stop (California Division Office)</strong>
            <br /> 213.987.6543 (phone)
          </p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p>
            <strong>Request for Proposal:</strong>
            <br />
            <a href="mailto:thekitstopno@gmail.com">thekitstopno@gmail.com</a>
          </p>
          <p>
            <strong>Electrical Service Calls:</strong>
            <br />
            <a href="mailto:thekitstopcal@gmail.com">thekitstopcal@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;