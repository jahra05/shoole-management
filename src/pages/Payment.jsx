import { EllipsisVertical, Plus, Search, SlidersHorizontal } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { useNavigate } from "react-router-dom"

function Payment() {
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white mt-2 p-2 rounded-lg h-screen">

                    <div className="flex justify-between m-4">

                        <div className="text-xs">
                            <h1 className="text-lg">Teacher</h1>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span> Payment</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex bg-white p-2 h-8 items-center gap-1 rounded-md text-center"
                                onClick={() => navigate('/add-teacher')}>
                                <button className="text-xs">Add Student</button>
                                <Plus size={14} />

                            </div>
                            <div className="flex bg-white p-2 h-8 items-center gap-1 rounded-md text-center">
                                <button className="text-xs">Import</button>
                                <Plus size={14} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white  rounded-md w-full overflow-x-auto flex flex-col gap-4 border border-gray-300">
                        <div className="flex m-2 justify-end gap-4">
                            <div className="flex gap-4 items-center px-2 rounded-lg w-[20%] border ">
                                <span><Search size={18} /></span>
                                <input type="search" placeholder="Searching" className="p-0 border-none outline-none rounded-lg w-[80%] border border-[#E5ECF0] bg-white" />
                            </div>
                            <span className="flex gap-4 items-center bg-white p-2 border  border-[#E5ECF0] rounded-lg text-sm w-20">Filter<SlidersHorizontal size={18} /></span>
                        </div>


                        <table className="w-full text-left border-collapse table-fixed ">
                            <thead>
                                <tr className="bg-gray-50 h-10 text-sm">
                                    <th className="w-10 px-4"><input type="checkbox" /></th>
                                    <th className="text-left">Name</th>
                                    <th className="">NISN</th>
                                    <th className="">Class</th>
                                    <th className="">Spp</th>
                                    <th className="">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t text-sm hover:bg-gray-100">
                                    <td className="w-20 px-4 py-2"><input type="checkbox" /></td>
                                    <td onClick={() => navigate('/billing')}>Jahra</td>
                                    <td>12324334535</td>
                                    <td>XII</td>
                                    <td>Perempuan</td>
                                    <td className="flex gap-8 mt-1"><p className="bg-green-200 border border-green-400 w-14 py-1 px-3 rounded-md italic text-xs">Lunas</p>
                                        <span className="mt-1">
                                            <EllipsisVertical size={16} /></span></td>
                                </tr>
                                <tr className="border-t text-sm hover:bg-gray-100">
                                    <td className="w-20 px-4 py-2"><input type="checkbox" /></td>
                                    <td>Jahra</td>
                                    <td>12324334535</td>
                                    <td>XII</td>
                                    <td>Perempuan</td>
                                    <td><p className="bg-green-200 border border-green-400 w-14 py-1 px-3 rounded-md italic text-xs">Lunas</p></td>
                                </tr>
                                <tr className="border-t text-sm hover:bg-gray-100">
                                    <td className="w-20 px-4 py-2"><input type="checkbox" /></td>
                                    <td>Jahra</td>
                                    <td>12324334535</td>
                                    <td>XII</td>
                                    <td>Perempuan</td>
                                    <td><p className="bg-green-200 border border-green-400 w-14 py-1 px-3 rounded-md italic text-xs">Lunas</p></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </MainLayout>
        </>
    )
} export default Payment