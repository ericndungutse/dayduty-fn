import { Outlet } from "react-router-dom"

function AuthRoot() {
    return <div className="flex flex-col-reverse h-screen lg:flex-row xl:flex-rowauth">
        <div className="basis-3/5 bg-blue-600">Showcase</div>
        <div className="basis-2/5 flex flex-col p-7 justify-center items-center">
            <Outlet />
        </div>
    </div>
}

export default AuthRoot