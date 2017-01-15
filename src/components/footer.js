import React from "react";
import ContactData from "../data/contact";


const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="pull-left text-left">
          <div className="lg underlined text">Yashika Garg</div>
          <div className="sm dark-vimp text">Frontend/Mobile/FullStack Developer</div>
          <div className="sm dark-imp text">Created by Yashika Garg</div>
          <div className="xs dark-nimp text margin-top-sm">Copyright <i className="fa fa-copyright"></i> Yashika Garg 2017</div>
        </div>
        <div className="pull-right text-left">
          <div className="md dark-vimp bold text margin-bottom-xs">Find me at</div>
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
  );
};

export default Footer;
