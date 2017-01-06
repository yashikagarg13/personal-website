import R from "ramda";
import React from "react";

import Carousel from "./common/carousel";
import FormatHelpers from "../helpers/format";
import ProjectsData from "../data/projects";

/*
*/

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="container text-center">
        <i className="fa fa-product-hunt margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">Projects</span>
        {R.map(projectKey =>
          <div key={`category-${FormatHelpers.strToCamelCase(projectKey)}`} className="box-wrapper">
            <div className="headline">{projectKey}</div>
            <div className="box">
              <div className="project-wrapper">
                <table>
                  <tr>
                    {R.map(project =>
                      <td key={`project-${project.id}`} className="project">
                        <div className="media-wrapper">
                          <Carousel
                            carouselId={`${FormatHelpers.strToCamelCase(project.title)}MediaCarousel`}
                            data={project.media}
                          />
                        </div>
                        <div className="padding-sm">
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
                      </td>,
                    ProjectsData[projectKey])}
                  </tr>
                </table>
              </div>
            </div>
          </div>,
        R.keys(ProjectsData))}
      </div>
    </div>
  );
};

export default Projects;
