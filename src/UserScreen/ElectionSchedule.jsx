import React, { useEffect, useState } from 'react'

function ElectionSchedule() {
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        const viewElect = JSON.parse(localStorage.getItem('electData')) || []

        const today = new Date().toISOString().split('T')[0]
        const filterupcoming = viewElect.filter(election => election.date > today);
        setUpcoming(filterupcoming)
    }, [])
    return (
        <>
            <div className='container-fluid position-absolute' style={{ top: "20%" }}>
                <table className='table table-striped'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Election Id</th>
                            <th>Election Name</th>
                            <th>District</th>
                            <th>Date</th>
                            <th>Constituency</th>
                            <th>Counting Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {upcoming.length > 0 ? (
                            upcoming.map((item, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td>{item.electName}</td>
                                    <td>{item.district}</td>
                                    <td>{item.date}</td>
                                    <td>{item.constituency}</td>
                                    <td>{item.countingDate}</td>
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
        </>
    )
}

export default ElectionSchedule
