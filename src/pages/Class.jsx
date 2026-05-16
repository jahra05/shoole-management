import { ClosedCaption, Edit, GraduationCap, LocateIcon, LocationEdit, MapPin, Plus, Trash, User } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { data, useNavigate } from "react-router-dom"
import Input from "../components/TextField"
import { useState } from "react"

function Class() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const OpenModal = () => {
        setOpen(true)
    }
    return (
        <>
            <MainLayout>
                <div className="bg-white p-4 mt-2 rounded-lg h-screen">
                    <div className="flex justify-between">
                        <div className="text-xs">
                            <h1 className="text-lg">Class</h1>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span> add class</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                                <button className="text-xs" onClick={() => OpenModal()}>Add Class</button>
                                <Plus size={14} />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="border-2 border-[#f3f3f3] w-64 p-4 mt-10 rounded-lg" onClick={() => navigate('/learnig')}>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs">kelas 12</p>
                                <h1 className="text-lg font-semibold">12 RPL 2</h1>
                            </div>
                            <div className="flex flex-col gap-1 border-b  py-4">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <p className="text-gray-500 text-sm">wali : <span className="text-black">Guru</span></p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 items-center">
                                <div>
                                    <h1 className="text-xl font-bold">0</h1>
                                    <p className="text-xs text-gray-500">siswa</p>
                                </div>
                                <div className="flex gap-2">
                                    <span><Edit size={16} /></span>
                                    <span><Trash size={16} /></span>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-[#f3f3f3] w-64 p-4 mt-10 rounded-lg" onClick={() => navigate('/learnig')}>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs">kelas 12</p>
                                <h1 className="text-lg font-semibold">12 RPL 2</h1>
                            </div>
                            <div className="flex flex-col gap-1 border-b  py-4">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <p className="text-gray-500 text-sm">wali : <span className="text-black">Guru</span></p>
                                </div>

                            </div>
                            <div className="flex justify-between mt-4 items-center">
                                <div>
                                    <h1 className="text-xl font-bold">0</h1>
                                    <p className="text-xs text-gray-500">siswa</p>
                                </div>
                                <div className="flex gap-2">
                                    <span><Edit size={16} /></span>
                                    <span><Trash size={16} /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {open && (
                        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">

                            <div className="bg-white mt-10 w-[490px] rounded-xl border-2 border-[#f3f3f3]">
                                <div className="px-4 py-2 flex justify-between">
                                    <p className="text-md font-semibold">Header</p>
                                    <p className="text-xs item-center" onClick={() => setOpen(false)}>X</p>
                                </div>
                                <div className="p-4 flex flex-col gap-8">
                                    <div className="flex gap-8">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm">Nama Kelas</p>
                                            <Input placeholder={"XII rpl 2"} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm">Tingakat kelas</p>
                                            <select className="w-52 h-8 text-sm outline-none border border-gray-200 rounded-md">
                                                <option>kelas X</option>
                                                <option>kelas XII</option>
                                                <option>kelas XIII</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm">Wali kelas</p>
                                            <select placeholder="Pilih kelas" className="w-52 h-8 text-sm outline-none border rounded-md border-gray-200">
                                                <option>kelas X</option>
                                                <option>kelas XII</option>
                                                <option>kelas XIII</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm">Tahun ajaran</p>
                                            <Input placeholder={'2024/2025'} />
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
    )
} export default Class