import React, { useState } from 'react'

function Partyadd() {
    const [partyData, setpartData] = useState({ partyName: "", leader: "", symbol: "" })

    function getParty(e) {
        const { id, value, files } = e.target

        if (id === 'symbol') {
            const reader = new FileReader()

            reader.onloadend = () => {
                console.log(reader.result, "Read success")
                setpartData({
                    ...partyData,
                    [id]: reader.result
                });
            };


            if (files[0]) {
                reader.readAsDataURL(files[0])
            }
            else {
                setpartData({
                    ...partyData,
                    [id]: value
                });
            }

        }


        else {
            setpartData({
                ...partyData,
                [id]: value
            })
        }

    };

    function addPartyData(e) {
        e.preventDefault();

        const savedParty = JSON.parse(localStorage.getItem('partyDetails')) || []
        savedParty.push(partyData)
        localStorage.setItem('partyDetails', JSON.stringify(savedParty))

        alert("Party added successfully")

        setpartData({
            partyName: "",
            leader: "",
            symbol: ""
        })
    }

    return (
        <>
            <div className="container-fill mb-5 d-flex justify-content-center align-items-center" id='backTheme'>

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
                            <input type="file" id="symbol" accept="image/*" required className="form-control" onChange={getParty} />
                        </div>
                    </div>


                    <div className="text-center mb-2 mt-5">
                        <button className="btn btn-success px-5" type="submit">Submit</button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Partyadd
