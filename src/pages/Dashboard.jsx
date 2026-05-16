import { ArrowUpRight, BookOpen, Edit, Ellipsis, GraduationCap, Search, Trophy, User, User2, UserCheck } from "lucide-react";
import MainLayout from "../layouts/MainLayout"
import { useState } from "react";

const today = new Date()
const dateAll = today.toLocaleDateString('en-US', {
    day: "numeric",
    month: 'long',
    year: 'numeric'
})

const days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i)

    return {
        day: d.toLocaleDateString("en-US", { weekday: "short" }),
        date: d.getDate(),
        isToday: d.toDateString() === today.toDateString()
    }
})



function Dasboard() {
    const [gender, setGender] = useState('')
    const handleChange = (event) => {
        setGender(event.target.value)
    }
    return (
        <MainLayout>
            <div className="bg-white mt-2 p-4 rounded-lg h-screen">

                <div>
                    <h1 className="text-2xl font-semibold text-slate-600 mb-4">
                        Dashboard
                    </h1>
                </div>
                <div className="p-4 flex justify-end gap-10">
                    <div className="bg-white flex justify-between w-48 gap-4 rounded-lg p-6 border-2 border-[#f3f3f3] shadow-sm ">
                        <div>
                            <p className="text-xs text-gray-600">Student</p>
                            <p className="font-medium">1,245</p>
                        </div>
                        <span><GraduationCap size={32} /></span>
                    </div>
                    <div className="bg-white flex justify-between w-48 p-6 rounded-lg border border-[#E5ECF0] shadow-sm">
                        <div>
                            <p className="text-xs text-gray-600">Teacher</p>
                            <p className="font-medium">1,245</p>
                        </div>
                        <span><User size={32} /></span>
                    </div>
                    <div className="bg-white flex justify-between w-48 p-6 rounded-lg border border-[#E5ECF0] shadow-sm">
                        <div>
                            <p className="text-xs text-gray-600">Class</p>
                            <p className="font-medium">1,245</p>
                        </div>
                        <span><BookOpen size={32} /></span>
                    </div>
                    <div className="bg-white flex justify-between w-48 p-6 rounded-lg border border-[#E5ECF0] shadow-sm">
                        <div>
                            <p className="text-xs text-gray-600">Award</p>
                            <p className="font-medium">1,245</p>
                        </div>
                        <span><Trophy size={32} /></span>
                    </div>
                </div>


                <div className="flex flex-row gap-10">
                    <div className="bg-white p-2 w-96 h-98 flex flex-col gap-10 rounded-lg border border-[#E5ECF0] shadow-sm">


                        <div className="flex-col p-2">
                            <div className="flex justify-between items-center">
                                <p className="mt-0">Dasboard</p>
                                <span className="bg-white h-8 w-8 flex items-center justify-center px-2 rounded-full">
                                    <ArrowUpRight size={16} />
                                </span>
                            </div>
                            <p className="mt-0">Today</p>
                        </div>




                        <div className="flex justify-around text-center">
                            {days.map((item, index) =>
                            (
                                <div key={index} style={{
                                    backgroundColor: item.isToday ? 'pink' : 'transparent',
                                    width: 100,
                                    fontSize: 14,
                                    borderRadius: 80,
                                    padding: 6
                                }}>
                                    <p>{item.date}</p>
                                    <p>{item.day}</p>
                                </div>
                            ))}

                        </div>


                        <div className="p-2">
                            <p>Events</p>
                            <div className="flex flex-col gap-4 mt-1">
                                <div className="flex justify-between bg-white p-3 rounded-lg gap-10 border border-[#E5ECF0]">
                                    <div>
                                        <p className="font-medium">Meeting di kantor</p>
                                        <p className="text-sm text-gray-500">lala</p>
                                    </div>
                                    <span className="text-sm text-gray-400">11:00</span>
                                </div>

                                <div className="flex justify-between bg-white p-3 rounded-lg  gap-10 border border-[#E5ECF0] ">
                                    <div>
                                        <p className="font-medium">Meeting di kantor</p>
                                        <p className="text-sm text-gray-500">lala</p>
                                    </div>
                                    <span className="text-sm text-gray-400">11:00</span>
                                </div>
                                <div className="flex justify-between bg-white p-3 rounded-lg gap-10 border border-[#E5ECF0]">
                                    <div>
                                        <p className="font-medium">Meeting di kantor</p>
                                        <p className="text-sm text-gray-500">lala</p>
                                    </div>
                                    <span className="text-sm text-gray-400">11:00</span>
                                </div>


                            </div>
                        </div>
                    </div>




                    <div className="flex p-2">
                        <div className="flex flex-col gap-10">
                            <div className="bg-white p-4 rounded-lg border border-[#E5ECF0] shadow-sm ">
                                <div className="flex justify-between items-center gap-10 mt-4">
                                    <p>Welcome in, School</p>
                                </div>
                                <table className="w-full text-sm border-spacing-y-6 mt-10">
                                    <tr className="border-b border-gray-200  bg-gray-50">
                                        <th className="p-4 flex  justify-center items-center"><input type="checkbox" /></th>
                                        <th className="p-3 text-left">Nama</th>
                                        <th className="p-3 text-left">Class</th>
                                        <th className="p-3 text-left">Arrears</th>
                                        <th className="p-3 text-left">Info</th>
                                        <th className="p-3 text-left">Action</th>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 flex justify-center items-center"><input type="checkbox"></input></td>
                                        <td className="p-3">Jahra solihat</td>
                                        <td className="p-3">XII 2</td>
                                        <td className="p-3">Rp.1000.00</td>
                                        <td className="p-3 text-green-400 italic">lunas</td>
                                        <td className="p-4"><Edit size={14}></Edit></td>
                                    </tr>

                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 flex justify-center items-center"><input type="checkbox"></input></td>
                                        <td className="p-3">Jahra solihat</td>
                                        <td className="p-3">XII 2</td>
                                        <td className="p-3">Rp.1000.00</td>
                                        <td className="p-3 text-green-400 italic">lunas</td>
                                        <td className="p-4"><Edit size={14}></Edit></td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 flex justify-center items-center"><input type="checkbox"></input></td>
                                        <td className="p-3">Jahra solihat</td>
                                        <td className="p-3">XII 2</td>
                                        <td className="p-3">Rp.1000.00</td>
                                        <td className="p-3 text-green-400 italic">lunas</td>
                                        <td className="p-4"><Edit size={14}></Edit></td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 flex justify-center items-center"><input type="checkbox"></input></td>
                                        <td className="p-3">Nama saya jahras solihat kela 11 jurusna saya </td>
                                        <td className="p-3">XII 2</td>
                                        <td className="p-3">Rp.1000.00</td>
                                        <td className="p-3 text-green-400 italic">lunas</td>
                                        <td className="p-4"><Edit size={14}></Edit></td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 flex justify-center items-center"><input type="checkbox"></input></td>
                                        <td className="p-3">Jahra solihat</td>
                                        <td className="p-3">XII 2</td>
                                        <td className="p-3">Rp.1000.00</td>
                                        <td className="p-3 text-green-400 italic">lunas</td>
                                        <td className="p-4"><Edit size={14}></Edit></td>
                                    </tr>
                                </table>
                            </div>



                            <div className="bg-white rounded-lg p-4 border border-[#E5ECF0] shadow-sm">
                                <div className="flex flex-row justify-between items-center p-2 ">
                                    <h2 className="font-semibold">Notice Board</h2>
                                </div>

                                <div className="flex items-center justify-between py-3 border-b">
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
                                    <div>
                                        <button className="text-gray-500"><Ellipsis size={24} /></button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between py-3 border-b">
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
                                    <div>
                                        <button className="text-gray-500"><Ellipsis size={24} /></button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between py-3 border-b">
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
                                    <div>
                                        <button className="text-gray-500"><Ellipsis size={24} /></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex-1 mt-2">
                        <div className="p-2 border-2 border-[#f3f3f3] flex flex-col gap-10 rounded-lg shadow-sm">
                            <div className="flex justify-between">
                                <p>Students by Gender</p>
                                <select className="border-2 p-1 border-[#f3f3f3] rounded-md text-sm">
                                    <option>Gread 1</option>
                                </select>
                            </div>
                            <div className="flex justify-center w-96">
                                <img src="src/assets/Group 9.svg" className="w-60" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex justify-center w-32 gap-4 content-center">
                                    <User2 size={32} className="bg-blue-800  text-sm rounded-full" color="white" />
                                    <p className="text-center">Boys : 123</p>
                                </div>
                                <div className="flex justify-center w-32 gap-4 content-center">
                                    <User2 size={32} className="bg-pink-300  text-sm rounded-full" color="white" />
                                    <p className="text-center">Gilrs : 123</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 border-2 border-[#f3f3f3] flex flex-col gap-4 rounded-lg mt-8 shadow-sm">
                            <div className="flex justify-between">
                                <p>Student Attendance</p>
                                <select className="border-2 p-1 border-[#f3f3f3] rounded-md text-sm">
                                    <option>Week</option>
                                </select>
                            </div>
                            <div className="flex justify-center w-96">
                                <img src="src/assets/Frame 298.svg" className="w-60" />

                            </div>
                        </div>
                    </div>

                </div>



            </div>


        </MainLayout>
    )
} export default Dasboard