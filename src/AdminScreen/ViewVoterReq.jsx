import React, { useEffect, useState } from 'react'

function ViewVoterReq() {
    const [viewreq, setviewreq] = useState([])

    useEffect(() => {
        const voterdata = JSON.parse(localStorage.getItem('voterDatas')) || []
        setviewreq(voterdata)
        console.log(viewreq)
    }, [])


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
                            <td>Photo</td>
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
                                    <img src={item.Userphoto} alt="user" width="60" height="60" style={{ objectFit: "cover" }} />
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
