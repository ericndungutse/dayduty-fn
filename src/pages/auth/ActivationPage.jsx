import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner'

export default function ActivationPage() {
    const [successMsg, setSuccessMsg] = useState("")
    const { token } = useParams()

    useEffect(() => {
        async function activateAccount() {
            try {
                const res = await axios.post(`${'http:localhost:3000' || import.meta.env.VITE_BACKEND_URL}/api/v1/auth/activate-account/${token}`)
                const data = res.data

                if (data.status === 'success') {
                    setSuccessMsg(data.data.message)
                }

            } catch (error) {
                console.log(error.message)
            }
        }

        activateAccount()

    }, []);

    return (
        <div className='flex justify-center h-screen w-full items-center bg-slate-100'>
            <div className="flex flex-col items-center justify-center gap-2">
                <p> {!successMsg && <LoadingSpinner />} {successMsg && successMsg || 'Activating your account...'}</p>
                {
                    successMsg && <Link to="/signin" className='rounded px-3 py-0.5 bg-gradient text-white'>Signin</Link>
                }

            </div>
        </div>
    )
}
