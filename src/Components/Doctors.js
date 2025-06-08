import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/therapy.png";
import profile2 from "../Assets/laser 2.png";
import profile3 from "../Assets/cupping 2.png";
import profile4 from "../Assets/posture (1).png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Wellness</span>
        </h3>

        <p className="dt-description">
        At our clinic, we offer a wide range of physiotherapy services designed to restore movement, relieve pain, and improve overall function. 
        Whether you're recovering from an injury, managing a chronic condition, or seeking preventive care, our expert team tailors each treatment to your unique needs. 
        From manual therapy and exercise rehabilitation to post-surgical recovery and neurological physiotherapy, We're here to support you every step of the way—helping you move better, feel stronger, and live healthier.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Chiropractic Care"
          title=""
          stars="5"
          
        />
        <DoctorCard
          img={profile2}
          name="Laser Therapy"
          title=""
          stars="5"
          
        />
        <DoctorCard
          img={profile3}
          name="Cupping Therapy"
          title=""
          stars="5"
        
        />
        <DoctorCard
          img={profile4}
          name="Posture Management"
          title=""
          stars="5"
          
        />
      </div>
    </div>
  );
}

export default Doctors;
