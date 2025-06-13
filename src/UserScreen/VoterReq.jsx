import React from 'react'

function VoterReq() {
    return (
        <>
            <div className='container-fluid'>
                <form>

                    <div className='col-8 border border-danger position-absolute' style={{ top: "30%", left: "15%" }}>
                        <p className='fs-4 fw-bold text-success text-decoration-underline text-center'>Voter Request Form</p>

                        <div className='row mb-3'>
                            <label htmlFor='User-id' className='col-sm-3 col-form-label  fw-bold '>Userid</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-id' className='col-sm-6 fw-bold form-control' />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-name' className='col-sm-3 col-form-label fw-bold'>Name</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-name' className='form-control' />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-age' className='col-sm-3 col-form-label fw-bold'>Age</label>
                            <div className='col-sm-6'>
                                <input type='number' id='User-age' className='form-control' />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-form-label col-sm-3 fw-bold'>Gender:</label>

                            <div className='col-sm-6'>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='male' name='gender' className='form-check-input' />
                                    <label htmlFor='male' className='form-check-label'>Male</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='female' name='gender' className='form-check-input' />
                                    <label htmlFor='female' className='form-check-label'>Female</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='others' name='gender' className='form-check-input' />
                                    <label htmlFor='others' className='form-check-label'>Others</label>
                                </div>
                            </div>

                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-consi' className='col-sm-3 col-form-label fw-bold'>Constituency</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-consti' className='form-control' />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-address' className='col-sm-3 col-form-label fw-bold'>Address</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-address' className='form-control' />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="User-photo" className="col-sm-3 col-form-label fw-bold">Photo</label>
                            <div className="col-sm-6">
                                <input type="file" id="User-photo" accept="image/*" required className="form-control" />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <button type='submit' className='btn btn-success rounded-pill w-50 mx-auto'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default VoterReq
