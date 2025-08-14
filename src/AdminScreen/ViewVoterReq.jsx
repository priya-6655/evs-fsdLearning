import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ViewVoterReq() {
    const [viewreq, setviewreq] = useState([])
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetchVoterList()
    }, [])

    const fetchVoterList = () => {
        axios.post(`${baseURL}/voter/getRequestBystatus`, { passedStatus: ['1', '2'] })
            .then(response => {
                setviewreq(response.data.data)
            })
    }

    const handleVoter = (voter, status) => {
        const request = { userid: voter.userid, passedStatus: status, approvedStatus: null }
        axios.put(`${baseURL}/voter/changeVoterStatus`, request)
            .then(response => {
                fetchVoterList()
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="container-fill mb-5" id='backTheme'>
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
                                    <button
                                        onClick={() => handleVoter(item, '2')}
                                    >
                                        {item.passedStatus === '2' ? 'viewed' : 'view'}
                                    </button>

                                    <button
                                        onClick={() => handleVoter(item, '3')}
                                    >
                                        Pass to EO
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewVoterReq
