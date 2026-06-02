import { ArrowUpRight, BookOpen, Edit, Ellipsis, GraduationCap, Search, Trophy, User, User2, UserCheck } from "lucide-react";
import MainLayout from "../layouts/MainLayout"
import { useState } from "react";
import { Button, Chip, Stack, Typography } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { useNavigate } from "react-router-dom"


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

export const dataAttandance = [
    {
        Teacher: 413,
        Student: 214,
        month: 'Jan'
    },
    {
        Teacher: 563,
        Student: 54,
        month: 'Feb'
    },
    {
        Teacher: 433,
        Student: 324,
        month: 'Marc'
    },
    {
        Teacher: 443,
        Student: 324,
        month: 'Apr'
    },
    {
        Teacher: 423,
        Student: 324,
        month: 'Mei'
    },
    {
        Teacher: 413,
        Student: 114,
        month: 'Jun'
    },
    {
        Teacher: 437,
        Student: 314,
        month: 'Jul'
    },
    {
        Teacher: 123,
        Student: 314,
        month: 'Agust'
    },
    {
        Teacher: 43,
        Student: 314,
        month: 'Sep'
    },
    {
        Teacher: 43,
        Student: 314,
        month: 'Okt'
    },
    {
        Teacher: 43,
        Student: 324,
        month: 'Nov'
    },
    {
        Teacher: 43,
        Student: 324,
        month: 'Des'
    },
]

const data = [
    { label: 'Boys', value: 400, color: "pink" },
    { label: 'Girls', value: 600, color: 'blue' }
]
function Dasboard() {
    const navigate = useNavigate()
    const [gender, setGender] = useState('')
    const handleChange = (event) => {
        setGender(event.target.value)
    }

    return (
        <MainLayout>
            <div className="bg-white h-screen px-4 py-2 rounded-lg">

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-10">
                        <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                            Dashboard
                        </Typography>

                        <div className="flex justify-start gap-4">
                            <div className="bg-white flex justify-between w-48 gap-4 rounded-lg p-6 border border-[#E5ECF0] shadow-sm ">
                                <div>
                                    <div>
                                        <Typography variant='body2' sx={{ color: "gray" }}>
                                            Students
                                        </Typography>
                                        <Typography variant='body1' sx={{ color: "slate" }}>
                                            1,23
                                        </Typography>
                                    </div>
                                </div>
                                <span><GraduationCap size={32} /></span>
                            </div>
                            <div className="bg-white flex justify-between w-48 p-6 rounded-lg border border-[#E5ECF0] shadow-sm">
                                <div>
                                    <Typography variant='body2' sx={{ color: "gray" }}>
                                        Teacher
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: "slate" }}>
                                        1,23
                                    </Typography>
                                </div>
                                <span><User size={32} /></span>
                            </div>
                            <div className="bg-white flex justify-between w-48 p-6 rounded-lg border border-[#E5ECF0] shadow-sm">
                                <div>
                                    <Typography variant='body2' sx={{ color: "gray" }}>
                                        Class
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: "slate" }}>
                                        1,23
                                    </Typography>
                                </div>
                                <span><BookOpen size={32} /></span>
                            </div>
                            <div className="bg-white flex justify-between w-48 p-6 rounded-lg border border-[#E5ECF0] shadow-sm">
                                <div>
                                    <Typography variant='body2' sx={{ color: "gray" }}>
                                        Award
                                    </Typography>
                                    <Typography variant='body1' sx={{ color: "slate" }}>
                                        1,23
                                    </Typography>
                                </div>
                                <span><Trophy size={32} /></span>
                            </div>
                        </div>
                    </div>


                    <div className="flex mt-1 gap-4">

                        <div className="border p-2 rounded-lg border-[#E5ECF0] w-80 flex flex-col gap-4">
                            <Typography variant='body1'>The Event</Typography>
                            <div className=" flex text-center">
                                {days.map((item, index) =>
                                (
                                    <div key={index} style={{
                                        backgroundColor: item.isToday ? 'pink' : 'transparent',
                                        width: 100,
                                        fontSize: 14,
                                        borderRadius: 100,
                                        padding: 2,
                                    }} className='flex flex-col'>
                                        <Typography variant='caption'>{item.date}</Typography>
                                        <Typography variant='caption'>{item.day}</Typography>
                                    </div>
                                ))}
                            </div>
                            <div className="p-2">
                                <Typography variant='body2'>Event</Typography>
                                <div className="flex flex-col gap-4 mt-1">
                                    <div className="flex justify-between bg-white p-3 rounded-lg gap-10 border border-[#E5ECF0]">
                                        <div>
                                            <Typography variant='body2'>Meetingt</Typography>
                                            <Typography variant='caption' sx={{ color: 'gray' }}>Memmbahasan harga produk </Typography>
                                        </div>
                                        <Typography variant='body2'>11:00</Typography>
                                    </div>

                                    <div className="flex justify-between bg-white p-3 rounded-lg gap-10 border border-[#E5ECF0]">
                                        <div>
                                            <Typography variant='body2'>Meetingt</Typography>
                                            <Typography variant='caption' sx={{ color: 'gray' }}>Memmbahasan harga produk </Typography>
                                        </div>
                                        <Typography variant='body2'>11:00</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-lg border-[#E5ECF0] w-[900px]">
                            <div className="flex justify-between">
                                <Typography variant='body1'>Kehadiran Bulanan (Tahun Ajaran 2025/2026)</Typography>

                                <select className="border p-2 rounded-lg">
                                    <option>Tahun 2025</option>
                                </select>
                            </div>
                            <BarChart dataset={dataAttandance}
                                xAxis={[{ dataKey: 'month' }]}
                                series={[
                                    { dataKey: 'Teacher', label: 'Teacher' },
                                    { dataKey: 'Student', label: "Student" }
                                ]} sx={{ marginTop: -2 }} />
                        </div>

                        <div className="p-2 border border-[#E5ECF0]  flex flex-col gap-10 rounded-lg w-[340px]">
                            <div className="flex justify-between">
                                <Typography variant='body1'>Students by Gender</Typography>
                                <select className="border-2 p-1 border-[#f3f3f3] rounded-md text-sm">
                                    <option>Gread 1</option>
                                </select>
                            </div>
                            <PieChart series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]} />
                        </div>
                    </div>

                    <div className="flex gap-4" >
                        <div className="bg-white p-2 rounded-lg border border-[#E5ECF0] w-[810px]" onClick={() => navigate('/payment')}>
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
                            </table>
                        </div>

                        <div className="bg-white rounded-lg p-2 border border-[#E5ECF0] shadow-sm w-[770px]" onClick={() => navigate('/notice')}>
                            <div className="flex flex-row justify-between items-center p-2 ">
                                <Typography variant="body1">Notice Board</Typography>
                            </div>

                            <div className="flex items-center justify-between py-3 border-b">
                                <Stack spacing={1}>
                                    <Typography variant="body1">Sosialisasi kampus universitas</Typography>
                                    <Chip label='Academic' sx={{ width: 100 }} />
                                </Stack>

                                <Stack>
                                    <Typography variant="body1" sx={{ color: 'gray' }}>Audience</Typography>
                                    <Typography variant="body2" >All Student</Typography>
                                </Stack>

                                <Stack>
                                    <Typography variant="body1" sx={{ color: 'gray' }}>Date</Typography>
                                    <Typography variant="body2" >31/07/2026</Typography>
                                </Stack>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b">
                                <Stack spacing={1}>
                                    <Typography variant="body1">Sosialisasi kampus universitas</Typography>
                                    <Chip label='Academic' sx={{ width: 100 }} />
                                </Stack>

                                <Stack>
                                    <Typography variant="body1" sx={{ color: 'gray' }}>Audience</Typography>
                                    <Typography variant="body2" >All Student</Typography>
                                </Stack>

                                <Stack>
                                    <Typography variant="body1" sx={{ color: 'gray' }}>Date</Typography>
                                    <Typography variant="body2" >31/07/2026</Typography>
                                </Stack>
                            </div>

                            <div className="flex items-center justify-between py-3 border-b">
                                <Stack spacing={1}>
                                    <Typography variant="body1">Sosialisasi kampus universitas</Typography>
                                    <Chip label='Academic' sx={{ width: 100 }} />
                                </Stack>

                                <Stack>
                                    <Typography variant="body1" sx={{ color: 'gray' }}>Audience</Typography>
                                    <Typography variant="body2" >All Student</Typography>
                                </Stack>

                                <Stack>
                                    <Typography variant="body1" sx={{ color: 'gray' }}>Date</Typography>
                                    <Typography variant="body2" >31/07/2026</Typography>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
} export default Dasboard