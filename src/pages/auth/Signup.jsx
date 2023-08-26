import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import InputLabel from "../../components/InputLabel"

function Signup() {
    return <>
        <div className="form-container flex flex-col -mt-3 border py-12 bg-white shadow-md px-6 rounded-md items-center w-full md:w-3/4 gap-6">
            <h2 className="text-center text-4xl">Sign up</h2>
            <hr className="w-56 h-0.5 bg-gradient max-auto my-0.5 border-0 rounded" />
            <form className="w-full flex flex-col gap-3">
                <div className="flex flex-col">
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input type="text" id="name" placeholder="Names..." required={true} />
                </div>
                <div className="flex flex-col gap-0.5">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input type="email" id="email" placeholder="Email..." required={true} />
                </div>
                <div className="flex flex-col">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input type="password" id="password" placeholder="Password..." required={true} />
                </div>
                <div className="flex flex-col spinn">
                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                    <Input type="password" id="confirmPassword" placeholder="Confirm Password..." required={true} />
                </div>
                <Button customClasses="mt-4" disabled={false}>Sign Up</Button>
            </form>
            <div className="w-full gap-2 flex -mt-5 items-center">
                <p className="text-xs">Already registered ?</p>
                <Link to="/signin" className="text-xs text-orange-400 hover:decoration-orange-400 hover:underline">Sign In</Link>
            </div>
        </div>

    </>
}

export default Signup