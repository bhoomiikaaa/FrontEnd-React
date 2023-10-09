
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'; // Import Link from React Router

function WelcomeScreen() {
  return (
    <div className="Home">
      <header>
        <img src="" alt="Nissan GTR R35" />
        <h1>Welcome to Our Website!</h1>
       <p>Explore our products and contact us if you have any questions.</p>
        <nav>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Link to the Login page */}
            <li><Link to="/register">Register</Link></li> {/* Link to the Register page */}
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Welcome to the Nissan GTR R35 Page</h2>
          <p>Explore the legendary Nissan GTR R35 with its powerful performance and iconic design.</p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>3.8-liter twin-turbocharged V6 engine</li>
            <li>All-wheel drive system</li>
            <li>Advanced aerodynamics</li>
            <li>High-quality interior</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Nissan GTR R35</p>
      </footer>
    </div>
  );
}

export default WelcomeScreen;
