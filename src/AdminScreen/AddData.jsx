import React, { useState } from 'react'
import Footer from '../LandingPage/Footer'

function AddData() {

    const [data, setdata] = useState({ electName: '', district: '', date: '', constituency: '', countingDate: '' })

    function getData(e) {

        setdata({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    const saveData = (e) => {
        e.preventDefault();


        const savedItem = JSON.parse(localStorage.getItem('electData')) || [];
        savedItem.push(data)
        localStorage.setItem('electData', JSON.stringify(savedItem))


        console.log("Submitted Data:", data);
        alert("Added successfully")

        setdata({
            electName: '',
            district: '',
            date: '',
            constituency: '',
            countingDate: ''
        });

    }
    return (
        <div>
            <div className="container-fill d-flex align-items-center justify-content-center  p-5  mb-5" id="addTable">

                <form id="frm" onSubmit={saveData}>
                    <p className='text-danger fs-5 fw-bold text-center mb-5'>Election Name</p>
                    <div className="row mb-3">
                        <label htmlFor="electName" className="col-sm-6 col-form-label">Enter Election Name:</label>
                        <div className="col-sm-6">
                            <input type="text" id="electName" className='w-100 col-form-control' required value={data.electName} onChange={getData} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="electState" className="col-sm-6 col-form-label">Enter District:</label>
                        <div className="col-sm-6">
                            <input type="text" id="district" className='w-100 col-form-control' required value={data.district} onChange={getData} />
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
                            <input type="text" id="constituency" className='w-100 col-form-control' value={data.constituency} onChange={getData} />
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
