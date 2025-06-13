import React, { useState } from 'react'
import VoterReq from './VoterReq'
import { useNavigate } from 'react-router-dom'

function InsideNav() {
    const navigate = useNavigate()
    const [showReqest, setshowRequest] = useState()
    return (
        <>
            <nav className="navbar navbar-expand-sm  position-fixed w-100 mt-5">

                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="myheader">

                        <ul className="navbar-nav gap-5">

                            <li className="nav-item">
                                <span className="nav-link pointspan fw-bold" onClick={() => setshowRequest('request')}>Voter Request</span>
                            </li>

                            <li className="nav-item">
                                <span className="nav-link pointspan fw-bold">View Request</span>
                            </li>

                            <li className="nav-item">
                                <span className="nav-link pointspan fw-bold">Election Schedule</span>
                            </li>

                            <li className="nav-item">
                                <span className="nav-link pointspan fw-bold">Candidate Details</span>
                            </li>

                            <li className="nav-item">
                                <span className="nav-link pointspan fw-bold">Election Result</span>
                            </li>

                            <li className='nav-item'>
                                <span className='nav-link'>
                                    <input type='search' id='search' className='col-form-control rounded-pill' placeholder='Search...' style={{ width: "350px" }} />
                                </span>
                            </li>

                            <li className="nav-item d-flex align-items-center me-3">
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/myicons/shutdown-31.png" alt="logout" className="img-fluid logout me-2" />
                                <span onClick={() => navigate('/')} className="nav-link pointspan fw-bold">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {showReqest === 'request' && <VoterReq />}
        </>
    )
}

export default InsideNav
