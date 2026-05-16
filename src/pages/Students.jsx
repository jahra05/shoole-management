import { Filter, GraduationCap, Link, Plus, PlusSquare, Search, Slice, SlidersHorizontal } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { useState } from "react"
import AddStudents from "./AddStudents"
import { useNavigate } from "react-router-dom"


function Students() {
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="flex flex-col gap-4 p-4 bg-white  h-screen rounded-lg">
                    <div className="flex justify-between">
                        <div className="text-xs">
                            <h1 className="text-lg">Students</h1>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dashboard / </span> Students</p>
                        </div>


                        <div className="flex items-center gap-2">
                            <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center"
                                onClick={() => navigate('/add-students')}>
                                <button className="text-xs">Add Student</button>
                                <Plus size={14} />

                            </div>
                            <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                                <button className="text-xs">Import</button>
                                <Plus size={14} />
                            </div>
                        </div>
                    </div>


                    <div className="relative bg-white p-4 rounded-2xl shadow w-64 overflow-hidden">

                        <div className="absolute -top-10 -right-10 w-28 h-28 bg-orange-100 rounded-full"></div>

                        <div className="absolute top-4 right-4 z-10 w-8 h-8  rounded-lg flex items-center justify-center">
                            <GraduationCap />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="mt-4 text-gray-500 text-sm">TOTAL SISWA</h3>
                            <p className="text-2xl font-bold">1</p>
                        </div>
                    </div>



                    <div className="bg-white  rounded-lg w-full overflow-x-auto flex flex-col gap-4 border-2 border-[#f3f3f3]">
                        <div className="flex justify-between m-2">
                            <div className="flex gap-4 items-center px-4 rounded-lg w-[50%]">
                                <span><Search size={18} /></span>
                                <input type="search" placeholder="Searching" className="p-2 border-none outline-none rounded-lg w-[80%] border border-[#E5ECF0] bg-white" />
                            </div>
                            <span className="flex gap-4 items-center bg-white p-2 border   border-[#E5ECF0] rounded-lg text-sm w-20">Filter<SlidersHorizontal size={18} /></span>
                        </div>


                        <table className="w-full text-left border-collapse table-fixed">
                            <thead>
                                <tr className="bg-gray-50 h-10">
                                    <th className="w-20 px-4"><input type="checkbox" /></th>
                                    <th className="w-[40%]">Name</th>
                                    <th className="w-[15%]">NISN</th>
                                    <th className="w-[10%]">Class</th>
                                    <th className="w-[15%]">Gender</th>
                                    <th className="w-[20%]">Joined Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t hover:bg-gray-100">
                                    <td className="w-20 px-4 py-2"><input type="checkbox" /></td>
                                    <td className="py-2" onClick={() => navigate('/detail-students')} >Jahra</td>
                                    <td className="py-2">12324334535</td>
                                    <td>XII</td>
                                    <td>Perempuan</td>
                                    <td>04/20/2026</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="w-20 px-4 py-2"><input type="checkbox" /></td>
                                    <td>Jahra</td>
                                    <td>12324334535</td>
                                    <td>XII</td>
                                    <td>Perempuan</td>
                                    <td>04/20/2026</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="w-20 px-4 py-2" ><input type="checkbox" /></td>
                                    <td>Jahra</td>
                                    <td>12324334535</td>
                                    <td>XII</td>
                                    <td>Perempuan</td>
                                    <td>04/20/2026</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-between m-2">
                            <p className="text-sm">Show Result 10 of 100</p>
                            <div className="flex gap-4">
                                <button className="bg-white p-2 rounded-md text-sm hover:bg-blue-100">Previous</button>
                                <button className="bg-blue-100 p-2 rounded-md text-sm hover:bg-white">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>

        </>
    )
} export default Students