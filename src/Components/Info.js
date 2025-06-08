import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We bring physiotherapy care to your convenience, offering a comprehensive range of personalized rehabilitation services tailored to your needs. 
        Our clinic is dedicated to providing expert hands-on treatments, evidence-based therapies, and holistic care to help you recover, regain strength, 
        and improve your overall physical well-being—all in a supportive and professional environment.


        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Orthopedic PT"
          description="This therapy focuses on treating musculoskeletal issues such as cervical pain, shoulder pain, elbow and wrist discomfort, knee pain, and back problems. 
          It helps improve mobility, reduce pain, and restore function following injuries, surgeries, or chronic conditions."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Neurological PT"
          description="It focuses on treating conditions affecting the nervous system, such as stroke, spinal cord injuries, Parkinson’s disease, multiple sclerosis, and neuropathy. It aims to improve balance, coordination, posture, and muscle control, helping patients regain independence and functional mobility in daily activities.."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Cardio PT"
          description="This helps individuals with heart and lung conditions such as chronic obstructive pulmonary disease (COPD), asthma, and after heart surgery. It focuses on improving cardiovascular endurance, breathing efficiency, and physical conditioning through structured exercise and respiratory training."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Pediatrics PT"
          description="Pediatrics physiotherapy is designed to support the physical development and mobility of infants, children, and adolescents. It addresses conditions such as cerebral palsy, developmental delays, muscular dystrophy, and genetic disorders. Therapy includes exercises, play-based activities, and interventions to improve motor skills and functional independence."
          icon={faHeartPulse}
        />
        
        <InformationCard
          title="Sports PT"
          description="This deals with the prevention, diagnosis, and rehabilitation of sports-related injuries. It treats conditions such as sprains, muscle strains, ligament tears, and joint pain. The focus is on restoring optimal performance, enhancing strength and flexibility, and preventing future injuries through sport-specific training and recovery programs."
          icon={faHeartPulse}
        />

<InformationCard
          title="Post Operative PT"
          description="Post-operative physiotherapy helps patients recover after surgeries such as joint replacements, spinal procedures, and ligament repairs. It involves pain management, mobility training, strengthening exercises, and functional rehabilitation to ensure a safe and effective return to normal activity levels."
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;
