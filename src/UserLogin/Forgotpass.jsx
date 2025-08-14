import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import logo from '../assets/evote-logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Forgotpass() {
    const [getMail, setGetMail] = useState("")
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    function msgToMailBox(e) {
        e.preventDefault()
        axios.post(`${baseURL}/user/resetUserPassword`, { email: getMail }).then((response) => {
            alert(response.data.message)
            setGetMail('')
        }).catch((error) => {
            alert(error.response?.data?.message || "Something went wrong!")
            console.log(error)
        })
    }
    return (
        <>


            <div className="container-fluid p-0 position-relative" id='forgotPage'>
                <div className="container-fluid bg-warning d-flex align-items-center justify-content-center">
                    <img src={logo} className="img-fluid evote mx-4" />
                    <p className="mx-auto mt-1 fs-5 fw-bold">Electronic Voting System</p>
                </div>



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
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="logout" className="img-fluid logout me-2" />
                                        <span onClick={() => navigate('/userlogin')} className="nav-link pointspan">Home</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>



                <div className='d-flex justify-content-center align-items-center'>

                    <div className='container p-4 rounded-4 shadow mt-5' style={{ maxWidth: "500px", width: "100%" }}>
                        <form>
                            <p className='fs-4 fw-bold text-center'>Forgot Password?</p>
                            <div className='mb-4'>
                                <input type='email' className='form-control' placeholder='Enter your mail'
                                    value={getMail} onChange={(e) => setGetMail(e.target.value)} />
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type='submit' className='btn btn-success w-50' onClick={msgToMailBox}>Send Reset Link</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpass
