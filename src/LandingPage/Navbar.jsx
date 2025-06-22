import React from 'react'
import logo from '../assets/evote-logo.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (

        <>

            <nav className='navbar navbar-expand bg-dark'>
                <div className='container-fluid'>
                    <img src={logo} alt='evote-logo' style={{ height: "40px" }} />

                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarContent'>
                        <p className='text-primary ms-auto d-none d-md-block d-lg-block fs-5 fw-bold'>
                            Electronic Voting System
                        </p>

                        <ul className="navbar-nav ms-auto flex-nowrap gap-3">
                            <li className="nav-item d-flex flex-row align-items-center" style={{ cursor: 'pointer' }}>
                                <img src='https://www.freeiconspng.com/thumbs/about-us-icon/about-us-icon-30.png' alt='about' style={{ height: "20px" }} />
                                <span className="nav-link cursor-pointer" onClick={() => navigate('/about')}>About</span>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center" style={{ cursor: 'pointer' }}>
                                <img src='https://www.freeiconspng.com/thumbs/contact-icon-png/contact-icon-png-0.png' alt='about' style={{ height: "20px" }} />
                                <span className="nav-link">Contact</span>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

        </>

    )
}

export default Navbar
