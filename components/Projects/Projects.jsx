const Projects = () => {
  return (
   <>
     <section className="project py-5" id="project">
    <div className="container">
      <div className="row">
        <div className="col-lg-11 text-center mx-auto col-12">
          <div className="col-lg-8 mx-auto">
            <h2>Things I have Built.</h2>
            <small> <i className="fa-solid fa-asterisk" style={{color:"red"}}></i> some links maybe broken if owner of it
              didn't renew the domain or hosting. </small>
          </div>
          <div className="owl-carousel owl-theme">
            <div className="item">
              <a href="https://thetg.in" target="_blank">
                <div className="project-info"><img src="/images/project/project1.webp" className="img-fluid" alt="..."/>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://kahaniyaa.com" target="_blank">
                <div className="project-info"><img src="/images/project/project2.webp" className="img-fluid" alt="..."/>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://zodhyatech.com" target="_blank">
                <div className="project-info"><img src="/images/project/project3.webp" className="img-fluid" alt="..."/>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://hellomini.pythonanywhere.com" target="_blank">
                <div className="project-info"><img src="/images/project/project5.webp" className="img-fluid" alt="..."/>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/adhikari-amit/chatty" target="_blank">
                <div className="project-info"><img src="/images/project/project6.webp" className="img-fluid" alt="..."/>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/adhikari-amit/hellomini" target="_blank">
                <div className="project-info"><img src="/images/project/project4.webp" className="img-fluid" alt="..."/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default Projects