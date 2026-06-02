import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { BookOpen, BookOpenCheck, Calculator, Clock, Clock1, Ellipse, EllipseIcon, Ellipsis, MapPin, Plus, User, X } from "lucide-react"
import Input from "../components/TextField"
import { useState } from "react"
import { Box, Button, MenuItem, Modal, Stack, TextField, Typography } from "@mui/material"
import { DateField, LocalizationProvider } from "@mui/x-date-pickers"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"



const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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

function Learning() {
    const navigate = useNavigate()
    const [value, setValue] = useState(dayjs('2026-06-01'))

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const closeOpen = () => setOpen(false)

    const [openUjian, setOpenUjian] = useState(false)
    const handleOpenUjian = () => setOpenUjian(true)
    const handleCloseUjian = () => setOpenUjian(false)

    const [todo, setTodo] = useState(false)
    const handleOpenTodo = () => setTodo(true)
    const handleCloseTodo = () => setTodo(false)
    return <>
        <MainLayout>
            <div className="bg-white mt-2 p-4 rounded-lg h-screen">

                <div className="flex justify-between">
                    <div className="text-xs">
                        <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                            Learning
                        </Typography>
                        <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/class')}>Class / </span> learnig</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                            <button className="text-xs" onClick={handleOpen}>Add Schedul</button>
                            <Plus size={14} />
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex justify-between">
                    <div className="flex gap-4">
                        <div className="bg-white border border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Senin</p>
                        </div>

                        <div className="bg-white border border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Selasa</p>
                        </div>
                        <div className="bg-white border border-[#f3f3f3]  w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Rabu</p>
                        </div>
                        <div className="bg-white border border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Kamis</p>
                        </div>
                        <div className="bg-white border border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Jum'at</p>
                        </div>
                        <div className="bg-white border border-[#f3f3f3] w-24 p-2 text-center rounded-full mt-4 hover:bg-gray-300">
                            <p className="text-sm">Sabtu</p>
                        </div>
                    </div>

                    <div className="bg-white w-13 rounded-full items-center">
                        <img src="https://cpanel.q-hawk.com/adminPanel/Images/icon1.png" className="w-12" />
                    </div>
                </div>


                <div className="mt-10 flex gap-4">

                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border border-[#f3f3f3]">
                        <div className="flex flex-col gap-1 border-l-2 px-2 ml-5">
                            <p className="flex gap-2 text-sm items-center"><span><BookOpen size={16} /></span>B.Sunda</p>
                            <p className="flex gap-2 text-gray-400 text-sm items-center"> <span><User size={16} /></span>Name Teacher</p>
                        </div>
                        <div>
                            <p className="flex gap-2 text-sm items-center"><span><Clock size={16} /></span>12:00 - 13:00</p>
                        </div>
                    </div>

                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border border-[#f3f3f3]">
                        <div className="flex flex-col gap-1 border-l-2 px-2 ml-5">
                            <p className="flex gap-2 text-sm items-center"><span><BookOpen size={16} /></span>B.Sunda</p>
                            <p className="flex gap-2 text-gray-400 text-sm items-center"> <span><User size={16} /></span>Name Teacher</p>
                        </div>
                        <div>
                            <p className="flex gap-2 text-sm items-center"><span><Clock size={16} /></span>12:00 - 13:00</p>
                        </div>
                    </div>
                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border border-[#f3f3f3]">
                        <div className="flex flex-col gap-1 border-l-2 px-2 ml-5">
                            <p className="flex gap-2 text-sm items-center"><span><BookOpen size={16} /></span>B.Sunda</p>
                            <p className="flex gap-2 text-gray-400 text-sm items-center"> <span><User size={16} /></span>Name Teacher</p>
                        </div>
                        <div>
                            <p className="flex gap-2 text-sm items-center"><span><Clock size={16} /></span>12:00 - 13:00</p>
                        </div>
                    </div>
                    <div className="bg-white w-96 h-20 py-4 flex gap-24 rounded-md border border-[#f3f3f3]">
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
                    <div className="flex-1 p-4 bg-white rounded-lg border border-[#f3f3f3]">
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold">Ujian</p>
                            <Button variant="outlined" onClick={handleOpenUjian}><Plus size={14} /></Button>
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
                    <div className="bg-white flex-1 p-4 rounded-lg border border-[#f3f3f3]">
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold">To Do List</p>
                            <Button variant="outlined" onClick={handleOpenTodo}><Plus size={14} /></Button>
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


                <Modal
                    open={todo}
                    onClose={handleCloseTodo}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={styleModal}>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Typography variant="body2">TODO</Typography>
                            <X size={14} onClick={handleCloseTodo} />
                        </Stack>
                        <Stack spacing={2} sx={{ marginTop: 3 }}>
                            <TextField
                                id="outlined-helperText"
                                label="To Do"
                                defaultValue="Default Value"
                                sx={{ width: 320, }}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DateField', 'DateField']}>
                                    <DateField
                                        label="Date"
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                        sx={{ width: 320 }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Stack>
                        <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                    </Box>
                </Modal>

                <Modal open={openUjian} onClose={handleCloseUjian}>
                    <Box sx={styleModal}>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Typography variant="body2">Input Ujian</Typography>
                            <X size={14} onClick={handleCloseUjian} />
                        </Stack>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 4, gap: 4 }}>
                            <Stack spacing={2} direction='row'>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Kelas"
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
                                    label="Hari"
                                    defaultValue="11"
                                >
                                    {TingkatClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Mata Pelajaran"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Stack>
                            <Stack spacing={1} direction='row'>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Jam Mulai"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Jam Selesai"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Pengawas"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-helperText"
                                    label="Ruangan"
                                    defaultValue="Default Value"
                                    sx={{ width: 180, }}
                                />
                            </Stack>
                        </Box>

                        <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                    </Box>
                </Modal>

                <Modal open={open} onClose={closeOpen}>
                    <Box sx={styleModal}>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Typography variant="body2">Input Class</Typography>
                            <X size={14} onClick={closeOpen} />
                        </Stack>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 4, gap: 4 }}>
                            <Stack spacing={2} direction='row'>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Kelas"
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
                                    label="Hari"
                                    defaultValue="11"
                                >
                                    {TingkatClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Mata Pelajaran"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Stack>
                            <Stack spacing={1} direction='row'>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Jam Mulai"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Jam Selesai"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Guru Pelajarans"
                                    defaultValue="usman"
                                >
                                    {WaliClass.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Stack>
                        </Box>

                        <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                    </Box>
                </Modal>
            </div>

        </MainLayout>
    </>
} export default Learning