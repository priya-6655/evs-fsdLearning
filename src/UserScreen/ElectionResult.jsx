import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ElectionResult() {
    const [voteCounts, setVoteCounts] = useState([]);
    const [resultPublished, setResultPublished] = useState(false);
    const [elections, setElections] = useState([])
    const [selectedElectionId, setSelectedElectionId] = useState('')

    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = () => {
        axios.get('http://localhost:3000/election/getUpcomingElection')
            .then(res => {
                setElections(res.data.data)
            })
            .catch(err => console.log(err))
    }

    const getElectionInfo = (id) => {
        axios.get(`http://localhost:3000/electionResults/getCountedResults/${id}`)
            .then(res => {
                console.log('res', res)
                setVoteCounts(res.data);
                setResultPublished(res.data?.length > 0);
            });
    }

    const handleSelect = (e) => {
        const id = e.target.value;
        console.log('getElectionInfo', id)
        setSelectedElectionId(id)
        getElectionInfo(id);
    }

    return (
        <>
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
                    <p className='text-center text-muted'>Results have not been published yet.</p>
                )}
            </div>
        </>
    );
}

export default ElectionResult;
