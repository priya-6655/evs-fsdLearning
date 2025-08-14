import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Partyview() {
    const [viewPartydata, setviewPartydata] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/party/viewParty")
            .then(res => setviewPartydata(res.data.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = async (partyid) => {
        if (window.confirm("Are you sure you want to delete this party?")) {
            try {
                await axios.delete(`http://localhost:3000/party/deleteParty/${partyid}`)
                const res = await axios.get('http://localhost:3000/party/viewParty')
                setviewPartydata(res.data.data)
                alert("Party deleted successfully")
            } catch (error) {
                console.error("Delete failed:", error);
                alert("Failed to delete candidate");
            }
        }
    }
    return (
        <>
            <div className='container-fill mb-50' id='backpic'>
                <p className='fs-4 fw-bold text-center mt-3 txt'>Patry Details</p>

                <div className='table-responsive'>
                    <table className='table table-striped table-hover'>
                        <thead className='bg-dark text-light'>
                            <tr>
                                <th>S.No</th>
                                <th>Party Name</th>
                                <th>Leader</th>
                                <th>Symbol</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {viewPartydata.length === 0 ? (
                                <tr>
                                    <td colSpan='5' className='fs-4 fw-bold text-center'>No data found</td>
                                </tr>
                            ) : (
                                viewPartydata.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.partyName}</td>
                                        <td>{item.leader}</td>
                                        <td><img src={item.symbol} alt='election symbol' width="50" height="50" /></td>
                                        <td><button className='btn btn-warning' onClick={() => navigate('/Partyadd', { state: item })}>Edit</button></td>
                                        <td><button className='btn btn-warning' onClick={() => handleDelete(item.partyid)}>Delete</button></td>
                                    </tr>

                                ))
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Partyview
