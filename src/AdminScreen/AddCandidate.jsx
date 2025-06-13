import React, { useState } from 'react'

function AddCandidate() {
    const [addCandiData, setCandiData] = useState({
        candiName: "",
        candiMail: "",
        candiDob: "",
        candiAddress: "",
        candiDist: "",
        candiConsti: "",
        candiContact: ""
    })

    function getCandiDB(e) {
        setCandiData({
            ...addCandiData,
            [e.target.id]: e.target.value
        });
    }

    function saveCandidate(e) {
        e.preventDefault()

        const getcandi = JSON.parse(localStorage.getItem('candidateDB')) || []
        getcandi.push(addCandiData)
        localStorage.setItem('candidateDB', JSON.stringify(getcandi))
        alert("Candidate added successfully")

        setCandiData({
            candiName: "",
            candiMail: "",
            candiDob: "",
            candiDist: "",
            candiContact: "",
            candiConsti: "",
            candiAddress: ""
        })
    }
    return (
        <>
            <div className="container-fill mb-5" id="candiAdd">

                <form accept="" className="border border-danger p-5" id="candiFrm" onSubmit={saveCandidate}>
                    <p className="text-center mb-5 text-success fw-bold fs-4">Candidate Form</p>
                    <div className="row mb-3">
                        <label htmlFor="candiName" className="col-form-label col-sm-3 fw-bold">Name:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="candiName" value={addCandiData.candiName} onChange={getCandiDB} />
                        </div>
                    </div>


                    <div className="row mb-3">
                        <label htmlFor="ElectKey" className="col-form-label col-sm-3 fw-bold">Election Id:</label>
                        <div className="col-sm-6">
                            <select name='electId' id='ElectKey' className='w-100 p-2'>
                                <option value='' disabled>Select Id</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="partyKey" className="col-form-label col-sm-3 fw-bold">Party Id:</label>
                        <div className="col-sm-6">
                            <select name='partyId' id='partyKey' className='w-100 p-2'>
                                <option value='' disabled>Select Id</option>
                            </select>
                        </div>
                    </div>


                    <div className="row mb-3">
                        <label htmlFor="candiMail" className="col-form-label col-sm-3 fw-bold">Email:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="candiMail" value={addCandiData.candiMail} onChange={getCandiDB} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="candiDob" className="col-form-label col-sm-3 fw-bold">DOB:</label>
                        <div className="col-sm-6">
                            <input type="date" id="candiDob" className="form-control" value={addCandiData.candiDob} onChange={getCandiDB} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="candiAddress" className="col-form-label col-sm-3 fw-bold">Address:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="candiAddress" value={addCandiData.candiAddress} onChange={getCandiDB} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="candiDist" className="col-form-label col-sm-3 fw-bold">District:</label>

                        <div className="col-sm-6">
                            <select name="party-Name" id="candiDist" className="w-100 p-2" value={addCandiData.candiDist} onChange={getCandiDB}>
                                <option value="" disabled>Select District</option>
                                <option value="Ariyalur">Ariyalur</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Chengalpattu">Chengalpattu</option>
                                <option value="chennai">Chennai</option>
                                <option value="Dindugul">Dindugul</option>
                                <option value="Erode">Erode</option>
                                <option value="Kanniyakumari">Kanniyakumari</option>
                                <option value="Kanchipuram">Kanchipuram</option>
                                <option value="Mayiladuturai">Mayiladuturai</option>
                                <option value="Namakkal">Namakkal</option>
                                <option value="Pudukkottai">Pudukkottai</option>
                                <option value="Ranipet">Ranipet</option>
                                <option value="Salem">Salem</option>
                                <option value="Sivagangai">Sivagangai</option>
                                <option value="Tiruvallur">Tiruvallur</option>
                                <option value="Thirupathur">Thirupathur</option>
                                <option value="Thanjavor">Thanjavor</option>
                                <option value="Tiruppur">Tiruppur</option>
                                <option value="Theni">Theni</option>
                                <option value="Viruthunagar">Viruthunagar</option>
                                <option value="Vellore">Vellore</option>
                            </select>
                        </div>

                    </div>

                    <div className="row mb-3">
                        <label htmlFor="candiConsti" className="col-form-label col-sm-3 fw-bold">Constituency:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="candiConsti" value={addCandiData.candiConsti} onChange={getCandiDB} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="candiContact" className="col-form-label col-sm-3 fw-bold">Contact:</label>
                        <div className="col-sm-6">
                            <input type="tel" id="candiContact" className="form-control" value={addCandiData.candiContact} onChange={getCandiDB} />
                        </div>
                    </div>

                    <div className="row mb-3 d-flex justify-content-center">
                        <button type="submit" className="btn btn-success w-25 rounded-pill fw-bold" >Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default AddCandidate
