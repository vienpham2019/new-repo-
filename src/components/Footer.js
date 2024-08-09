import { useSelector } from "react-redux";

function Footer() {
  let { links } = useSelector((state) => state.portfolioReducer);
  return (
    <div className="container">
      <h3>Vien Pham</h3>

      <p>
        "I welcome challenges. I like challenges. It gives me a reason to keep
        going." <br />
        <small className="text-end">Rose NamaJunas</small>
      </p>

      <div className="social-links">
        {links.map((l) => (
          <a href={l[2]} className="mx-2" target="_blank" rel="noreferrer">
            <i className={l[0]}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
export default Footer;
