import React from 'react';
import "./Welcome.css";
import bgImg from "../images/welcome.png";

const Main = () => {

  return (
    <div>
        <img src={bgImg} alt=""/>
        <h1>Our Mission</h1>
        <h2>Network growth</h2>
        <p>A global network of student leaders, professional community organizers, industry experts, and Googlers to gain mentorship and share knowledge.</p>
        <h2>Community learning</h2>
        <p>Dedicated support to help educate and expand your community online and in-person.</p>
        <h2>What we have in store for you</h2>
    </div>
    
  );
};

export default Main;
