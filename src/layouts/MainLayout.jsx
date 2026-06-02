import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function MainLayout({ children }) {
    return (
        <div className="flex" >
            <Sidebar />
            <div className="flex-1 min-w-0 overflow-auto bg-[#F5F5F5] p-2">
                {children}
            </div>
        </div>
    )
} export default MainLayout