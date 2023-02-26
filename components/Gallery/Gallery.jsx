const Gallery = () => {
  return (
    <>
     <section id="gallery">
    <div className="container">
      <div className="row mb-5 align-items-center">
        <div className="col-md-12 col-lg-8 mb-2 mb-lg-0">
          <h2>Gallery</h2>
        </div>
      </div>
      <div className="row no-gutter">
        <div className="item col-sm-6 col-md-4 col-lg-4 mb-4">
          <a href="" className="item-wrap fancybox">
            <div className="work-info">
              <h3>School Days</h3> <span>Friends</span>
            </div> <img className="img-fluid" src="/images/gallery/1.jpeg" />
          </a>
        </div>
        <div className="item col-sm-6 col-md-4 col-lg-4 mb-4">
          <a href=""  className="item-wrap">
            <div className="work-info">
              <h3>Technice Club</h3> <span>Activities</span>
            </div> <img className="img-fluid" src="/images/gallery/2.jpeg" />
          </a>
        </div>
        <div  className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
          <a href=""  className="item-wrap">
            <div className="work-info">
              <h3>Collage</h3> <span>Friends</span>
            </div> <img className="img-fluid" src="/images/gallery/3.jpeg" />
          </a>
        </div>
        <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
          <a href=""  className="item-wrap">
            <div className="work-info">
              <h3>NSS</h3> <span>Computer Literacy Mission.</span>
            </div> <img className="img-fluid" src="/images/gallery/4.jpeg" />
          </a>
        </div>
        <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
          <a href=""  className="item-wrap">
            <div className="work-info">
              <h3>Me</h3> <span>Happy 😊</span>
            </div> <img className="img-fluid" src="/images/gallery/6.jpeg" />
          </a>
        </div>
        <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
          <a href=""  className="item-wrap">
            <div className="work-info">
              <h3>Teachers Day</h3>
            </div> <img className="img-fluid" src="/images/gallery/5.jpeg" />
          </a>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Gallery