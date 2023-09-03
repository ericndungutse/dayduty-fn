import { Outlet } from "react-router-dom"
import SideNav from "../../components/SideNav"

function DashboardRoot() {
    return <div className="w-full">
        <header className="h-[8vh] border-b border-gray-300 px-8 flex items-center">
            <h1 className="text-gradient text-3xl font-semibold">Dd</h1>
        </header>
        <main className="h-[92vh] flex">
            <aside className="basis-[20%] px-3 overflow-auto border-r border-gray-300">
                <SideNav />
            </aside>
            <section className="flex-1 overflow-auto p-8">
                <Outlet />
            </section>
        </main>
    </div>
}

export default DashboardRoot
