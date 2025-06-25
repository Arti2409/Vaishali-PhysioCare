import React from "react";
import Doctor from "../Assets/Vaishali1.png";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Dr. Vaishali Lodhi is a distinguished and highly qualified physiotherapist with a comprehensive approach to rehabilitation and patient wellness. 
        With a deep commitment to evidence-based care, Dr. Vaishali holds multiple advanced certifications, including Dry Needling, Myofascial Kinesio Taping, Osteopathy, and Chiropractic Therapy. 
        Their expertise spans a wide range of therapeutic techniques, enabling them to address complex musculoskeletal and neurological conditions with precision and compassion.
        As a certified physical therapist, Dr. Lodhi specializes in personalized treatment plans that restore mobility, reduce pain, and enhance overall functional performance. 
        Their multidisciplinary approach integrates modern physiotherapy practices with advanced manual therapies, ensuring each patient receives holistic and effective care. 
        Known for their professionalism and patient-centered mindset, 
        Dr. Vaishali is dedicated to empowering individuals on their journey toward recovery, resilience, and long-term well-being.
        </p>

        
      </div>
    </div>
  );
}

export default About;
