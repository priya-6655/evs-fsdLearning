import React, { useState } from 'react'
import VoterReq from './VoterReq'
import { useNavigate } from 'react-router-dom'
import ViewReq from './ViewReq'
import ElectionSchedule from './ElectionSchedule'
import ViewCandi from './ViewCandi'
import axios from 'axios'
import ElectionResult from './ElectionResult'



function InsideNav() {
    const navigate = useNavigate()
    const [showReqest, setshowRequest] = useState("")

    const [showUserInfo, setShowUserInfo] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [userInfo, setUserInfo] = useState(null)

    const handleNavClick = (option) => {
        setshowRequest(option)

        const navbar = document.getElementById('myheader')
        if (navbar?.classList.contains('show')) {
            const bsCollapse = new window.bootstrap.Collapse(navbar)
            bsCollapse.hide()
        }
    }


    const CloseBtn = async (e) => {
        e.preventDefault()
        if (!setUserInfo) {
            await handleMyProfile()
        }
        setShowUserInfo(prev => !prev)
    }

    const handleMyProfile = async () => {
        try {
            const res = await axios.get("http://localhost:3000/user/userProfile", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('userToken')}`
                }
            })
            setUserInfo(res.data)
            setShowUserInfo(true)
            // res.status(200).json({ message: "data" })
        } catch (error) {
            console.error("Error fetching profile:", error);
            alert("Failed to load profile.");
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark w-100">

                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader" aria-controls="myheader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="myheader">

                        <ul className="navbar-nav me-auto mb-2 mb-sm-0 gap-5">

                            <li className='nav-item'>
                                <img src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' className='img-fluid'
                                    style={{ width: "40px", height: "40px", cursor: "pointer" }} onClick={CloseBtn} />
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => handleNavClick('request')}>Voter Request</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => handleNavClick('viewRequest')}>View Request</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => handleNavClick('viewElectSchedule')}>Election Schedule</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => handleNavClick('viewElectCandi')}>Candidate Details</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link pointspan fw-bold" onClick={() => handleNavClick('electionResult')}>Election Result</a>
                            </li>

                        </ul>

                        <form className="d-flex me-5" role="search" onSubmit={(e) => e.preventDefault()}>
                            <input className="form-control rounded-pill" type="search" placeholder="Search district or constituency..."
                                style={{ width: "300px" }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        </form>

                        <div className="d-flex align-items-center">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/myicons/shutdown-31.png" alt="logout" className="img-fluid logout me-2" style={{ width: "25px", cursor: "pointer" }} />
                            <a onClick={() => {
                                sessionStorage.clear()
                                navigate('/')
                            }} className="nav-link pointspan fw-bold text-light">Logout</a>
                        </div>
                    </div>
                </div >
            </nav >

            <div className="d-flex" >

                <div className="bg-dark text-white p-4 position-absolute " style={{
                    width: showUserInfo ? '250px' : '0px', transition: 'all 0.3s ease-in-out',
                    overflow: 'hidden', height: "88%", transform: showUserInfo ? 'translateX(0)' : 'translateX(-100%)', zIndex: 1050
                }}>

                    {showUserInfo && (
                        <>
                            <div className='d-flex flex-row mb-5'>
                                <p className='text-info'>{userInfo ? `Welcome, ${userInfo.firstName}` : "Welcome..."}</p>
                                <div className=" mx-5 me-auto">
                                    <button className="btn btn-danger mb-3" onClick={CloseBtn}>×</button>
                                </div>
                            </div>

                            <ul className="list-unstyled">
                                <li className='nav-item mb-5' style={{ cursor: 'pointer' }} onClick={handleMyProfile}>My Profile</li>
                                <li className='nav-item mb-5' style={{ cursor: 'pointer' }}>Notification</li>
                                <li className='nav-item mb-5' style={{ cursor: 'pointer' }}>Voting History</li>
                                <li className='nav-item mb-5' style={{ cursor: 'pointer' }}>Settings</li>
                                <li className='nav-item mt-auto text-dark' style={{ cursor: 'pointer' }}>Logout</li>
                            </ul>
                        </>
                    )}

                </div>



                <div style={{ marginLeft: showUserInfo ? '250px' : '0px', transition: 'margin-left 0.3s ease', padding: "20px" }}>
                    {
                        showReqest === 'request' && <VoterReq />
                    }
                    {
                        showReqest === 'viewRequest' && <ViewReq />
                    }
                    {
                        showReqest === 'viewElectSchedule' && <ElectionSchedule searchQuery={searchQuery} />
                    }
                    {
                        showReqest === 'viewElectCandi' && <ViewCandi />
                    }
                    {
                        showReqest === 'electionResult' && <ElectionResult />
                    }

                </div>

            </div>
        </>
    )
}

export default InsideNav
