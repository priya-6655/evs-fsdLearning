import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {

  return (
    <>
      <div id='contactTheme'>
        <Navbar />

        <div className='col-lg-6 col-sm-10 col-md-8 mt-5 mx-5 border border-danger glow'>
          <form>
            <div className="d-flex justify-content-center align-items-center mt-4 flex-column">
              <p className='fw-bold fs-4 text-danger text-center'>Contact Form</p>
              <div className="row mb-3">
                <label htmlFor="QName" className="form-label col-sm-4 fw-bold text-light">Name</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="QName" />
                </div>
              </div>

              <div className='row mb-3'>
                <label htmlFor='QMail' className='form-label col-sm-4 fw-bold text-light'>Email</label>
                <div className='col-sm-8'>
                  <input type='email' className='form-control' id='Qmail' />
                </div>
              </div>

              <div className='row mb-3'>
                <label htmlFor='QNum' className='form-label col-sm-4 fw-bold text-light'>Phone</label>
                <div className='col-sm-8'>
                  <input type='tel' className='form-control' id='QNum' />
                </div>
              </div>

              <div className='row mb-3'>
                <label htmlFor='Query' className='form-label col-sm-4 fw-bold text-light'>Query Type</label>
                <div className='col-sm-8'>
                  <select className='form-select w-100' id='Query'>
                    <option selected>Select query type</option>
                    <option value="voterReg">Voter Registration</option>
                    <option value="techIssue">Technical Issue</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className='row mb-3'>
                <label htmlFor='message' className='form-label col-sm-4 fw-bold text-light'>Message</label>
                <div className='col-sm-8'>
                  <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>
              </div>


              <div className="text-center mt-3">
                <button type="submit" className="btn btn-danger rounded-pill">Submit</button>
              </div>

            </div>
          </form>
        </div>
      </div>


      <div className='col-12 row ms-auto gap-5 mb-5 py-5'>
        <p className='fs-4 fw-bold text-center w-100'>Contact Information</p>

        <div className='col-lg-3 col-sm-8 col-md-8 d-flex align-items-center justify-content-center'>
          <i className="fa-solid fa-location-dot" style={{ fontSize: "50px", color: "blue" }}></i>
          <span className='ms-4'>Srinivasan Salai,<br />Ashoka Road,<br />New Delhi, 110020</span>
        </div>

        <div className='col-lg-3 col-sm-8 col-md-8 d-flex align-items-center justify-content-center'>
          <i className="fa-solid fa-envelope-open-text" style={{ fontSize: "50px", color: "blue" }}></i>
          <a className='ms-4' href='#'>evsheadquaters@yohoo.com</a>
        </div>

        <div className='col-lg-3 col-sm-8 col-md-8 d-flex align-items-center justify-content-center'>
          <i className="fa-solid fa-phone-volume" style={{ fontSize: "50px", color: "blue" }}></i>
          <span className='ms-4'>23051568-10,23052568-18,<br />23062185,23062286</span>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact
