import { ClosedCaption, Edit, GraduationCap, LocateIcon, LocationEdit, MapPin, Plus, Trash, User, X } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { data, useNavigate } from "react-router-dom"
import Input from "../components/TextField"
import { useState } from "react"
import { Box, Button, MenuItem, Modal, Stack, TextField, Typography } from "@mui/material"
import { DateField, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 540,
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
}

const NameClass = [
    {
        value: 'ips',
        label: 'Ips',
    },
    {
        value: 'ipa',
        label: 'Ipa',
    },
    {
        value: 'kimia',
        label: 'Kimia',
    },
    {
        value: 'rpl',
        label: 'Rpl',
    },
];
const TingkatClass = [
    {
        value: '12',
        label: '12',
    },
    {
        value: '10 ',
        label: '10',
    },
    {
        value: '11',
        label: '11',
    },
];
const WaliClass = [
    {
        value: 'usman',
        label: 'Pak Usman',
    },
    {
        value: 'malik',
        label: 'Pak Malik',
    },
    {
        value: 'nurul',
        label: 'Ibu Nurul',
    },
    {
        value: 'rita',
        label: 'Ibu Rita',
    },
];
function Class() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const closeOpen = () => setOpen(false)
    const [value, setValue] = useState(dayjs('2026-06-01'))
    return (
        <>
            <MainLayout>
                <div className="bg-white px-4 py-2 rounded-lg h-screen">
                    <div className="flex justify-between">
                        <div className="text-xs">
                            <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                Class
                            </Typography>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span> add class</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                                <button className="text-xs" onClick={handleOpen}>Add Class</button>
                                <Plus size={14} />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="border border-[#f3f3f3] w-64 p-4 mt-10 rounded-lg" onClick={() => navigate('/learnig')}>
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

                        <div className="border border-[#f3f3f3] w-64 p-4 mt-10 rounded-lg" onClick={() => navigate('/learnig')}>
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
                    <Modal open={open} onClose={closeOpen}>
                        <Box sx={styleModal}>
                            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                <Typography variant="body2">Input Class</Typography>
                                <X size={14} onClick={closeOpen} />
                            </Stack>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                                <Stack spacing={2}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Tingkat Kelas"
                                        defaultValue="ips"
                                        sx={{ width: 180 }}
                                    >
                                        {NameClass.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Tingkat Kelas"
                                        defaultValue="11"
                                    >
                                        {TingkatClass.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Stack>
                                <Stack spacing={1}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Wali kelas"
                                        defaultValue="usman"
                                    >
                                        {WaliClass.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DemoContainer components={['DateField', 'DateField']}>
                                            <DateField
                                                label="Controlled field"
                                                value={value}
                                                onChange={(newValue) => setValue(newValue)}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Stack>
                            </Box>
                            <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                        </Box>
                    </Modal>
                </div>
            </MainLayout>
        </>
    )
} export default Class