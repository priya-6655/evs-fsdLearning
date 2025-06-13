import React, { useState } from 'react'
import './Login.css'
import Logo from '../assets/evote-logo.png';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const[user,setuser]=useState("")
    const[pass,setpass]=useState("")

    const loginForm = () => {

        if (user) {

            if (user === "Admin" && pass === "Admin")  {
                navigate( "/admin");
            }
            else {
                alert("You are not authorized person");
            }
        }
    }

    return (
        <>
            <div className="container-fluid bg-warning d-flex align-items-center justify-content-center">
                <img src={Logo} alt='Logo' className="img-fluid evote mx-4" />
                <h5 className="mx-auto mt-1">Electronic Voting System</h5>
            </div>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-end">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myheader">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/myicons/shutdown-31.png" alt="logout" className="img-fluid logout"
                                onClick={()=>navigate('/')}
                                />
                                <a className="nav-link" href="#">Log Out</a>
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

                <div className="col-lg-5 col-md-12 mt-5 mx-lg-5 mx-auto">
                    <form className="p-4" style={{ backgroundColor: " rgb(49, 42, 51)", borderRadius: "10px" }}>
                        <div className="border border-danger bg-light p-4">
                            <div className="d-flex flex-column gap-4">
                                <h4 className="text-center">LOGIN</h4>
                                <input type="text" id="usrName" placeholder="Username" className="form-control" value={user} onChange={(e)=>setuser(e.target.value)} />
                                <input type="password" id="password" placeholder="Password" className="form-control" value={pass} onChange={(e)=>setpass(e.target.value)} />

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
                            <span className="text text-danger">Forget Password?<a href="#" className="mx-3 text-decoration-none">Click here to reset it.</a></span>
                        </div>
                    </form>
                    <div className="mt-5 text-center">
                        <span className="text text-primary">New User?<a href="#" style={{ color: "black" }} className="mx-3 text-decoration-none">Register Here</a></span>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark mt-5 text-center p-5">
                <span className="text text-light">Copyright @ 2024 Vsp Technologies. All rights reserved </span>
            </div>
        </>
    )
}

export default Login
