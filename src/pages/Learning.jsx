import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { BookOpen, BookOpenCheck, Calculator, Clock, Clock1, Ellipse, EllipseIcon, Ellipsis, MapPin, Plus, User } from "lucide-react"
import Input from "../components/TextField"
import { useState } from "react"

function Learning() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    function openModel() {
        setOpen(true)
    }
    return <>
        <MainLayout>
            <div className="bg-white mt-2 p-4 rounded-lg h-screen">

                <div className="flex justify-between">
                    <div className="text-xs">
                        <h1 className="text-lg">Class</h1>
                        <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/class')}>Class / </span> learnig</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                            <button className="text-xs" onClick={openModel}>Add Schedul</button>
                            <Plus size={14} />
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex justify-between">
                    <div className="flex gap-4">
                        <div className="bg-white border-2 border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Senin</p>
                        </div>

                        <div className="bg-white border-2 border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Selasa</p>
                        </div>
                        <div className="bg-white border-2 border-[#f3f3f3]  w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Rabu</p>
                        </div>
                        <div className="bg-white border-2 border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Kamis</p>
                        </div>
                        <div className="bg-white border-2 border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Jum'at</p>
                        </div>
                        <div className="bg-white border-2 border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Sabtu</p>
                        </div>
                    </div>

                    <div className="bg-white w-13 rounded-full items-center">
                        <img src="https://cpanel.q-hawk.com/adminPanel/Images/icon1.png" className="w-12" />
                    </div>
                </div>


                <div className="mt-10 flex gap-4">

                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border-2 border-[#f3f3f3]">
                        <div className="flex flex-col gap-1 border-l-2 px-2 ml-5">
                            <p className="flex gap-2 text-sm items-center"><span><BookOpen size={16} /></span>B.Sunda</p>
                            <p className="flex gap-2 text-gray-400 text-sm items-center"> <span><User size={16} /></span>Name Teacher</p>
                        </div>
                        <div>
                            <p className="flex gap-2 text-sm items-center"><span><Clock size={16} /></span>12:00 - 13:00</p>
                        </div>
                    </div>

                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border-2 border-[#f3f3f3]">
                        <div className="flex flex-col gap-1 border-l-2 px-2 ml-5">
                            <p className="flex gap-2 text-sm items-center"><span><BookOpen size={16} /></span>B.Sunda</p>
                            <p className="flex gap-2 text-gray-400 text-sm items-center"> <span><User size={16} /></span>Name Teacher</p>
                        </div>
                        <div>
                            <p className="flex gap-2 text-sm items-center"><span><Clock size={16} /></span>12:00 - 13:00</p>
                        </div>
                    </div>
                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border-2 border-[#f3f3f3]">
                        <div className="flex flex-col gap-1 border-l-2 px-2 ml-5">
                            <p className="flex gap-2 text-sm items-center"><span><BookOpen size={16} /></span>B.Sunda</p>
                            <p className="flex gap-2 text-gray-400 text-sm items-center"> <span><User size={16} /></span>Name Teacher</p>
                        </div>
                        <div>
                            <p className="flex gap-2 text-sm items-center"><span><Clock size={16} /></span>12:00 - 13:00</p>
                        </div>
                    </div>
                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border-2 border-[#f3f3f3]">
                        <div className="flex flex-col gap-1 border-l-2 px-2 ml-5">
                            <p className="flex gap-2 text-sm items-center"><span><BookOpen size={16} /></span>B.Sunda</p>
                            <p className="flex gap-2 text-gray-400 text-sm items-center"> <span><User size={16} /></span>Name Teacher</p>
                        </div>
                        <div>
                            <p className="flex gap-2 text-sm items-center"><span><Clock size={16} /></span>12:00 - 13:00</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex gap-4">
                    <div className="flex-1 p-4 bg-white rounded-lg border-2 border-[#f3f3f3]">
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold">Ujian</p>
                            <span><Plus size={16} /></span>
                        </div>

                        <div className="flex flex-wrap gap-10">
                            <div className="mt-4 bg-white w-80 p-2 rounded-lg border border-gray-200">
                                <h1 className="text-sm font-bold">Mata pelajaran</h1>
                                <div className="flex flex-col mt-2 gap-1">
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><Clock size={16} />14:02 - 12:04</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><User size={16} />Pengawas</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500ƒ"><MapPin size={16} />ruangan</p>
                                </div>
                            </div>

                            <div className="mt-4 bg-white w-80 p-2 rounded-lg border border-gray-200">
                                <h1 className="text-sm font-bold">Mata pelajaran</h1>
                                <div className="flex flex-col mt-2 gap-1">
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><Clock size={16} />14:02 - 12:04</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><User size={16} />Pengawas</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><MapPin size={16} />ruangan</p>
                                </div>
                            </div>

                            <div className="mt-4 bg-white w-80 p-2 rounded-lg border border-gray-200">
                                <h1 className="text-sm font-bold">Mata pelajaran</h1>
                                <div className="flex flex-col mt-2 gap-1">
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><Clock size={16} />14:02 - 12:04</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><User size={16} />Pengawas</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><MapPin size={16} />ruangan</p>
                                </div>
                            </div>
                            <div className="mt-4 bg-white w-80 p-2 rounded-lg border border-gray-200">
                                <h1 className="text-sm font-bold">Mata pelajaran</h1>
                                <div className="flex flex-col mt-2 gap-1">
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><Clock size={16} />14:02 - 12:04</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><User size={16} />Pengawas</p>
                                    <p className="flex gap-4 items-center text-sm text-gray-500"><MapPin size={16} />ruangan</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="bg-white flex-1 p-4 rounded-lg border-2 border-[#f3f3f3]">
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold">To Do List</p>
                            <span><Plus size={16} /></span>
                        </div>

                        <div className="flex flex-col mt-4 ">
                            <div className="flex justify-between p-2 border-b border-gray-200 hover:bg-gray-50 ">
                                <p className="text-sm">Kegiatan hari ini</p>
                                <span><Ellipsis size={16} /></span>
                            </div>

                            <div className="flex justify-between p-2  border-b border-gray-200 hover:bg-gray-50">
                                <p className="text-sm">Kegiatan hari ini</p>
                                <span><Ellipsis size={16} /></span>
                            </div>

                            <div className="flex justify-between p-2  border-b border-gray-200 hover:bg-gray-50">
                                <p className="text-sm">Kegiatan hari ini</p>
                                <span><Ellipsis size={16} /></span>
                            </div>
                            <div className="flex justify-between p-2  border-b border-gray-200 hover:bg-gray-50">
                                <p className="text-sm">Kegiatan hari ini</p>
                                <span><Ellipsis size={16} /></span>
                            </div>
                        </div>

                    </div>
                </div>
                {open && (
                    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-white mt-10 w-[490px] rounded-xl border-2 border-[#f3f3f3]">
                            <div className="px-4 py-2 flex justify-between">
                                <p className="text-md font-semibold">Add Jadwal</p>
                                <p className="text-xs item-center" onClick={() => setOpen(false)}>X</p>
                            </div>
                            <div className="p-4 flex flex-col gap-8">

                                <div className="flex gap-8">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm">kelas</p>
                                        <select className="w-52 h-8 text-sm outline-none border border-gray-200 rounded-md">
                                            <option>kelas X</option>
                                            <option>kelas XII</option>
                                            <option>kelas XIII</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm">Hari</p>
                                        <select className="w-52 h-8 text-sm outline-none border border-gray-200 rounded-md">
                                            <option>kelas X</option>
                                            <option>kelas XII</option>
                                            <option>kelas XIII</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-8">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm">Jam Mulai</p>
                                        <select className="w-52 h-8 text-sm outline-none border border-gray-200 rounded-md">
                                            <option>12.02 </option>
                                            <option>14.00</option>
                                            <option>15.00</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm">Jam Selesai</p>
                                        <select className="w-52 h-8 text-sm outline-none border border-gray-200 rounded-md">
                                            <option>kelas X</option>
                                            <option>kelas XII</option>
                                            <option>kelas XIII</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="flex gap-8">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm">Mata Pelajaran</p>
                                        <Input placeholder={'2024/2025'} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm">Guru Pelajaran</p>
                                        <select className="w-52 h-8 text-sm outline-none border border-gray-200 rounded-md">
                                            <option>kelas X</option>
                                            <option>kelas XII</option>
                                            <option>kelas XIII</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="py-4 px-6 flex justify-end gap-4">
                                <button className="text-sm bg-gray-100 w-20 h-8 rounded-md" onClick={() => setOpen(false)}>Batal</button>
                                <button className="text-sm bg-white border w-20 h-8 rounded-md">Simpan</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </MainLayout>
    </>
} export default Learning