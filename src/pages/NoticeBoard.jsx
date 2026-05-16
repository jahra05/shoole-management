import { Ellipsis, Plus, Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

function NoticeBoard() {
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white mt-2 p-2 rounded-lg h-screen">


                    <div className="flex justify-between">

                        <div className="text-xs">
                            <h1 className="text-lg">Teacher</h1>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span> add teacher</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center"
                                onClick={() => navigate('/add-teacher')}>
                                <button className="text-xs">Add Notice</button>
                                <Plus size={14} />

                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 mt-4">
                        <div className="bg-white rounded-xl p-4 flex-1 border-2 border-[#f3f3f3]">
                            <div className="flex flex-row justify-between items-center p-2 ">
                                <h2 className="font-semibold">Notice Board</h2>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between p-4 bg-blue-100 rounded-xl">
                                    <div>
                                        <p className="font-medium">Sosialisasi kampus universitas</p>
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Academic</span>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">Audience</p>
                                        <p className="font-medium text-sm">All Students</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Date</p>
                                        <p className="font-medium text-sm">9/10/2026</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-pink-100  rounded-xl">
                                    <div>
                                        <p className="font-medium">Sosialisasi kampus universitas</p>
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Academic</span>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">Audience</p>
                                        <p className="font-medium text-sm">All Students</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Date</p>
                                        <p className="font-medium text-sm">9/10/2026</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-green-100 rounded-xl">
                                    <div>
                                        <p className="font-medium">Sosialisasi kampus universitas</p>
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Academic</span>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">Audience</p>
                                        <p className="font-medium text-sm">All Students</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Date</p>
                                        <p className="font-medium text-sm">9/10/2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white flex-1 border-2 border-[#f3f3f3] rounded-lg justify-center flex py-10">
                            <div className="p-4">
                                <p className="text-4xl font-semibold">Sosialisasi kampus universitas</p>
                                <div className="mt-4 flex gap-14 border-b py-4">
                                    <div className="flex flex-col  gap-4 w-32">
                                        <p className="text-[#969696] text-l">Category</p>
                                        <p className="text-[#969696] text-l">Audience</p>
                                        <p className="text-[#969696] text-l">Date</p>
                                        <button className="bg-red-400 w-10 h-8 flex justify-center p-2 rounded-lg"><Trash size={18} color="white"/></button>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">Academic</span>
                                        <p className="text-[#969696] text-l">Student</p>
                                        <p className="text-[#969696] text-l text-left">9/10/2026</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>Deskripsi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>

        </>
    )
} export default NoticeBoard