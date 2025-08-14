import axios from 'axios'
import React, { useState } from 'react'

function Viewall() {
    const [Alldata, setAlldata] = useState([])
    const [startDate, setstartDate] = useState('')
    const [endDate, setendDate] = useState('')

    const findElect = async () => {
        try {
            const response = await axios.post('http://localhost:3000/election/filterElection', {
                startDate,
                endDate
            });
            setAlldata(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="container-fill" id="backTheme">

                <form action="">
                    <p className="text-center fs-4 fw-bold text-danger text-decoration-underline">View all election details</p>

                    <div className="container">
                        <div className='row justify-content-center align-items-center g-3 mt-4'>

                            <div className='col-12 col-md-2 text-md-end text-center'>
                                <label htmlFor="startDate" className="col-form-label">Date From:</label>
                            </div>

                            <div className='col-12 col-md-4'>
                                <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setstartDate(e.target.value)} />
                            </div>

                            <div className='col-12 col-md-2 text-md-end text-center'>
                                <label htmlFor="endDate" className="col-form-label">Date To:</label>
                            </div>

                            <div className='col-12 col-md-4'>
                                <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setendDate(e.target.value)} />
                            </div>

                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <button type="button" className="btn btn-success w-25 rounded-pill fw-bold" onClick={findElect}>Submit</button>
                    </div>
                </form>

                <div className=' table-responsive'>
                    {Alldata.length > 0 ? (
                        <table className='table table-striped table-bordered table-hover'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>District</th>
                                    <th>Date</th>
                                    <th>Constitueny</th>
                                    <th>Counting Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Alldata.map((item, index) => (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
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
                        <div className='text-center'>
                            <p className='fs-4 fw-bold mt-3 text-danger'>No data found</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Viewall
