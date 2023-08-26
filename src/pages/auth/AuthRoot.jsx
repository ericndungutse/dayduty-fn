import { Outlet } from "react-router-dom"
import background from '../../assets/back1.svg';
function AuthRoot() {
    return <div className="flex flex-col-reverse h-screen gap-4 lg:flex-row xl:flex-rowauth">
        <div className="basis-3/5 h-full" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"

    }}></div>
        <div className="basis-2/5 flex flex-col p-7 justify-center items-center">
            <Outlet />
        </div>
    </div>
}

export default AuthRoot