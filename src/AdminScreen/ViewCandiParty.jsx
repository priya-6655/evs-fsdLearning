import React, { useEffect, useState } from 'react'
import profile from '../assets/candiprofile.png'

function ViewCandiParty() {
    const [partylist, setpartylist] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('partyDetails')) || []
        setpartylist(storedData)
    }, [])
    return (
        <>
            <div className='container-fill mb-5' id='indiaPic'>
                <div className='d-flex flex-row justify-content-center'>
                    <div className='col-sm-4 col-3 d-flex flex-column justify-content-center align-items-center'>
                        <p className='fs-4 fw-bold text-danger mt-3'>Candidate Details</p>
                        <img src={profile} alt='profile1' className='img-fluid mt-2' style={{ width: "50", height: "50" }} />

                        <select className="form-select mt-2" >
                            <option value=''>select Party/Election</option>
                            {partylist.map((item, index) => (
                                <option key={index} value={item.partyName}>{item.partyName}</option>
                            ))}
                        </select>

                        <button type='button' className='btn btn-success rounded-pill w-50 mt-5'>View</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewCandiParty
