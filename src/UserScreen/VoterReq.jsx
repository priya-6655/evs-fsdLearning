import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { VOTER_TYPES } from '../Store/ActionTypes/VoterTypes';

function VoterReq() {
    const dispatch = useDispatch();

    const [voterData, setvoterData] = useState({
        Userid: "", Username: "", Userage: "", Usergender: "", Userconsti: "", Useraddress: "", Userphoto: ""
    })
    const fileRef = useRef(null)

    function getVoter(e) {
        e.preventDefault()
        const saveVoter = JSON.parse(localStorage.getItem('voterDatas')) || []
        saveVoter.push(voterData)
        localStorage.setItem('voterDatas', JSON.stringify(saveVoter))

        dispatch({ type: VOTER_TYPES.SET_VOTER_FORM, payload: voterData })
        alert("Request Send Successfully!")

        setvoterData({
            Userid: "",
            Username: "",
            Userage: "",
            Usergender: "",
            Userconsti: "",
            Useraddress: "",
            Userphoto: ""
        })
        if (fileRef.current) {
            fileRef.current.value = null
        }
    }

    function getPhoto(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setvoterData({
                    ...voterData,
                    Userphoto: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    }


    return (
        <>
            <div className='container-fluid'>
                <form onSubmit={getVoter}>

                    <div className='col-8 border border-danger position-absolute' style={{ top: "30%", left: "15%" }}>
                        <p className='fs-4 fw-bold text-success text-decoration-underline text-center'>Voter Request Form</p>

                        <div className='row mb-3'>
                            <label htmlFor='User-id' className='col-sm-3 col-form-label  fw-bold '>Userid</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-id' className='col-sm-6 fw-bold form-control' value={voterData.Userid} onChange={(e) => setvoterData({ ...voterData, Userid: e.target.value })} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-name' className='col-sm-3 col-form-label fw-bold'>Name</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-name' className='form-control' value={voterData.Username} onChange={(e) => setvoterData({ ...voterData, Username: e.target.value })} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-age' className='col-sm-3 col-form-label fw-bold'>Age</label>
                            <div className='col-sm-6'>
                                <input type='number' id='User-age' className='form-control' value={voterData.Userage} onChange={(e) => setvoterData({ ...voterData, Userage: e.target.value })} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-form-label col-sm-3 fw-bold'>Gender:</label>

                            <div className='col-sm-6'>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='male' name='gender' className='form-check-input' value="male" checked={voterData.Usergender === "male"} onChange={(e) => setvoterData({ ...voterData, Usergender: e.target.value })} />
                                    <label htmlFor='male' className='form-check-label'>Male</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='female' name='gender' className='form-check-input' value="female" checked={voterData.Usergender === "female"} onChange={(e) => setvoterData({ ...voterData, Usergender: e.target.value })} />
                                    <label htmlFor='female' className='form-check-label'>Female</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='others' name='gender' className='form-check-input' value="others" checked={voterData.Usergender === "others"} onChange={(e) => setvoterData({ ...voterData, Usergender: e.target.value })} />
                                    <label htmlFor='others' className='form-check-label'>Others</label>
                                </div>

                            </div>

                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-consti' className='col-sm-3 col-form-label fw-bold'>Constituency</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-consti' className='form-control' value={voterData.Userconsti} onChange={(e) => setvoterData({ ...voterData, Userconsti: e.target.value })} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-address' className='col-sm-3 col-form-label fw-bold'>Address</label>
                            <div className='col-sm-6'>
                                <input type='text' id='User-address' className='form-control' value={voterData.Useraddress} onChange={(e) => setvoterData({ ...voterData, Useraddress: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="User-photo" className="col-sm-3 col-form-label fw-bold">Photo</label>
                            <div className="col-sm-6">
                                <input type="file" id="Userphoto" accept="image/*" required className="form-control" onChange={getPhoto} ref={fileRef} />
                            </div>
                        </div>

                        <div className='row mb-3'
                        >
                            <button type='submit' className='btn btn-success rounded-pill w-50 mx-auto'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default VoterReq
