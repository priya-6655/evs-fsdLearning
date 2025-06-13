import React from 'react'

function ViewCandidate({ dataCandidate }) {
    return (
        <>
            <div className='container-fill mb-5' id='themeIndia'>
                <p className='fs-4 fw-bold text-center mt-4'>Candidate Details</p>

                <div className='table-responsive' style={{ maxHeight: "400px", overflowY: "auto" }}>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <td>Candidate Id</td>
                                <td>Name</td>
                                <td>Election Id</td>
                                <td>Party Id</td>
                                <td>Dob</td>
                                <td>Email</td>
                                <td>Address</td>
                                <td>District</td>
                                <td>Constituency</td>
                                <td>Contact</td>
                            </tr>
                        </thead>

                        <tbody>
                            {dataCandidate.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center text-danger">No data found</td>
                                </tr>
                            ) : (

                                dataCandidate.map((item, index) => (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{item.candiName}</td>
                                        <td></td>
                                        <td></td>
                                        <td>{item.candiDob}</td>
                                        <td>{item.candiMail}</td>
                                        <td>{item.candiAddress}</td>
                                        <td>{item.candiDist}</td>
                                        <td>{item.candiConsti}</td>
                                        <td>{item.candiContact}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewCandidate
