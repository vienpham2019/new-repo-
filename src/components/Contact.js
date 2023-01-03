import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  let { phone, location, email } = useSelector(
    (state) => state.portfolioReducer
  );

  let [contactLoad, setContactLoad] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");
  let [successMessage, setSuccessMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setContactLoad(true);
    let email = e.target[1].value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailjs
        .sendForm(
          "service_sfz7aek",
          "template_9cnpois",
          e.target,
          "user_ksp0xADEAR9QdHoylwomn"
        )
        .then(
          (result) => {
            if (result.text) {
              setContactLoad(false);
              setErrorMessage(false);
              setSuccessMessage(true);
              e.target.reset();
              setTimeout(() => {
                setSuccessMessage(false);
              }, 2000);
            }
          },
          (error) => {
            if (error.text) {
              setContactLoad(false);
              setErrorMessage("Your message could not ben sent.");
              setSuccessMessage(false);
              setTimeout(() => {
                setErrorMessage(false);
              }, 2000);
            }
          }
        );
    } else {
      setContactLoad(false);
      setErrorMessage("Invalid email");
      setSuccessMessage(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  }

  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Contact</h2>

        <p>Send a message and I will get back to you within 24 hours.</p>
      </div>

      <div className="row mt-1">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>{location}</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>{email}</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>{phone}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">
          <form
            id="contact-form"
            className="php-email-form"
            onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="my-3">
              {contactLoad && (
                <div className="loading" id="contact-loading">
                  Loading
                </div>
              )}
              {errorMessage && (
                <div className="error-message" id="contact-error-message">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="sent-message" id="contact-sent-messsage">
                  Your message has been sent. Thank you!
                </div>
              )}
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
