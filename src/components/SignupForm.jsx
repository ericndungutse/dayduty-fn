import { useState } from 'react'
import axios from 'axios'

import InputGroup from "./InputGroup"
import Button from "./Button"
import InComponentError from './InComponentError'
import LoadingSpinner from './LoadingSpinner'
import InComponentSuccessMsg from './InComponentSuccessMsg'


function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, SetErrorMsg] = useState('')
    const [signupSuccesMsg, setSignupSuccesMsg] = useState('')


    async function handleSubmit(e) {
        try {
            setIsLoading(true)
            SetErrorMsg("")
            e.preventDefault()

            const userData = { name, email, password, passwordConfirm }
            const res = await axios.post('https://dayduty.onrender.com/api/v1/auth/sign-up', {
                ...userData
            })

            const data = res.data

            if (data.status === 'success') {
                setSignupSuccesMsg(`Account was successfully created! ${data.message}`)
            }
        } catch (error) {
            SetErrorMsg(error?.response?.data?.message)
        } finally {
            setPasswordConfirm("")
            setPassword("")
            setName("")
            setEmail("")
            setIsLoading(false)
        }
    }


    function handleNameOnChange(e) {
        setName(e.target.value)
    }
    function handleEmailOnChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordOnChange(e) {
        setPassword(e.target.value)
    }
    function handleConfirmPasswordOnChange(e) {
        setPasswordConfirm(e.target.value)
    }

    return (
        <>

            <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
                {
                    errorMsg && <InComponentError>{errorMsg}</InComponentError>
                }

                {
                    signupSuccesMsg && <InComponentSuccessMsg>{signupSuccesMsg}</InComponentSuccessMsg>
                }

                <InputGroup htmlFor="name"
                    type="text"
                    id="name"
                    placeholder="Names..."
                    required={true}
                    labelText="Name"
                    inputValueChangeHandler={{ value: name, onChangeHandler: handleNameOnChange }}
                />
                <InputGroup
                    htmlFor="email"
                    type="email"
                    id="email"
                    placeholder="Email..."
                    labelText="Email"
                    required={true}
                    inputValueChangeHandler={{ value: email, onChangeHandler: handleEmailOnChange }}
                />
                <InputGroup
                    htmlFor="password"
                    type="password"
                    id="password"
                    placeholder="Password..."
                    labelText="Password"
                    required={true}
                    inputValueChangeHandler={{ value: password, onChangeHandler: handlePasswordOnChange }}

                />
                <InputGroup
                    htmlFor="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    labelText="Confirm Password"
                    placeholder="Confirm Password..."
                    required={true}
                    inputValueChangeHandler={{ value: passwordConfirm, onChangeHandler: handleConfirmPasswordOnChange }}

                />

                <Button customClasses="mt-4 btn-primary" disabled={isLoading}>{isLoading && <LoadingSpinner /> || 'Sign up'}</Button>
            </form>
        </>
    )

}

export default SignupForm