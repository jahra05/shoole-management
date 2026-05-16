import { ArrowBigLeft, ArrowLeftRight, ArrowLeftToLine, BugPlay, Expand, GraduationCap, Home, School, Settings, User } from "lucide-react"
import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

function Sidebar() {
    return (
        <>
            {/* <MainLayout> */}

                <div className="w-56 h-screen bg-[#F5F5F5] flex flex-col gap-4 py-42">
                    <div className="flex items-center  h-12">
                        <div className="bg-gray-200 w-8 h-8 p-1 rounded mx-1 text-center">p</div>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-xs">Education</p>
                                <p className="text-xs">Learning is good</p>
                            </div>
                            <div className="flex items-center">
                                <ArrowLeftToLine size={18} />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1 m-2">
                        <p className="text-xs">Administration</p>

                        <div>
                            <Link to='/dasboard'>
                                <div className="hover:bg-white py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <p className="text-sm text-slate-700">Dasboard</p>
                                </div>
                            </Link>

                            <Link to='/students'>
                                <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <GraduationCap size={18} />
                                    <p className="text-sm">Students</p>
                                </div>
                            </Link>

                            <Link to='/teacher'>
                                <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <User size={18} />
                                    <p className="text-sm">Teacher</p>
                                </div>
                            </Link>
                            <Link to='/class'>
                                <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <User size={18} />
                                    <p className="text-sm">Class</p>
                                </div>
                            </Link>
                            <Link to='/attandance'>
                                <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <School size={18} />
                                    <p className="text-sm">Attandance</p>
                                </div>
                            </Link>
                            <Link to='/notice'>
                                <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <School size={18} />
                                    <p className="text-sm">Announcement</p>
                                </div>
                            </Link>
                            <Link to='/payment'>
                                <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <BugPlay size={18} />
                                    <p className="text-sm">Payment</p>
                                </div>
                            </Link>
                            <Link to='/students'>
                                <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                    <Expand size={18} />
                                    <p className="text-sm">Report</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="m-2">
                        <p>Suport</p>
                        <Link to='/'>
                            <div className="hover:bg-gray-50 py-2 px-2 rounded h-10 flex gap-2 items-center">
                                <Settings size={18} />
                                <p className="text-sm">Report</p>
                            </div>
                        </Link>
                    </div>
                </div>
            {/* </MainLayout> */}

        </>

    )
} export default Sidebar