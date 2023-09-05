import { useState } from "react"
import { useDispatch } from 'react-redux'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../redux/features/auth/auth.slice'
import InputGroup from "./InputGroup"
import Button from "./Button"
import LoadingSpinner from "./LoadingSpinner";
import InComponentError from './InComponentError'

function SigninForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, SetErrorMsg] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()


    async function handleSubmit(e) {
        try {
            setIsLoading(true)
            SetErrorMsg("")
            e.preventDefault()

            const credentials = { email, password }
            const res = await axios.post('http://localhost:3000/api/v1/auth/sign-in', {
                ...credentials
            })

            const data = res.data

            if (data.status === 'success') {
                dispatch(loginUser({
                    token: data.token,
                    user: data.data.user
                }))
                navigate('/user/todos')
            }
        } catch (error) {
            SetErrorMsg(error?.response?.data?.message)
        } finally {
            setIsLoading(false)
        }
    }


    function handleEmailOnChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordOnChange(e) {
        setPassword(e.target.value)
    }

    return (
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            {
                errorMsg && <InComponentError>{errorMsg}</InComponentError>
            }

            <InputGroup htmlFor="email"
                type="email" id="email"
                placeholder="Email..." labelText="Email"
                required={true}
                inputValueChangeHandler={{
                    value: email,
                    onChangeHandler: handleEmailOnChange
                }}
            />
            <InputGroup
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Password..."
                labelText="Password"
                required={true}
                inputValueChangeHandler={{
                    value: password,
                    onChangeHandler: handlePasswordOnChange
                }}
            />
            <Button customClasses="mt-4 btn-primary" disabled={isLoading}> {isLoading && <LoadingSpinner /> || 'Sign in'} </Button>
        </form>
    )
}


export default SigninForm