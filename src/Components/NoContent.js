import React from 'react';
import "./Main.css";
import bgImg from "../images/no_content.png";

const NoContent = () => {
  return (
    <div>
        <img src={bgImg} alt=""/>
        <h2>Sorry...unfortunately there is nothing available at the moment!</h2>
    </div>
  );
};

export default NoContent;