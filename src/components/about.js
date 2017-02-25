import React from "react";

import FindMeAt from "./common/find-me-at";
import Skills from "./skills";

const Introduction = () => {
  return (
    <div id="about" className="about">
      <div className="container text-center">
        <i className="fa fa-user margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">About</span>
        <div className="box">
          <p>I'm Yashika Garg, from Delhi, India.
          I am a developer, dancer, problem solver, homemaker and a person full of life and joy.</p>

          <p>With an experience of 5+ years in developing and architecting the solutions for growing business needs, I am
          focused on implementing advanced technologies that enable me in building a multitude of powerful apps in
          a quicker and efficient way. I have a great inclination towards solving problems using algorithms and studying
          different project architectures and am constantly working on honing my skills in the same domain. You can
          see the gist of my practise <a className="bold text" href="https://gist.github.com/yashikagarg13" target="_blank">here</a>.
          I enjoy walking in an unknown land of code, aiming to become language independent.</p>

          <p>I am working with <a href="http://www.powertofly.com" target="_blank"> PowerToFly</a>,
          where I am responsible for developing frontend that enhances talents' experience at our website and
          to improve performance and architecture of our application. <a href="http://www.powertofly.com" target="_blank"> PowerToFly </a>
          is an online platform that connects talented women in tech with companies that value diversity in their teams.</p>

          <p>At the beginning of my career, I got the opportunity to work on hybrid enterprise mobile applications
          using cutting edge technologies, like, SAP Fiori and SAPUI5, SUP, Adobe flash builder, Cordova
          and worked with some elite clients like <b>Smithfield, Honeywell, Hollister, Orasure, JMC Steel</b> and so on.</p>

          <p>I am looking for challenges projects that can provide me opportunity to move out of my comfort zone and to
          create something extraordinary. For any comments or propositions, you can reach me through following means: </p>

          <div className="text-center margin-top">
            <FindMeAt />
          </div>

          <Skills />

        </div>
      </div>
    </div>
  );
};

export default Introduction;