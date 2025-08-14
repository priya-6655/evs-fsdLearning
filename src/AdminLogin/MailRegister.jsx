import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function MailRegister() {
    const navigate = useNavigate()
    const [register, setRegister] = useState({ name: '', password: "", email: "" })

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const baseURL = import.meta.env.VITE_API_BASE_URL;
        try {
            const res = await axios.post(`${baseURL}/api/register`, register)
            alert(res.data.message);
            navigate('/Login')

        } catch (err) {
            console.log(err)
            alert(err.response?.data?.message || "something went wrong")
            setRegister({ name: "", password: "", email: "" })
        }
    }
    return (
        <>
            <div className='container-fill d-flex justify-content-center align-items-center' id='regImg'>

                <div className='container p-4 rounded-4 shadow' style={{ maxWidth: "500px", width: "100%" }}>
                    <form onSubmit={handleRegister}>
                        <p className="mb-5 text-success fw-bold fs-4 mx-5">Mail Registration</p>

                        <div className="col-sm-8 mb-3">
                            <input type='text' id='name' name='name' className="form-control" placeholder='Enter Username' onChange={handleChange} />
                        </div>

                        <div className="col-sm-8 mb-3">
                            <input type='password' id='adminPass' name='password' className="form-control" placeholder='Enter Password' onChange={handleChange} />
                        </div>

                        <div className="col-sm-8 mb-3">
                            <input type='email' id='adminMail' name="email" className="form-control" placeholder='Enter Mailid' onChange={handleChange} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type='submit' className='btn btn-success w-25' >Register</button>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default MailRegister
