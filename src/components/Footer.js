import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >


    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h5 className="text-uppercase fw-bold mb-4 pl-2">
            <i className="fas fa-gem me-3"></i>יוסף רולס
          </h5>
          <p>
            צייר ואומן אימפרסיוניסטי.
          </p>
        </div>

        

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            צרו קשר
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>

      </div>
    </div>
  </section>


  <div className="text-center p-4 " style={{direction: 'rtl' ,backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
      כל הזכויות שמורות ל-NEWGENMEDIA ©
  </div>
</footer>
    )
}

export default Footer
