import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


function AddCandidate() {
    const location = useLocation()
    const editCandi = location.state
    const navigate = useNavigate()
    const [election, setElection] = useState([]);
    const [parties, setParties] = useState([]);
    const [addCandiData, setCandiData] = useState({
        candiName: "",
        candiMail: "",
        candiDob: "",
        candiAddress: "",
        candiDist: "",
        candiConsti: "",
        candiContact: "",
        ElectKey: "",
        partyKey: ""
    })
    const [districtList, setDistrictList] = useState([])
    const [constituenciesList, setConstituenciesList] = useState([])
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        axios.get(`${baseURL}/election/getUpcomingElection`).then(res => {
            setElection(res.data.data);
        });

        axios.get(`${baseURL}/party/viewParty`).then(res => {
            setParties(res.data.data);
        });
        if (editCandi) {
            setCandiData(editCandi)
        }

        getDistrict()
    }, []);


    const getDistrict = async () => {
        try {
            const result = await axios.get(`${baseURL}/admin/districtList`)
            setDistrictList(result.data.districtList)
            setCandiData({
                ...addCandiData,
                candiConsti: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getConstituencies = async (id) => {
        try {
            const result = await axios.get(`${baseURL}/admin/constituencyList/${id}`)
            setConstituenciesList(result.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    function getCandiDB(e, key = '') {
        setCandiData({
            ...addCandiData,
            [e.target.id]: e.target.value
        });

        if (key === 'district') {
            const value = districtList.filter(item => item.name === e.target.value);
            getConstituencies(value[0]?.id)
        }
    }

    const saveCandidate = async (e) => {
        e.preventDefault()
        try {
            if (editCandi && editCandi.candidateId) {
                const id = editCandi.candidateId
                const res = await axios.put(`${baseURL}/candidate/editCandidate/${id}`, addCandiData)
                alert(res.data.message)
                navigate('/admin')

            } else {
                const response = await axios.post(`${baseURL}/candidate/addCandidate`, addCandiData);
                alert(response.data.message)
                setCandiData({
                    candiName: "",
                    ElectKey: "",
                    partyKey: "",
                    candiDist: "",
                    candiConsti: "",
                    candiDob: "",
                    candiContact: "",
                    candiAddress: "",
                    candiMail: ""
                })
            }
        } catch (error) {
            console.log("Error adding candidate", error)
            alert("Something went wrong.Please try again!")
        }

    }
    return (
        <>
            <div className="container-fill mb-5" id="candiAdd">

                <div className='container'>
                    <form accept="" id="candiFrm" onSubmit={saveCandidate}>
                        <p className="text-center mb-5 text-success fw-bold fs-4">Candidate Form</p>
                        <div className="row mb-3">
                            <label htmlFor="candiName" className="col-form-label col-sm-3 fw-bold">Name:</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="candiName" value={addCandiData.candiName} onChange={getCandiDB} />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <label htmlFor="ElectKey" className="col-form-label col-sm-3 fw-bold">Election:</label>
                            <div className="col-sm-6">
                                <select id='ElectKey' className='w-100 p-2' value={addCandiData.ElectKey} onChange={getCandiDB}>
                                    <option value="" disabled>Select Election</option>

                                    {election.map((e, index) => (
                                        <option key={index} value={e.electionid} >{e.electName}</option>
                                    ))}

                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="partyKey" className="col-form-label col-sm-3 fw-bold">Party:</label>
                            <div className="col-sm-6">
                                <select id='partyKey' className='w-100 p-2' value={addCandiData.partyKey} onChange={getCandiDB}>
                                    <option value="" disabled>Select Party</option>

                                    {parties.map((p, index) => (
                                        <option key={index} value={p.partyid} >{p.partyName}</option>
                                    ))}

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
                                <select className='form-select'
                                    id="candiDist"
                                    value={addCandiData.candiDist}
                                    onChange={e => getCandiDB(e, 'district')}
                                >
                                    <option value="Select District" selected>Select District</option>
                                    {districtList.map((itm, idx) =>
                                        <option
                                            key={idx} value={itm.key}>{itm.name}</option>
                                    )}
                                </select>
                            </div>

                        </div>

                        <div className="row mb-3">
                            <label htmlFor="candiConsti" className="col-form-label col-sm-3 fw-bold">Constituency:</label>
                            <div className="col-sm-6">
                                <select className='form-select'
                                    value={addCandiData.candiConsti}
                                    id='candiConsti'
                                    onChange={e => getCandiDB(e)}
                                >
                                    <option value="Select Constituency" selected>Select Constituency</option>
                                    {constituenciesList.length > 0 && constituenciesList?.map((itm, idx) =>
                                        <option
                                            key={idx} value={itm}>{itm}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="candiContact" className="col-form-label col-sm-3 fw-bold">Contact:</label>
                            <div className="col-sm-6">
                                <input type="tel" maxLength={10} id="candiContact" className="form-control" value={addCandiData.candiContact} onChange={getCandiDB} />
                            </div>
                        </div>

                        <div className="row mb-3 d-flex justify-content-center">
                            <button type="submit" className="btn btn-success w-25 rounded-pill fw-bold" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCandidate
