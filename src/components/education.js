import React from "react";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="container text-center">
        <i className="fa fa-graduation-cap margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">Education</span>
        <div className="box">
          <div className="education-block">
            <div className="title">CBSE Board (PCM)</div>
            <div className="sub-title">Modern Public School, Delhi | 2006 - 2007</div>
            <div className="description">
              Studied physics, chemistry, mathematics, computer science and english according to
              <a href="http://www.cbse.nic.in/curric~1/sylabus_07.htm" target="_blank"> CBSE Board curriculum</a>.
              Secured <b>90%</b> in PCM and <b>97%</b> in computer science. Awarded gold medal for achieving 1st position
              in computer science. Learned C and C++ programming languages
            </div>
          </div>
          <div className="education-block nomargin-right">
            <div className="title">Bachelor of Engineering (CSE)</div>
            <div className="sub-title">Maharishi Dayanand University, Rohtak | 2007 - 2011</div>
            <div className="description">
              Studied different subjects under engineering in
              <a href="http://www.mdurohtak.ac.in/pdf/Syllabus_pdf/B.Tech/B.Tech_1st_&_2nd_Sem.pdf" target="_blank"> semester 1 and 2 </a>
              and more computer science based in
              <a href="http://www.mdurohtak.ac.in/pdf/Syllabus_pdf/B.Tech/B.Tech(CS)_3rd_to_8th_Sem.pdf" target="_blank"> semester 3 to 8</a>.
              Received certificate, trophy and scholarship on securing 15th rank at university level.
              Participated in various extra-curricular activities like fest organization, sports, dance performances,
              anchoring, volunteering, inter-college fests and received many prizes.
              Learned Java, C# and PHP programming languages and J2EE and ASP.net frameworks.
              Worked on an online video streaming project using PHP and Joomla in last semester as degree project.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
