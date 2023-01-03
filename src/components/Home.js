import bannerImage from ".././images/banner-image.png";
import { useSelector } from "react-redux";
function Home() {
  let { links, name } = useSelector((state) => state.portfolioReducer);
  return (
    <div className="row ml-4" data-aos="zoom-in" data-aos-delay="100">
      <div className="col-lg-4">
        <img src={bannerImage} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content">
        <h2 className="primary">Hello !</h2>
        <h1>I'm {name}</h1>
        <p>
          A
          <span
            className="typed"
            data-typed-items="Web Designer, Full Stack Developer"
          ></span>
        </p>
        <div className="home-contact-btn">
          <a className="btn" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="social-links">
          {links.map((l) => (
            <a href={l[2]} className="mx-2" target="_blank">
              <i className={l[0]}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
