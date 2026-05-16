import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { Dock, File, ImageIcon, InboxIcon, Mars } from "lucide-react"
import { useState } from "react"

function DetailStudent() {
    const [selected, setSelected] = useState(0)

    const handleListItem = (event, index) => {
        setSelected(index)
    }
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white p-2 mt-2 rounded-lg h-screen">
                    <div className="text-xs">
                        <h1 className="text-lg">Detail Students</h1>
                        <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dashboard / </span>
                            <span className="text-gray-400 cursor-pointer" onClick={() => navigate('/students')}>students / </span>Detail student</p>
                    </div>
                    <div className="bg-white border-2 py-4 px-4  mt-10 rounded-lg flex">
                        <div className="flex items-center gap-2">
                            <img src="https://img.freepik.com/premium-vector/female-student-wearing-black-backpack-holding-books_917213-249433.jpg"
                                className="w-28 h-28 object-cover rounded-lg" />
                            <div className="mt-2 flex gap-8">

                                <div className="flex flex-row gap-8 border-r px-3">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Name</p>
                                        <p className="text-sm text-gray-600">NISN</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Jahra solihat</p>
                                        <p className="text-sm text-gray-600">1213144</p>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-8 border-r px-3">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Gender</p>
                                        <p className="text-sm text-gray-600">Date of birth</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Girl</p>
                                        <p className="text-sm text-gray-600">19 April 2025</p>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-8 border-r px-3">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Phone number</p>
                                        <p className="text-sm text-gray-600">Address</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">+62-29890-92482</p>
                                        <p className="text-sm text-gray-600">Jalan raya no 13</p>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-8 border-r px-3">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Name parent</p>
                                        <p className="text-sm text-gray-600">Phone number</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Name Parent</p>
                                        <p className="text-sm text-gray-600">+62-29890-92482</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-8 border-r px-3">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">job</p>
                                        <p className="text-sm text-gray-600">Address</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-gray-600">Pekerjaan</p>
                                        <p className="text-sm text-gray-600">Jalan raya no 13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 p-2 rounded-lg flex gap-10">
                        <div className="flex-1 border-2 border-[#f3f3f3] p-2 rounded-lg">
                            <div className="flex justify-between">
                                <p>Academic Performance</p>
                                <select className="p-2 rounded-l text-sm">
                                    <option>Last 6 Month</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-between mt-8 gap-4">
                                <div className="flex justify-between">
                                    <img src="src/assets/Frame 588.svg" className="w-56" />
                                    <img src="src/assets/Frame 593.svg" className="w-72" />
                                </div>
                                <div className="w-[320px] text-sm">
                                    <p>
                                        Tingkat kan lagi berlajara ,
                                        semseter depan tolong perhatikan perlajara
                                        dan jangan banyak keluar masuk kelas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 border-2 border-[#f3f3f3] p-2 rounded-lg">
                            <p>Document & Files</p>
                            <div className="mt-4 flex gap-10">
                                <div className="bg-blue-100 w-48 h-32 flex flex-col justify-center content-center px-4 rounded-lg gap-6">
                                    <File />
                                    <div className="">
                                        <p className="text-sm">File Student</p>
                                        <p className="text-xs text-gray-400">File Student</p>
                                    </div>
                                </div>

                                <div className="bg-blue-100 w-48 h-32 flex flex-col justify-center content-center px-4 rounded-lg gap-6">
                                    <File />
                                    <div className="">
                                        <p className="text-sm">File Student</p>
                                        <p className="text-xs text-gray-400">File Student</p>
                                    </div>
                                </div>

                                <div className="bg-blue-100 w-48 h-32 flex flex-col justify-center content-center px-4 rounded-lg gap-6">
                                    <File />
                                    <div className="">
                                        <p className="text-sm">File Student</p>
                                        <p className="text-xs text-gray-400">File Student</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout >
        </>
    )
} export default DetailStudent