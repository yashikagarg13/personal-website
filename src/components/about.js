import React from "react";

import FindMeAt from "./common/find-me-at";

const Introduction = () => {
  return (
    <div id="about" className="about">
      <div className="container text-center">
        <i className="fa fa-user margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">About</span>
        <div className="box">
          <p>I'm Yashika Garg, currently residing in Ahmedabad, India but native of Delhi, India.
          I am a coder, dancer, problem solver, homemaker and a person full of life and joy.
          I am married to a wonderful person Ketan Gupta, who is currently working as Deputy Manager in State Bank of Patiala.</p>

          <p>I am working with <a href="http://www.powertofly.com" target="_blank"> PowerToFly</a>,
          where I am responsible for developing functionality that enhances talents' experience at our website and
          to improve performance and architecture of our application. <a href="http://www.powertofly.com" target="_blank"> PowerToFly </a>
          is an online platform that connects talented women in tech with companies that value diversity in their teams.</p>

          <p>At the beginning of my career, I got the opportunity to work on hybrid enterprise mobile applications
          using cutting edge technologies, like, SAP Fiori and SAPUI5, SUP, Adobe flash builder, Cordova
          and worked with some elite clients like <b>Smithfield, Honeywell, Hollister, Orasure, JMC Steel</b> and so on.</p>

          <p>I have great inclination towards problem solving, algorithms and architecture and am constantly working on
            honing my skills in the same domain. I enjoy learning new technologies in terms of what problem they are solving
            and I have no technology constraints while writing code. I enjoy learning new things and walking in unknown land.
            For any comments or propositions, you can reach me through following means: </p>

          <div className="text-center margin-top">
            <FindMeAt />
          </div>


        </div>
      </div>
    </div>
  );
};

export default Introduction;