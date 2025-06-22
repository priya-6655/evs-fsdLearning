import React, { useEffect, useState } from 'react'

function ViewCandi() {
    const [electName, setElectname] = useState([])

    useEffect(() => {
        const storeElect = JSON.parse(localStorage.getItem('electData')) || []
        setElectname(storeElect)
    })
    return (
        <>
            <div className='container-fluid position-absolute' style={{ top: "20%" }}>
                <div className='container mt-5 p-5' style={{ width: '400px', maxWidth: '100%', height: '600px' }}>
                    <p className='fs-4 fw-bold text-center text-decoration-underline'>Candidate Details</p>
                    <select className="form-select mt-2 w-100">
                        <option value="">Select Election</option>

                        {electName.map((item, index) => (
                            <option key={index} value={item.electName}>{item.electName}</option>
                        ))}
                    </select>
                    <div className='d-flex justify-content-center mt-4'>
                        <button type='button' className='btn btn-success rounded-pill w-50 fw-bold'>View</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCandi
