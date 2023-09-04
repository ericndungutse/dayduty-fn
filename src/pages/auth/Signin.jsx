import { Link } from "react-router-dom"
import SigninForm from "../../components/SigninForm"


function Signin() {
    return <>
        <div className="flex flex-col items-center py-12 -mt-3 w-full md:w-3/4 gap-6">
            <h2 className="text-center text-4xl">Sign in</h2>
            <hr className="w-56 h-0.5 bg-gradient max-auto my-0.5 border-0 rounded" />
            <SigninForm />
            <div className="w-full justify-between flex items-center -mt-5">
                <a href="#" className="text-xs block text-blue-500 hover:decoration-blue-500 hover:underline">Forgot password?</a>
                <span className=" text-xs block">Not registered ?  <Link to="/signup" className="text-xs text-orange-400 hover:decoration-orange-400 hover:underline">Sign up</Link></span>
            </div>
        </div>
    </>
}

export default Signin