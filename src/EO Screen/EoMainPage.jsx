import React, { useEffect, useState } from 'react'
import './EoMainPage.css'
import logo from '../assets/evote-logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function EoMainPage() {
    const navigate = useNavigate()
    const [showVoterList, setShowVoterList] = useState(true)
    const [viewreq, setviewreq] = useState([])
    const [showElectResult, setShowElectResult] = useState(false)
    const [voteCounts, setVoteCounts] = useState([]);
    const [resultPublished, setResultPublished] = useState(false);
    const [elections, setElections] = useState([])
    const [selectedElectionId, setSelectedElectionId] = useState('')
    const [activeTab, setActiveTab] = useState('');
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        getRequestBystatus();
        fetchAPI()
    }, [])

    const viewVoterList = () => {
        setShowVoterList(true);
        setShowElectResult(false)
        setActiveTab("voterList")
    }

    const viewElectResult = () => {
        setShowElectResult(true)
        setShowVoterList(false)
        setActiveTab("results")
    }


    const fetchAPI = () => {
        axios.get(`${baseURL}/election/getUpcomingElection`)
            .then(res => {
                setElections(res.data.data)
            })
            .catch(err => console.log(err))
    }

    const getElectionInfo = (id) => {
        axios.get(`${baseURL}/electionResults/getCountedResults/${id}`)
            .then(res => {
                console.log('res', res)
                setVoteCounts(res.data);
                setResultPublished(res.data?.length > 0);
            });
    }

    const getRequestBystatus = () => {
        axios.post(`${baseURL}/voter/getRequestBystatus`, { passedStatus: ['3'] })
            .then(response => {
                setviewreq(response.data.data)
            })
    }

    const handleSelect = (e) => {
        const id = e.target.value;
        console.log('getElectionInfo', id)
        setSelectedElectionId(id)
        getElectionInfo(id);
    }

    const handleVoter = (voter, status) => {
        const request = { userid: voter.userid, passedStatus: voter.passedStatus, approvedStatus: status }
        axios.put(`${baseURL}/voter/changeVoterStatus`, request)
            .then(response => {
                getRequestBystatus()
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div id='backTheme'>
            <div className="container-fill bg-warning d-flex align-items-center justify-content-center" >
                <img src={logo} className="img-fluid evs-logo mx-1" alt="evsLogo" />
                <p className="mx-auto mt-1 fs-4 fw-bold">Electronic Voting System</p>
            </div>


            <nav className="navbar navbar-expand-sm navbar-dark bg-dark w-100">

                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader" aria-controls="myheader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="myheader">

                        <ul className="navbar-nav me-auto mb-2 mb-sm-0 gap-5">

                            <li className='nav-item'>
                                <img src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' className='img-fluid'
                                    style={{ width: "40px", height: "40px", cursor: "pointer" }} />
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link pointspan fw-bold${activeTab === 'voterList' ? 'active' : ''}`} onClick={viewVoterList}>Voter Request</a>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link pointspan fw-bold${activeTab === 'results' ? 'active' : ''}`} onClick={viewElectResult} >Election Result</a>
                            </li>

                        </ul>

                        <div className="d-flex align-items-center">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/myicons/shutdown-31.png" alt="logout" className="img-fluid logout me-2" style={{ width: "25px", cursor: "pointer" }} />
                            <a onClick={() => {
                                navigate('/')
                            }} className="nav-link pointspan fw-bold text-light">Logout</a>
                        </div>
                    </div>
                </div >
            </nav >


            {showVoterList && (
                <div className="container-fill mb-5" >
                    <p className='fs-4 fw-bold text-center'>Voter Requst Details</p>
                    <table className='table table-bordered table-striped'>
                        <thead className='table-dark'>
                            <tr>
                                <td>Userid</td>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Constituency</td>
                                <td>Address</td>
                                <td>CTA</td>
                            </tr>
                        </thead>

                        <tbody>
                            {viewreq.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.userid}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.userAge}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.constituency}</td>
                                    <td>{item.address}</td>

                                    <td>
                                        {item.approvedStatus === null ?
                                            <>
                                                <button
                                                    onClick={() => handleVoter(item, '1')}
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleVoter(item, '0')}
                                                >
                                                    Reject
                                                </button>
                                            </> : null
                                        }
                                        {item.approvedStatus === '1' ?
                                            <p>
                                                Approved
                                            </p> : null

                                        }
                                        {item.approvedStatus === '0' ?
                                            <p>
                                                Rejected
                                            </p> : null
                                        }

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}


            {showElectResult && (
                <div className='container-fluid position-absolute' style={{ top: "20%", overflow: "auto" }}>

                    <select onChange={handleSelect} className='form-select' value={selectedElectionId}>
                        <option value="">Select Election</option>
                        {elections.map((item) => (
                            <option value={item.electionid} key={item.electionid}>
                                {item.electName}
                            </option>
                        ))}
                    </select>

                    <h4 className='text-center mb-4 text-danger fw-bold text-decoration-underline'>Counted Results</h4>
                    {resultPublished ? (
                        voteCounts.length > 0 ? (
                            <table className='table table-bordered'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>Party</th>
                                        <th>District</th>
                                        <th>Total Votes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {voteCounts.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.partyName}</td>
                                            <td>{item.district}</td>
                                            <td>{item.totalVotes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No counted results found for this election.</p>
                        )
                    ) : (
                        <p className='text-center text-muted'>Results not been published yet.</p>
                    )}
                </div>

            )}
        </div>
    )
}

export default EoMainPage
