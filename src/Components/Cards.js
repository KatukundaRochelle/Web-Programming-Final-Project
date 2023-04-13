import React from 'react';
import "./Cards.css";
import imgUrl1 from "../images/hackathon.png";
import imgUrl2 from '../images/internship.png'
import imgUrl3 from '../images/webinar.png'
const Card1 = () => {
  return (
    <div className="card">
      <img src={imgUrl1} alt='' />
      <div className="card-body">
        <h3>Hackathons</h3>
        <a href="/NoContent">Learn More</a>
      </div>
    </div>
  );
};
const Card2 = () => {
    return (
      <div className="card">
        <img src={imgUrl2} alt='' />
        <div className="card-body">
            <h3>Internships</h3>
          <a href="/NoContent">Learn More</a>
        </div>
      </div>
    );
  };
  const Card3 = () => {
    return (
      <div className="card">
        <img src={imgUrl3} alt='' />
        <div className="card-body">
            <h3>Webinars</h3>
          <a href="/NoContent">Learn More</a>
        </div>
      </div>
    );
  };
const Cards = () => {
 

  return (
    <div className="card-list">
     <Card1/>
     <Card2/>
     <Card3/>
    </div>
  );
};                                                                                                                                                                                                                                     

export default Cards;


