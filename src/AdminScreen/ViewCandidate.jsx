import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ViewCandidate() {
    const [viewCandi, setViewCandi] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/candidate/viewCandidate')
            .then(res => setViewCandi(res.data.data))
            .catch(error => console.log(error))
    }, [])

    const handleDelete = async (candidateId) => {
        if (window.confirm("Are you sure you want to delete this candidate?")) {
            try {
                await axios.delete(`http://localhost:3000/candidate/deleteCandi/${candidateId}`)
                const res = await axios.get('http://localhost:3000/candidate/viewCandidate')
                setViewCandi(res.data.data)
                alert("Candidate deleted successfully");

            } catch (error) {
                console.error("Delete failed:", error);
                alert("Failed to delete candidate");
            }
        }
    }
    return (
        <>
            <div className='container-fill mb-5' id='themeIndia'>
                <p className='fs-4 fw-bold text-center mt-4'>Candidate Details</p>

                <div className='table-responsive' style={{ maxHeight: "400px", overflow: "auto" }}>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead className='table-dark text-nowrap'>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Election Name</th>
                                <th>Party Name</th>
                                <th>Dob</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>District</th>
                                <th>Constituency</th>
                                <th>Contact</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {viewCandi.length === 0 ? (
                                <tr>
                                    <td colSpan="10" className="text-center text-danger">No data found</td>
                                </tr>
                            ) : (

                                viewCandi.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1 || 'N/A'}</td>
                                        <td>{item.candiName || 'N/A'}</td>
                                        <td>{item.election?.electName || 'N/A'}</td>
                                        <td>{item.party?.partyName || 'N/A'}</td>
                                        <td>{item.candiDob || 'N/A'}</td>
                                        <td>{item.candiMail || 'N/A'}</td>
                                        <td>{item.candiAddress || 'N/A'}</td>
                                        <td>{item.candiDist || 'N/A'}</td>
                                        <td>{item.candiConsti || 'N/A'}</td>
                                        <td>{item.candiContact || 'N/A'}</td>
                                        <td><button className='btn btn-warning' onClick={() => navigate('/addCandi', { state: item })}>Edit</button></td>
                                        <td><button className='btn btn-warning' onClick={() => handleDelete(item.candidateId)}>Delete</button></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewCandidate
