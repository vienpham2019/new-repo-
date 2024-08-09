import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import PortfolioModal from "./components/PortfolioModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      {/* // <!-- ======= Header ======= --> */}
      <header id="header" className="d-flex flex-column justify-content-center">
        <Header />
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Home Section ======= --> */}
      <section id="hero" className="d-flex flex-column justify-content-center">
        <Home />
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          {/* <!-- =========== Info Section =============--> */}
          <About />
          {/* <!-- =========== End Info Section ==========--> */}
        </section>
        {/* <!-- End About Me Section --> */}

        {/* <!-- ======= Resume Section ======= --> */}
        <section id="resume" className="resume">
          <Resume />
        </section>
        {/* <!-- End Resume Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio section-bg">
          <Portfolio />
        </section>

        {/* <!-- ======= Portfolio Details Section ======= --> */}
        <PortfolioModal />
        {/* <!-- End Portfolio Details Section --> */}

        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <Contact />
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <Footer />
      </footer>
      {/* <!-- End Footer --> */}
    </div>
  );
}

export default App;
