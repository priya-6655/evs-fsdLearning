import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Partyadd() {
    const location = useLocation()
    const editData = location.state
    const [partyData, setpartData] = useState({ partyName: "", leader: "", symbol: "" })
    const [symbolReader, setsymbolReder] = useState(false)
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        if (editData) {
            console.log("Edit data", editData)
            setpartData(editData)
            setsymbolReder(!!editData.symbol)
        }
    }, [editData])

    function getParty(e) {
        const { id, value, files } = e.target

        if (id === 'symbol') {
            const file = files[0]

            if (file.size > 500000) {
                alert("Symbol is too large!")
                return
            }
            const reader = new FileReader()
            reader.onloadend = () => {
                setpartData(prevData => ({
                    ...prevData,
                    symbol: reader.result
                }));
                setsymbolReder(true)
            }
            reader.readAsDataURL(file)
        } else {
            setpartData(prevData => ({
                ...prevData,
                [id]: value
            }));
        }

    }


    const addPartyData = async (e) => {
        e.preventDefault();


        if (!partyData.partyName || !partyData.leader || !partyData.symbol) {
            alert("All fields are required!")
            return
        }

        try {
            if (editData && editData.partyid) {
                const id = editData.partyid
                const response = await axios.put(`${baseURL}/party/updateParty/${id}`, partyData)
                alert(response.data.message);
                navigate('/admin')

            } else {
                const response = await axios.post(`${baseURL}/party/addParty`, partyData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                alert(response.data.message)
                setpartData({
                    partyName: "",
                    leader: "",
                    symbol: ""
                })
                setsymbolReder(false)
            }
        }
        catch (err) {
            console.log("Error adding party", err.response?.data || err.message)
            alert("Something went wrong.Please try again!")
        }
    }


    return (
        <>
            <div className="container-fill mb-5 d-flex justify-content-center align-items-center" id='AddPartyImg'>

                <form action="" className="border border-danger p-5 w-75 mt-5" id="partyFrm" onSubmit={addPartyData}>
                    <p className="text-center mb-5 text-success fs-4 fw-bold text-decoration-underline">Party Form</p>

                    <div className="row mb-3">
                        <label htmlFor="partyName" className="col-sm-4 col-form-label fw-bold">Party Name:</label>
                        <div className="col-sm-8">
                            <input type="text" id="partyName" required className="form-control" value={partyData.partyName} onChange={getParty} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="leader" className="col-sm-4 col-form-label fw-bold">Leader:</label>
                        <div className="col-sm-8">
                            <input type="text" id="leader" required className="form-control" value={partyData.leader} onChange={getParty} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="symbol" className="col-sm-4 col-form-label fw-bold">Party Symbol:</label>
                        <div className="col-sm-8">
                            <input type="file" id="symbol" accept="image/*" className="form-control" onChange={getParty} />

                            {symbolReader && partyData.symbol && (
                                <div className="mt-3 d-flex justify-content-end">
                                    <p className="fw-bold d-flex align-items-center mx-5 ">Current Party Symbol:</p>
                                    <img src={partyData.symbol} alt="Party Symbol" width="100" height="100" />
                                </div>
                            )}

                        </div>
                    </div>




                    <div className="text-center mb-2 mt-5">
                        <button className="btn btn-success px-5" type="submit" disabled={!partyData.symbol || !partyData.partyName || !partyData.leader}>Submit</button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Partyadd
