import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ViewData() {
    const [addElect, setaddElect] = useState([])
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        axios.get(`${baseURL}/election/getUpcomingElection`)
            .then(res => setaddElect(res.data.data))
            .catch(error => console.log(error))
    }, [])

    const handleDelete = async (electionid) => {
        if (window.confirm("Are you sure you want to delete this election?")) {
            try {
                await axios.delete(`${baseURL}/election/deleteElect/${electionid}`)
                const res = await axios.get(`${baseURL}/election/getUpcomingElection`)
                setaddElect(res.data.data)
                alert("Election delete successfully")
            } catch (error) {
                console.error("Delete failed:", error);
                alert("Failed to delete candidate");
            }
        }
    }
    return (
        <div>
            <div className="container-fill mb-5" id='backTheme'>
                <p className='fs-4 fw-bold text-center'>Upcoming Election Details</p>

                <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
                    <table className='table table-bordered table-striped'>
                        <thead className='table-dark'>
                            <tr>
                                <th>S.No</th>
                                <th>Election Name</th>
                                <th>District</th>
                                <th>Date</th>
                                <th>Constituency</th>
                                <th>Counting Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {addElect.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className='text-center'>No data found</td>
                                </tr>
                            ) : (
                                addElect.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.electName}</td>
                                        <td>{item.district}</td>
                                        <td>{item.date}</td>
                                        <td>{item.constituency}</td>
                                        <td>{item.countingDate}</td>
                                        <td><button className='btn btn-warning' onClick={() => navigate('/addElect', { state: item })}>Edit</button></td>
                                        <td><button className='btn btn-warning' onClick={() => handleDelete(item.electionid)}>Delete</button></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewData
