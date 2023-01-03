import { useSelector, useDispatch } from "react-redux";
import appInitState from "../service/state/appState";

function PortfolioModal() {
  let dispatch = useDispatch();
  let a_state = useSelector((state) => state.appReducer);

  let {
    title,
    about,
    projectDate,
    tools,
    projectDetails,
    projectLinks,
    projectImages,
  } = a_state.portfolioProjectDetail;

  const displayImageSlide = () =>
    projectImages.map((img) => (
      <div className="swiper-slide">
        <img src={img} alt="" />
      </div>
    ));

  return (
    <div
      className={`portfolio-modal-bg ${a_state.displayPortfolioModal}`}
      id="projectModal"
    >
      <div
        className="modal-close"
        onClick={() => {
          document.querySelector("body").style.overflow = "auto";
          dispatch({
            type: "setPortfolioModal",
            value: {
              displayPortfolioModal: "",
              portfolioProjectDetail: appInitState.portfolioProjectDetail,
            },
          });
        }}
      >
        <i className="fas fa-times"></i>
      </div>
      <div className="portfolio-modal">
        <div className="portfolio-details" id="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              {/* ================== Project image slider ===================== */}
              <div className="col-lg-8 border">
                <div className="portfolio-details-slider swiper-container">
                  <div className="swiper-wrapper align-items-center">
                    {displayImageSlide()}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              {/* ================== End Project image slider ===================== */}

              {/* ================== Project Detail ============================== */}
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>{title}</h3>
                  <hr />
                  <p>
                    <em>{about}</em>
                  </p>
                  <ul>
                    <li className="portfolio-info-title">
                      <strong>Project date</strong>: {projectDate}
                    </li>
                    <li className="portfolio-info-title">
                      <strong>Tools </strong>
                      <ul>
                        <li>{tools["Front-end"]}</li>
                        {tools["Back-end"] && <li>{tools["Back-end"]}</li>}
                      </ul>
                    </li>
                    <li className="portfolio-info-title">
                      <strong>Project details </strong>
                      <ul>
                        {projectDetails.map((d) => (
                          <li>{d}</li>
                        ))}
                      </ul>
                    </li>
                    {projectLinks.map((l) => (
                      <li className="portfolio-info-link">
                        <a href={l.link} target="_blank">
                          <i className={l.icon}></i>
                          <strong>{l.title}</strong>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* ================== End Project Detail ============================== */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
