import Link from 'next/link'
const About = () => {
  return (
    <>
      <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text"><small className="small-text">Welcome to <span className="mobile-block">my
                portfolio 👋</span></small>
                <h1 className="animated animated-text"><span className="mr-2">Hey folks, I'm</span>
                  <div className="animated-info"><span className="animated-item">Amit Adhikari</span> <span className="animated-item"> An
                    Engineer</span> <span className="animated-item">A Developer</span></div>
                </h1>
                <p>I am an Engineer by heart and Developer by Passion. Not to mention a friend indeed.</p>
                <div className="custom-btn-group mt-4">
                  <Link href="/resume/CV06.pdf" className="btn mr-lg-2 custom-btn"
                    target="_blank"><i className="fa-solid fa-file"></i> Download Resume</Link>
                  <a href="#contact"
                    className="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <img src="/images/undraw/me.webp" className="img-fluid about_image" alt="me.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About