import React from 'react';
import "./Main.css";
import bgImg from "../images/main.png";

const Main = () => {
  return (
    <div>
        <img src={bgImg} alt=""/>
        <h2>What Is Google Developers Student Clubs?</h2>
        <p>Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
    </div>
  );
};

export default Main;
