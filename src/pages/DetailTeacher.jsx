import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { ArrowUpRight, Edit, Ellipsis, FileImage, PhoneCall, PhoneMissed, Plus, User2 } from "lucide-react"
import { Box, Button, Chip, Divider, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

function createData(time, mon, tue, wed, thu, fri, sat) {
    return { time, mon, tue, wed, thu, fri, sat }
}

const rows = [
    createData('09 : 00', 'Kimia', 'Sistem Informasi', "Matematika", 'B.indonesia', 'B.Sunda', 'Fisika'),
    createData('09 : 00', 'Kimia', 'Sistem Informasi', "Matematika", 'B.indonesia', 'B.Sunda', 'Fisika'),
    createData('09 : 00', 'Kimia', 'Sistem Informasi', "Matematika", 'B.indonesia', 'B.Sunda', 'Fisika'),

]

function DetailTeacher() {
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>

                <div className="bg-white h-screen px-4 py-2 rounded-lg">
                    <div className="flex justify-between">
                        <div>
                            <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                Nama Teacher
                            </Typography>
                            <p className="text-xs mt-1"><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dashboard /</span>
                                <span className="text-gray-400 cursor-pointer" onClick={() => navigate('/teacher')}> Teacher /</span> Detail Teacher</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center"
                                    onClick={() => navigate('/add-teacher')}>
                                    <button className="text-xs">Edit  teacher</button>
                                    <Plus size={14} />

                                </div>
                                <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                                    <button className="text-xs">Import</button>
                                    <Plus size={14} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-10">
                        <div className="border flex flex-col gap-4 border-[#f3f3f3] w-80  h-5/6 p-2 rounded-lg">
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 220 }}>
                                <Typography variant="body1">Personal Profil</Typography>
                                <Stack direction='column' sx={{ textAlign: 'center' }}>
                                    <img src="src/assets/poto.avif" className="w-40 h-40 object-cover rounded-full ml-20" />
                                    <Chip label='Full Time' sx={{ width: 120, marginTop: 1, marginLeft: 12 }} />
                                    <Stack sx={{ marginTop: 1, marginLeft: 12 }}>
                                        <Typography variant="caption">Name Teacher</Typography>
                                        <Typography variant="caption">Nip : 1313</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Stack direction='column' spacing={1}>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Date Of Birth</Typography>
                                    <Typography variant="caption">12 April 2012</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Gender</Typography>
                                    <Typography variant="caption">Rpl 01 A</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Email</Typography>
                                    <Typography variant="caption">Boy</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">No headphone</Typography>
                                    <Typography variant="caption">Cianjur, 19 April 2005</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Address</Typography>
                                    <Typography variant="caption">kp.songgom</Typography>
                                </Stack>
                            </Stack>
                            <Divider />
                            <Stack direction='column' spacing={1}>
                                <Typography variant="body1">Education</Typography>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">S1 Pendidikan Matematika
                                        Universitas Indonesia</Typography>
                                    <Typography variant="caption" sx={{ color: 'gray' }}>12/04/2010</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">S2 Pendidikan Matematika
                                        Universitas Indonesia</Typography>
                                    <Typography variant="caption" sx={{ color: 'gray' }}>12/04/2010</Typography>
                                </Stack>
                                <Stack spacing={1}>
                                    <Typography variant="body2">Social Media</Typography>
                                    <Stack direction='row' spacing={1}>
                                        <div className="bg-slate-500 w-8 h-8 p-2 rounded-lg">
                                            <PhoneCall size={14} color="white" />
                                        </div>
                                        <div className="bg-slate-500 w-8 h-8 p-2 rounded-lg">
                                            <PhoneCall size={14} color="white" />
                                        </div>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="flex gap-4">
                                <div className="border flex flex-col gap-4 border-[#f3f3f3] w-80  rounded-lg ">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar />
                                    </LocalizationProvider>
                                    <div className="flex gap-4 ml-2 mb-2">
                                        <div className="bg-blue-200 w-16 h-12 rounded-md text-xs p-1">
                                            <p>Present</p>
                                            <p>12</p>
                                        </div>
                                        <div className="bg-blue-200 w-16 h-12 rounded-md text-xs p-1">
                                            <p>Absen</p>
                                            <p>12</p>
                                        </div>
                                        <div className="bg-blue-200 w-16 h-12 rounded-md text-xs p-1">
                                            <p>Sick</p>
                                            <p>12</p>
                                        </div>
                                        <div className="bg-blue-200 w-16 h-12 rounded-md text-xs p-1">
                                            <p>Sick</p>
                                            <p>12</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Stack spacing={2} sx={{ border: 1, borderColor: '#f3f3f3', borderRadius: 2, padding: 1 }}>
                                <Stack spacing={1}>
                                    <Typography variant="body1">Subject</Typography>
                                    <Stack sx={{ backgroundColor: "#f3f3f3", padding: '8px', borderRadius: '4px' }}>
                                        <Typography variant="body2">Kimia</Typography>
                                        <Typography variant="caption" sx={{ color: 'gray' }}>Class : 12 Rpl 1, 10 Rpl 2</Typography>
                                    </Stack>
                                    <Stack sx={{ backgroundColor: "#f3f3f3", padding: '8px', borderRadius: '4px' }}>
                                        <Typography variant="body2">Matematika</Typography>
                                        <Typography variant="caption" sx={{ color: 'gray' }}>Class : 12 Rpl 3, 10 Rpl 4</Typography>
                                    </Stack>
                                </Stack>
                                <Divider />
                                <Stack sx={{ marginTop: 4 }}>
                                    <Typography variant="body1">Schedule</Typography>
                                    <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
                                        <Table sx={{ minWidth: 250 }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Time</TableCell>
                                                    <TableCell>Mon</TableCell>
                                                    <TableCell>Tue</TableCell>
                                                    <TableCell>Wed</TableCell>
                                                    <TableCell>Thu</TableCell>
                                                    <TableCell>Fri</TableCell>
                                                    <TableCell>Sat</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow key={row.time}>
                                                        <TableCell>{row.time}</TableCell>
                                                        <TableCell>{row.mon}</TableCell>
                                                        <TableCell>{row.tue}</TableCell>
                                                        <TableCell>{row.wed}</TableCell>
                                                        <TableCell>{row.thu}</TableCell>
                                                        <TableCell>{row.fri}</TableCell>
                                                        <TableCell>{row.sat}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Stack>
                            </Stack>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )
} export default DetailTeacher