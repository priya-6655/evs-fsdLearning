import React from 'react'
import { useNavigate } from 'react-router-dom'

function MailRegister() {
    const navigate = useNavigate()
    return (
        <>
            <div className='container-fill d-flex justify-content-center align-items-center' id='regImg'>

                <div className='container p-4 rounded-4 shadow' style={{ maxWidth: "500px", width: "100%" }}>
                    <form>
                        <p className="mb-5 text-success fw-bold fs-4 mx-5">Mail Registration</p>

                        <div className="col-sm-8 mb-3">
                            <input type='text' id='name' className="form-control" placeholder='Enter Username' />
                        </div>

                        <div className="col-sm-8 mb-3">
                            <input type='password' id='adminPass' className="form-control" placeholder='Enter Password' />
                        </div>

                        <div className="col-sm-8 mb-3">
                            <input type='email' id='adminMail' className="form-control" placeholder='Enter Mailid' />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type='submit' className='btn btn-success w-25' onClick={() => navigate('/Login')}>Register</button>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default MailRegister
