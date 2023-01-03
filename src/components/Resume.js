import resumeImage from ".././images/work-exp.png";
import { useSelector } from "react-redux";
function Resume() {
  let { experienceLists } = useSelector((state) => state.portfolioReducer);

  const displayJobDetail = () =>
    experienceLists.map((j) => {
      let { title, date, location, company, jobDetails } = j;
      return (
        <div className="resume-item">
          <h4>{title}</h4>
          <h5>{date}</h5>
          <p>
            <em>
              <strong>{company}</strong> - {location}
            </em>
          </p>
          <ul>
            {jobDetails.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
        </div>
      );
    });
  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          {/* <!-- Resume list --> */}
          {displayJobDetail()}
          {/* <!-- End Resume List --> */}
        </div>
        <div className="col-lg-6">
          <img src={resumeImage} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Resume;
