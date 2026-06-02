import { CheckCheck, CheckCircle, LucideCheckCheck, Plus, X } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { Box, Button, Checkbox, FormControlLabel, Modal, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};

function Attandance() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white px-4 py-2 rounded-lg h-screen">
                    <div className="flex justify-between">
                        <div className="text-xs">
                            <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                Attandance
                            </Typography>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span> attandance</p>
                        </div>
                        <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                            <button className="text-xs" onClick={handleOpen}>Add Attandance</button>
                            <Plus size={14} />
                        </div>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                <Typography variant="body2">Input Class</Typography>
                                <X size={14} onClick={handleClose} />
                            </Stack>
                            <Stack spacing={2}>
                                <Stack direction='row'>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label='Hadir' />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label='Tidak hadir' />
                                </Stack>
                                <TextField
                                    id="outlined-helperText"
                                    label="Note"
                                    defaultValue="Default Value"
                                    sx={{ width: 320, }}
                                />
                                <Typography variant="caption" sx={{ color: 'gray', width: 320 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dolores.
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                            </Stack>
                            <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                        </Box>
                    </Modal>

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
                    <div className="bg-white p-2 rounded-lg mt-10 border border-[#f3f3f3]">
                        <div className="flex justify-between">
                            <p>Attandance</p>
                            <div className="flex gap-8">
                                <div className="flex gap-8 bg-gray-100 p-2 rounded-md">
                                    <span className="hover:bg-white py-2 px-4 rounded-md text-xs"><p>Students</p></span>
                                    <span className="hover:bg-white py-2 px-4 rounded-md text-xs"><p>Teacher</p></span>
                                    <span className="hover:bg-white py-2 px-4 rounded-md text-xs"><p>Staff</p></span>
                                </div>
                                <div className="p-2 flex gap-4">
                                    <select className="border p-1 text-sm rounded-md">
                                        <option>Month</option>
                                    </select>
                                    <select className="border p-1 text-sm rounded-md">
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
                                    <tr className="border-t">
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

                                    <tr className="border-t">
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