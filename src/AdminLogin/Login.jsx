import React, { useState } from 'react'
import './Login.css'
import Logo from '../assets/evote-logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { USER_TYPES } from '../Store/ActionTypes/UserTypes';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")
    const [showPass, setshowPass] = useState(false)
    const [forgotPage, setforgotPage] = useState(false)

    const togglePassword = () => {
        setshowPass(!showPass)
    }

    const loginForm = () => {
        if (user) {
            if (user === "Admin" && pass === "Admin123") {
                dispatch({ type: USER_TYPES.USER_LOGIN, payload: { userName: user, role: 'Admin' } })
                navigate("/admin");
            }
            else {
                alert("You are not authorized person");
            }
        }
    }

    function viewforgotPage(e) {
        e.preventDefault()
        setforgotPage(true)
    }

    return (
        <>
            <div className="container-fluid bg-warning d-flex align-items-center justify-content-center">
                <img src={Logo} alt='Logo' className="img-fluid evote mx-4" />
                <p className="mx-auto mt-1 fs-4 fw-bold">Electronic Voting System</p>
            </div>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-end">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myheader">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://images.vexels.com/media/users/3/223204/isolated/preview/a603755020e70576e1f4a08b012835d4-home-icon-flat-design.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link" href="#" onClick={() => navigate('/')}>Home</a>
                            </li>

                            <li className='nav-item d-flex flex-row align-items-center'>
                                <img src='https://static.vecteezy.com/system/resources/previews/048/116/337/non_2x/gmail-email-logo-icon-free-png.png' alt='email' className='img-fluid logout' />
                                <a className='nav-link' href='#' onClick={() => navigate('/registerAdmin')}>Register Email</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start w-100 px-3">
                <div className="col-md-12 col-lg-6 mt-5">
                    <ul className="d-flex flex-column gap-5">
                        <li><span className="h6">Welcome to the Secure Online Voting System!</span></li>
                        <li><span className="h6">This platform allows eligible voters to cast their votes securely and conveniently from anywhere.</span></li>
                        <li>
                            <span className="h5 text text-dark">Features</span>

                            <ul className="mt-2">
                                <li><span className="h6 text text-danger">Secure login</span></li>
                                <li><span className="h6 text text-danger">Easy-to-use interface</span></li>
                                <li><span className="h6 text text-danger">Real-time result updates</span></li>
                                <li><span className="h6 text text-danger">Voter verification</span></li>
                            </ul>
                        </li>
                        <li><span className="h6">Please log in with your credentials to access the voting dashboard.</span></li>
                    </ul>
                </div>


                {!forgotPage ? (
                    <div className="col-lg-5 col-md-12 mt-5 mx-lg-5 mx-auto">
                        <form className="p-4" style={{ backgroundColor: " rgb(49, 42, 51)", borderRadius: "10px" }}>
                            <div className="border border-danger bg-light p-4">
                                <div className="d-flex flex-column gap-4">
                                    <p className="text-center fs-5 fw-bold">LOGIN</p>
                                    <input type="text" id="usrName" placeholder="Username" className="form-control" value={user} onChange={(e) => setuser(e.target.value)} />

                                    <div className='position-relative w-100'>
                                        <input type={showPass ? "text" : "password"} id="password" placeholder="Password" className="form-control pe-5" value={pass} onChange={(e) => setpass(e.target.value)} />
                                        <i className={`fa-solid ${showPass ? 'fa-eye' : 'fa-eye-slash'}`} style={{ right: "15px", top: "50%", cursor: 'pointer', position: "absolute", transform: "translateY(-50%)" }} onClick={togglePassword}></i>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className='d-flex align-items-center gap-3 p-2'>
                                            <input type="checkbox" id="check" />
                                            <label>Remember me</label>
                                        </div>
                                        <button type="button" className="btn btn-warning mx-4" onClick={() => loginForm()}>Login</button>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-2 text-center">
                                <span className="text text-danger">Forget Password?<a href="#" className="mx-3 text-decoration-none" onClick={viewforgotPage}>Click here to reset it.</a></span>
                            </div>
                        </form>

                    </div >
                ) : (
                    <div className="col-lg-5 col-md-12 mt-5 mx-lg-5 mx-auto">
                        <form className='p-5'>
                            <div className="border border-danger bg-light p-4">
                                <p className="text-success fw-bold fs-4 text-center">Reset Password</p>
                                <input type="email" placeholder="Enter your email" className="form-control mb-3" />
                                <div className='d-flex justify-content-center'>
                                    <button className="btn btn-warning w-50 rounded-pill">Send Reset Link</button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div >

        </>
    )
}

export default Login
