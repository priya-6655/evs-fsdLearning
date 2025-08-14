import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewCandi() {
    const [electName, setElectname] = useState([])
    const [selectedElect, setSelectedElect] = useState('')
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/election/getUpcomingElection')
            .then(res => {
                setElectname(res.data.data)
            })
            .catch(err => {
                console.error("Error fetching elections", err)
                alert("Failed to fetch elections")
            })
    }, [])

    const fetchCandidate = () => {
        if (!selectedElect) {
            alert("Kindly select an election")
            return
        }

        axios.get(`http://localhost:3000/voter/electionWiseCandiInfo/${selectedElect}`)
            .then(res => {
                setCandidates(res.data.data)
            })
            .catch(err => {
                console.error("Error fetching candidate", err)
                alert("Failed to fetch candidate")
            })
    }
    return (
        <>
            <div className='container-fluid position-absolute' style={{ top: "20%" }}>
                <div className='container mt-5 p-5'>
                    <p className='fs-4 fw-bold text-center text-decoration-underline'>Candidate Details</p>
                    <select className="form-select mt-2 w-50 mx-auto" value={selectedElect} onChange={(e) => setSelectedElect(e.target.value)}>
                        <option value="">Select Election</option>

                        {electName.map((item, index) => (
                            <option key={index} value={item.electionid}>{item.electName}</option>
                        ))}
                    </select>
                    <div className='d-flex justify-content-center mt-4'>
                        <button type='button' className='btn btn-success rounded-pill w-25 fw-bold' onClick={fetchCandidate}>View</button>
                    </div>

                    {candidates.length > 0 && (
                        <div className='mt-4 ' style={{ overflowX: "auto", maxWidth: "100%" }}>
                            <table className='table table-bordered table-striped table-hover ' style={{ minWidth: "700px" }}>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>Candidate Name</th>
                                        <th>Election Name</th>
                                        <th>Party</th>
                                        <th>Date</th>
                                        <th>District</th>
                                        <th>Constituency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {candidates.map((candi, idx) => (
                                        <tr key={idx}>
                                            <td>{candi.candidateName}</td>
                                            <td>{candi.electName}</td>
                                            <td>{candi.partyName}</td>
                                            <td>{candi.date}</td>
                                            <td>{candi.district}</td>
                                            <td>{candi.constituency}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ViewCandi
