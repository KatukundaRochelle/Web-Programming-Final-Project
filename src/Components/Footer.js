import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="icons">
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

        <div className="legal-links">
        <div className="GDSC-footer">
        <h2>Google Developers Student Clubs</h2>
        </div>
        <ul>
          <li>
            <a href="/privacy">Privacy</a>
          </li>

          <li>
            <a href="/terms">Terms & Conditions</a>
          </li>

          <li>
            <a href="/cookies">Cookie Policy</a>
          </li>
        </ul>

        <div className="copyright">
          {/* <p>CopyRight &copy; 2023 Google Developers Student's Club. All rights reserved.</p> */}
          <p>&copy; {new Date().getFullYear()} Google Developers Student's Club</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;