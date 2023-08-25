import Button from "../components/Button"
import Input from "../components/Input"
import InputLabel from "../components/InputLabel"
import LoadingSpinner from "../components/LoadingSpinner"

function Home() {
    return <>
        <div className="flex flex-col-reverse h-screen lg:flex-row xl:flex-rowauth">
            <div className="basis-3/5 bg-blue-600">Showcase</div>
            <div className="basis-2/5 flex flex-col p-7 justify-center items-center">
                <div className="form-container  flex flex-col items-center w-full md:w-3/4 gap-4">
                    <h2 className="text-center text-4xl mb-4">Sign up</h2>
                    <hr className="w-56 h-0.5 bg-gradient max-auto my-0.5 border-0 rounded " />
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
                    <div className="w-full justify-between flex -mt-2 items-center">
                        <p className="text-sm">Already registered ?</p>
                        <a href="#" className="text-sm text-orange-400 hover:decoration-orange-400 hover:underline">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home