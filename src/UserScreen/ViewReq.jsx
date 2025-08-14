import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

function ViewReq() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const { userid } = useSelector(state => state.voter.userData);
    const [voterList, setvoterList] = useState([])

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

    const passedStatusMapping = {
        1: 'New Request',
        2: 'Admin forwards to EO',
        3: 'EO approves/rejects'
    }

    const approvedStatusMapping = {
        0: 'Rejected',
        1: 'Approved'
    }

    return (
        <>
            <div className='container-fluid position-absolute' style={{ top: "20%", overflowX: "auto", whiteSpace: "nowrap", width: "100%" }}>
                <table className='table table-striped'>
                    <thead className='table-dark'>
                        <tr>
                            <td>Userid</td>
                            <td>Constituency</td>
                            <td>Passed Status</td>
                            <td>Approved Status</td>
                            <td>Voterid</td>
                        </tr>
                    </thead>
                    <tbody>
                        {voterList?.length > 0 &&
                            voterList.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.userid}</td>
                                    <td>{item.constituency}</td>
                                    <td>{passedStatusMapping[item.passedStatus]}</td>
                                    <td>{approvedStatusMapping[item.approvedStatus]}</td>
                                    <td>{item.voterId}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewReq
