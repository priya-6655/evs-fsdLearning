import React from 'react'
import logo from '../assets/evote-logo.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (

        <div className='position-absolute container-fluid'>

            <nav className='navbar navbar-expand bg-dark'>
                <img src={logo} alt='evote-logo' style={{ height: "40px" }} />
                <p className='text-primary ms-auto d-none d-md-block d-lg-block fs-5 fw-bold'>Electronic Voting System</p>

                <ul className="navbar-nav ms-auto flex-nowrap gap-3">
                    <li className="nav-item d-flex flex-row align-items-center">
                        <img src='https://www.freeiconspng.com/thumbs/about-us-icon/about-us-icon-30.png' alt='about' style={{ height: "20px", cursor: "pointer" }} onClick={() => navigate('/about')} />
                        <span className="nav-link cursor-pointer">About</span>
                    </li>

                    <li className="nav-item d-flex flex-row align-items-center">
                        <img src='https://www.freeiconspng.com/thumbs/contact-icon-png/contact-icon-png-0.png' alt='about' style={{ height: "20px", cursor: "pointer" }} />
                        <span className="nav-link">Contact</span>
                    </li>
                </ul>

            </nav>
        </div>

    )
}

export default Navbar
