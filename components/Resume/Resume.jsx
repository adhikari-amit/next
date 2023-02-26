const Resume = () => {
  return (
    <>
     <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <h2 className="mb-4">Experiences</h2>
          <div className="timeline">
            <div className="timeline-wrapper">
              <div className="timeline-yr"><span>2022</span></div>
              <div className="timeline-info">
                <h3><span>Full Stack Developer</span><small><a href="https://zodhyatech.com" target="_blank"
                      className="dimmed"> Zodhya
                      Tech</a></small></h3>
                <p className="dimmed">Aug, 2022 - Present</p>
                <p>Developed Product Based Company Portfolio Site.(refc. <a href="https://zodhyatech.com"
                    target="_blank">zodhyatech.com</a> )
                  Developed Dashboard for user and Admin.
                </p>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr"><span>2021</span></div>
              <div className="timeline-info">
                <h3><span>Full stack developer</span><small><a href="https://thetg.in" target="_blank" className="dimmed">
                      Trazposing
                      Gradient</a></small></h3>
                <p className="dimmed">Nov, 2021-Mar, 2022</p>
                <p>Developed Service based company portfolio, Interactive admin panel and
                  a dynamic blogging system.( refc. <a href="https://thetg.in" target="_blank">thetg.in</a> )</p>
                <p>Developed Multi Author Blogging website and admin panel.(refc. <a href="https://www.kahaniyaa.com"
                    target="_blank">kahaniyaa.com</a> )</p>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr"><span>2021</span></div>
              <div className="timeline-info">
                <h3><span>Cyber security analyst L1</span><small><a href="https://www.rootniklabs.com"
                      className="dimmed">Rootniklabs</a></small></h3>
                <p className="dimmed">Aug, 2021-Nov, 2021</p>
                <p>Performed dedicated attacks on Network and Web Application.
                  Performed Email Header Analysis.
                  Contributed in CTF development.</p>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr"><span>2021</span></div>
              <div className="timeline-info">
                <h3><span>Web Application Developer</span><small><a href="https://www.tcsion.com" className="dimmed">TCS
                      iON</a></small></h3>
                <p className="dimmed">Apr, 2021-May, 2021</p>
                <p>Created an online tourist guide portal for domestic tourists using php.
                  Conduct day-to-day project coordination, planning.
                  Develop a Tourist Guide Project.
                  Create functional and technical application documents.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <h2 className="mb-4 mobile-mt-2">Education</h2>
          <div className="timeline">
            <div className="timeline-wrapper">
              <div className="timeline-yr"><span>2023</span></div>
              <div className="timeline-info">
                <h3><span>Bachelor Degree</span><small><a href="https://tnu.in" className="dimmed">The Neotia
                      University</a></small></h3>
                <p>Bachelor of Computer Science and Engineering.<br/> CGPA:9.5
                </p>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr"><span>2019</span></div>
              <div className="timeline-info">
                <h3><span>Higher Secondary</span><small className="dimmed">WBCHSE</small></h3>
                <p>Studied at Khukurdaha I.C.M.M. High School. <br/> Score: 86%</p>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr"><span>2017</span></div>
              <div className="timeline-info">
                <h3><span> Secondary</span><small className="dimmed">WBBSE</small></h3>
                <p>Studied at Khukurdaha I.C.M.M. High School.<br/> Score: 91%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Resume