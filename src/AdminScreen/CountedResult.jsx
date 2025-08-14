import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../assets/evote-logo.png'


function CountedResult() {
    const { electionId } = useParams();
    const [voteCounts, setVoteCounts] = useState([]);
    const [isPublished, setIsPublished] = useState(false);
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        axios.get(`${baseURL}/electionResults/getCountedResults/${electionId}`)
            .then(res => setVoteCounts(res.data))
            .catch(err => console.log(err));
    }, [electionId]);

    const handlePublishResult = () => {
        axios.put(`${baseURL}/electionResults/publishedResult/${electionId}`)
            .then(() => {
                alert("Result successfully published")
                setIsPublished(true);
                navigate(`/admin`);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container-fill' id='uncountResultimg'>

            <div className="container-fill bg-warning d-flex align-items-center justify-content-center">
                <img src={logo} className="img-fluid evs-logo mx-1" alt="evsLogo" />
                <p className="mx-auto mt-1 fs-4 fw-bold">Electronic Voting System</p>
            </div>


            <h4 className='text-center mb-4 text-danger fw-bold text-decoration-underline '>Counted Results</h4>

            {!isPublished ? (
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
                <p className='text-success text-center'>Results published successfully. Redirecting users...</p>
            )}

            <div className='d-flex align-items-center justify-content-center mt-5'>
                <button type='button' className='btn btn-danger rounded-pill' onClick={handlePublishResult}>Generate Result</button>
            </div>
        </div>
    );
}

export default CountedResult;
