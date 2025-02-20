import React from 'react';

function AboutPage() {
  return (
    <main>
      <header>
        <div className="title-img-container">
          <h1 className="faster-one-regular"> The Kit Stop </h1><br />
        </div>
      </header>

      <div className="top-header"><h1>About Us</h1></div>
      <section className="aboutpg-container">
        <div className="aboutpg-image">
          <img src="your-image-url.jpg" alt="Soccer Jersey" />
        </div>
        <div className="aboutpg-content">
          <h2>The Passion Behind the Jersey</h2>
          <div className="story">
            <p>Soccer has been my greatest love for as long as I can remember...</p>
            <p>That changed the day I found a vintage 1986 Argentina jersey...</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;