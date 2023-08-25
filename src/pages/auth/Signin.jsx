import Button from "../../components/Button"
import Input from "../../components/Input"
import InputLabel from "../../components/InputLabel"

function Signin() {
    return <>
        <div className="flex flex-col-reverse h-screen lg:flex-row xl:flex-rowauth">
            <div className="basis-3/5 bg-blue-600">Showcase</div>
            <div className="basis-2/5 flex flex-col p-7 justify-center items-center">
                <div className="flex flex-col items-center -mt-3 w-full md:w-3/4 gap-6">
                    <h2 className="text-center text-4xl">Sign in</h2>
                    <hr className="w-56 h-0.5 bg-gradient max-auto my-0.5 border-0 rounded" />
                    <form className="w-full flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input type="email" id="email" placeholder="Email..." required={true} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <Input type="password" id="confirmPassword" placeholder="Confirm Password..." required={true} />
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="#" className="text-sm text-blue-500 hover:decoration-blue-500 hover:underline -mt-2">Forgot password?</a>
                        </div>
                        <Button customClasses="mt-4" disabled={false}>Sign Up</Button>
                    </form>
                    <div className="w-full justify-between flex -mt-5 items-center">
                        <p className="text-sm">Not registered ?</p>
                        <a href="#" className="text-sm text-orange-400 hover:decoration-orange-400 hover:underline">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Signin