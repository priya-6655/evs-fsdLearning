import React, { useState } from 'react'
import './AddElection.css'
import logo from '../assets/evote-logo.png'
import { useNavigate } from 'react-router-dom'
import AddData from './AddData'
import Footer from '../LandingPage/Footer'
import MediaCom from './MediaCom'
import ViewData from './ViewData'
import Viewall from './Viewall'
import Partyadd from './Partyadd'
import Partyview from './Partyview'
import AddCandidate from './AddCandidate'
import ViewCandidate from './ViewCandidate'
import ViewCandiParty from './ViewCandiParty'
import ViewVoterReq from './ViewVoterReq'
import { useDispatch } from 'react-redux'
import { USER_TYPES } from '../Store/ActionTypes/UserTypes'
import UncountedResults from './UncountedResults'


function AddElection() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [selectPage, setselectPage] = useState("image")

    const [showSidebar, setShowSidebar] = useState(false)


    const toggleSidebar = () => setShowSidebar(!showSidebar);
    const closeSidebar = () => setShowSidebar(false);

    const handleSelect = (path) => {
        closeSidebar();
        if (path === "add") {
            setselectPage('add');
        }
        else if (path === 'view') {

            setselectPage('view')
        }
        else if (path === 'viewall') {

            setselectPage('viewall')
        }
        else if (path === 'partyAdd') {
            setselectPage('partyAdd')
        }
        else if (path === 'partyView') {
            setselectPage('partyView')
        }
        else if (path === 'CandiAssign') {
            setselectPage('CandiAssign')
        }
        else if (path === 'CandiView') {
            setselectPage('CandiView')
        }
        else if (path === 'ViewPartyCandi') {
            setselectPage('ViewPartyCandi')
        }
        else if (path === 'viewVoterRequest') {
            setselectPage("viewVoterRequest")
        }
        else if (path === 'uncounted') {
            setselectPage("uncounted")
        }
    };
    return (
        <>
            {/* header */}
            <div className="container-fill bg-warning d-flex align-items-center justify-content-center">
                <img src={logo} className="img-fluid evs-logo mx-1" alt="evsLogo" />
                <p className="mx-auto mt-1 fs-4 fw-bold">Electronic Voting System</p>
            </div>


            {/* navbar */}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex ms-auto gap-3">
                        <button type="button" className="btn btn-success px-2" onClick={() => {
                            dispatch({ type: USER_TYPES.USER_LOGOUT })
                            navigate('/Login')
                        }}>Logout</button>
                    </div>
                </div>
            </nav>


            {/* side navbar */}
            <div className="container-fill">
                <div className="row flex-lg-wrap flex-md-wrap flex-sm-wrap">

                    {showSidebar && (
                        <div className="bg-dark" style={{ width: "220px", zIndex: "1050", position: "absolute", top: "8.6%", height: "99%" }}>

                            <ul className="navbar-nav flex-column w-100 bg-dark">
                                <li className="text-end">
                                    <button className="btn btn-close btn-close-white" onClick={closeSidebar}></button>
                                </li>

                                <li>
                                    <select className="form-select mt-4 bg-dark text-danger mt-5" onChange={(e) => handleSelect(e.target.value)} defaultValue="" style={{ border: "none" }}>
                                        <option value="" disabled >Election</option>
                                        <option value="add" >Add</option>
                                        <option value="view">View</option>
                                        <option value="viewall">View all</option>
                                    </select>

                                </li>



                                <li>
                                    <select className="form-select mt-5 bg-dark text-danger" onChange={(e) => handleSelect(e.target.value)} defaultValue="" style={{ border: "none" }}>
                                        <option value="" disabled>Party</option>
                                        <option value="partyAdd" >Add</option>
                                        <option value="partyView">View</option>
                                    </select>
                                </li>

                                <li>
                                    <select className="form-select mt-5 bg-dark text-danger" onChange={(e) => handleSelect(e.target.value)} defaultValue="" style={{ border: "none" }}>
                                        <option value="" disabled>Candidate</option>
                                        <option value="CandiAssign" >Add</option>
                                        <option value="CandiView">View</option>
                                    </select>
                                </li>

                                <li>
                                    <select className="form-select mt-5 bg-dark text-danger" onChange={(e) => handleSelect(e.target.value)} defaultValue="" style={{ border: "none" }}>
                                        <option value="" disabled>Voter Request</option>
                                        <option value="viewVoterRequest" >View</option>
                                    </select>
                                </li>

                                <li>
                                    <select className="form-select mt-5 bg-dark text-danger" onChange={(e) => handleSelect(e.target.value)} defaultValue="" style={{ border: "none" }}>
                                        <option value="" disabled>Party wise candidate Details</option>
                                        <option value="ViewPartyCandi">View</option>
                                    </select>
                                </li>

                                <li>
                                    <select className="form-select mt-5 bg-dark text-danger" onChange={(e) => handleSelect(e.target.value)} defaultValue="" style={{ border: "none" }}>
                                        <option>Result</option>
                                        <option value='uncounted'>Generate Result</option>
                                    </select>
                                </li>
                            </ul>

                        </div>
                    )}

                    {/* image cont */}
                    <div className="container-fill " id="imgGroup">
                        {selectPage === 'image' && (
                            <img src="https://images.deccanherald.com/deccanherald%2F2024-04%2F7a8efaab-5f5f-4cb3-a176-545fb58cfebf%2FPTI04_20_2024_000068B.jpg?rect=0%2C0%2C3938%2C2215&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2"
                                alt="imgGroup" className="img-fluid" style={{ objectFit: "cover", height: "80%", width: "100vw" }} />
                        )}
                        {selectPage === 'add' && <AddData />}
                        {selectPage === 'view' && <ViewData />}
                        {selectPage === 'viewall' && <Viewall />}
                        {selectPage === 'partyAdd' && <Partyadd />}
                        {selectPage === 'partyView' && <Partyview />}
                        {selectPage === 'CandiAssign' && <AddCandidate />}
                        {selectPage === 'CandiView' && <ViewCandidate />}
                        {selectPage === 'ViewPartyCandi' && <ViewCandiParty />}
                        {selectPage === 'viewVoterRequest' && <ViewVoterReq />}
                        {selectPage === 'uncounted' && <UncountedResults />}
                    </div>
                    <MediaCom />
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default AddElection
