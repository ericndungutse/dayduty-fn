import InputGroup from "./InputGroup"
import Button from "./Button"

function SigninForm() {
    return (<form className="w-full flex flex-col gap-3">
        <InputGroup htmlFor="email" type="email" id="email" placeholder="Email..." labelText="Email" required={true} />
        <InputGroup
            htmlFor="password"
            type="password"
            id="password"
            placeholder="Password..."
            labelText="Password"
            required={true}
        />
        <Button customClasses="mt-4 btn-primary" disabled={false}>Sign Up</Button>
    </form>)
}


export default SigninForm