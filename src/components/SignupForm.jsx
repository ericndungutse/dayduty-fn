import InputGroup from "./InputGroup"
import Button from "./Button"

function SignupForm() {
    return (
        <form className="w-full flex flex-col gap-3">
            <InputGroup htmlFor="name" type="text" id="name" placeholder="Names..." required={true} />
            <InputGroup htmlFor="email" type="email" id="email" placeholder="Email..." labelText="Email" required={true} />
            <InputGroup
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Password..."
                labelText="Password"
                required={true}
            />
            <InputGroup
                 htmlFor="confirmPassword"
                 type="password" id="confirmPassword" placeholder="Confirm Password..." required={true}
            />
            <Button customClasses="mt-4" disabled={false}>Sign Up</Button>
        </form>
    )

}

export default SignupForm