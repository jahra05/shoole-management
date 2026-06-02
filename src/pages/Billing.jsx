import { Box, Button, Divider, FormControl, InputLabel, ListItem, ListItemButton, ListItemText, MenuItem, NativeSelect, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import MainLayout from "../layouts/MainLayout"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function createData(id, desc, date, status, bayar) {
    return { id, desc, date, status, bayar }
}

const rows = [
    createData(1, 'uang sekolah', '12 april 2024', 'lunas', 'Rp.121'),
    createData(2, 'uang sekolah', '12 april 2024', 'lunas', 'Rp.121'),
    createData(3, 'uang sekolah', '12 april 2024', 'lunas', 'Rp.121'),
]

function Billing() {
    const [options, SetOptions] = useState('')
    const handleOptiona = (event) => {
        SetOptions(event.target.value)
    }
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white h-screen px-4 py-2 rounded-lg flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div>
                            <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                Billing
                            </Typography>
                            <p className="text-xs"><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/Payment')}>Payment / </span> Billing</p>
                        </div>
                    </div>

                    <div className="border border-[#f3f3f3] p-2 rounded-lg ">
                        <div className="flex flex-col gap-4">
                            <div>
                                <p className="text-lg">Jahra Solihat</p>
                                <p className="text-sm text-gray-500">Xll Rpl 2</p>
                            </div>
                            <Divider />
                            <div className="flex justify-between ">
                                <div>
                                    <p className="text-lg">Tunggakan</p>
                                    <p className="text-xs text-gray-500">Bayar setiap bulan dengan total tunggakan</p>
                                </div>
                                <div className="bg-blue-500 text-white flex p-2 rounded-lg">
                                    <p className="text-l">Rp. 12.000 / Month </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="border border-[#f3f3f3] p-2 rounded-lg flex-1">
                            <Typography >Rincian Pembayaran</Typography>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Uang Banggunan" sx={{ fontSize: 10 }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Uang Banggunan" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Uang Banggunan" />
                                </ListItemButton>
                            </ListItem>
                        </div>
                        <div className="border border-[#f3f3f3] p-2 rounded-lg flex-1 ">
                            <Typography >Billing Details</Typography>
                            <div className="flex justify-between mt-4">
                                <Stack>
                                    <Typography variant="body2"> jenis pembayaran</Typography>
                                    <Typography variant="body2" sx={{ color: '#545454' }}> uang sekolah</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="body2"> Date </Typography>
                                    <Typography variant="body2" sx={{ color: '#545454' }}> 25 / 02 / 2025 </Typography>
                                </Stack>
                            </div>
                            <Divider sx={{ marginTop: 1 }} />
                            <div className="mt-4">
                                <div className="flex justify-between content-center">
                                    <FormControl sx={{ width: 180 }}>
                                        <InputLabel variant="standard">Metode Pembayaran</InputLabel>
                                        <NativeSelect defaultValue={'s'}>
                                            <option>Virtual Account</option>
                                            <option>Tunai</option>
                                            <option>Card Credit</option>
                                        </NativeSelect>
                                    </FormControl>
                                    <div className="flex gap-10">
                                        <Typography variant="body2">Total</Typography>
                                        <Typography variant="body2">Rp.122</Typography>
                                    </div>
                                </div>

                            </div>
                            <Button variant="contained" sx={{ marginTop: 2 }}>Bayar</Button>
                        </div>
                    </div>

                    <div className="border border-[#f3f3f3] p-2 rounded-lg">
                        <Typography>Detaill Pembayaran</Typography>
                        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Deskripsi</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Bayar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.desc}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>{row.bayar}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </MainLayout >
        </>
    )
} export default Billing