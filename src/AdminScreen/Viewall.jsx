import React, { useState } from 'react'

function Viewall() {
    const [Alldata, setAlldata] = useState([])
    const [startDate, setstartDate] = useState('')
    const [endDate, setendDate] = useState('')

    function findElect() {

        const storedData = JSON.parse(localStorage.getItem('electData')) || []

        const filtered = storedData.filter((item) => {
            const itemDate = new Date(item.date)
            const start = new Date(startDate)
            const end = new Date(endDate)
            return itemDate >= start && itemDate <= end
        })

        setAlldata(filtered);
    }
    return (
        <div>
            <div className="container border border-primary mt-3 mb-5" id="backTheme">

                <form action="">
                    <p className="text-center fs-4 fw-bold text-danger text-decoration-underline">View all election details</p>
                    <div className="d-flex flex-row justify-content-center gap-3 mt-5">
                        <label htmlFor="startDate" className="col-form-label">Date From:</label>
                        <input type="date" className="form-controls" id="startDate" value={startDate} onChange={(e) => setstartDate(e.target.value)} />
                        <label htmlFor="endDate" className="col-form-label">Date To:</label>
                        <input type="date" className="form-controls" id="endDate" value={endDate} onChange={(e) => setendDate(e.target.value)} />
                    </div>

                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <button type="button" className="btn btn-success mx-5 px-2" onClick={findElect}>Submit</button>
                    </div>
                </form>

                <div className=' table-responsive'>
                    {Alldata.length > 0 ? (
                        <table className='table table-striped table-bordered table-hover table-danger'>
                            <thead className=''>
                                <tr>
                                    <td>Name</td>
                                    <td>District</td>
                                    <td>Date</td>
                                    <td>Constitueny</td>
                                    <td>Counting Date</td>
                                </tr>
                            </thead>

                            <tbody>
                                {Alldata.map((item, index) => (

                                    <tr key={index}>
                                        <td>{item.electName}</td>
                                        <td>{item.district}</td>
                                        <td>{item.date}</td>
                                        <td>{item.constituency}</td>
                                        <td>{item.countingDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className='container border border-primary text-center'>
                            <p className='fs-4 fw-bold mt-3 text-danger'>No data found</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Viewall
