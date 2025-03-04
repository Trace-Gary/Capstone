import React, { useState } from 'react';


const HomePage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form validation and submission logic
    console.log({ name, lastName, email, password });
  };

  return (
    <main>
      <div className="signup-container">
        <section className="signup-section">
          <h2>Get Started With Us Today!</h2><br />
          <form className="message-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="First"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>
        </section>
      </div>

      <h1 className="theading">Premier League Standings</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody id="standings-body">
            {/* Standings will be inserted dynamically here */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default HomePage;