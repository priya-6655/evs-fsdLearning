import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ViewReq() {
    const { voterForm } = useSelector(state => state.voter);
    const [voterList, setvoterList] = useState([])

    useEffect(() => {
        // const data = JSON.parse(localStorage.getItem('voterDatas')) || []
        // console.log('voterForm', voterForm)
        setvoterList(voterForm)
    })

    return (
        <>
            <div className='container-fluid position-absolute' style={{ top: "20%" }}>
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
                        {voterList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Userid}</td>
                                <td>{item.Userconsti}</td>
                                <td>{item.passedStatus}</td>
                                <td>{item.approvedStatus}</td>
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
