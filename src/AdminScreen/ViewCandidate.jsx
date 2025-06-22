import React from 'react'

function ViewCandidate({ dataCandidate }) {
    return (
        <>
            <div className='container-fill mb-5' id='themeIndia'>
                <p className='fs-4 fw-bold text-center mt-4'>Candidate Details</p>

                <div className='table-responsive' style={{ maxHeight: "400px", overflow: "auto" }}>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead className='table-dark text-nowrap'>
                            <tr>
                                <th>Candidate Id</th>
                                <th>Name</th>
                                <th>Election Id</th>
                                <th>Party Id</th>
                                <th>Dob</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>District</th>
                                <th>Constituency</th>
                                <th>Contact</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dataCandidate.length === 0 ? (
                                <tr>
                                    <td colSpan="10" className="text-center text-danger">No data found</td>
                                </tr>
                            ) : (

                                dataCandidate.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.candiId || 'N/A'}</td>
                                        <td>{item.candiName || 'N/A'}</td>
                                        <td>{item.electionid || 'N/A'}</td>
                                        <td>{item.partyid || 'N/A'}</td>
                                        <td>{item.candiDob || 'N/A'}</td>
                                        <td>{item.candiMail || 'N/A'}</td>
                                        <td>{item.candiAddress || 'N/A'}</td>
                                        <td>{item.candiDist || 'N/A'}</td>
                                        <td>{item.candiConsti || 'N/A'}</td>
                                        <td>{item.candiContact || 'N/A'}</td>
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
