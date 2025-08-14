import axios from 'axios'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ElectionSchedule({ searchQuery }) {
    const { userid } = useSelector(state => state.voter.userData);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const [upcoming, setUpcoming] = useState([])
    const [vote, setVote] = useState([])
    const [viewVote, setViewVote] = useState(false)
    const [voteBtn, setVoteBtn] = useState(false)
    const [voterList, setvoterList] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/election/getUpcomingElection`)
            .then(res => setUpcoming(res.data.data))
            .catch(error => console.log(error))
    }, [])

    const filtered = upcoming.filter(item =>
        item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.constituency.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getVoteDetails = (electionid) => {
        setViewVote(true)
        axios.get(`${baseURL}/voter/votingDetails/${electionid}`)
            .then(res => {
                setVote(res.data.data)
            })
            .catch(err => {
                console.error("Error fetching candidate", err)
                alert("Failed to fetch candidate")
            })
    }

    useEffect(() => {
        getVoterListById();
    }, [])

    const getVoterListById = () => {
        axios.get(`${baseURL}/voter/myVotersList/${userid}`)
            .then((res) => {
                setvoterList(res.data?.data)
            })
            .catch((err) => {
                console.log("Error sending voter request:", err)
                alert("Failed to send request.");
            })
    }

    const addVote = (candidateId, partyId, electionid) => {
        const data = {
            userKey: userid,
            voterReqKey: voterList[0].voterId,
            partyKey: partyId,
            candidateKey: candidateId,
            electKey: electionid
        }
        if (!voterList.length || !voterList[0]?.voterId) {
            alert("Invalid voter list. Please try again later.");
            return;
        }


        setVoteBtn(true)

        console.log("Sending vote data:", data);


        axios.post(`${baseURL}/electionResults/addVote`, data).then(response => {
            console.log('response', response);
            setVoteBtn(true);
        }).catch(error => {
            setVoteBtn(false);
            console.log('error', error);
            alert(error?.response?.data?.message);
        })
    }

    return (
        <>
            {!viewVote && (
                <div className='container-fluid position-absolute' style={{ top: "20%", overflow: "auto" }}>
                    <table className='table table-striped'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Election Name</th>
                                <th>District</th>
                                <th>Date</th>
                                <th>Constituency</th>
                                <th>Counting Date</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {filtered.length > 0 ? (
                                filtered.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.electName}</td>
                                        <td>{item.district}</td>
                                        <td>{item.date}</td>
                                        <td>{item.constituency}</td>
                                        <td>{item.countingDate}</td>
                                        <td className="text-center align-middle">
                                            <button
                                                disabled={item.date !== moment().format('YYYY-MM-DD')}
                                                type='button' className='btn btn-warning' onClick={() => getVoteDetails(item.electionid)}>
                                                {
                                                    moment(moment().format('YYYY-MM-DD')).isSame(item.date) ? 'Vote' :
                                                        moment(moment().format('YYYY-MM-DD')).isAfter(item.date)
                                                            ? 'Voted' : 'Yet to Start'}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted">
                                        No upcoming elections found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            )}

            {vote.length > 0 && (

                <div className='container-fluid position-absolute' style={{ top: "20%", overflow: "auto" }}>
                    <table className='table table-striped'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Candidate Name</th>
                                <th>Party Name</th>
                                <th>Symbol</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {vote.map((itm, idx) => {
                                const symbolSrc = itm.symbol?.startsWith("data:image") ? itm.symbol : itm.symbol ? `data:image/png;base64,${itm.symbol}` : null

                                return (
                                    <tr key={idx}>
                                        <td>{itm.candidateName}</td>
                                        <td>{itm.partyName}</td>
                                        <td>
                                            {symbolSrc ? (
                                                <img src={symbolSrc} alt='Party Symbol' width='50px' height='50px' />
                                            ) : (
                                                <span className='text-muted'>No symbol</span>
                                            )}
                                        </td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={() => addVote(itm.candidateId, itm.partyId, itm.electionId)}
                                                disabled={voteBtn}>
                                                {voteBtn ? 'Voted' : 'Vote'}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div >
            )
            }
        </>
    )
}

export default ElectionSchedule
