import React from 'react'

function Footer() {
    return (
        <>
            <div className='container-fluid px-3' style={{ backgroundColor: "rgba(13, 11, 173, 0.6)", }}>
                <div className='row'>

                    <div className='col-12 col-md-6 col-lg-4 mt-3 p-3' style={{ backgroundColor: "rgba(28, 7, 76, 0.6)", borderRadius: "5px" }}>
                        <p className='fs-5 fw-bold text-light text-center'>Election Commission of India</p>

                        <div className='d-flex flex-column flex-md-row gap-3 p-3'>
                            <img src="https://www.ceodelhi.gov.in/img/de.png" alt='electLogo' className='img-fluid' />
                            <p className='fs-6 text-light mt-3 mt-md-0'>The Election Commission of India is an autonomous constitutional authority
                                responsible for administering election processes in India. The body administers elections to the Lok
                                Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice
                                President in the country.</p>
                        </div>

                        <p className='fs-6 text-light text-center mt-3'>
                            <i className="fa-solid fa-location-dot"></i>
                            Nirvachan Sadan, Ashoka Road, New Delhi 110001
                        </p>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 mt-3 p-3'>

                        <div className='d-flex align-items-center'>
                            <p className='fs-5 text-light text-decoration-underline mb-0'>Quick Links</p>
                            <i className="fa-regular fa-hand-point-right mx-3 fs-4 text-light"></i>
                        </div>

                        <div className='d-flex flex-column flex-sm-row gap-4 mt-3 itemLink'>
                            <ul style={{ listStyleType: "disc", paddingLeft: "20px", cursor: "pointer" }} className='text-light'>
                                <li>About ECI</li>
                                <li>Directory</li>
                                <li>Contact Us</li>
                                <li>Public Grivience</li>
                                <li>RTI Online</li>
                                <li>eIffice</li>
                            </ul>

                            <ul style={{ listStyleType: "disc", paddingLeft: "20px", cursor: "pointer" }} className='text-light'>
                                <li>Apply For Voter Card</li>
                                <li>SVEEP</li>
                                <li>Service Voter Portal</li>
                                <li>Political Parties Registeration</li>
                                <li>Download eVIGIL</li>
                                <li>Candidate Affidavits</li>
                            </ul>
                        </div>

                    </div>

                    <div className='col-12 col-sm-6 col-lg-2 mt-4 text-center prevElect'>
                        <img src="https://static.vecteezy.com/system/resources/previews/055/670/897/non_2x/india-elections-box-icon-isolated-free-png.png" alt='prevElect' style={{ width: "100px", height: "160px" }} />
                        <p className='fs-6 mt-2 text-light' style={{ cursor: "pointer" }}>Previous Election</p>
                    </div>

                    <div className='col-12 col-sm-6 col-lg-2 mt-3 text-center'>
                        <p className='fs-5 text-light text-decoration-underline'>Social Media Link</p>
                        <div className='d-flex flex-wrap gap-3 justify-content-center mt-5' style={{ cursor: "pointer" }}>
                            <i className="fa-brands fa-facebook-f fs-4"></i>
                            <i className="fa-brands fa-square-instagram fs-4"></i>
                            <i className="fa-brands fa-twitter fs-4"></i>
                            <i className="fa-brands fa-youtube fs-4"></i>
                        </div>
                    </div>

                </div>

                <hr />

                <div className='text-light text-center py-3' style={{ backgroundColor: "rgba(22, 5, 73, 0.8)" }}>
                    <p className='fs-6 m-0'>
                        <i class="fa-regular fa-copyright"></i>
                        &nbsp;Copyright Election Commission of India 2025
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
