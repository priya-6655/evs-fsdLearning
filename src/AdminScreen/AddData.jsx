import React, { useEffect, useState } from 'react'
import Footer from '../LandingPage/Footer'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


function AddData() {
    const location = useLocation()
    const editElect = location.state
    const [data, setdata] = useState({ electName: '', district: '', date: '', constituency: '', countingDate: '' })
    const [districtList, setDistrictList] = useState([])
    const [constituenciesList, setConstituenciesList] = useState([])

    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        if (editElect) {
            setdata(editElect)
        }

        getDistrict()

    }, [])

    const getDistrict = async () => {
        try {
            const result = await axios.get(`${baseURL}/admin/districtList`)
            setDistrictList(result.data.districtList)
            setdata({
                ...data,
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
        setdata({
            ...data,
            [e.target.id]: e.target.value
        });
        if (key === 'district') {
            const value = districtList.filter(item => item.name === e.target.value);
            console.log(value)
            getConstituencies(value[0]?.id)
        }
    };

    const saveData = async (e) => {
        e.preventDefault();
        console.log(data)
        try {
            if (editElect && editElect.electionid) {
                const id = editElect.electionid
                const res = await axios.put(`${baseURL}/election/editElect/${id}`, data)
                alert(res.data.message)
                navigate('/admin')
            }
            else {
                const res = await axios.post(`${baseURL}/election/addelection`, data)
                alert(res.data.message)
                setdata({
                    electName: "",
                    district: "",
                    date: "",
                    constituency: "",
                    countingDate: ""
                })
            }
        } catch (err) {
            console.log(err)
            alert(err.response?.data?.message || "Something went wrong")
        }
    }
    return (
        <div>
            <div className="container-fill d-flex align-items-center justify-content-center  p-5  mb-5" id="addTable">

                <form id="frm" onSubmit={saveData}>
                    <p className='text-danger fs-5 fw-bold text-center mb-5'>Election Name</p>
                    <div className="row mb-3">
                        <label htmlFor="electName" className="col-sm-6 col-form-label">Enter Election Name:</label>
                        <div className="col-sm-6">
                            <input type="text" id="electName" className='w-100 col-form-control' value={data.electName} onChange={getData} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="electState" className="col-sm-6 col-form-label">Enter District:</label>
                        <div className="col-sm-6">
                            {/* <input type="text" id="district" className='w-100 col-form-control' value={data.district}  /> */}
                            <select className='form-select'
                                id="district"
                                value={data.district}
                                onChange={e => getData(e, 'district')}
                            >
                                <option value="Select District" disabled selected>Select District</option>
                                {districtList.map((itm, idx) =>
                                    <option
                                        key={idx} value={itm.key}>{itm.name}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="electDate" className="col-sm-6 col-form-label">Select Date:</label>
                        <div className="col-sm-6 ">
                            <input type="date" id="date" className='w-100 col-form-control' value={data.date} onChange={getData} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="electConsti" className="col-sm-6 col-form-label">Enter Constituency:</label>
                        <div className="col-sm-6">
                            {/* <input type="text" id="constituency" className='w-100 col-form-control' value={data.constituency} onChange={getData} /> */}
                            <select className='form-select'
                                value={data.constituency}
                                id='constituency'
                                onChange={e => getData(e)}
                            >
                                <option value="Select Constituency" disabled selected>Select Constituency</option>
                                {constituenciesList.length > 0 && constituenciesList?.map((itm, idx) =>
                                    <option
                                        key={idx} value={itm}>{itm}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="countdate" className="col-sm-6 col-form-label">Enter Counting Date:</label>
                        <div className="col-sm-6">
                            <input type="date" id="countingDate" className='w-100 col-form-control' value={data.countingDate} onChange={getData} />
                        </div>
                    </div>

                    <div className="row mb-3 w-50 mx-auto mt-5">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddData
