import React from 'react'

function Partyview({ partyData1 }) {

    return (
        <>
            <div className='container-fill mb-50' id='backpic'>
                <p className='fs-4 fw-bold text-center mt-3 txt'>Patry Details</p>

                <div className='table-responsive'>
                    <table className='table table-striped table-hover'>
                        <thead className='bg-dark text-light'>
                            <tr>
                                <td>Party Id</td>
                                <td>Party Name</td>
                                <td>Leader</td>
                                <td>Symbol</td>
                            </tr>
                        </thead>

                        <tbody>
                            {partyData1.length === 0 ? (
                                <tr>
                                    <td colSpan='5' className='fs-4 fw-bold text-center'>No data found</td>
                                </tr>
                            ) : (
                                partyData1.map((item, index) => (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{item.partyName}</td>
                                        <td>{item.leader}</td>
                                        <td><img src={item.symbol} alt='election symbol' width="50" height="50" /></td>
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

export default Partyview
