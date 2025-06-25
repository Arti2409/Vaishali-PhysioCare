import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Vaishali PhysioCare&Rehab
            </p>
            <p className="ft-description">
            Our clinic is dedicated to providing expert hands-on treatments,evidence-based therapies, and care to help you recover, 
            regain strength, and improve your overall physical well-being—all in a supportive and professional environment.
            </p>
          </div>
       </div>
        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Orthopedic PT</a>
            </li>
            <li>
              <a href="#services">Neurological PT</a>
            </li>
            <li>
              <a href="#services">Cardio PT</a>
            </li>
            <li>
              <a href="#services">Pediatrics PT</a>
            </li>
            <li>
              <a href="#services">Sports PT</a>
            </li>
            <li>
              <a href="#services">Post Operative PT</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:vaishaliphysiocarerehab@gmail.com">vaishaliphysiocarerehab@gmail.com</a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/JSgvNLm5bJuHH2L27">
              📍 Find us on Google Maps
              </a>
              </li>
              <li>
              <p>Shop No. UGF-28, RISE PALM STREET, EXTENSION, <br />
                TECH ZONE-4,Bisrakh Jalalpur, Noida, Greater Noida, <br />
                Uttar Pradesh 201306</p>
            </li>
            <li>
              <a href="tel:+91 99907 79410">+91 99907 79410</a>
            </li>
            <li>
              <a href="tel:+91 73035 89140">+91 73035 89410</a>
            </li>
            
            
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2025. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
