import React, { useEffect, useState } from 'react'
import profile from '../assets/candiprofile.png'
import axios from 'axios'

function ViewCandiParty() {
    const [partylist, setpartylist] = useState([])
    const [selectedParty, setselectedParty] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        axios.get(`${baseURL}/party/viewParty`).then(res => {
            setpartylist(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function partyWiseCandi() {
        axios.post(`${baseURL}/candidateDetails/partyWiseCandi`, { partyKey: selectedParty })
            .then(res => {
                console.log("Filltered Candidates:", res.data.data)
                setFilteredData(res.data.data)
            })
            .catch(err => {
                console.log(err, "Error fetching candidate by party")
                alert("Failed to fetch candidate data")
            })
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
                                <option key={index} value={item.partyid}>{item.partyName}</option>
                            ))}
                        </select>

                        <button type='button' className='btn btn-success rounded-pill w-50 mt-5' onClick={partyWiseCandi}>View</button>

                        {filteredData.length > 0 && (
                            <div className='table-responsive mt-4'>
                                <table className='table table-bordered table-striped'>
                                    <thead className='table-dark'>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Candidate Name</th>
                                            <th>Election Name</th>
                                            <th>Party Name</th>
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
                                                <td>{index + 1}</td>
                                                <td>{item.candiName}</td>
                                                <td>{item.election?.electName}</td>
                                                <td>{item.party?.partyName}</td>
                                                <td>{item.candiDob}</td>
                                                <td>{item.candiMail}</td>
                                                <td>{item.candiAddress}</td>
                                                <td>{item.candiDist}</td>
                                                <td>{item.candiConsti}</td>
                                                <td>{item.candiContact}</td>
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
