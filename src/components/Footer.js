import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >


    
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h5 className="text-uppercase fw-bold mb-4 pl-2">
            יוסף רולס
          </h5>
          <p>
            צייר ואומן אימפרסיוניסטי.
          </p>
        </div>

        

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            צרו קשר
          </h6>
          <p>
            
            Orly@robinzone.co.il
          </p>
          <p><a style={{textDecoration: "none"}} href="https://wa.me/+972547689787">לחצו לשליחת הודעה<i class="fa fa-whatsapp"></i></a></p>
          <p>0547689787</p>
        </div>
      </div>
    </div>
  </section>


  <div className="text-center p-4 " style={{direction: 'rtl' ,backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
      כל הזכויות שמורות ליוסף רולס ©
  </div>
</footer>
    )
}

export default Footer
