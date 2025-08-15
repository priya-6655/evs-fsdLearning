import React, { useState } from 'react'
import './UserLogin.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/evote-logo.png'
import UserNavbar from './UserNavbar'
import { useDispatch } from 'react-redux'
import { VOTER_TYPES } from '../Store/ActionTypes/VoterTypes'
import axios from 'axios'

function UserLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userData, setuserData] = useState(false)
    const [hidelog, sethidelog] = useState(true)
    const [Voter, setVoter] = useState('')
    const [password, setpassword] = useState('')
    const [regUser, setregUser] = useState({ firstName: "", lastName: "", userDOB: "", gender: "", street: "", location: "", city: "", state: "", pincode: "", mobile: "", email: "", password })
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    function getuserData() {
        sethidelog(false)
        setuserData(true)
    }

    const getUser = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`${baseURL}/user/login`, {
                userid: Voter,
                password
            })

            const { name, role, userid, email, token } = res.data
            console.log('login api response', userid)
            sessionStorage.setItem("token", token)

            dispatch({
                type: VOTER_TYPES.VOTER_LOGIN,
                payload: { name, role, userid, email }
            })
            navigate('/user')
        } catch (error) {
            alert(error.response?.data?.message || "Invalid credentials");
        }

    }


    const regUserData = async (f) => {
        f.preventDefault()

        try {
            console.time("register");
            const response = await axios.post(`${baseURL}/user/userReg`, regUser)
            console.timeEnd("register");
            alert(response.data.message)
            setregUser({
                firstName: "",
                lastName: "",
                userDOB: "",
                gender: "",
                street: "",
                location: "",
                city: "",
                state: "",
                pincode: "",
                mobile: "",
                email: "",
                password: ""
            })
            sethidelog(true)
            setuserData(false)
        } catch (error) {
            console.log(error)
            alert(error.response?.data?.err || "Something went wrong")
        }
    }
    return (
        <>
            <div className="container-fluid p-0 position-relative" id='backpic1'>
                {/* header */}
                <div className="container-fluid bg-warning d-flex align-items-center justify-content-center">
                    <img src={logo} className="img-fluid evote mx-4" />
                    <p className="mx-auto mt-1 fs-5 fw-bold">Electronic Voting System</p>
                </div>


                {/* navbar */}
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
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="about" className="img-fluid logout me-2" />
                                        <span onClick={() => navigate('/')} className="nav-link pointspan">Home</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* login form */}
                {hidelog &&
                    <div className="position-absolute top-50 start-50 translate-middle col-11 col-sm-8 col-md-6 col-lg-4 bg-white border border-danger p-4 rounded" id="oldusr" style={{ boxShadow: "15px 15px 20px" }} >
                        <p className="text-center text-decoration-underline mt-3 fs-4">Login Form</p>

                        <div className="d-flex justify-content-center">
                            <form>

                                <div className="d-flex flex-column gap-3 p-4">
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="usrid">UserId:</label>
                                        <input type="text" id="usrid" className="form-control w-50" value={Voter} onChange={(e) => setVoter(e.target.value)} />
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="usrPass">Password:</label>
                                        <input type="password" id="usrPass" className="form-control w-50" value={password} onChange={(e) => setpassword(e.target.value)} />
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div className='d-flex align-items-center gap-2'>
                                            <input type="checkbox" id="check" className="custom-check" />
                                            <label htmlFor="check">Remember me</label>
                                        </div>

                                        <p className='fs-6 m-0 text-primary text-decoration-underline pointlink' onClick={() => navigate('/forgotpassword')}>Forgot Password?</p>

                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'>

                                        <div className='d-flex align-items-center gap-2'>
                                            <p className='fs-6'>Don't have an account?</p>
                                            <p className='fs-6 text-primary text-decoration-underline pointlink' onClick={getuserData}>Create Account</p>
                                        </div>

                                    </div>

                                    <button type="submit" className="btn btn-success w-50 mx-auto mt-2" onClick={getUser}>Login</button>

                                </div>
                            </form>


                        </div >
                    </div >
                }


                {userData &&
                    <div className='position-absolute translate-middle col-11 col-sm-8 col-md-6 col-lg-6 bg-white rounded ' style={{ top: "80%", left: "50%" }}>

                        <form className='border border-danger p-5 ' onSubmit={regUserData}>

                            <p className='fs-4 fw-bold text-center text-danger'>Registeration Form</p>

                            <div className='row mb-3'>
                                <label htmlFor='fname' className='col-form-label col-sm-3 fw-bold'>First Name:</label>
                                <div className="col-sm-6">
                                    <input type='text' className='form-control' id='firstName' value={regUser.firstName} onChange={(f) => setregUser({ ...regUser, firstName: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='lname' className='col-form-label col-sm-3 fw-bold'>Last Name:</label>
                                <div className='col-sm-6'>
                                    <input type='text' className='form-control' id='lastName' value={regUser.lastName} onChange={(f) => setregUser({ ...regUser, lastName: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='userDob' className='col-form-label col-sm-3 fw-bold'>DOB:</label>
                                <div className='col-sm-6'>
                                    <input type='date' className='form-control' id='userDOB' value={regUser.userDOB} onChange={(f) => setregUser({ ...regUser, userDOB: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-form-label col-sm-3 fw-bold'>Gender:</label>

                                <div className='col-sm-6'>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' id='male' name='gender' className='form-check-input' value="male" onChange={(f) => setregUser({ ...regUser, gender: f.target.value })} />
                                        <label htmlFor='male' className='form-check-label'>Male</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' id='female' name='gender' className='form-check-input' value="female" onChange={(f) => setregUser({ ...regUser, gender: f.target.value })} />
                                        <label htmlFor='female' className='form-check-label'>Female</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' id='trans' name='gender' className='form-check-input' value="trans" onChange={(f) => setregUser({ ...regUser, gender: f.target.value })} />
                                        <label htmlFor='trans' className='form-check-label'>Transgender</label>
                                    </div>
                                </div>

                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='street' className='col-form-label col-sm-3 fw-bold'>Street:</label>
                                <div className='col-sm-6'>
                                    <input type='text' className='form-control' id='street' value={regUser.street} onChange={(f) => setregUser({ ...regUser, street: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='location' className='col-form-label col-sm-3 fw-bold'>Location:</label>
                                <div className='col-sm-6'>
                                    <input type='text' className='form-control' id='location' value={regUser.location} onChange={(f) => setregUser({ ...regUser, location: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='city' className='col-form-label col-sm-3 fw-bold'>City:</label>
                                <div className='col-sm-6'>
                                    <input type='text' className='form-control' id='city' value={regUser.city} onChange={(f) => setregUser({ ...regUser, city: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='state' className='col-form-label col-sm-3 fw-bold'>State:</label>
                                <div className='col-sm-6'>
                                    <input type='text' className='form-control' id='state' value={regUser.state} onChange={(f) => setregUser({ ...regUser, state: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='pincode' className='col-form-label col-sm-3 fw-bold'>Pincode:</label>
                                <div className='col-sm-6'>
                                    <input type='number' className='form-control' id='pincode' value={regUser.pincode} onChange={(f) => setregUser({ ...regUser, pincode: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='mobile' className='col-form-label col-sm-3 fw-bold'>Mobile No:</label>
                                <div className='col-sm-6'>
                                    <input type='number' className='form-control' id='mobile' value={regUser.mobile} onChange={(f) => setregUser({ ...regUser, mobile: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='email' className='col-form-label col-sm-3 fw-bold'>Email:</label>
                                <div className='col-sm-6'>
                                    <input type='email' className='form-control' id='email' value={regUser.email} onChange={(f) => setregUser({ ...regUser, email: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='pass' className='col-sm-3 fw-bold col-form-label'>Password:</label>
                                <div className='col-sm-6'>
                                    <input type='password' className='form-control' id='password' value={regUser.password} onChange={(f) => setregUser({ ...regUser, password: f.target.value })} />
                                </div>
                            </div>

                            <div className='row mb-3 col-sm-6 mx-auto rounded-pill'>
                                <button type='submit' className='btn btn-danger'>Submit</button>
                            </div>

                        </form>
                    </div>
                }
            </div >
        </>
    )
}

export default UserLogin
