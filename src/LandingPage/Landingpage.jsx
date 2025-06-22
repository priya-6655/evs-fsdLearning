import React, { useState } from 'react'
import './Landingpage.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Landingpage() {

  const navigate = useNavigate()

  const handleNavigate = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "admin") {
      navigate('/Login')
    }
    else if (selectedValue === 'UserOption') {
      navigate('/userlogin')
    }
  };

  return (
    <div className="container-fill ">
      <div className='root-img'>
        <Navbar />

        {/* select user type */}
        <div className="col-4 position-absolute border border-danger rounded p-4 p-md-5" style={{ top: "30%", left: "50%", padding: "20px", boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.3)", width: "90%", maxWidth: "400px", transform: "translateX(-50%)" }}>
          <p className="text text-decoration-underline text-center fs-4 fw-bold">
            Select User Type
          </p>

          <div className=" d-flex justify-content-center mt-4">
            <select className="form-select w-100" onChange={handleNavigate} defaultValue="">
              <option value="" disabled>Select user type</option>
              <option value="admin" >Admin</option>
              <option value="electoral-officer">Electoral Officer</option>
              <option value="UserOption">User</option>
            </select>
          </div>

        </div>
      </div>

      {/* container */}
      <div className='col-12 mt-5 mb-5'>
        <div className='row d-flex justify-content-center gap-5'>

          <div className='col-sm-11 col-md-11 col-lg-3 d-flex justify-content-center p-3 flex-column align-items-center border border-dark' style={{ borderRadius: "20px", backgroundColor: "rgba(243, 19, 19, 0.6)" }}>
            <img src='https://static.vecteezy.com/system/resources/previews/023/944/424/non_2x/e-book-online-education-3d-illustration-png.png' alt='ebook' style={{ width: "80px", height: "60px" }} />
            <p className='fs-4 fw-bold'>eBook</p>
            <p className='fs-5 text-center'>It consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.</p>
            <button type='button' className='btn btn-primary w-50 rounded-pill fw-bold'>Click</button>
          </div>

          <div className='col-sm-11 col-md-11 col-lg-3  d-flex justify-content-center p-3 flex-column align-items-center border border-dark' style={{ borderRadius: "20px" }}>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/022/597/386/small/3d-love-image-social-media-png.png' alt='ebook' style={{ width: "80px", height: "60px" }} />
            <p className='fs-4 fw-bold'>Media Gallery</p>
            <p className='fs-5 text-center'>It is a library of videos for a particular Election that is visible to all people's.</p>
            <button type='button' className='btn btn-primary w-50 rounded-pill fw-bold'>View</button>
          </div>

          <div className='col-sm-11 col-md-11 col-lg-3 d-flex justify-content-center p-3 flex-column align-items-center border border-dark' style={{ borderRadius: "20px", backgroundColor: "rgba(8, 96, 15, 0.6)" }}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/75/Faq-icon.png' alt='ebook' style={{ width: "80px", height: "60px" }} />
            <p className='fs-4 fw-bold'>FAQ's on EVM</p>
            <p className='fs-5 text-center'>A list of questions and answers intended to help people understand a particular Election.</p>
            <button type='button' className='btn btn-primary w-50 rounded-pill fw-bold'>Click</button>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Landingpage
