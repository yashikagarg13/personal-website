import React from "react";

import FindMeAt from "./common/find-me-at";

const Introduction = () => {
  return (
    <div id="introduction" className="introduction">
      <div className="container text-center">
        <i className="fa fa-user margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">Introduction</span>
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


        class MyComponent extends React.Component{

          constructor(props){
            super(props);
            this.renderMethod = this.renderMethod.bind(this);
          }

          renderMethod() {
            const elements = [
              { "id": 1, "label": "element1", "status": "status1"},
              { "id": 2, "label": "element2","status": "status2"},
              {"id": 3, "label": "element3", "status": "status6"},
              { "id": 4, "label": "element3", "status": "status10"}
            ];

            const groups = [
              { "name": "group1", "status" : ["status1", "status2", "status3", "status4"] },
              { "name": "group2", "status" : ["status5", "status6", "status7", "status8"] },
              { "name": "group3", "status" : ["status9", "status10"] }
            ];


            return (
              <div>
                {groups.map(group => {
                  return(
                    <div>
                      <h1>{group.name}</h1>
                      {elements
                        .filter(element => group.status.includes(element.status))
                        .map(element => {
                          return(
                            <div>
                              <h1>{element.label}</h1>
                              <p>{element.status}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })}
              </div>
            );
          }


          render() {
            return (
              <div>{ this.renderMethod() }</div>
            )
          }
        }