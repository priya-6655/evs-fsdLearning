import React, { useEffect, useState } from 'react'

function ViewReq() {
    const [voterList, setvoterList] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('voterDatas')) || []
        setvoterList(data)
    }, [])

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewReq
