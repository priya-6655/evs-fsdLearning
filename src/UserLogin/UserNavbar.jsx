import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserNavbar() {
    const navigate = useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-end" id="myheader">

                        <ul className="navbar-nav">
                            <li className="nav-item d-flex align-items-center me-3">
                                <img src="https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png" alt="Contact" className="img-fluid logout me-2" />
                                <span onClick={() => navigate('/contact')} className="nav-link pointspan">Contact</span>
                            </li>

                            <li className="nav-item d-flex align-items-center me-3">
                                <img src="https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-10.png" alt="about" className="img-fluid logout me-2" />
                                <span onClick={() => navigate('/about')} className="nav-link pointspan">About Us</span>
                            </li>
                            <li className="nav-item d-flex align-items-center me-3">
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/myicons/shutdown-31.png" alt="logout" className="img-fluid logout me-2" />
                                <span onClick={() => navigate('/')} className="nav-link pointspan">Log Out</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNavbar
