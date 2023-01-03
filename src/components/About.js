import aboutMeImage from ".././images/about-me.png";
import { useSelector } from "react-redux";
import downloadResume from "../service/resumePDF";

function About() {
  let { skills, aboutMe, links, phone, email, location } = useSelector(
    (state) => state.portfolioReducer
  );

  const displaySkills = () =>
    skills.map((s) => (
      <div className="skill-content">
        <i className="bx bx-caret-right align-middle"></i>
        <small className="m-2">{s}</small>
      </div>
    ));

  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <img src={aboutMeImage} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Web Developer.</h3>
          <p className="mt-3">{aboutMe}</p>
          <div className="row mt-5">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Website:</strong>
                  <span>
                    <a href={links[0][2]} target="_blank">
                      LinkedIn Profile
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Phone:</strong> <span>{phone}</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Email:</strong>
                  <span>{email}</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Location:</strong> <span>{location}</span>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="download-resume-button"
            onClick={() => downloadResume()}
          >
            {" "}
            <i className="fas fa-download"></i> Download Resume
          </button>
          {/* <!-- =========== Skill Section =============--> */}
          <div className="container mt-4" data-aos="fade-up">
            <p>Here are a few technologies I've been working with recenly: </p>
            <div className="skills-container d-flex flex-wrap justify-content-center">
              {displaySkills()}
            </div>
          </div>
          {/* <!-- =========== End Skill Section =========--> */}
        </div>
      </div>
    </div>
  );
}

export default About;
