import React from "react";
import ContactData from "../../data/contact";

export default class FindMeAt extends React.Component {
  componentDidMount() {
    $("[data-toggle='tooltip']").tooltip();
  }

  render () {
    return (
      <div>
        <a href={`http://maps.google.com/?q=${ContactData.location}`} target="_blank" className="icon-wrapper"
          data-toggle="tooltip" title={ContactData.location} data-placement="bottom">
          <i className="fa fa-map-marker accent lg text margin-right"></i></a>
        <a href={`mailto:${ContactData.email}`} className="icon-wrapper"
          data-toggle="tooltip" title={ContactData.email} data-placement="bottom">
          <i className="fa fa-envelope accent lg text margin-right"></i></a>
        <a href={`skype:${ContactData.skype}`} className="icon-wrapper"
          data-toggle="tooltip" title={ContactData.skype} data-placement="bottom">
          <i className="fa fa-skype accent lg text margin-right"></i></a>
        <a href={ContactData.github} target="_blank" className="icon-wrapper"
          data-toggle="tooltip" title={ContactData.github} data-placement="bottom">
          <i className="fa fa-github accent lg text margin-right"></i></a>
        <a href={ContactData.stackoverflow} target="_blank" className="icon-wrapper"
          data-toggle="tooltip" title={ContactData.stackoverflow} data-placement="bottom">
          <i className="fa fa-stack-overflow accent lg text margin-right"></i></a>
        <a href={ContactData.linkedin} target="_blank" className="icon-wrapper"
          data-toggle="tooltip" title={ContactData.linkedin} data-placement="bottom">
          <i className="fa fa-linkedin accent lg text margin-right"></i></a>
        <a href={ContactData.twitter} target="_blank" className="icon-wrapper"
          data-toggle="tooltip" title={ContactData.twitter} data-placement="bottom">
          <i className="fa fa-twitter accent lg text margin-right"></i></a>
      </div>
    );
  }
}
