import { useRef } from "react"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fc9953k', 'template_l671poe', form.current, 'XYG7O_snYBP2HKAPb')
      .then((result) => {
        document.getElementById("success").innerHTML = "I get your message. Will contact you as soon as possible."
        document.getElementById('contact-form').reset();
      }, (error) => {
        document.getElementById("alert").innerHTML = "Something Went Wrong !!!. Please Contact via Mobile or other social Handels."
        console.log('FAILED...', error.text)
      })
  }
  return (
    <>
      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-12 col-lg-8 mb-2 mb-lg-0">
              <h2>Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mr-lg-5 col-12">
              <div className="google-map w-100">
                <iframe width="400" height="300" id="gmap_canvas"
                  src="https://maps.google.com/maps?q=goilakhali&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                  scrolling="no" marginHeight="0" marginWidth="0"></iframe>
              </div>
              <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Say hello</h3>
                  <p className="footer-text mb-0">+91 7431858630</p>
                  <p><a href="mailto:adhikariamit2001@gmail.com">adhikariamit2001@gmail.com</a></p>
                </div>
                <ul className="social-links">
                  <li><a href="https://www.linkedin.com/in/amitadhikari-" className="fa-brands fa-linkedin-in"
                    data-toggle="tooltip" data-placement="left" title="linkedin"></a>
                  </li>
                  <li><a href="https://www.instagram.com/_amamit_" className="fa-brands fa-instagram" data-toggle="tooltip"
                    data-placement="left" title="Instagram"></a></li>
                  <li><a href="https://github.com/adhikari-amit" className="fa-brands fa-github" data-toggle="tooltip"
                    data-placement="left" title="github"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h4 className="mb-4">Interested to work together? Let's talk</h4>
                <p id="success"></p>
                <p id="alert"></p>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-12 col-12">
                      <input type="text" className="form-control" name="from_name" placeholder="Your Name" id="name" required />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="email" className="form-control" name="from_email" placeholder="Email" id="email" required />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="tel" className="form-control" name="from_mobile" placeholder="Mobile" id="mobile"
                        minLength="9" maxLength="12" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message"
                        required></textarea>
                    </div>
                    <div className="ml-lg-auto col-lg-12 col-12">
                      <input type="submit" className="form-control submit-btn " value="Send" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact