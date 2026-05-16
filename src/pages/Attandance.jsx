import { CheckCheck, CheckCircle, LucideCheckCheck, Plus } from "lucide-react"
import MainLayout from "../layouts/MainLayout"

function Attandance() {
    return (
        <>
            <MainLayout>
                <div className="bg-white mt-2 p-2 rounded-lg h-screen">

                    <div className="flex justify-between">
                        <div className="text-xs">
                            <h1 className="text-lg">Class</h1>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span> add class</p>
                        </div>

                        <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center"
                            onClick={() => navigate('/add-students')}>
                            <button className="text-xs">Add Attandance</button>
                            <Plus size={14} />

                        </div>
                    </div>

                    <div className=" p-2 mt-8  ">
                        <p>Attandance Summary</p>
                        <div className="flex gap-10">
                            <div className="w-72 mt-6 bg-gray-50 rounded-xl">
                                <div className="flex flex-col gap-2 bg-blue-100 p-4 rounded-xl">
                                    <p className="font-semibold">Students</p>
                                    <div>
                                        <p>1.435</p>
                                        <p className="text-xs">Total Present</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl flex gap-10">
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Late</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Sick</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Absent</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-72 mt-6 bg-gray-50 rounded-xl">
                                <div className="flex flex-col gap-2 bg-blue-100 p-4 rounded-xl">
                                    <p className="font-semibold">Teachers</p>
                                    <div>
                                        <p>1.435</p>
                                        <p className="text-xs">Total Present</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl flex gap-10">
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Late</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Sick</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Absent</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-72 mt-6 bg-gray-50 rounded-xl">
                                <div className="flex flex-col gap-2 bg-blue-100 p-4 rounded-xl">
                                    <p className="font-semibold">Staff</p>
                                    <div>
                                        <p>1.435</p>
                                        <p className="text-xs">Total Present</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl flex gap-10">
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Late</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Sick</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                    <div className="w-24 flex flex-col justify-center items-center">
                                        <p className="text-xs text-center">Absent</p>
                                        <p className="text-sm font-semibold">1.464</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="bg-white p-2 rounded-lg mt-10 border-2 border-[#f3f3f3]">
                        <div className="flex justify-between">
                            <p>Attandance</p>
                            <div className="flex gap-8">
                                <div className="flex gap-8 bg-gray-100 p-2 rounded-md">
                                    <span className="hover:bg-white py-2 px-4 rounded-md text-xs"><p>Students</p></span>
                                    <span className="hover:bg-white py-2 px-4 rounded-md text-xs"><p>Teacher</p></span>
                                    <span className="hover:bg-white py-2 px-4 rounded-md text-xs"><p>Staff</p></span>
                                </div>
                                <div className="p-2 flex gap-4">
                                    <select className="border p-1 text-sm ">
                                        <option>Month</option>
                                    </select>
                                    <select className="border p-1 text-sm ">
                                        <option>Class</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div className="mt-8">
                            <table className="w-full text-left border-collapse table-fixed">
                                <thead>
                                    <tr className="bg-gray-50 h-10">
                                        <th className="w-20 text-center">Name</th>
                                        <th className="w-2 text-center">01</th>
                                        <th className="w-2 text-center">02</th>
                                        <th className="w-2 text-center">03</th>
                                        <th className="w-2 text-center">04</th>
                                        <th className="w-2 text-center">05</th>
                                        <th className="w-2 text-center">06</th>
                                        <th className="w-2 text-center">07</th>
                                        <th className="w-2 text-center">08</th>
                                        <th className="w-2 text-center">09</th>
                                        <th className="w-2 text-center">10</th>
                                        <th className="w-2 text-center">11</th>
                                        <th className="w-2 text-center">12</th>
                                        <th className="w-2 text-center">13</th>
                                        <th className="w-2 text-center">14</th>
                                        <th className="w-2 text-center">15</th>
                                        <th className="w-2 text-center">16</th>
                                        <th className="w-2 text-center">17</th>
                                        <th className="w-2 text-center">18</th>
                                        <th className="w-2 text-center">19</th>
                                        <th className="w-2 text-center">20</th>
                                        <th className="w-2 text-center">21</th>
                                        <th className="w-2 text-center">22</th>
                                        <th className="w-2 text-center">23</th>
                                        <th className="w-2 text-center">24</th>
                                        <th className="w-2 text-center">25</th>
                                        <th className="w-2 text-center">26</th>
                                        <th className="w-2 text-center">27</th>
                                        <th className="w-2 text-center">28</th>
                                        <th className="w-2 text-center">29</th>
                                        <th className="w-2 text-center">30</th>
                                        <th className="w-2 text-center">31</th>
                                        <th className="w-2 text-center">32</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t hover:bg-gray-100">
                                        <td className="p-2" >Jahra</td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                    </tr>

                                    <tr className="border-t hover:bg-gray-100">
                                        <td className="p-2" >Jahra</td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                        <td className="px-2"><p className="bg-slate-200 text-center py-1 rounded-full text-xs h-6 w-6">A</p></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
} export default Attandance