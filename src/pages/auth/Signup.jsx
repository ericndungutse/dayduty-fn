import { Link } from "react-router-dom"
import SignupForm from "../../components/SignupForm"

function Signup() {
    return <>
        <div className="form-container flex flex-col -mt-3 items-center w-full md:w-3/4 gap-6">
            <h2 className="text-center text-4xl">Sign up</h2>
            <hr className="w-56 h-0.5 bg-gradient max-auto my-0.5 border-0 rounded" />
            <SignupForm />
            <div className="w-full gap-2 flex -mt-5 items-center">
                <p className="text-xs">Already registered ?</p>
                <Link to="/signin" className="text-xs text-orange-400 hover:decoration-orange-400 hover:underline">Sign In</Link>
            </div>
        </div>

    </>
}

export default Signup