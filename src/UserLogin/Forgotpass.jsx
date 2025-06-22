import React from 'react'
import UserNavbar from './UserNavbar'
import logo from '../assets/evote-logo.png'

function Forgotpass() {

    function msgBox(e) {
        e.preventDefault()
        alert('Password reset link sent to your email!')
    }
    return (
        <>


            <div className="container-fluid p-0 position-relative" id='forgotPage'>
                <div className="container-fluid bg-warning d-flex align-items-center justify-content-center">
                    <img src={logo} className="img-fluid evote mx-4" />
                    <p className="mx-auto mt-1 fs-5 fw-bold">Electronic Voting System</p>
                </div>

                <UserNavbar />

                <div className='d-flex justify-content-center align-items-center'>

                    <div className='container p-4 rounded-4 shadow mt-5' style={{ maxWidth: "500px", width: "100%" }}>
                        <form>
                            <p className='fs-4 fw-bold text-center'>Forgot Password?</p>
                            <div className='mb-4'>
                                <input type='email' className='form-control' placeholder='Enter Your mail' />
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type='submit' className='btn btn-success w-25' onClick={msgBox}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpass
