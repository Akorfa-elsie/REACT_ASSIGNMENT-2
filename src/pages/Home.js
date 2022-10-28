import React from "react";
import Navbar from "../components/Navbar";
import home from "../assets/images/Image2.jpg";
import NavbarMobile from "../components/NavbarMobile";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <Navbar />
        <div className="info-home">
          <h3>Speech and Language NeuroScience Laboratory</h3>
          <p>
            This lab is dedicated to understanding the neural mechanics of speech production and its defects
          </p>
          <div className="home-img">
            <img src={home} alt="home" />
          </div>
        </div>
      </div>

      <>
        <NavbarMobile />
      </>
      </div>
  );
};

export default Home;
