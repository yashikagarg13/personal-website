import React from "react";
import ContactData from "../data/contact";

const Introduction = () => {
  return (
    <div id="introduction" className="introduction">
      <div className="container text-center">
        <i className="fa fa-user margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">Introduction</span>
        <div className="box">
          <p>I'm Yashika Garg, currently residing in Ahmedabad, India but native to Delhi, India.
          I am a frontend developer, dancer, problem solver, homemaker and a person full of life and joy.
          I am married to a wonderful person Ketan Gupta, who is currently working as Deputy Manager in State Bank of Patiala.</p>

          <p>I am working with <a href="http://www.powertofly.com" target="_blank"> PowerToFly</a>,
          where I am responsible for developing functionality that enhances talents' experience at our website and
          to improve performance and architecture of our application. <a href="http://www.powertofly.com" target="_blank"> PowerToFly </a>
          is an online platform that connects talented women in tech with companies that value diversity in their teams</p>

          <p>At the commencement of my career, I got the opportunity to work on hybrid enterprise mobile applications
          using cutting edge technologies. I developed mobile applications using SAP Fiori and SAPUI5, SUP, Adobe flash builder, Cordova
          and worked with some elite clients like <b>Smithfield, Honeywell, Hollister, Orasure, JMC Steel</b> and so on.</p>

          <p>I have great inclination towards problem solving, algorithms and architecture. I am working on polishing my skills towards it.
            For any comments or propositions, find me at </p>

          <div className="text-center margin-top">
            <a href={`http://maps.google.com/?q=${ContactData.location}`} target="_blank" className="icon-wrapper">
              <i className="fa fa-map-marker accent lg text margin-right"></i></a>
            <a href={`mailto:${ContactData.email}`} className="icon-wrapper">
              <i className="fa fa-envelope accent lg text margin-right"></i></a>
            <a href={`callto:${ContactData.phone}`} className="icon-wrapper">
              <i className="fa fa-mobile accent lg text margin-right"></i></a>
            <a href={`skype:${ContactData.skype}`} className="icon-wrapper">
              <i className="fa fa-skype accent lg text margin-right"></i></a>
            <a href={ContactData.github} target="_blank" className="icon-wrapper">
              <i className="fa fa-github accent lg text margin-right"></i></a>
            <a href={ContactData.stackoverflow} target="_blank" className="icon-wrapper">
              <i className="fa fa-stack-overflow accent lg text margin-right"></i></a>
            <a href={ContactData.linkedin} target="_blank" className="icon-wrapper">
              <i className="fa fa-linkedin accent lg text margin-right"></i></a>
            <a href={ContactData.twitter} target="_blank" className="icon-wrapper">
              <i className="fa fa-twitter accent lg text margin-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
