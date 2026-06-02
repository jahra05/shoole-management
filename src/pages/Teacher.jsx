import { Book, BookAlert, BookOpen, Edit, GraduationCap, Link, Phone, Plus, PlusSquare, Search, Slice, SlidersHorizontal, Square, Trash, Trophy, User, WholeWord } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { useState } from "react"
import AddStudents from "./AddStudents"
import { useNavigate } from "react-router-dom"
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material"


const coloumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'nip', label: 'NIP', minWidth: 100 },
    { id: 'gender', label: 'Gender', },
    { id: 'phone', label: 'phone', },
    { id: 'join', label: 'Joined', },
]
function createData(name, nip, gender, phone, join) {
    return { name, nip, gender, phone, join }
}

const rows = [
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
    createData('Pak Usman', 12113131, "Laki - Laki", '+61 132 232 323', '12.1.01'),
]


function Teacher() {
    const navigate = useNavigate()
    const [page, setPage] = useState(0)
    const [rowPage, setRowPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleRowspage = (event) => {
        setRowPage(+event.target.value);
        setPage(0)
    }
    return (
        <>
            <MainLayout>
                <div className="bg-white h-screen px-4 py-2 rounded-lg">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <div>
                                    <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                        Teacher
                                    </Typography>
                                    <p className="text-xs"><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dashboard / </span> Teacher</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center"
                                            onClick={() => navigate('/add-teacher')}>
                                            <button className="text-xs">Add teacher</button>
                                            <Plus size={14} />

                                        </div>
                                        <div className="flex bg-[#f3f3f3] p-2 h-8 items-center gap-1 rounded-md text-center">
                                            <button className="text-xs">Import</button>
                                            <Plus size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#f3f3f3] rounded-lg flex flex-col gap-4 mt-4 p-2">
                                <div className="flex flex-col justify-start gap-4">
                                    <div className="flex justify-between">
                                        <div className="flex gap-4 items-center px-4 rounded-lg w-[50%]">
                                            <span><Search size={18} /></span>
                                            <input type="search" placeholder="Searching" className="p-2 border-none outline-none rounded-lg w-[80%] border border-[#E5ECF0] bg-white" />
                                        </div>
                                        <span className="flex gap-4 items-center bg-white p-2 border   border-[#E5ECF0] rounded-lg text-sm w-20">Filter<SlidersHorizontal size={18} /></span>
                                    </div>
                                    <div className="flex justify-star gap-10">
                                        <div className="bg-white flex justify-between w-50 gap-4 rounded-lg p-6 border border-[#E5ECF0] shadow-sm">
                                            <div>
                                                <p className="text-xs text-gray-600">Total Teacher</p>
                                                <p className="font-medium">1,245</p>
                                            </div>
                                            <span><GraduationCap size={32} /></span>
                                        </div>
                                        <div className="bg-white flex justify-between w-50 gap-4 rounded-lg p-6 border border-[#E5ECF0] shadow-sm">
                                            <div>
                                                <p className="text-xs text-gray-600">Full - ime Teacher</p>
                                                <p className="font-medium">1,245</p>
                                            </div>
                                            <span><User size={32} /></span>
                                        </div>
                                        <div className="bg-white flex justify-between w-50 gap-4 rounded-lg p-6 border border-[#E5ECF0] shadow-sm">
                                            <div>
                                                <p className="text-xs text-gray-600">Part - Time Class</p>
                                                <p className="font-medium">1,245</p>
                                            </div>
                                            <span><BookOpen size={32} /></span>
                                        </div>
                                    </div>

                                </div>

                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                {coloumns.map((coloumn) => {
                                                    return (
                                                        <TableCell key={coloumn.id} align={coloumn.align} style={{ minWidth: coloumn.minWidth }} sx={{ fontWeight: 'bold' }}>
                                                            {coloumn.label}
                                                        </TableCell>
                                                    )
                                                })}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.slice(page * rowPage, page * rowPage + rowPage).map((row) => {
                                                return (
                                                    <TableRow hover role='checkbox' tabIndex={-1} key={row.nisn}>
                                                        {coloumns.map((coloumn) => {
                                                            const value = row[coloumn.id];
                                                            return (
                                                                <TableCell key={coloumn.id} align={coloumn.align} onClick={() => navigate('/detail-teacher')}>
                                                                    {coloumn.format && typeof value === 'number'
                                                                        ? coloumn.format(value) : value}
                                                                </TableCell>
                                                            )
                                                        })}
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <TablePagination
                                    rowsPerPageOptions={[10, 15, 20, 100]}
                                    component='div'
                                    count={rows.length}
                                    rowsPerPage={rowPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleRowspage}></TablePagination>

                            </div>
                        </div>
                    </div>

                </div>
            </MainLayout>

        </>
    )
} export default Teacher