import R from "ramda";
import React from "react";

import Carousel from "./common/carousel";
import FormatHelpers from "../helpers/format";
import ProjectsData from "../data/projects";

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.limit = 9;

    this.state = {
      limit: this.limit,
    };

    this.onClickSeeAll = this.onClickSeeAll.bind(this);
    this.onClickSeeLess = this.onClickSeeLess.bind(this);
  }

  onClickSeeAll () {
    this.setState({
      limit: R.length(ProjectsData),
    });
  }

  onClickSeeLess () {
    this.setState({
      limit: this.limit,
    });
  }

  render () {
    return (
      <div id="projects" className="projects">
        <div className="container text-center">
          <i className="fa fa-product-hunt margin-right-xs lg primary text" aria-hidden="true"></i>
          <span className="lg uppercase bold text">Projects</span>
          <div className="box">
            {R.map(project =>
              <div key={`project-${project.id}`} className="project">
                {!R.isEmpty(project.media) && R.type(project.media) == "Array"
                  ? <div className="media-wrapper">
                      <Carousel carouselId={`${FormatHelpers.strToCamelCase(project.title)}MediaCarousel`}>
                        {R.map(index =>
                          <div key={`data-${index}`} className={`item ${index == 0 ? "active" : ""}`}>
                            <img className="img" src={`/public/${project.media[index]}`} alt=""></img>
                          </div>,
                        R.range(0, R.length(project.media)))}
                      </Carousel>
                    </div>
                  : null
                }
                <div className="padding-sm clearfix">
                  <div className="clearfix">
                    <div className="pull-left">
                      {!R.isEmpty(project.url) && R.type(project.url) == "String"
                        ? <a href={project.url} target="_blank" className="md bold text">{project.title}</a>
                        : <span className="md bold text">{project.title}</span>}
                    </div>
                    <div className="pull-right">
                      {!R.isEmpty(project.sourceCode) && R.type(project.sourceCode) == "String"
                        ? <a href={project.sourceCode} target="_blank"><i className="fa fa-github accent text"></i></a>
                        : null}
                    </div>
                  </div>
                  {!R.isEmpty(project.client) && R.type(project.client) == "String"
                    ? <div className="sm text">{project.client}</div>
                    : null}
                  <div className="xs dark-imp text margin-bottom-sm ">{project.type} <b>|</b> {project.role}</div>
                  <div className="xs dark-vimp text margin-bottom-sm">{project.description}</div>
                  <ul className="list">
                    {R.map(technology =>
                      <li key={`technology-${technology}`} className="list-item">{technology}</li>,
                    project.technologies)}
                  </ul>
                </div>
              </div>,
            R.slice(0, this.state.limit, ProjectsData))}
          </div>
          <button className="btn btn-primary show-all-btn"
            onClick={this.state.limit < R.length(ProjectsData) ? this.onClickSeeAll : this.onClickSeeLess}>
            {this.state.limit < R.length(ProjectsData) ? "See All" : "See Less"}</button>
        </div>
      </div>
    );
  }
}