import { useState } from "react"
import { useDispatch } from 'react-redux'
import axios from "axios"

import { loginUser } from '../redux/features/auth/auth.slice'
import InputGroup from "./InputGroup"
import Button from "./Button"
import LoadingSpinner from "./LoadingSpinner"

function SigninForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    console.log(loginUser)

    async function handleSubmit(e) {
        try {
            setIsLoading(true)
            e.preventDefault()
            const credentials = { email, password }
            const res = await axios.post('https://dayduty.onrender.com/api/v1/auth/sign-in', {
                ...credentials
            })

            const data = res.data

            if (data.status === 'success') {
                dispatch(loginUser({
                    token: data.token,
                    user: data.data.user
                }))
            }
        } catch (error) {

            alert(error.message)
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