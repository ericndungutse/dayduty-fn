import { Outlet } from "react-router-dom"

function DashboardRoot() {
    return<div className="w-full">
        <header className="h-[8vh] border-b border-gray-300 px-8 flex items-center">
            <h1 className="text-gradient text-3xl font-semibold">Dd</h1>
        </header>
        <main className="h-[92vh] flex">
            <aside className="basis-[20%] px-3 overflow-auto border-r border-gray-300">
            </aside>
            <section className="dashboard_content flex-1 overflow-auto p-8">
            <h1>Her</h1>

            </section>
        </main>
    </div>
}

export default DashboardRoot
