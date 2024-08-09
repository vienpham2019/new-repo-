import { useDispatch, useSelector } from "react-redux";

function Portfolio() {
  let dispatch = useDispatch();
  let { projects } = useSelector((state) => state.portfolioReducer);

  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Check out of my latest project.</p>
      </div>

      <div
        className="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects.map((project, index) => (
          <div
            className="col-lg-4 col-md-6 portfolio-item filter-app"
            style={{ height: "4rem" }}
            id={index}
            onClick={() => {
              document.querySelector("body").style.overflow = "hidden";
              dispatch({
                type: "setPortfolioModal",
                value: {
                  displayPortfolioModal: "portfolio-modal-bg-active",
                  portfolioProjectDetail: project,
                },
              });
            }}
          >
            <div className="portfolio-wrap">
              <img
                src={project.projectBannerImage}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>{project.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
