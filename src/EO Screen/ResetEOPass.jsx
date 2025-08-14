import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function ResetEOPass() {
    const [inputPass, setInputPass] = useState({ newPass: "", confirmPass: "" })
    const [tokenValid, setTokenVallid] = useState(true)
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            setTokenVallid(false)
        }
    }, [token])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputPass(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPass = inputPass.newPass.trim()
        const confirmPass = inputPass.confirmPass.trim()


        if (newPass !== confirmPass) {
            alert("Password do not match!")
            return
        }

        if (newPass.length < 6) {
            alert("Password must be at least 6 charecter long")
            return
        }

        try {
            const response = await fetch("http://localhost:3000/ELectoral/EOForgotPage", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token, EOpassword: newPass })
            })
            const data = await response.json()

            if (response.status === 200) {
                alert(data.message)
                navigate('/')
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    if (!tokenValid) {
        return <p className='text-danger text-center mt-5 fs-4'>Invalid or expired reset link</p>
    }

    return (
        <div className='container-fill d-flex justify-content-center align-items-center' id='resetPassimg'>
            <form onSubmit={handleSubmit}>
                <div className='container p-4 rounded-4 shadow' style={{ maxWidth: "500px", width: "100%" }}>
                    <p className="mb-5 text-success fw-bold fs-4 mx-5">Reset Your Password</p>

                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="col-sm-8 mb-3">
                            <input type='password' name='newPass' className="form-control" placeholder='Enter New Password' required
                                value={inputPass.newPass} onChange={handleChange} />
                        </div>

                        <div className="col-sm-8 mb-3">
                            <input type='password' name="confirmPass" className="form-control" placeholder='Confirm New Password' required
                                value={inputPass.confirmPass} onChange={handleChange} />
                        </div>


                        <button type='submit' className='btn btn-success w-25 rounded-pill mt-3'>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ResetEOPass;
