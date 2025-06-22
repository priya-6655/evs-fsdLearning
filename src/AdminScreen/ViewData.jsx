import React, { useState } from 'react'

function ViewData({ data }) {
    return (
        <div>
            <div className="container-fill mb-5" id='backTheme'>
                <p className='fs-4 fw-bold text-center'>Upcoming Election Details</p>

                <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
                    <table className='table table-bordered table-striped'>
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
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className='text-center'>No data found</td>
                                </tr>
                            ) : (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{item.electName}</td>
                                        <td>{item.district}</td>
                                        <td>{item.date}</td>
                                        <td>{item.constituency}</td>
                                        <td>{item.countingDate}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewData
