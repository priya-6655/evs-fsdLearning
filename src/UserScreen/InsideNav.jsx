import React, { useState } from 'react'
import VoterReq from './VoterReq'
import { useNavigate } from 'react-router-dom'
import ViewReq from './ViewReq'
import ElectionSchedule from './ElectionSchedule'
import ViewCandi from './ViewCandi'

function InsideNav() {
    const navigate = useNavigate()
    const [showReqest, setshowRequest] = useState()
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark position-fixed w-100 mt-5">

                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader" aria-controls="myheader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="myheader">

                        <ul className="navbar-nav me-auto mb-2 mb-sm-0 gap-5">

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => setshowRequest('request')}>Voter Request</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => setshowRequest('viewRequest')}>View Request</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => setshowRequest('viewElectSchedule')}>Election Schedule</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => setshowRequest('viewElectCandi')}>Candidate Details</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold">Election Result</a>
                            </li>

                        </ul>

                        <form className="d-flex me-5" role="search">
                            <input className="form-control rounded-pill" type="search" placeholder="Search..." style={{ width: "250px" }} />
                        </form>

                        <div className="d-flex align-items-center">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/myicons/shutdown-31.png" alt="logout" className="img-fluid logout me-2" style={{ width: "25px", cursor: "pointer" }} />
                            <a onClick={() => navigate('/')} className="nav-link pointspan fw-bold text-light">Logout</a>
                        </div>
                    </div>
                </div >
            </nav >

            {
                showReqest === 'request' && <VoterReq />
            }
            {
                showReqest === 'viewRequest' && <ViewReq />
            }
            {
                showReqest === 'viewElectSchedule' && <ElectionSchedule />
            }
            {
                showReqest === 'viewElectCandi' && <ViewCandi />
            }

        </>
    )
}

export default InsideNav
