import React, { useEffect, useRef, useState } from 'react'
import { VOTER_TYPES } from '../Store/ActionTypes/VoterTypes';
import axios from 'axios';
import { useSelector } from 'react-redux';

function VoterReq() {
    const { userid } = useSelector(state => state.voter.userData);
    const [voterData, setvoterData] = useState({
        userid: userid, userName: "", userAge: "", gender: "", district: "", constituency: "", address: "", photo: ""
    })
    const [districtList, setDistrictList] = useState([])
    const [constituencyList, setConstituenciesList] = useState([])

    const fileRef = useRef(null)
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {

        getDistrict()

    }, [])

    const getDistrict = async () => {
        try {
            const result = await axios.get(`${baseURL}/admin/districtList`)
            setDistrictList(result.data.districtList)
            setvoterData({
                ...voterData,
                constituency: ""
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    const getConstituencies = async (id) => {
        try {
            const result = await axios.get(`${baseURL}/admin/constituencyList/${id}`)
            setConstituenciesList(result.data.results)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


    function getData(e, key = '') {
        const field = e.target.name || e.target.id;
        setvoterData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
        if (key === 'district') {
            const value = districtList.filter(item => item.name === e.target.value);
            console.log(value)
            if (value) getConstituencies(value[0]?.id);
        }
    };

    function getVoter(e) {
        e.preventDefault()

        const payload = {
            userid: userid,
            userName: voterData.userName,
            userAge: parseInt(voterData.userAge),
            gender: voterData.gender,
            district: voterData.district,
            constituency: voterData.constituency,
            address: voterData.address,
            photo: voterData.photo
        }

        axios.post(`${baseURL}/voter/voterReq`, payload)
            .then((res) => {
                console.log(res.data)
                alert("Request send successfully")
                // dispatch({ type: VOTER_TYPES.SET_VOTER_FORM, payload: voterData })
                setvoterData({
                    userid: "",
                    userName: "",
                    userAge: "",
                    gender: "",
                    district: "",
                    constituency: "",
                    address: "",
                    photo: ""
                })

                if (fileRef.current) {
                    fileRef.current.value = null
                }
            })
            .catch((err) => {
                console.log("Error sending voter request:", err)
                alert("Failed to send request.");
            })
    }

    function getPhoto(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setvoterData({
                    ...voterData,
                    photo: reader.result
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
                                <input type='text' id='userid' className='col-sm-6 fw-bold form-control'
                                    value={userid} onChange={getData} disabled />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-name' className='col-sm-3 col-form-label fw-bold'>Name</label>
                            <div className='col-sm-6'>
                                <input type='text' id='userName' className='form-control' value={voterData.userName} onChange={getData} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='User-age' className='col-sm-3 col-form-label fw-bold'>Age</label>
                            <div className='col-sm-6'>
                                <input type='number' id='userAge' className='form-control' value={voterData.userAge} onChange={getData} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-form-label col-sm-3 fw-bold'>Gender:</label>

                            <div className='col-sm-6'>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='male' name='gender' className='form-check-input' value="male" checked={voterData.gender === "male"} onChange={getData} />
                                    <label htmlFor='male' className='form-check-label'>Male</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='female' name='gender' className='form-check-input' value="female" checked={voterData.gender === "female"} onChange={getData} />
                                    <label htmlFor='female' className='form-check-label'>Female</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' id='others' name='gender' className='form-check-input' value="others" checked={voterData.gender === "others"} onChange={getData} />
                                    <label htmlFor='others' className='form-check-label'>Others</label>
                                </div>

                            </div>

                        </div>


                        <div className='row mb-3'>
                            <label htmlFor='User-address' className='col-sm-3 col-form-label fw-bold'>Address</label>
                            <div className='col-sm-6'>
                                <input type='text' id='address' className='form-control' value={voterData.address} onChange={getData} />
                            </div>
                        </div>


                        <div className='row mb-3'>
                            <label htmlFor='User-consti' className='col-sm-3 col-form-label fw-bold'>District</label>
                            <div className='col-sm-6'>
                                {/* <input type='text' id='constituency' className='form-control' value={voterData.constituency} onChange={(e) => setvoterData({ ...voterData, constituency: e.target.value })} /> */}
                                <select className='form-select' id='district' value={voterData.district} onChange={e => getData(e, 'district')}>
                                    <option value="" disabled selected>Select District</option>
                                    {districtList.map((itm, idx) =>
                                        <option
                                            key={idx} value={itm.key}>{itm.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>


                        <div className='row mb-3'>
                            <label htmlFor='User-consti' className='col-sm-3 col-form-label fw-bold'>Constituency</label>
                            <div className='col-sm-6'>
                                {/* <input type='text' id='constituency' className='form-control' value={voterData.constituency} onChange={(e) => setvoterData({ ...voterData, constituency: e.target.value })} /> */}
                                <select className='form-select' id='constituency' value={voterData.constituency} onChange={e => getData(e)}>
                                    <option value="" disabled selected>Select Constituency</option>
                                    {constituencyList.length > 0 && constituencyList?.map((itm, idx) =>
                                        <option
                                            key={idx} value={itm}>{itm}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="User-photo" className="col-sm-3 col-form-label fw-bold">Photo</label>
                            <div className="col-sm-6">
                                <input type="file" id="photo" accept="image/*" required className="form-control" onChange={getPhoto} ref={fileRef} />
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
