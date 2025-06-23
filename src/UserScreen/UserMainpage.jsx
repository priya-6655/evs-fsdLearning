import React from 'react'
import './UserPage.css'
import logo from '../assets/evote-logo.png'
import InsideNav from './InsideNav'
import MediaCom from '../AdminScreen/MediaCom'
import Footer from '../LandingPage/Footer'


function UserMainpage() {
    return (
        <>
            <div className="container-fluid p-0 position-relative mb-5" id='backpic2'>

                <div className="container-fluid bg-warning d-flex align-items-center justify-content-center">
                    <img src={logo} className="img-fluid evote mx-4" />
                    <p className="mx-auto mt-1 fs-5 fw-bold">Electronic Voting System</p>
                </div>

                <InsideNav />

            </div>
            <div className='blur-bg mb-5'>
                <MediaCom />
            </div>

            <Footer />
        </>
    )
}

export default UserMainpage
