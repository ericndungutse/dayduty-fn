import { Outlet } from "react-router-dom"
import SideNav from "../../components/SideNav"

function DashboardRoot() {
    return <div className="w-full">
        <header className="h-[8vh] border-b border-gray-300 px-8 flex items-center">
            <h1 className="text-gradient text-3xl font-semibold">DayDuty</h1>
        </header>
        <main className="h-[92vh] flex">
            <aside className="flex-autp px-8 py-8 overflow-auto border-r flex justify-center border-gray-300 bg-gray-50">
                <SideNav />
            </aside>
            <section className="flex-1 flex flex-col overflow-auto">
                <div className="c flex-1">
                    <Outlet />
                </div>
                <footer className="overflow-hidden h-32 relative">
                    <div style={{
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        top: "50%",
                        left: "6%",
                        transform: "translateY(-50%)",
                        borderRadius: "50%",
                        backgroundColor: "rgba(242,121,1,.8)"

                    }}></div>
                    <div style={{
                        top: "-25%",
                        left: "-30px",
                        width: "200px",
                        height: "200px",
                        transform: "rotate(45deg)",
                        position: "absolute",
                        left: "-10%",
                        backgroundColor: "rgba(237,3,32,0.8)"

                    }}></div>

                    <div style={{
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        top: "50%",
                        right: "70px",
                        transform: "translateY(-50%)",
                        borderRadius: "50%",
                        backgroundColor: "rgba(237,3,32,0.8)"

                    }}></div>
                    <div style={{
                        top: "-25%",
                        right: "-10%",
                        width: "200px",
                        height: "200px",
                        transform: "rotate(-45deg)",
                        position: "absolute",
                        backgroundColor: "rgba(242,121,1,.8)"



                    }}></div>

                </footer>
            </section>

        </main>
    </div >
}

export default DashboardRoot
