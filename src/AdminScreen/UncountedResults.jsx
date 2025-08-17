import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UncountedResults() {
    const [elections, setElections] = useState([])
    const [selectedElectionId, setSelectedElectionId] = useState('')
    const [results, setResults] = useState([])
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [selectedParty, setSelectedParty] = useState('')
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = () => {
        axios.get(`${baseURL}/election/getVotedElection`)
            .then(res => {
                setElections(res.data.data)
            })
            .catch(err => console.log(err))
    }

    const handleSelect = (e) => {
        const id = e.target.value
        setSelectedElectionId(id)
        setSelectedDistrict('')
        setSelectedParty('')

        axios.get(`${baseURL}/electionResults/getResults/${id}`)
            .then(res => setResults(res.data))
            .catch(err => console.log(err))
    }


    const uniqueDistricts = [...new Set(results.map(r => r.election?.district))];
    const uniqueParties = [...new Set(results.map(r => r.candidate?.party?.partyName))];


    const filteredResults = results.filter(r => {
        return (
            (selectedDistrict === '' || r.election?.district === selectedDistrict) &&
            (selectedParty === '' || r.candidate?.party?.partyName === selectedParty)
        );
    });


    const handleVote = () => {
        if (!selectedElectionId) {
            alert("Kindly select an election")
            return
        }
        navigate(`/countedResult/${selectedElectionId}`)
    }

    return (
        <div className='container mt-4' id='uncountResultimg'>
            {/* Election Dropdown */}
            <select onChange={handleSelect} className='form-select' value={selectedElectionId}>
                <option value="">Select Election</option>
                {elections.map((item) => (
                    <option value={item.electionid} key={item.electionid}>
                        {item.electName}
                    </option>
                ))}
            </select>

            {/* District Dropdown */}
            {results.length > 0 && (
                <select className='form-select mt-4' value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                    <option value="">All Districts</option>
                    {uniqueDistricts.map((dist, idx) => (
                        <option key={idx} value={dist}>{dist}</option>
                    ))}
                </select>
            )}

            {/* Party Dropdown */}
            {results.length > 0 && (
                <select className='form-select mt-4' value={selectedParty} onChange={(e) => setSelectedParty(e.target.value)}>
                    <option value="">All Parties</option>
                    {uniqueParties.map((party, idx) => (
                        <option key={idx} value={party}>{party}</option>
                    ))}
                </select>
            )}

            {/* Results Table */}
            {filteredResults.length > 0 && (
                <table className='table table-bordered mt-4'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Election Name</th>
                            <th>Party</th>
                            <th>Candidate</th>
                            <th>District</th>
                            <th>Constituency</th>
                            <th>Polling Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResults.map((itm, idx) => (
                            <tr key={idx}>
                                <td>{itm.election?.electName}</td>
                                <td>{itm.candidate?.party?.partyName}</td>
                                <td>{itm.candidate?.candiName}</td>
                                <td>{itm.election?.district}</td>
                                <td>{itm.election?.constituency}</td>
                                <td>{itm.pollingCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <button type='button' className='btn btn-success rounded-pill fw-bold' onClick={handleVote}>Count Vote</button>
            </div>
        </div>
    )
}

export default UncountedResults
