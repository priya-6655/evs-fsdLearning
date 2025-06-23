import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VOTER_TYPES } from '../Store/ActionTypes/VoterTypes';

function ViewVoterReq() {
    const [viewreq, setviewreq] = useState([])
    const { voterForm } = useSelector(state => state.voter);
    const dispatch = useDispatch();

    useEffect(() => {
        // const voterdata = JSON.parse(localStorage.getItem('voterDatas')) || []
        setviewreq(voterForm)
        // console.log(viewreq)
    })

    const handleVoter = (voter) => {
        const updatedVoterInfo = voterForm.map((item) => {
            if (item.Userid === voter.Userid) {
                return {
                    ...voter,
                    passedStatus: 'Admin Viewed',
                    approvedStatus: 'Passed to EO'
                }
            }
            return item
        })
        dispatch({ type: VOTER_TYPES.UPDATE_VOTER_INFO, payload: updatedVoterInfo })
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
                                <td>{item.Userid}</td>
                                <td>{item.Username}</td>
                                <td>{item.Userage}</td>
                                <td>{item.Usergender}</td>
                                <td>{item.Userconsti}</td>
                                <td>{item.Useraddress}</td>
                                <td>
                                    <button
                                        onClick={() => handleVoter(item)}
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
