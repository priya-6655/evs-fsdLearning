import React, { useState } from 'react'

function ViewData({ data }) {
    return (
        <div>
            <div className="container-fill mb-5" id='backTheme'>
                <p className='fs-4 fw-bold text-center'>Election Details</p>

                <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
                    <table className='table table-bordered table-striped'>
                        <thead className='table-dark'>
                            <tr>
                                <td>Election Id</td>
                                <td>Election Name</td>
                                <td>District</td>
                                <td>Date</td>
                                <td>Constituency</td>
                                <td>Counting Date</td>
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
