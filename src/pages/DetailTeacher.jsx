import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { ArrowUpRight, Edit, Ellipsis, User2 } from "lucide-react"

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

function DetailTeacher() {
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white p-2 mt-2 rounded-lg h-screen">
                    <div className="text-xs">
                        <h1 className="text-lg">Detail Students</h1>
                        <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dashboard / </span>
                            <span className="text-gray-400 cursor-pointer" onClick={() => navigate('/teacher')}>teacher / </span>Detail teacher</p>
                    </div>
                    <div className="flex gap-4 mt-10">
                        <div className="bg-gray-100 w-48 h-56 object-cover rounded-lg">
                            <img src="src/assets/poto.avif" className="w-48 h-56 object-cover rounded-lg" />
                        </div>
                        <div className="flex flex-col  bg-[#fafafa] p-2  rounded-lg ">
                            <div className="w-[720px] text-sm border-b-2 py-4 border-gray-400">
                                <p>About</p>
                                <p>
                                    Lorem ipsum dolor sit amet. Lorem
                                    Lorem ipsum dolor sit amet. Lorem
                                    icilis vel odit sapiente laborum provident consectetur itaque nulla enim!
                                </p>
                            </div>
                            <div className="flex gap-20 mt-6">
                                <div className="text-sm flex flex-col gap-2">
                                    <div>
                                        <p className="text-gray-400 text-xs">Name Teacher</p>
                                        <p>Teacher Ipala</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">Nip</p>
                                        <p>19424024242</p>
                                    </div>
                                </div>

                                <div className="text-sm flex flex-col gap-2">
                                    <div>
                                        <p className="text-gray-400 text-xs">Phone Number</p>
                                        <p>1353503-5</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Email</p>
                                        <p>gajhga@gmail.com</p>
                                    </div>
                                </div>
                                <div className="text-sm flex flex-col gap-2">
                                    <div>
                                        <p className="text-gray-400 text-xs">Date of Birth</p>
                                        <p>19 april 2025</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">Address</p>
                                        <p>Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" p-2 flex flex-row gap-10 mt-8">
                        <div className="bg-white p-2 w-96 h-98 flex flex-col gap-10 rounded-lg border border-[#E5ECF0] shadow-sm">


                            <div className="flex-col p-2">
                                <div className="flex justify-between items-center">
                                    <p className="mt-0 font-semibold">Schedule</p>
                                </div>
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
                    </div>
                </div>
            </MainLayout>
        </>
    )
} export default DetailTeacher