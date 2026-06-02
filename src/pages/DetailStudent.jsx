import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { Book, BookOpen, ChevronDown, Dock, Expand, ExpandIcon, File, FileImage, ImageIcon, InboxIcon, Mars, Plus, Rose, X } from "lucide-react"
import React, { useState } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Chip, Divider, FormControlLabel, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography } from "@mui/material"
import { DateCalendar, DateField, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import dayjs from "dayjs"

function createData(no, jenisTagihan, totalTagihan, statusBayar, tanggal, aksi) {
    return { no, jenisTagihan, totalTagihan, statusBayar, tanggal, aksi }
}

const rows = [
    createData(1, 'Spp', 120000, "Lunas", '12-10-05', 'print'),
    createData(2, 'Spp', 120000, "Lunas", '12-10-05', 'print'),
    createData(3, 'Spp', 120000, "Lunas", '12-10-05', 'print'),
]
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

function DetailStudent() {
    const id = React.useId()
    const [selected, setSelected] = useState(0)

    const handleListItem = (event, index) => {
        setSelected(index)
    }
    const [openDoc, setOpenDoc] = useState(false)
    const handleOpenDoc = () => setOpenDoc(true)
    const handleCloseDoc = () => setOpenDoc(false)

    const [openEks, setOpenEks] = useState(false)
    const handleOpenEks = () => setOpenEks(true)
    const handleClosEks = () => setOpenEks(false)

    const [openPres, setOpenPres] = useState(false)
    const handleOpenPres = () => setOpenPres(true)
    const handleClosePres = () => setOpenPres(false)

    const [openChat, setOpenChat] = useState(false)
    const handleOpenChat = () => setOpenChat(true)
    const handleCloseChat = () => setOpenChat(false)


    const navigate = useNavigate()
    const [value, setValue] = useState(dayjs('2026-06-01'))

    return (
        <>
            <MainLayout>
                <div className="bg-white h-screen px-4 py-2 rounded-lg">
                    <div className="flex justify-between">
                        <div>
                            <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                Nama Student
                            </Typography>
                            <p className="text-xs mt-1"><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dashboard / </span>
                                <span className="text-gray-400 cursor-pointer" onClick={() => navigate('/students')}>Student / </span> Students</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center"
                                    onClick={() => navigate('/add-students')}>
                                    <Button>Edit</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-10">
                        <div className="border flex flex-col gap-4 border-[#f3f3f3] w-80  h-5/6 p-2 rounded-lg">
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 220 }}>
                                <Typography variant="body1">Personal Profil</Typography>
                                <Stack direction='column' sx={{ textAlign: 'center' }}>
                                    <img src="src/assets/poto.avif" className="w-32 h-32 object-cover rounded-full ml-12" />
                                    <Chip label='Active' sx={{ width: 120, marginTop: 1, marginLeft: 6 }} />
                                    <Stack sx={{ marginTop: 1 }}>
                                        <Typography variant="caption">Name Student</Typography>
                                        <Typography variant="caption">Nim : 1313</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Stack direction='column' spacing={1}>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Class</Typography>
                                    <Typography variant="caption">Rpl 01 A</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Gender</Typography>
                                    <Typography variant="caption">Boy</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Date Of Birth</Typography>
                                    <Typography variant="caption">Cianjur, 19 April 2005</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Address</Typography>
                                    <Typography variant="caption">kp.songgom</Typography>
                                </Stack>
                            </Stack>
                            <Divider />
                            <Stack direction='column' spacing={1}>
                                <Typography variant="body1">Parent</Typography>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Name</Typography>
                                    <Typography variant="caption">nana</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">No Headphone</Typography>
                                    <Typography variant="caption">+62 2626 262 62</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Job</Typography>
                                    <Typography variant="caption">job parent</Typography>
                                </Stack>
                                <Stack direction='row' sx={{ backgroundColor: "#f3f3f3", padding: '2px', borderRadius: '4px', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">Address</Typography>
                                    <Typography variant="caption">kp.songgom</Typography>
                                </Stack>
                            </Stack>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="border flex flex-col gap-4 border-[#f3f3f3] w-80   rounded-lg ">
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
                                <div className="border border-[#f3f3f3] rounded-lg flex flex-col p-2 gap-2 w-96 h-96">
                                    <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                        <Typography variant="body1">Document</Typography>
                                        <Button variant="outlined" sx={{ height: 20 }} onClick={handleOpenDoc}><Plus size={12} /></Button>
                                    </Stack>
                                    <div className="flex gap-2">
                                        <div className="border border-[#f3f3f3] p-2 roundelg flex flex-col gap-2 w-36">
                                            <div className="bg-blue-220p-2 rounded-full w-10">
                                                <FileImage />
                                            </div>
                                            <div>
                                                <p className="text-sm">PDF</p>
                                                <p className="text-xs">Name pdf</p>
                                            </div>
                                        </div>
                                        <div className="border border-[#f3f3f3] p-2 roundelg flex flex-col gap-2 w-36">
                                            <div className="bg-blue-100 p-2 rounded-full w-10">
                                                <FileImage />
                                            </div>
                                            <div>
                                                <p className="text-sm">PDF</p>
                                                <p className="text-xs">Name pdf</p>
                                            </div>
                                        </div>
                                        <div className="border border-[#f3f3f3] p-2 roundelg flex flex-col gap-2 w-36">
                                            <div className="bg-blue-100 p-2 rounded-full w-10">
                                                <FileImage />
                                            </div>
                                            <div>
                                                <p className="text-sm">PDF</p>
                                                <p className="text-xs">Name pdf</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal Document */}
                                <Modal
                                    open={openDoc}
                                    onClose={handleCloseDoc}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description">
                                    <Box sx={styleModal}>
                                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                            <Typography variant="body2">Upload Document</Typography>
                                            <X size={14} onClick={handleCloseDoc} />
                                        </Stack>
                                        <Stack spacing={2} sx={{ marginTop: 2 }}>
                                            < Button component='label' variant="outlined">
                                                Upload Document
                                                <input hidden type="file" accept=".pdf, .doc, .docx" />
                                            </Button>
                                            <Typography variant="caption" sx={{ color: 'gray' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dolores.
                                                Lorem ipsum dolor sit amet.
                                            </Typography>
                                        </Stack>
                                        <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                                    </Box>
                                </Modal>
                            </div>

                            <div className="border border-[#f3f3f3] rounded-lg p-2">
                                <p>Info Tagihan </p>
                                <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
                                    <Table sx={{ minWidth: 650 }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>No</TableCell>
                                                <TableCell>Jenis Tagihan</TableCell>
                                                <TableCell>Total Tagihan</TableCell>
                                                <TableCell>Status Bayar</TableCell>
                                                <TableCell>Tanggal</TableCell>
                                                <TableCell>Aksi</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.no}>
                                                    <TableCell>{row.no}</TableCell>
                                                    <TableCell>{row.jenisTagihan}</TableCell>
                                                    <TableCell>{row.totalTagihan}</TableCell>
                                                    <TableCell>{row.statusBayar}</TableCell>
                                                    <TableCell>{row.tanggal}</TableCell>
                                                    <TableCell>{row.aksi}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="border border-[#f3f3f3] rounded-lg p-2">
                                <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                    <Typography variant="body1">Ekstrakurikuler</Typography>
                                    <Button variant="outlined" sx={{ height: 20 }} onClick={handleOpenEks}><Plus size={12} /></Button>
                                </Stack>
                                <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
                                    <Table sx={{ minWidth: 520 }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Eskul</TableCell>
                                                <TableCell>Pelatih</TableCell>
                                                <TableCell>Reward</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.no}>
                                                    <TableCell>{row.totalTagihan}</TableCell>
                                                    <TableCell>{row.statusBayar}</TableCell>
                                                    <TableCell>{row.tanggal}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>

                            {/* modal input eskul */}
                            <Modal
                                open={openEks}
                                onClose={handleClosEks}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description">
                                <Box sx={styleModal}>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                        <Typography variant="body2">Input Estrakurikuler</Typography>
                                        <X size={14} onClick={handleClosEks} />
                                    </Stack>
                                    <Stack direction='row' spacing={2} sx={{ marginTop: 3 }}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Name Eskul"
                                            defaultValue="Default Value"
                                            sx={{ marginTop: 2, width: 180, }}
                                        />
                                        <TextField
                                            id="outlined-helperText"
                                            label="Name Pelatih"
                                            defaultValue="Default Value"
                                            sx={{ marginTop: 2, width: 180, }}
                                        />
                                        <TextField
                                            id="outlined-helperText"
                                            label="Prestasi"
                                            defaultValue="Default Value"
                                            sx={{ marginTop: 2, width: 180, }}
                                        />
                                    </Stack>
                                    <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                                </Box>
                            </Modal>


                            <div className=" flex gap-4">
                                <div className=" border border-[#f3f3f3] rounded-lg p-2 flex-1 h-96">
                                    <Stack direction='row' sx={{ justifyContent: "space-between" }}>
                                        <Typography variant="body1">Prestasi</Typography>
                                        <Button variant="outlined" onClick={handleOpenPres}><Plus size={14} /></Button>
                                    </Stack>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', backgroundColor: "#f3f3f3", padding: 1, borderRadius: 2, marginTop: 1 }}>
                                        <Stack>
                                            <Typography variant="body2">Olimpic Match</Typography>
                                            <Typography variant="caption" sx={{ color: 'gray' }}>berhasil memenangakan mendali </Typography>
                                        </Stack>
                                        <Typography variant="caption">12/12/1</Typography>
                                    </Stack>
                                </div>

                                {/* Modal Prestasi */}
                                <Modal
                                    open={openPres}
                                    onClose={handleClosePres}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description">
                                    <Box sx={styleModal}>
                                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                            <Typography variant="body2">Input Prestasi</Typography>
                                            <X size={14} onClick={handleClosePres} />
                                        </Stack>
                                        <Stack spacing={2} sx={{ marginTop: 3 }}>
                                            <Stack direction='row' spacing={2}>
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Event"
                                                    defaultValue="Default Value"
                                                    sx={{ width: 180, }}
                                                />
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
                                            <TextField
                                                id="outlined-helperText"
                                                label="Prestasi"
                                                defaultValue="Default Value"
                                                sx={{ marginTop: 2, width: 380, }}
                                            />
                                        </Stack>
                                        <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                                    </Box>
                                </Modal>
                                <div className="border border-[#f3f3f3] rounded-lg p-2 flex-1">
                                    <Stack direction='row' sx={{ justifyContent: "space-between" }}>
                                        <Typography variant="body1">Catatan</Typography>
                                        <Button variant="outlined" onClick={handleOpenChat}><Plus size={14} /></Button>
                                    </Stack>
                                    <Accordion sx={{ marginTop: 2 }}>
                                        <AccordionSummary expandIcon={<ChevronDown />} aria-controls={`${id}-panel1-content`}
                                            id={`${id}-panel1-header`}
                                        >
                                            <Typography variant="body2">Tawuran dengan Sekolah lain</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ fontSize: 12 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, facere.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, qui.
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ChevronDown />} aria-controls={`${id}-panel2-content`}
                                            id={`${id}-panel2-header`}
                                        >
                                            <Typography variant="body2">Telat Masuk sekolah</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ fontSize: 12 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, facere.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, qui.
                                        </AccordionDetails>
                                    </Accordion>

                                    {/* modal Catatan */}
                                    <Modal
                                        open={openChat}
                                        onClose={handleClosePres}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description">
                                        <Box sx={styleModal}>
                                            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                                                <Typography variant="body2">Input Catatan / Pelanggaran</Typography>
                                                <X size={14} onClick={handleCloseChat} />
                                            </Stack>
                                            <Stack spacing={2} sx={{ marginTop: 3 }}>
                                                <Stack direction='row' spacing={2}>
                                                    <TextField
                                                        id="outlined-helperText"
                                                        label="Penggaran"
                                                        defaultValue="Default Value"
                                                        sx={{ width: 180, }}
                                                    />
                                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                        <DemoContainer components={['DateField', 'DateField']}>
                                                            <DateField
                                                                label="Date"
                                                                value={value}
                                                                onChange={(newValue) => setValue(newValue)}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                </Stack>
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Desc"
                                                    defaultValue="Default Value"
                                                    sx={{ marginTop: 2, width: 380, }}
                                                />
                                            </Stack>
                                            <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32, marginTop: 4 }}>Save</Button>
                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout >
        </>
    )
} export default DetailStudent