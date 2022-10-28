import React from "react";
import Navbar from "../components/Navbar";
import about from "../assets/images/image.jpg";

const About = () => {
  return (
    <div>
      <div className="about">
        <Navbar />

        <div className="about-content">
          <div className="about-image">
            <img className="about-img" src={about} alt="About us" />
          </div>

          <div className="about-info">
            <h2>About Us</h2>
            <p>
            We are a group of talented phD students/ researchers supervised
            by PI, Dr Akorfa investigating the motor functions of speech 
            production and its related defects. If you are interested in joining our 
            research, kindly apply! who knows we might admit you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
