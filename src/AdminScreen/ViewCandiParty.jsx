import React, { useEffect, useState } from 'react'
import profile from '../assets/candiprofile.png'

function ViewCandiParty() {
    const [partylist, setpartylist] = useState([])
    const [candidate, setCandidate] = useState([])
    const [selectedParty, setselectedParty] = useState('')
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('partyDetails')) || []
        setpartylist(storedData)

        const savedCandi = JSON.parse(localStorage.getItem('candidateDB')) || []
        setCandidate(savedCandi)
    }, [])

    function partyWiseCandi() {
        console.log("Selected Party:", selectedParty)
        console.log("All Candidates:", candidate)
        const filtered = candidate.filter(candidate => candidate.partyName === selectedParty)
        console.log("Filtered Candidates:", filtered)
        setFilteredData(filtered)
    }
    return (
        <>
            <div className='container-fill mb-5' id='indiaPic'>

                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fs-4 fw-bold text-danger mt-3'>Candidate Details</p>
                        <img src={profile} alt='profile1' className='img-fluid mt-2' style={{ width: "150px", height: "150px" }} />

                        <select className="form-select mt-2 w-100" value={selectedParty} onChange={(e) => setselectedParty(e.target.value)}>
                            <option value=''>select PartyName</option>

                            {partylist.map((item, index) => (
                                <option key={index} value={item.partyName}>{item.partyName}</option>
                            ))}
                        </select>

                        <button type='button' className='btn btn-success rounded-pill w-50 mt-5' onClick={partyWiseCandi}>View</button>

                        {filteredData.length > 0 && (
                            <div className='table-responsive mt-4'>
                                <table className='table table-bordered table-striped'>
                                    <thead className='table-dark'>
                                        <tr>
                                            <th>Candidate Id</th>
                                            <th>Name</th>
                                            <th>Election Id</th>
                                            <th>Party Id</th>
                                            <th>DOB</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>District</th>
                                            <th>Constituency</th>
                                            <th>Contact</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.candidateId}</td>
                                                <td>{item.name}</td>
                                                <td>{item.electionId}</td>
                                                <td>{item.partyId}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.email}</td>
                                                <td>{item.address}</td>
                                                <td>{item.district}</td>
                                                <td>{item.constituency}</td>
                                                <td>{item.contact}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default ViewCandiParty
