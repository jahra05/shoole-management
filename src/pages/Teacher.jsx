import { Book, BookAlert, BookOpen, Edit, GraduationCap, Link, Phone, Plus, PlusSquare, Search, Slice, SlidersHorizontal, Square, Trash, Trophy, User, WholeWord } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { useState } from "react"
import AddStudents from "./AddStudents"
import { useNavigate } from "react-router-dom"




function Teacher() {
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white mt-2 p-4 rounded-lg h-screen">


                    <div className="flex flex-col gap-5 ">
                        <div className="flex justify-between">

                            <div className="text-xs">
                                <h1 className="text-lg">Teacher</h1>
                                <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span> add teacher</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center"
                                    onClick={() => navigate('/add-teacher')}>
                                    <button className="text-xs">Add Student</button>
                                    <Plus size={14} />

                                </div>
                                <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                                    <button className="text-xs">Import</button>
                                    <Plus size={14} />
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="flex-1">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-star gap-10">
                                        <div className="bg-white border-2 border-[#f3f3f3] flex items-center justify-between w-48 p-2 rounded-lg">
                                            <div>
                                                <p className="text-xs text-gray-600">Total Teacher</p>
                                                <p className="font-medium">1,245</p>
                                            </div>
                                            <span><GraduationCap size={32} /></span>
                                        </div>
                                        <div className="bg-white border-2 border-[#f3f3f3] flex items-center justify-between w-48 p-2 rounded-lg">
                                            <div>
                                                <p className="text-xs text-gray-600">Full - ime Teacher</p>
                                                <p className="font-medium">1,245</p>
                                            </div>
                                            <span><User size={32} /></span>
                                        </div>
                                        <div className="bg-white border-2 border-[#f3f3f3] flex items-center justify-between w-48 p-2 rounded-lg">
                                            <div>
                                                <p className="text-xs text-gray-600">Part - Time Class</p>
                                                <p className="font-medium">1,245</p>
                                            </div>
                                            <span><BookOpen size={32} /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 mt-2">
                                    <div className="flex gap-2 justify-end">
                                        <div className="flex items-center rounded-lg bg-white">
                                            <span className="px-2"><Search size={18} /></span>
                                            <input type="search" placeholder="Searching" className="p-2 border-none outline-none rounded-lg w-80 " />
                                        </div>
                                        <span className="flex gap-4 items-center bg-white p-2 border rounded-lg text-sm">Filter<SlidersHorizontal size={18} /></span>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="border  border-[#E5ECF0] bg-white w-72 p-4 rounded-lg">
                                            <div className="flex gap-2">
                                                <div className="border border-[#E5ECF0] w-10 h-10 flex items-center justify-center rounded-lg "><User /></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm cursor-pointer">Nama Guru</p>
                                                    <p className="text-sm text-gray-400">Nip: <span className="text-gray-400">111323</span></p>
                                                    <span className="bg-orange-100 border border-orange-200 text-orange-400 text-center text-xs h-6 w-14 py-1 rounded-md mt-2">Aktif</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 border-b py-4">
                                                <div className="flex gap-2 items-center"><Book size={16} /> <p className="text-sm text-gray-400">pelajaran</p></div>
                                                <div className="flex gap-2 items-center"><Square size={16} /><p className="text-sm text-gray-400">Guru@gmail.com</p></div>
                                                <div className="flex gap-3 items-center"><Phone size={16} /><p className="text-sm text-gray-400">+625464435345</p></div>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <button className="text-xs border w-52 flex justify-center items-center gap-1 py-2 rounded-md" onClick={() => navigate('/detail-teacher')}><Edit size={14} />Edit</button>
                                                <button className="border w-10 flex justify-center items-center rounded-md"><Trash size={16} /></button>
                                            </div>
                                        </div>


                                        <div className="border  border-[#E5ECF0] bg-white w-72 p-4 rounded-lg">
                                            <div className="flex gap-2">
                                                <div className="border border-[#E5ECF0] w-10 h-10 flex items-center justify-center rounded-lg "><User /></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Nama Guru</p>
                                                    <p className="text-sm text-gray-400">Nip: <span className="text-gray-400">111323</span></p>
                                                    <span className="bg-orange-100 border border-orange-200 text-orange-400 text-center text-xs h-6 w-14 py-1 rounded-md mt-2">Aktif</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 border-b py-4">
                                                <div className="flex gap-2 items-center"><Book size={16} /> <p className="text-sm text-gray-400">pelajaran</p></div>
                                                <div className="flex gap-2 items-center"><Square size={16} /><p className="text-sm text-gray-400">Guru@gmail.com</p></div>
                                                <div className="flex gap-3 items-center"><Phone size={16} /><p className="text-sm text-gray-400">+625464435345</p></div>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <button className="text-xs border w-52 flex justify-center items-center gap-1 py-2 rounded-md"><Edit size={14} />Edit</button>
                                                <button className="border w-10 flex justify-center items-center rounded-md"><Trash size={16} /></button>
                                            </div>
                                        </div>

                                        <div className="border  border-[#E5ECF0] bg-white w-72 p-4 rounded-lg">
                                            <div className="flex gap-2">
                                                <div className="border border-[#E5ECF0] w-10 h-10 flex items-center justify-center rounded-lg "><User /></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Nama Guru</p>
                                                    <p className="text-sm text-gray-400">Nip: <span className="text-gray-400">111323</span></p>
                                                    <span className="bg-orange-100 border border-orange-200 text-orange-400 text-center text-xs h-6 w-14 py-1 rounded-md mt-2">Aktif</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 border-b py-4">
                                                <div className="flex gap-2 items-center"><Book size={16} /> <p className="text-sm text-gray-400">pelajaran</p></div>
                                                <div className="flex gap-2 items-center"><Square size={16} /><p className="text-sm text-gray-400">Guru@gmail.com</p></div>
                                                <div className="flex gap-3 items-center"><Phone size={16} /><p className="text-sm text-gray-400">+625464435345</p></div>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <button className="text-xs border w-52 flex justify-center items-center gap-1 py-2 rounded-md"><Edit size={14} />Edit</button>
                                                <button className="border w-10 flex justify-center items-center rounded-md"><Trash size={16} /></button>
                                            </div>
                                        </div>

                                        <div className="border  border-[#E5ECF0] bg-white w-72 p-4 rounded-lg">
                                            <div className="flex gap-2">
                                                <div className="border border-[#E5ECF0] w-10 h-10 flex items-center justify-center rounded-lg "><User /></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Nama Guru</p>
                                                    <p className="text-sm text-gray-400">Nip: <span className="text-gray-400">111323</span></p>
                                                    <span className="bg-orange-100 border border-orange-200 text-orange-400 text-center text-xs h-6 w-14 py-1 rounded-md mt-2">Aktif</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 border-b py-4">
                                                <div className="flex gap-2 items-center"><Book size={16} /> <p className="text-sm text-gray-400">pelajaran</p></div>
                                                <div className="flex gap-2 items-center"><Square size={16} /><p className="text-sm text-gray-400">Guru@gmail.com</p></div>
                                                <div className="flex gap-3 items-center"><Phone size={16} /><p className="text-sm text-gray-400">+625464435345</p></div>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <button className="text-xs border w-52 flex justify-center items-center gap-1 py-2 rounded-md"><Edit size={14} />Edit</button>
                                                <button className="border w-10 flex justify-center items-center rounded-md"><Trash size={16} /></button>
                                            </div>
                                        </div>

                                        <div className="border  border-[#E5ECF0] bg-white w-72 p-4 rounded-lg">
                                            <div className="flex gap-2">
                                                <div className="border border-[#E5ECF0] w-10 h-10 flex items-center justify-center rounded-lg "><User /></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Nama Guru</p>
                                                    <p className="text-sm text-gray-400">Nip: <span className="text-gray-400">111323</span></p>
                                                    <span className="bg-orange-100 border border-orange-200 text-orange-400 text-center text-xs h-6 w-14 py-1 rounded-md mt-2">Aktif</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 border-b py-4">
                                                <div className="flex gap-2 items-center"><Book size={16} /> <p className="text-sm text-gray-400">pelajaran</p></div>
                                                <div className="flex gap-2 items-center"><Square size={16} /><p className="text-sm text-gray-400">Guru@gmail.com</p></div>
                                                <div className="flex gap-3 items-center"><Phone size={16} /><p className="text-sm text-gray-400">+625464435345</p></div>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <button className="text-xs border w-52 flex justify-center items-center gap-1 py-2 rounded-md"><Edit size={14} />Edit</button>
                                                <button className="border w-10 flex justify-center items-center rounded-md"><Trash size={16} /></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </MainLayout>

        </>
    )
} export default Teacher