import React from 'react'
import logo from '../assets/one-voter-sure.png'
import eVideo from '../assets/video1.mp4'

function MediaCom() {
    return (
        <>
            <div className='container-fill mb-5'>
                <div className='row'>

                    <div className='col-lg-3 col-md-3 col-sm-4 border border-primary mx-3 text-center'>
                        <p className='fs-6 fw-bold'>Hon'ble Commision</p>
                        <img src='https://www.eci.gov.in/newimg/gallery/Dr-vivek-joshi-ec.png' alt='commision1' style={{ width: "80px", height: "80px" }} />
                        <p className='fs-6'>Dr.Vivek Joshi</p>

                        <img src='https://www.eci.gov.in/newimg/gallery/Shri-Gyanesh-Kumar%201.png' alt='commision1' style={{ width: "80px", height: "80px" }} />
                        <p className='fs-6'>Shri Gyanesh Kumar</p>

                        <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2020-02/03/full/1580673337-9754.jpg' alt='commision1' style={{ width: "80px", height: "80px", borderRadius: "40px" }} />
                        <p className='fs-6'>Shri Gyanesh Kumar</p>
                    </div>

                    <div className='col-lg-5 col-md-5 col-sm-4  border border-primary mx-3 text-center '>

                        <div className='row gap-4'>
                            <img src='https://static.pib.gov.in/WriteReadData/userfiles/image/image001IQZP.jpg' alt='commision1' style={{ width: "200px", height: "250px", marginTop: "30px" }} />
                            <img src='https://cdnbbsr.s3waas.gov.in/s3ca0daec69b5adc880fb464895726dbdf/uploads/2025/05/202505141427384624-scaled.jpg' alt='commision1' style={{ width: "150px", height: "180px", marginTop: "30px" }} />
                            <img src='https://nhrc.nic.in/sites/default/files/fd9f1335-b40b-4c38-91be-84bb05846ab2.jpg' alt='commision3' style={{ width: "200px", height: "250px", marginTop: "30px" }} />
                            <button type='button' className='btn btn-info w-50 mx-auto mediaBtn'>Media Gallery</button>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 border border-primary mx-3 text-center'>

                        <img src={logo} alt='commision1' style={{ width: "150px", height: "180px", marginTop: "30px" }} />
                        <video width={"320"} height={"240"} controls>
                            <source src={eVideo} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>

                    </div>


                </div>
            </div>

        </>
    )
}

export default MediaCom
