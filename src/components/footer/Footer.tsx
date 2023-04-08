import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Food Trends</h3>
          <ul>
            <li>
              <a href="#">Top 10 Food Trends of the Year</a>
            </li>
            <li>
              <a href="#">Best Foods for Your Health</a>
            </li>
            <li>
              <a href="#">Seasonal Recipes</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Nutrition</h3>
          <ul>
            <li>
              <a href="#">Healthy Eating Tips</a>
            </li>
            <li>
              <a href="#">Calorie Calculator</a>
            </li>
            <li>
              <a href="#">Nutrition Facts</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Join Our Newsletter</h3>
          <p>
            Stay up-to-date on the latest food trends and receive exclusive
            offers by subscribing to our newsletter.
          </p>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Findine. All rights reserved.</p>
        <p>Software Ver. 1.0</p>
      </div>
      <div id="page-end"></div>
    </footer>
  );
};

export default Footer;
